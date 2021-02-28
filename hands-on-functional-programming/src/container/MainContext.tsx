import React, { createContext, ReactNode, useContext, useState } from "react";

const MainContext: any = createContext({});

export default function MainContextWrapper({
  children
}: {
  children: ReactNode;
}) {
  const [action, setAction] = useState("");

  return (
    <MainContext.Provider value={{ action, setAction }}>
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = (): { action: string; setAction: any } =>
  useContext(MainContext);
