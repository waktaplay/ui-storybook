import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Example/Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    onClickContact: () => {
      alert('Modal Open!');
    },
    onClickTerm: () => {
      alert('이용약관 보여주세요');
    },
    onClickUserInfo: () => {
      alert('개인정보처리방침 보여주세요');
    },
  },
};
