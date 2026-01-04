import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      activeSection: 'home',
      setActiveSection: (id) => set({ activeSection: id }),
    }),
    { name: 'ui-storage' }
  )
);
