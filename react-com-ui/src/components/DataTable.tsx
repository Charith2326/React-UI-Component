import React, { useState } from 'react';

interface TableRow {
  id: number;
  name: string;
  email: string;
}

interface DataTableProps {
  data: TableRow[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectRow = (id: number) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedRows(
      selectedRows.length === data.length 
        ? [] 
        : data.map(row => row.id)
    );
  };

  const isAllSelected = data.length > 0 && selectedRows.length === data.length;
  const isSomeSelected = selectedRows.length > 0 && selectedRows.length < data.length;

  return (
    <div className="w-full max-w-3xl mx-auto centered-container">
      {/* Table with proper borders */}
      <div className="data-table w-full">
        <table>
          <thead>
            <tr>
              <th className="w-16">
                <div className="checkbox-center">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={input => {
                      if (input) {
                        input.indeterminate = isSomeSelected;
                      }
                    }}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </th>
              <th>
                <div className="text-center">
                  <span className="text-sm font-semibold">ID</span>
                </div>
              </th>
              <th>
                <div className="text-center">
                  <span className="text-sm font-semibold">Name</span>
                </div>
              </th>
              <th>
                <div className="text-center">
                  <span className="text-sm font-semibold">Email</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr 
                key={row.id}
                className={selectedRows.includes(row.id) ? 'bg-blue-50' : ''}
              >
                <td>
                  <div className="checkbox-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleSelectRow(row.id)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <span className="text-sm">{row.id}</span>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <span className="text-sm">{row.name}</span>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <span className="text-sm">{row.email}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-300 my-6 w-full"></div>

      {/* Selected Rows Display */}
      <div className="text-center w-full">
        <p className="text-sm text-gray-700">
          <strong>Selected Rows:</strong>{' '}
          {selectedRows.length > 0 
            ? selectedRows.sort((a, b) => a - b).join(', ') 
            : 'None'
          }
        </p>
      </div>
    </div>
  );
};

export default DataTable;