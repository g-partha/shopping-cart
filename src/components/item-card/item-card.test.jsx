import { render, screen } from '@testing-library/react';
import { it, describe, expect, vi, beforeEach } from 'vitest';
import ItemCard from './item-card.jsx';
import useFetchGetData from '../../custom-hooks/use-fetch-get.jsx';
vi.mock('../../custom-hooks/use-fetch-get.jsx');
describe('Test ItemCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  })
  it('Shows loading', () => {
    useFetchGetData.mockReturnValue({ data: null, error: null, loading: true })
    render(<ItemCard itemId={0} />)
    const display = screen.getByText('Loading...');
    expect(display).toBeInTheDocument();
  })
  it('Shows data', () => {
    useFetchGetData.mockReturnValue({ data: { title: 'test-title', image: 'test-url' }, error: null, loading: false })
    render(<ItemCard itemId={0} />)
    const display = screen.getByText('test-title');
    expect(display).toBeInTheDocument();
  })
  it('Shows error', () => {
    useFetchGetData.mockReturnValue({ data: null, error: 'test error', loading: false })
    render(<ItemCard itemId={0} />)
    const display = screen.getByText('test error');
    expect(display).toBeInTheDocument();
  })
})
