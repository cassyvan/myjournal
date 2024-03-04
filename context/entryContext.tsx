import React, { createContext, useContext, useState } from "react";

interface JournalContextType {
  selectedEntry: string | null;
  updateEntry: (entry: string) => void;
}

export const JournalContext = createContext<JournalContextType>({
  selectedEntry: "",
  updateEntry: (entry: string) => {},
});

export const useJournalContext = () => useContext(JournalContext);

export const JournalContextProvider = ({ children }: any) => {
  const [selectedEntry, setSelectedEntry] = useState("");

  const updateEntry = (entry: string) => {
    setSelectedEntry(entry);
  };

  const contextValue: JournalContextType = {
    selectedEntry,
    updateEntry,
  };

  return (
    <JournalContext.Provider value={contextValue}>
      {children}
    </JournalContext.Provider>
  );
};
