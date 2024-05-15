import type { Meta, StoryObj } from '@storybook/react';
import { FilterMember } from './FilterMember';

const meta = {
  title: 'Example/Filter/FilterMember',
  component: FilterMember,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterMember>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {

};