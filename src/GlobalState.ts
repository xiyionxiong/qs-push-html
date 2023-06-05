import { create } from "zustand";
import pushMessage from "./request/push";

type BaseType = {
  key?: "app" | "result";
  amount: string;
  pushMsg: () => void;
  setAmount: (amount: string) => void;
  orderNo?: string;
  generate: VoidFunction;
  toHome: VoidFunction;
};

const useContext = create<BaseType>((set, get) => ({
  key: "app",
  amount: "0.00",
  generate() {
    set({ orderNo: new Date().getTime() + "" });
    console.log("generate");
  },

  toHome() {
    set({ key: "app", amount: "0.00" });
    // get().generate();
  },

  pushMsg: () => {
    const { amount } = get();
    pushMessage(+amount).then((succeed) => succeed && set({ key: "result" }));
  },
  setAmount: (amount: string) => set({ amount }),
}));

export default useContext;
