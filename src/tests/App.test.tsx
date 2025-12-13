import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

global.fetch = vi.fn();

describe('App', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders boot sequence initially', async () => {
    (global.fetch as Mock).mockResolvedValue({
      json: async () => [],
    });
    
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/INITIALIZING FOYTRIX CORE/i)).toBeInTheDocument();
  });
});
