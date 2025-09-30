import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from '../components/InputField';

describe('InputField', () => {
  test('renders with label and placeholder', () => {
    render(
      <InputField
        label="Username"
        placeholder="Enter username"
        errorMessage="Required field"
      />
    );

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  test('shows error message when field is touched and empty', () => {
    render(
      <InputField
        label="Username"
        errorMessage="Please enter a username"
        required
      />
    );

    const input = screen.getByPlaceholderText('Enter your username');
    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(screen.getByText('Please enter a username')).toBeInTheDocument();
  });

  test('clears input when clear button is clicked', () => {
    render(<InputField label="Test Field" placeholder="Enter text" />);

    const input = screen.getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'test value' } });
    
    expect(input).toHaveValue('test value');

    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);

    expect(input).toHaveValue('');
  });
});