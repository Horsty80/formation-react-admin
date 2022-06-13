import { createContext, useMemo, useState } from "react";

export default PriceContext = createContext({});

export const PriceProvider = ({ children, initialValue = 0 }) => {
  const [price, setPrice] = useState(initialValue);
  return <PriceContext.Provider value={{ price, setPrice }}>{children}</PriceContext.Provider>;
};
