/**
 * Форматирует дату из строки в локализованный формат
 * @param dateString - Строка даты в формате ISO
 * @returns Отформатированная дата на русском языке
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  }).format(date);
};
