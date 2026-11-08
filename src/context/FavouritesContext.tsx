import { createContext, useContext, useState, ReactNode } from 'react';

type FavContextType = {
  ids: string[];
  toggle: (id: string) => void;
  isFav: (id: string) => boolean;
};

const FavContext = createContext<FavContextType | null>(null);

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);

  const toggle = (id: string) =>
    setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const isFav = (id: string) => ids.includes(id);

  return <FavContext.Provider value={{ ids, toggle, isFav }}>{children}</FavContext.Provider>;
}

export function useFavourites() {
  const ctx = useContext(FavContext);
  if (!ctx) throw new Error('useFavourites must be used inside FavouritesProvider');
  return ctx;
}