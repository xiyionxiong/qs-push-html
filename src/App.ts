import { create } from "zustand";
import pushMessage from "./request/push";

type BaseType = {
  key?: string;
  pushMsg: (msg: string) => void;
};

const useContext = create<BaseType>((set, get) => ({
  key: "app",
  pushMsg: (msg) => {

    pushMessage(msg);
  },
}));

export default useContext;
