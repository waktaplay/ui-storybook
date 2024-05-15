import type { Meta, StoryObj } from '@storybook/react';
import { FilterAlign } from './FilterAlign';

const meta = {
  title: 'Example/Filter/FilterAlign',
  component: FilterAlign,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterAlign>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    onChange: () => {},
    options: [
      { label: '최신순', value: 'newest' },
      { label: '오래된 순', value: 'oldest' },
      { label: '조회순', value: 'views' },
    ],
    value: 'newest'
  }
};