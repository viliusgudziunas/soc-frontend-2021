import { ReactText } from 'react';
import { toast, ToastOptions } from 'react-toastify';

const options: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const ToastService = {
  success: (text: string): ReactText => toast.success(text, options),
  error: (text: string): ReactText => toast.error(text, options),
};
