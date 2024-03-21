import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Filter } from './Filter';

const meta = {
  title: 'Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn(), value: "Filter" },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    value: 'Filter',
  },
};