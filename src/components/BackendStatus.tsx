import { useEffect, useState } from 'react';
import { checkBackendHealth, getHealthEndpoint } from '../services/apiClient';
import type { BackendHealthResult } from '../types/api';
import './BackendStatus.css';

export function BackendStatus() {
  const [status, setStatus] = useState<BackendHealthResult>({
    state: 'loading',
    endpoint: getHealthEndpoint(),
    message: 'Checking backend connection...',
  });

  useEffect(() => {
    const controller = new AbortController();

    checkBackendHealth(controller.signal)
      .then((result) => {
        setStatus(result);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  const handleRetry = () => {
    setStatus((prev) => ({
      ...prev,
      state: 'loading',
      message: 'Checking backend connection...',
    }));

    void checkBackendHealth().then((result) => {
      setStatus(result);
    });
  };

  return (
    <div
      className={`backend-status backend-status--${status.state}`}
      role="status"
      aria-live="polite"
    >
      <div className="backend-status__info">
        <span className="backend-status__dot" aria-hidden="true" />
        <span className="backend-status__label">API Status:</span>
        <span className="backend-status__message">{status.message}</span>
        <span className="backend-status__endpoint">({status.endpoint})</span>
      </div>

      <button
        type="button"
        className="backend-status__retry"
        onClick={handleRetry}
        disabled={status.state === 'loading'}
      >
        {status.state === 'loading' ? 'Checking...' : 'Retry'}
      </button>
    </div>
  );
}
