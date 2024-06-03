import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
// Create the context
export const FileContext = createContext();

// Create the provider component
export const FileProvider = ({ children }) => {
  const [fileUrl, setFileUrl] = useState('');

  return (
    <FileContext.Provider value={{ fileUrl, setFileUrl }}>
      {children}
    </FileContext.Provider>
  );
};
// Define propTypes
FileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
