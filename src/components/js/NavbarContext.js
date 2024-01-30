// NavbarContext.js
import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [navbarContent, setNavbarContent] = useState('User Logo');

  const updateNavbarContent = (content) => {
    setNavbarContent(content);
  };

  return (
    <NavbarContext.Provider value={{ navbarContent, updateNavbarContent }}>
      {children}
    </NavbarContext.Provider>
  );
};
