import { Models } from "appwrite";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type state = {
  usersData: Models.Session | object;
  userSession: Models.User<Models.Preferences> | object;
};

type Action = {
  UpdateUserSession: (session: Models.Session) => void;
  updateData: (userSession: Models.User<Models.Preferences>) => void;
  userReset: () => void;
};

export const UseData = create<state & Action>()(
  devtools(
    persist(
      (set) => ({
        usersData: {},
        userSession: {},

        UpdateUserSession: (session: Models.Session) =>
          set(() => ({ usersData: session })),

        updateData: (user: Models.User<Models.Preferences>) =>
          set(() => ({ userSession: user })),

        userReset: () => set(() => ({ usersData: {}, userSession: {} })),
      }),
      { name: "userLogin" }
    )
  )
);
