import React from "react";


const ChildContext = React.createContext({});
export const ChildProvider = ChildContext.Provider;
export const ChildConsumer = ChildContext.Consumer;

export default ChildContext;