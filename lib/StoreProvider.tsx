"use client";

import {AppStore, makeStore} from './store';
import {Provider} from "react-redux";
import {useRef} from "react";

interface Props {
  children: React.ReactNode;
}

export default function StoreProvider({children}: Props) {

  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}