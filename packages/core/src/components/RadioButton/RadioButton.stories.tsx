import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RadioButton, { RadioButtonProps } from './RadioButton'; // Ajusta la ruta a tu componente RadioButton

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  value: 'option1',
  checked: false,
  onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Option 2',
  value: 'option2',
  checked: true,
  onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option 3 (Disabled)',
  value: 'option3',
  checked: false,
  disabled: true,
  onChange: () => {},
};

const TemplateMultiple: Story<RadioButtonProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioButtonChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <RadioButton
        {...args}
        checked={selectedValue === 'option1'}
        onChange={() => handleRadioButtonChange('option1')}
      />
      <RadioButton
        {...args}
        label="Option 2"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={() => handleRadioButtonChange('option2')}
      />
      <RadioButton
        {...args}
        label="Option 3"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={() => handleRadioButtonChange('option3')}
      />
    </div>
  );
};

export const Multiple = TemplateMultiple.bind({});
Multiple.args = {
  label: 'Option 1',
  value: 'option1',
};