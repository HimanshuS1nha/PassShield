import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

export const PasswordContext = createContext({});

const PasswordProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);
  const [showAddPasswordModal, setShowAddPasswordModal] = useState(false);

  useEffect(() => {
    const getPasswords = async () => {
      const storedPasswords = await SecureStore.getItemAsync("passwords");
      setPasswords(JSON.parse(storedPasswords));
    };
    getPasswords();
  }, []);

  return (
    <PasswordContext.Provider
      value={{
        passwords,
        setPasswords,
        showAddPasswordModal,
        setShowAddPasswordModal,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
