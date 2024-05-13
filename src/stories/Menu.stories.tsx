import { Meta, StoryObj } from '@storybook/react';
import { Menus } from './Menu';
import FavorateSvg from '../assets/favorate.svg';
import LogoutSvg from '../assets/out.svg';
import Withdraw from '../assets/withdraw.svg';

const meta = {
  title: 'Example/Menus',
  component: Menus,
  tags: ['autodocs'],
} satisfies Meta<typeof Menus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    selectedKey: '',
    itemList: [
      {
        icon: <img src={FavorateSvg} />,
        label: '즐겨찾기',
        value: 'favorate',
      },
      {
        icon: <img src={LogoutSvg} />,
        label: '로그아웃',
        value: 'logOut',
      },
      {
        icon: <img src={Withdraw} />,
        label: '회원탈퇴',
        value: 'signOut',
      },
    ],
    onClick: () => {},
  },
};
