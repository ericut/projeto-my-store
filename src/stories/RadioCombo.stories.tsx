import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioComboEx } from './RadioCombo';

export default {
  title: 'Design System/RadioCombo',
  component: RadioComboEx,
} as ComponentMeta<typeof RadioComboEx>;

const Template: ComponentStory<typeof RadioComboEx> = (args) => <RadioComboEx {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Radio Combo',
  radioData: ['Teste', 'Combo', 'Radio'],
  color: 'primary',
};
