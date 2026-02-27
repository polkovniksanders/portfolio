export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Главная' },
  { id: 'skills', label: 'Обо мне' },
  { id: 'projects', label: 'Проекты' },
  { id: 'technologies', label: 'Стек' },
  { id: 'hr', label: 'HR' },
];

export const SECTION_IDS = NAV_ITEMS.map((i) => i.id);
