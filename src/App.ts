import { create } from "zustand";
import pushMessage from "./request/push";

type BaseType = {
  key?: string;
  amount: string;
  pushMsg: () => void;
  setAmount: (amount: string) => void;
};

const useContext = create<BaseType>((set, get) => ({
  key: "app",
  amount: "0.00",
  pushMsg: () => {
    const { amount } = get();
    pushMessage(+amount);
  },
  setAmount: (amount: string) => set({ amount }),
}));

export default useContext;
