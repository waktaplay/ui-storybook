import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FilterAlign } from './FilterAlign';

const meta = {
  title: 'Example/Filter/FilterAlign',
  component: FilterAlign,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof FilterAlign>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {

};