import React from 'react';
import { Meta, Story } from '@storybook/react';
import UploadMultiple, { UploadMultipleProps } from './UploadMultiple';

export default {
  component: UploadMultiple,
  title: 'Components/UploadMultiple',
} as Meta;

const Template: Story<UploadMultipleProps> = (args) => <UploadMultiple {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxImages: 10, // Especifica el número máximo de imágenes que se pueden cargar
  onError: (message: string) => alert(message),
  onChange: (images: ImageData[]) => console.log(images),
};
