import React from 'react';
import InputField from './components/InputField';
import DataTable from './components/DataTable';

const App: React.FC = () => {
  const tableData = [
    { id: 1, name: 'Alice', email: 'alice@test.com' },
    { id: 2, name: 'Bob', email: 'bob@test.com' },
    { id: 3, name: 'Charlie', email: 'charlie@test.com' },
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            React Components
          </h1>
        </div>

        <div className="space-y-12">
          {/* InputField Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              🔠 InputField
            </h2>
            <div className="bg-white p-6">
              <InputField
                label="Username"
                placeholder="Enter your username"
                errorMessage="Please enter a username"
              />
            </div>
          </section>

          {/* DataTable Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              📊 DataTable
            </h2>
            <div className="bg-white p-6">
              <DataTable data={tableData} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;