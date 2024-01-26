import React from 'react';
import Modal from 'react-modal';
import styles from '../css/LogoutModal.module.css';

const LogoutModal = ({ isOpen, closeModal, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal} overlayClassName={styles.overlay}>
      <h3>Are you sure you want to logout?</h3>
      <button onClick={onConfirm} className={styles.confirmButton}>
        Yes
      </button>
      <button onClick={closeModal} className={styles.cancelButton}>
        No
      </button>
    </Modal>
  );
};

export default LogoutModal;