import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

type Config = {
  clientId: string;
  token: string;
};

test('renders learn react link', () => {
  const config: Config = {
    clientId: '123',
    token: 'abc',
  };
  render(<App config={config} />);
  const element = screen.getByText(/Hello, Embedded App!/i);
  expect(element).toBeInTheDocument();
});
