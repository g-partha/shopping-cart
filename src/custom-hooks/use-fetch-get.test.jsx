import { renderHook, waitFor } from "@testing-library/react";
import useFetchGetData from "./use-fetch-get";
import { beforeEach, vi } from 'vitest';
describe('Test useFetchGetData', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve('test value')
    }));
  })
  it('Loading is initially true', () => {
    const { result } = renderHook(() => useFetchGetData('test'));
    expect(result.current.loading).toBe(true);
  });
  it('loading becomes false later', async () => {
    const { result } = renderHook(() => useFetchGetData('test'));
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    })
  })
  it('data is returned', async () => {
    const { result } = renderHook(() => useFetchGetData('test'));
    await waitFor(() => {
      expect(result.current.data).toEqual('test value');
    })
  })
  it('error is returned on network issue', async () => {
    global.fetch = vi.fn(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve('test value')
    }));
    const { result } = renderHook(() => useFetchGetData('test'));
    await waitFor(() => {
      expect(result.current.error).not.toEqual(null);
    })
  })
});
