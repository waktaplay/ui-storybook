import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FilterMember } from './FilterMember';

const meta = {
  title: 'Example/Filter/FilterMember',
  component: FilterMember,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof FilterMember>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {

};