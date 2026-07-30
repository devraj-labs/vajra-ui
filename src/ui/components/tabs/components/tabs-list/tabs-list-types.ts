import { TTabBarProps, TTabBarTab } from '../../../tab-bar';

export type TTabsListProps = Omit<TTabBarProps, 'value' | 'onChange'> & {
  tabs: TTabBarTab[];
};
