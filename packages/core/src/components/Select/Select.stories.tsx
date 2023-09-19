import React from 'react';
import Select, { SelectProps } from './Select';
import { Story } from "@storybook/react"

export default {
  title: "Atoms/Select",
  component: Select,
  argTypes: {
    label: { control: 'text' },
    supportText: { control: 'text' },
    placeholder: { control: 'text' },
    isSearchable: { control: 'boolean' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    searchExternal: { control: 'boolean' },
  },
}

const Template: Story<SelectProps> = (args) => <Select style={{ marginTop: '620px' }} {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
  options: [
    { 
      value: 'option-1', 
      label: 'Option 1', 
      content: (
        <div className="flex items-center gap-4">
          <img 
            src="https://params-gg-storage.s3.eu-west-1.amazonaws.com/385oreo4bzulbcpqjw3frt6z3zsp?response-content-disposition=inline%3B%20filename%3D%22Logitech%20G%20Pro.png%22%3B%20filename%2A%3DUTF-8%27%27Logitech%2520G%2520Pro.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2RWTDMGZRLA4VR6P%2F20230915%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230915T152818Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=3ad23f563e354725b3f6fc0fe71e4ebf0d222e7417b2b7146c1ade78b7fecc4a"
            alt="Logitech G Pro"
            className="h-12 w-12 object-contain object-center"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-title-sm">Logitech G Pro</h3>
            <span className="text-white text-caption">Mouse</span>
          </div>
        </div>
      )  
    },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
    { value: 'option-4', label: 'Option 4' },
    { value: 'option-5', label: 'Option 5' },
    { value: 'option-6', label: 'Option 6' },
    { value: 'option-7', label: 'Option 7' },
    { value: 'option-8', label: 'Option 8' },
    { value: 'option-9', label: 'Option 9' }
  ],
  value: 'option-4'
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Label',
  multiple: true,
  value: ['option-4', 'option-5'],
  options: [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
    { value: 'option-4', label: 'Option 4' },
    { value: 'option-5', label: 'Option 5' },
    { value: 'option-6', label: 'Option 6' },
    { value: 'option-7', label: 'Option 7' },
    { value: 'option-8', label: 'Option 8' },
    { value: 'option-9', label: 'Option 9' }
  ],
  onChange: (value) => console.log(value),
  error: true
};

export const ExternalSearch = Template.bind({});
ExternalSearch.args = {
  label: 'Label',
  isSearchable: true, // Habilitar la búsqueda
  searchExternal: true, // Habilitar la búsqueda externa
  options: [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
    { value: 'option-4', label: 'Option 4' },
    { value: 'option-5', label: 'Option 5' },
    { value: 'option-6', label: 'Option 6' },
    { value: 'option-7', label: 'Option 7' },
    { value: 'option-8', label: 'Option 8' },
    { value: 'option-9', label: 'Option 9' }
  ],
  onSearch: async (searchQuery: string) => {
    console.log('searchQuery', searchQuery)
    // Simular una solicitud a una API externa con datos ficticios
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simular retardo de 1 segundo
    return [
      { value: 'external-1', label: 'External Option 1' },
      { value: 'external-2', label: 'External Option 2' },
      { value: 'external-3', label: 'External Option 3' },
    ];
  },
};