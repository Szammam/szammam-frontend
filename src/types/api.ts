export type ApiConnectionState = 'loading' | 'online' | 'offline';

export interface BackendHealthResult {
  state: ApiConnectionState;
  endpoint: string;
  message: string;
  httpStatus?: number;
}
