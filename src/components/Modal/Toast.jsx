
import { toast } from "react-toastify";

function Toast() {
  toast.success('URL이 복사되었습니다.', {
    limit: 1,
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: true,
    progress: undefined,
    closeButton: false,
  });
}

export default Toast;

toast


