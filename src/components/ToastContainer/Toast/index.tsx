import React, { useEffect } from 'react';
import {
  FiInfo,
  FiCheckCircle,
  FiAlertCircle,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/Toast';
import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const Toast: React.FC<ToastProps> = ({
  message: { id, type, title, description },
  style,
}) => {
  const { removeToast } = useToast();
  const icons = {
    info: <FiInfo size={24} />,
    success: <FiCheckCircle size={24} />,
    error: <FiAlertCircle size={24} />,
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);
  return (
    <Container style={style} type={type} hasDescription={!!description}>
      {icons[type || 'info']}
      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
      <button onClick={() => removeToast(id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
