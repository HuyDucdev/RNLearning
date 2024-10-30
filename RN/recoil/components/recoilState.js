import { atom, selector } from 'recoil';
import { fetchData } from './api';

export const dataState = atom({
  key: 'dataState',
  default: [], // Mặc định là mảng trống
});

export const dataSelector = selector({
  key: 'dataSelector',
  get: async ({ get }) => {
    try {
      const data = await fetchData();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
});
