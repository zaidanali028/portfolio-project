import React, { createContext, useReducer } from "react";
import {templateOneState} from '../reducers/states/templateOneInitialState';
export const templateOneContext = createContext();
const TemplateOneContext = ({ children }) => {


  const templateOneReducer = (state, action) => {
    console.log(state, action);
  };
  const [templateOneStyles, setTemplateOneStyles] = useReducer(templateOneReducer,templateOneState);
  return (
    <templateOneContext.Provider value={{ templateOneStyles, setTemplateOneStyles }}
    >
      {children}
    </templateOneContext.Provider>
  );
};

export default TemplateOneContext;
