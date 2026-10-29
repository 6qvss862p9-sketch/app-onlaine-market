export type Product = {
  id: string;
  name: string;
  unit: string;
  price: number; // теңгемен
  emoji: string;
  description: string;
};

export const products: Product[] = [
  { id: '1', name: 'Органикалық банан', unit: '7 дана', price: 1200, emoji: '🍌', description: 'Жаңа піскен, тәтті банан. Калийге бай, таңғы асқа өте жақсы.' },
  { id: '2', name: 'Қызыл алма', unit: '1 кг', price: 1500, emoji: '🍎', description: 'Шырынды әрі қытырлақ алма. Тікелей бақтан әкелінген.' },
  { id: '3', name: 'Жаңа сәбіз', unit: '1 кг', price: 600, emoji: '🥕', description: 'Тәтті әрі дәмді сәбіз. Салат пен көже үшін тамаша.' },
  { id: '4', name: 'Қызыл бұрыш', unit: '1 кг', price: 1800, emoji: '🌶️', description: 'Тәтті қызыл бұрыш. Витамин C көп.' },
  { id: '5', name: 'Авокадо', unit: '2 дана', price: 2200, emoji: '🥑', description: 'Майлы әрі нәзік авокадо. Сэндвич пен салатқа жарайды.' },
  { id: '6', name: 'Қызанақ', unit: '1 кг', price: 900, emoji: '🍅', description: 'Піскен шырынды қызанақ. Салат пен тұздыққа ыңғайлы.' },
];