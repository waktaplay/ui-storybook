import { ReactNode } from 'react';
import './menu.css';

interface MenuItemProps {
  icon?: ReactNode;
  label: string;
  value: string;
}

interface MenusProps {
  itemList: MenuItemProps[];
  onClick: () => void;
  selectedKey: string;
}

export const Menus = ({ itemList, onClick, selectedKey }: MenusProps) => {
  return (
    <article>
      <div className="storybook-menus">
        {itemList.map((obj) => {
          return (
            <div
              className={`menu-item ${selectedKey === obj.value ? 'selected' : ''} `}
              key={`menu-item-${obj.value}`}
              onClick={onClick}>
              {obj.icon}
              {obj.label}
            </div>
          );
        })}
      </div>
    </article>
  );
};
