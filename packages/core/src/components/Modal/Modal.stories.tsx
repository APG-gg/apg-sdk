import React from "react";
import { Meta, Story } from "@storybook/react";
import Modal, { ModalProps, ModalType } from "./Modal"; // Asegúrate de importar el componente correcto

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    // Define los argumentos de la historia aquí si es necesario
  },
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

// Historia por defecto
export const Default = Template.bind({});
Default.args = {
  title: "Example Modal",
  content: <p>This is the modal content.</p>,
  isOpen: true,
  onClose: () => {},
};

// Historia con diferentes estados
export const WithStatus = Template.bind({});
WithStatus.args = {
  title: "Status Modal",
  content: <p>This is a modal with a status.</p>,
  type: ModalType.Error,
  isOpen: true,
  onClose: () => {},
};

// Historia centrada verticalmente
export const Centered = Template.bind({});
Centered.args = {
  title: "Centered Modal",
  content: <p>This modal is centered vertically.</p>,
  centered: true,
  isOpen: true,
  onClose: () => {},
};
