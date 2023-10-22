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
      value: 'logitech-g-pro', 
      label: 'Logitech G Pro', 
      icon: (
        <img 
          src="https://statics.apg.gg/games/valorant/thumbnail.png"
          alt="Logitech G Pro"
          className="h-6 w-6 object-contain object-center"
        />
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
  value: 'option-4',
  onChange: (value) => console.log(value),
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
  debounceTime: 1500,
  onSearch: async (searchQuery: string) => {
    return [
      { value: 'external-1', label: 'External Option 1' },
      { value: 'external-2', label: 'External Option 2' },
      { value: 'external-3', label: 'External Option 3' },
    ];
  },
};