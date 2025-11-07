import { createContext, useContext, useState } from "react";
import { Snackbar, Alert, Slide } from "@mui/material";

const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const notify = (message, type = "success") => {
    setNotification({ open: true, message, type });
  };

  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <Snackbar
        open={notification.open}
        onClose={handleClose}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity={notification.type}
          variant="filled"
          sx={{
            borderRadius: 2,
            boxShadow: 4,
            fontSize: "0.95rem",
            fontWeight: 500,
            backgroundColor:
              notification.type === "success"
                ? "success.main"
                : notification.type === "error"
                ? "error.main"
                : "info.main",
            color: "#fff",
          }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
}
