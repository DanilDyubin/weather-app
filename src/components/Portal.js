import { createPortal } from 'react-dom';

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);

  return createPortal(props.children, node);
};

export default Portal;
