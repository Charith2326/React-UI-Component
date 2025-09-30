import type { Meta, StoryObj } from '@storybook/react';
import DataTable from '../components/DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const sampleData = [
  { id: 1, name: 'Alice', email: 'alice@test.com' },
  { id: 2, name: 'Bob', email: 'bob@test.com' },
  { id: 3, name: 'Charlie', email: 'charlie@test.com' },
];

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const ManyRows: Story = {
  args: {
    data: [
      ...sampleData,
      { id: 4, name: 'David', email: 'david@test.com' },
      { id: 5, name: 'Eve', email: 'eve@test.com' },
      { id: 6, name: 'Frank', email: 'frank@test.com' },
    ],
  },
};