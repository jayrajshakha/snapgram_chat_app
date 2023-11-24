import { Models } from "appwrite";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type state = {
  communities: Array<Models.Document> | [];
};

type Action = {
  AddCommunities: (data: Models.Document) => void;
};

export const communitiesStore = create<state & Action>()(
  devtools((set) => ({
    communities: [],
    AddCommunities: (data: Models.Document) =>
      set((state) => ({
        communities: [data, ...state.communities],
      })),
  }))
);
