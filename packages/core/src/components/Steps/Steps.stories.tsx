import React from 'react';
import { action } from '@storybook/addon-actions';
import Steps, { StepsProps } from './Steps'; // Asegúrate de importar tu componente correctamente
import { Meta, Story } from '@storybook/react';

export default {
  component: Steps,
  title: 'Atoms/Steps',
  argTypes: {
    onPrevStep: { action: 'Prev Step Clicked' },
    onNextStep: { action: 'Next Step Clicked' },
  },
} as Meta;

const Template: Story<StepsProps> = (args) => <Steps {...args} />;

const stepsData = [
  {
    key: 'step1',
    title: (
      <div className="flex items-center gap-2 text-white">Paso 1</div>
    ),
    showNextStepButton: true,
  },
  { key: 'step2', title: 'Paso 2', showNextStepButton: true },
  { key: 'step3', title: 'Paso 3', showNextStepButton: true },
];

export const Default = Template.bind({});
Default.args = {
  stepsData,
  prevText: 'Volver',
  nextText: 'Continuar',
  finishText: 'Finalizar',
  showCounter: true,
  initialStep: 0, // Puedes establecer el paso inicial aquí
  onStepChange: (currentStep, currentKey) => {
    action(`Step Changed: ${currentStep}, ${currentKey}`)();
  },
  onComplete: () => {
    action('Completed')();
  }
};
