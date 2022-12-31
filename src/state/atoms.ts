import { atom } from "jotai";

// export const keywordAtom = atom("");

export const isDarkModeAtom = atom<boolean>(false);

export const themeAtom = atom(
    get => get(isDarkModeAtom),
    (get, set) => set(isDarkModeAtom, !get(isDarkModeAtom))
);
