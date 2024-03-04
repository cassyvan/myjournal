import React, { createContext, useContext, useState } from "react";

interface Entry {
  body: string;
  created: string;
  id: string;
  slug: string;
  title: string;
}

interface JournalContextType {
  selectedEntry: Entry;
  updateEntry: (entry: Entry) => void;
}

const emptyEntry = { body: "", created: "", id: "", slug: "", title: "" };

export const JournalContext = createContext<JournalContextType>({
  selectedEntry: emptyEntry,
  updateEntry: (entry: Entry) => {},
});

export const useJournalContext = () => useContext(JournalContext);

export const JournalContextProvider = ({ children }: any) => {
  const [selectedEntry, setSelectedEntry] = useState<Entry>(emptyEntry);

  const updateEntry = (entry: Entry) => {
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
