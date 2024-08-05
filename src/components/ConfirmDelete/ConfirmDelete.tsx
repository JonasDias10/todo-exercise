import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
};

export function ConfirmDelete({ open, handleClose, handleConfirm }: Props) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Confirmar Deleção</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza de que deseja deletar este item? Esta ação não pode
          ser desfeita.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={handleConfirm}
          autoFocus
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
