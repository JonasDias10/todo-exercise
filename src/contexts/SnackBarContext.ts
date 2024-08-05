import { createContext } from "react";

type SnackbarContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
};

export const SnackbarContext = createContext<SnackbarContextType | null>(null);
