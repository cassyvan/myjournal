// entryContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Entry } from "@/utils/types/entrytype";

interface ContextProps {
  entriesData: Entry[];
  updateEntriesData: (newEntriesData: Entry[]) => void;
}

const EntriesContext = createContext<ContextProps>({
  entriesData: [],
  updateEntriesData: (newEntriesData: Entry[]) => {},
});

export const useEntriesContext = () => {
  const context = useContext(EntriesContext);
  if (!context) {
    throw new Error("useEntriesContext must be used within an EntryProvider");
  }
  return context;
};

interface EntryProviderProps {
  children: ReactNode;
}

export const EntriesProvider: React.FC<EntryProviderProps> = ({ children }) => {
  const [entriesData, setEntriesData] = useState<Entry[]>([]);

  const updateEntriesData = (newEntriesData: Entry[]) => {
    setEntriesData(newEntriesData);
  };

  return (
    <EntriesContext.Provider value={{ entriesData, updateEntriesData }}>
      {children}
    </EntriesContext.Provider>
  );
};
