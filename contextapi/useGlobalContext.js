import React, { createContext, useContext, useState } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showWorkersList, setShowWorkersList] = useState(false);
  const [showNotesList, setShowNotesList] = useState(false);
  return (
    <appContext.Provider
      value={{
        isLogin,
        setIsLogin,
        showNotesList,
        setShowNotesList,
        showWorkersList,
        setShowWorkersList,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => useContext(appContext);
