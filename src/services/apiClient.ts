import type { BackendHealthResult } from '../types/api';

const DEFAULT_API_BASE_URL = 'http://localhost:8080';
const DEFAULT_HEALTH_PATH = '/health';

export function getApiBaseUrl(): string {
  const raw = import.meta.env.VITE_API_BASE_URL?.trim();
  const base = raw && raw.length > 0 ? raw : DEFAULT_API_BASE_URL;
  return base.replace(/\/+$/, '');
}

export function getHealthEndpoint(): string {
  const rawPath = import.meta.env.VITE_API_HEALTH_PATH?.trim();
  const path = rawPath && rawPath.length > 0 ? rawPath : DEFAULT_HEALTH_PATH;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
}

export async function checkBackendHealth(signal?: AbortSignal): Promise<BackendHealthResult> {
  const endpoint = getHealthEndpoint();

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      signal,
    });

    if (!response.ok) {
      return {
        state: 'offline',
        endpoint,
        httpStatus: response.status,
        message: `Backend responded with HTTP ${response.status}`,
      };
    }

    let detail = 'OK';
    try {
      const data: unknown = await response.json();
      if (
        typeof data === 'object' &&
        data !== null &&
        'status' in data &&
        typeof (data as { status: unknown }).status === 'string'
      ) {
        detail = (data as { status: string }).status;
      }
    } catch {
      // Non-JSON 200 OK responses are still valid health checks
    }

    return {
      state: 'online',
      endpoint,
      httpStatus: response.status,
      message: `Connected (${detail})`,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error;
    }

    const reason = error instanceof Error ? error.message : 'Unable to reach backend';

    return {
      state: 'offline',
      endpoint,
      message: `Unavailable (${reason})`,
    };
  }
}
