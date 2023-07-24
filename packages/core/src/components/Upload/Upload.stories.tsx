import React from 'react';
import { Meta, Story } from '@storybook/react';
import Upload, { UploadProps } from './Upload';
import PlusIcon from '@apg.gg/icons/lib/PlusIcon';

export default {
  component: Upload,
  title: 'Atoms/Upload',
  argTypes: {
    size: { control: 'select', options: [8, 12, 16, 20, 24]},
  },
} as Meta;

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  endpoint: 'https://example.com/upload',
  onSuccess: (response) => console.log('Uploaded successfully:', response),
  shape: 'square',
  icon: <PlusIcon className="text-white text-2xl" />
};
