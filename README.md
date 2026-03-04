# Slava Portfolio

Персональный сайт-портфолио для знакомства HR и технических специалистов со мной как Frontend-разработчиком.  
Проект объединяет мои работы в одном месте и демонстрирует архитектурный подход, качество кода и инженерное мышление.

**Статус:** PET  
**Production:** https://slava.berghub.ru  
**Хостинг:** VPS (Beget)

---

## Назначение проекта

- Централизованная презентация проектов
- Демонстрация архитектурных решений
- Подтверждение уровня владения современным frontend-стеком
- Техническая визитка для HR и работодателей

---

## Технологический стек

### Core
- Next.js 15.5.12 (App Router)
- React 19
- TypeScript (strict mode)

### UI / Styling
- Tailwind CSS 4
- clsx
- lucide-react

### Code Quality
- ESLint (flat config)
- eslint-config-next
- eslint-plugin-react
- eslint-plugin-prettier
- Prettier

### Dev Environment
- Turbopack (dev)
- PostCSS
- Autoprefixer

---

## Архитектура

### Принципы

- SOLID
- DRY
- KISS
- Четкое разделение ответственности
- Переиспользуемость
- Масштабируемость
- Строгая типизация

---

### Структура проекта

src/
├── app/          # Роутинг (Next.js App Router)
├── shared/ui/   # Переиспользуемые UI-компоненты
├── shared/config/     # Настойки
├── shared/       # Общие утилиты, типы, константы
├── widgets/       # Переиспользуем готовые блоки компонентов


Подход:

- UI-слой изолирован от бизнес-логики
- Feature-модули инкапсулируют логику
- Компоненты проектируются как независимые и расширяемые
- Минимизация связности между слоями

---

## Инженерные решения

- Разделение Server / Client компонентов
- Контроль за размером бандла
- Lazy loading при необходимости
- Подготовка к интеграции API / CMS
- Готовность к масштабированию
- Production-ready конфигурация линтинга и форматирования

---

## Скрипты

```bash
npm run dev     # Dev-сервер (Turbopack, порт 8080)
npm run build   # Production build
npm run start   # Запуск production-сборки
npm run lint    # Проверка кода