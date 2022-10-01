import React, { useState } from 'react';
import { defaultFileLayoutParametersData, usersExtractData } from '../utils/mockData';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [extractData, setExtractData] = useState(JSON.parse(usersExtractData));
  const [fileLayoutParameters, setFileLayoutParameters] = useState(
    JSON.parse(defaultFileLayoutParametersData)
  );

  const addExtractData = (newExtractData) => {
    setExtractData([...extractData, newExtractData]);
  };

  return (
    <AppContext.Provider
      value={{
        userExtractData: extractData,
        addExtractData,
        fileLayoutParameters,
        setFileLayoutParameters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppConsumer = AppContext.Consumer;

export default AppContext;
