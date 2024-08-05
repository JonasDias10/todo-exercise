import { FC, PropsWithChildren, useState } from "react";
import { SnackbarContext } from "./SnackBarContext";

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    event?.preventDefault();

    if (reason !== "clickaway") {
      setOpen(false);
    }
  };

  return (
    <SnackbarContext.Provider
      value={{ open, setOpen, message, setMessage, onClose }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
