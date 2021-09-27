import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButtonEx } from './IconButton';

export default {
  title: 'Design System/Icon Button',
  component: IconButtonEx,
} as ComponentMeta<typeof IconButtonEx>;

const Template: ComponentStory<typeof IconButtonEx> = (args) => <IconButtonEx {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'primary',
};
