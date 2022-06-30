import { createContext, useContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const name = "Simon";
  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
