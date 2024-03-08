import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Toast',
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success: Story = {
  args: {
    state: 'success',
    showAction: false,
    text: 'The action that you have done was a success! Well done'
  },
};

export const SuccessWithAction: Story = {
  args: {
    state: 'success',
    showAction: true,
    buttonText: 'Take action',
    text: 'Well done, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.'
  },
};

export const Warning: Story = {
  args: {
    state: 'warning',
    showAction: false,
    text: 'The file flowbite-figma-pro was permanently deleted.',
    highlightText: 'flowbite-figma-pro'
  },
};

export const WarningWithAction: Story = {
  args: {
    state: 'warning',
    showAction: true,
    buttonText: 'Take action',
    text: 'Oh snap, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.'
  },
};

export const Custom: Story = {
  args: {
    state: 'custom',
    showAction: true,
    buttonText: 'Button text',
    avatarUrl: 'https://i.ibb.co/nDy13rd/Avatar-1.png',
    title: 'Bonnie Green',
    text: 'Hi Neil, thanks for sharing your thoughts regardingFlowbite.'
  },
};