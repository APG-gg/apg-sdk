import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Textarea, { TextareaProps } from './Textarea'; // Ajusta la ruta según la ubicación de tu componente Textarea

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: TextareaProps) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Textarea Label',
  placeholder: 'Enter your text here...',
  supportText: 'Support text goes here',
  maxLength: 200,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: true,
  errorText: 'This is an error message',
};

export const CustomRowsCols = Template.bind({});
CustomRowsCols.args = {
  ...Default.args,
  rows: 6,
  cols: 50,
};

export const NoSupportText = Template.bind({});
NoSupportText.args = {
  ...Default.args,
  supportText: undefined,
};
