import React from 'react';
import { Meta, Story } from '@storybook/react';
import Upload, { UploadProps } from './Upload';
import PlusIcon from '@apg.gg/icons/lib/PlusIcon';
import EditIcon from '@apg.gg/icons/lib/EditIcon';

export default {
  component: Upload,
  title: 'Atoms/Upload'
} as Meta;

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  endpoint: 'https://example.com/upload',
  onSuccess: (response) => console.log('Uploaded successfully:', response),
  shape: 'square',
  iconAdd: <PlusIcon className="text-white text-lg" />
};

export const Banner = Template.bind({});
Banner.args = {
  endpoint: 'https://example.com/upload',
  onSuccess: (response) => console.log('Uploaded successfully:', response),
  shape: 'banner',
  iconAdd: <EditIcon className="text-white text-lg" />
};

export const WithDefaultImage = Template.bind({});
WithDefaultImage.args = {
  endpoint: 'https://example.com/upload',
  onSuccess: (response) => console.log('Uploaded successfully:', response),
  shape: 'square',
  iconAdd: <PlusIcon className="text-white text-lg" />,
  image: "https://pbs.twimg.com/profile_images/1378918909793996801/zutMgt4H_400x400.jpg"
};

export const WithDefaultImageUploading = Template.bind({});
WithDefaultImageUploading.args = {
  endpoint: 'https://example.com/upload',
  onSuccess: (response) => console.log('Uploaded successfully:', response),
  shape: 'square',
  iconAdd: <PlusIcon className="text-white text-lg" />,
  image: "https://pbs.twimg.com/profile_images/1378918909793996801/zutMgt4H_400x400.jpg",
  isLoading: true
};