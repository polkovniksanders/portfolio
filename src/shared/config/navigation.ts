export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Главная' },
  { id: 'projects', label: 'Проекты' },
  { id: 'experience', label: 'Опыт' },
  { id: 'technologies', label: 'Стек' },
  { id: 'hr', label: 'HR' },
  { id: 'contacts', label: 'Контакты' },
];

export const SECTION_IDS = NAV_ITEMS.map((i) => i.id);
