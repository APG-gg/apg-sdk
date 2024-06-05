import React from 'react';
import Table, { TableColumn, TableProps } from './Table';
import { StoryFn } from "@storybook/react"

export default {
  title: "Atoms/Table",
  component: Table,
}

interface FoodItem {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

const columns: TableColumn<FoodItem>[] = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
    render: (row) => (
      <div>
        <div className="font-semibold">{row.name}</div>
        <div className="text-white-300 text-sm">{row.category}</div>
      </div>
    ),
    width: '200px'
  },
  {
    key: 'price',
    title: 'Price',
    sortable: true,
    render: (row) => <span>${row.price.toFixed(2)}</span>,
    width: '100px'
  },
  {
    key: 'inStock',
    title: 'In Stock',
    sortable: true,
    render: (row) => (
      <span className={row.inStock ? 'text-green-500' : 'text-red-500'}>
        {row.inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    ),
    width: '150px'
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (row) => (
      <div className="flex space-x-2">
        <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => handleBuyMore(row)}>
          Buy More
        </button>
        <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleDelete(row.id)}>
          Delete
        </button>
      </div>
    ),
    width: '200px',
    breakpoint: 'md' // La columna 'actions' se ocultará en pantallas pequeñas y se mostrará en pantallas medianas y más grandes
  }
];
const data: FoodItem[] = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 0.99, inStock: true },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.79, inStock: false },
  { id: 3, name: 'Cherry', category: 'Fruit', price: 2.99, inStock: true },
];

const handleBuyMore = (item: FoodItem) => {
  console.log('Buying more of:', item);
  // Lógica para comprar más
};

const handleDelete = (id: number) => {
  console.log('Deleting item with id:', id);
  // Lógica para eliminar el ítem
};

const Template: StoryFn<TableProps<FoodItem>> = (args) => <Table columns={columns} data={data} />;

export const Basic = Template.bind({});