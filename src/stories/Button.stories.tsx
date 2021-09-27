import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonEx } from './Button';

export default {
  title: 'Design System/Button',
  component: ButtonEx,
} as ComponentMeta<typeof ButtonEx>;

const Template: ComponentStory<typeof ButtonEx> = (args) => <ButtonEx {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  backgroundColor: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor: 'secondary',
};
