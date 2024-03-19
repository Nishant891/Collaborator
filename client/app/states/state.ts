import { atom } from "recoil";
import { v4 as uuid } from "uuid";

export const Connection = atom({
    key: 'Connection',
    default: false,
  });

export const Files = atom({
    key: 'Files',
    default: [{
      id : uuid(),
      name : "index.html"
    }]
  });

