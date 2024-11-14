import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from '@alfabit-alura/modal';

const meta: Meta<ModalComponent> = {
  component: ModalComponent,
};

export default meta;

type Story = StoryObj<ModalComponent>;

export const Open: Story = {
  args: {
    isOpen: true,
  },
};
