Скопируй и вставь этот текст в файл README.md:

# Next.js Blog Test Assignment (TypeScript)

Это динамичная блог-платформа, созданная с использованием Next.js, TypeScript, Zustand и Tailwind CSS. Проект демонстрирует навыки работы с серверным рендерингом (SSR), клиентским рендерингом (CSR), динамическими маршрутами и интеграцией с API.

---

## Основные возможности

- **Главная страница:**
  - Отображение списка последних блог-постов (заголовки, краткие описания).
  - Строка поиска для фильтрации постов по заголовку и содержимому.
  - Серверный рендеринг (SSR) для получения данных с JSONPlaceholder.

- **Страница поста:**
  - Динамический маршрут `/blog/[slug]` для отображения отдельного поста.
  - Получение данных поста через API (JSONPlaceholder).

- **Глобальное управление состоянием:**
  - Использование Zustand для хранения списка постов, состояния загрузки и поискового запроса.

- **Поиск:**
  - Фильтрация постов по введённому запросу с debounce (500 мс) для оптимизации производительности.

- **Стилизация:**
  - Использование Tailwind CSS для создания современного и адаптивного интерфейса.

---

## Установка и запуск

1. **Клонирование репозитория:**

2.	Установка зависимостей:

npm install


	3.	Запуск приложения в режиме разработки:

npm run dev


	4.	Открытие приложения:
Перейдите по адресу http://localhost:3000 в вашем браузере.

⸻

API Интеграция

Проект получает данные с JSONPlaceholder.

Примечание: API не предоставляет дату публикации, поэтому соответствующее поле отсутствует.

⸻

Предположения и ограничения
	•	Для отображения “последних” постов можно считать, что более высокие ID соответствуют более новым постам.
	•	Отсутствуют дополнительные фильтры (например, по дате или автору) – фильтрация осуществляется по заголовку и содержимому.
	•	Изображения в постах не используются.



Заключение

Данный проект демонстрирует применение Next.js с SSR, динамическими маршрутами, интеграцию с внешним API, глобальное управление состоянием с Zustand, а также функциональность поиска с оптимизацией debounce и адаптивную стилизацию с Tailwind CSS.

