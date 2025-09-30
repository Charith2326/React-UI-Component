import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataTable from '../components/DataTable';

const mockData = [
  { id: 1, name: 'Alice', email: 'alice@test.com' },
  { id: 2, name: 'Bob', email: 'bob@test.com' },
];

describe('DataTable', () => {
  test('renders table with data', () => {
    render(<DataTable data={mockData} />);

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('alice@test.com')).toBeInTheDocument();
  });

  test('selects and deselects rows', () => {
    render(<DataTable data={mockData} />);

    const checkboxes = screen.getAllByRole('checkbox');
    // First data row checkbox (skip the select-all checkbox)
    const rowCheckbox = checkboxes[1];
    
    fireEvent.click(rowCheckbox);
    expect(screen.getByText('Selected Rows: 1')).toBeInTheDocument();

    fireEvent.click(rowCheckbox);
    expect(screen.getByText('Selected Rows: None')).toBeInTheDocument();
  });

  test('selects all rows with select all checkbox', () => {
    render(<DataTable data={mockData} />);

    const checkboxes = screen.getAllByRole('checkbox');
    const selectAllCheckbox = checkboxes[0];
    
    fireEvent.click(selectAllCheckbox);
    expect(screen.getByText('Selected Rows: 1, 2')).toBeInTheDocument();

    fireEvent.click(selectAllCheckbox);
    expect(screen.getByText('Selected Rows: None')).toBeInTheDocument();
  });
});
