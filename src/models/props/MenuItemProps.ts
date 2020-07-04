export interface MenuItemProps {
  categories: string[];
  renderSubMenuItem: (category: string) => JSX.Element;
  abcTypeCss: string;
  abcType: string;
  menuItemText: string;
  subMenuItemHeader: string;
}
