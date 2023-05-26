import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { hideModalAction } from '../../../slices/ui/modalSlice';
import { MdClose } from 'react-icons/md';

const ModalComponent = (props) => {
  const { show, content, title } = useSelector((state) => state.ui.modal.modal);
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        open={show}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'modal',
        }}
      >
        <div className='modal__header'>
          <h4>{title}</h4>
          <MdClose
            onClick={() => dispatch(hideModalAction())}
            size={24}
            className='color-danger--base'
          />
        </div>
        {content}
      </Modal>
    </div>
  );
};

export default ModalComponent;
