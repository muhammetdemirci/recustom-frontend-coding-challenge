import React from 'react';
import { Story, Meta } from '@storybook/react';
import Toast, { ToastProps } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
};

const Template= (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'success',
  message: 'The action that you have done was a success! Well done',
};

export const SuccessWithCTA = Template.bind({});
SuccessWithCTA.args = {
  type: 'success',
  message:'Success',
  description: 'Well done, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.',
  cta: true,
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  message:'The file flowbite-figma-pro was permanently deleted.',
};

export const DangerWithCTA = Template.bind({});
DangerWithCTA.args = {
  type: 'danger',
  message:'Attention',
  description: 'Oh snap, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.',
  cta: true,
};


export const Avatar = Template.bind({});
Avatar.args = {
  type: 'avatar',
  message:'Bonnie Green',
  description: 'Hi Neil, thanks for sharing your thoughts regarding Flowbite.',
  cta: true,
};

export const MobileView = Template.bind({});
MobileView.args = {
  type: 'success',
  message: 'The action that you have done was a success! Well done',
  mobile: true,
};