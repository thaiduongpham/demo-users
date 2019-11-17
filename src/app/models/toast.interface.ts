import { ToastStatus } from '@app/models/toast-status.enum';

export interface Toast {
  message: string;
  status: ToastStatus;
}
