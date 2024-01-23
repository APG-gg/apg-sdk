// DatePicker.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DatePicker, { DatePickerProps } from './DatePicker';

export default {
  title: 'Atoms/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story = (args: DatePickerProps) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Fecha de nacimiento',
  supportText: 'Selecciona una fecha',
  value: '23/11/2023',
  onChange: (value: any) => console.log(value),
};