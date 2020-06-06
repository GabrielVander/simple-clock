import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders correctly', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});
