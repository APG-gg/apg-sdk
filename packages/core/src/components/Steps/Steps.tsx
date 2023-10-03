import React, { useState, useEffect } from 'react';
import Button from '../Button';

interface Step {
  key: string;
  title: React.ReactNode;
  showNextStepButton: boolean;
}

export interface StepsProps {
  stepsData: Step[];
  onStepChange: (currentStep: number, currentKey: string) => void;
  onComplete: () => void;
  prevText?: string;
  nextText?: string;
  finishText?: string;
  showCounter?: boolean;
  initialStep?: number; // Prop para especificar el paso inicial
}

const Steps: React.FC<StepsProps> = ({
  stepsData,
  onStepChange,
  onComplete,
  prevText = 'Volver',
  nextText = 'Continuar',
  finishText = 'Finalizar',
  showCounter = true,
  initialStep = 0, // Valor predeterminado es el paso 0
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  useEffect(() => {
    // Asegurarse de que el valor de currentStep sea válido
    if (currentStep < 0) {
      setCurrentStep(0);
    } else if (currentStep >= stepsData.length) {
      setCurrentStep(stepsData.length - 1);
    }
  }, [currentStep, stepsData.length]);

  const handleNextStep = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
      onStepChange(currentStep + 1, stepsData[currentStep + 1].key);
    } else {
      onComplete();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      onStepChange(currentStep - 1, stepsData[currentStep - 1].key);
    }
  };

  const renderTopbar = () => {
    return (
      <div className="topbar bg-black-800 text-white flex justify-between">
        <div className="flex items-center gap-2">
          {stepsData[currentStep].title}
          {showCounter ? (
            <div className="counter text-sm text-black-600">
              ({`${currentStep + 1}/${stepsData.length}`})
            </div>
          ) : null}
        </div>
        <div className="flex gap-4 h-8">
          {currentStep > 0 ? (
            <Button
              type="outline"
              onClick={handlePrevStep}
              fontSize="xs"
            >
              {prevText}
            </Button>
          ) : null}
          {stepsData[currentStep].showNextStepButton ? (
            <Button
              onClick={handleNextStep}
              fontSize="xs"
              className="w-28"
            >
              {currentStep === stepsData.length - 1 ? finishText : nextText}
            </Button>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="steps-component flex flex-col gap-2">
      {renderTopbar()}
    </div>
  );
};

export default Steps;
