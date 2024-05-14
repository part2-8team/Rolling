import ReactDOM from 'react-dom';

function Modal({ children }) {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
}

export default Modal;
