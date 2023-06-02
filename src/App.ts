import { create } from "zustand";

type BaseType = {
  key?: string;
};

const useContext = create<BaseType>((set, get) => ({
  key: "app",
}));

export default useContext;
