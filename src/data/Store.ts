import { Models } from "appwrite";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type state = {
  usersData: Models.Session | object;
};

type Action = {
  UpdateUserSession: (session: Models.Session) => void;
};

export const UseData = create<state & Action>()(
  devtools(
    persist(
      (set) => ({
        usersData: {},
        UpdateUserSession: (session: Models.Session) =>
          set(() => ({ usersData: session })),
      }),
      { name: "userLogin" }
    )
  )
);
