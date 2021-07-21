import Modal from 'react-modal';
import React from 'react';

const OptionModal = (props) => {
    const { handleRemoveSelectedOption, selectedOption } = props;
    return (
        <Modal
            isOpen={ !!selectedOption }  // false
            contentLabel="some Text here"
            onRequestClose={ handleRemoveSelectedOption }
            closeTimeoutMS={ 200 }
            className="modal"
        >
            <h3 className="modal__title">Selected option</h3>
            { selectedOption && <p className="modal__body">{ selectedOption }</p> }
            <button className="button" onClick={ handleRemoveSelectedOption }>Okay</button>
        </Modal>

    )
}
export default OptionModal;