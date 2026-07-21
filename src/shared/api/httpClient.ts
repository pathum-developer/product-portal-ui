import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

import { environment } from '@/config/environment';

export class ApiRequestError extends Error {
  public readonly payload: unknown;
  public readonly status: number | undefined;

  public constructor(message: string, status: number | undefined, payload: unknown) {
    super(message);
    this.name = 'ApiRequestError';
    this.payload = payload;
    this.status = status;
  }
}

export const httpClient = axios.create({
  baseURL: environment.apiBaseUrl,
  headers: {
    Accept: 'application/json',
  },
  timeout: environment.apiTimeoutMs,
});

export async function apiRequest<TResponse>(
  path: string,
  options: AxiosRequestConfig = {},
): Promise<TResponse> {
  try {
    const response = await httpClient.request<TResponse>({
      ...options,
      url: path,
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new ApiRequestError(error.message, error.response?.status, error.response?.data);
    }

    throw error;
  }
}
