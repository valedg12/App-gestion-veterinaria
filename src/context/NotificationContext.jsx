import { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({ open: false, message: "", type: "success" });

  const showNotification = (message, type = "success") => {
    setNotification({ open: true, message, type });
  };
  const handleClose = () => setNotification((n) => ({ ...n, open: false }));

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={notification.type} variant="filled">
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
}
