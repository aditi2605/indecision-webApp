import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>
   (
       <Modal 
       isOpen = {!!props.selectedOption}
       onRequestClose= {props.handleSelectedOption}
       contentLabel="Selected Option"
       closeTimeoutMS ={200}
       className="modal"
       >
       <h3 className="modal-body">Selected Option</h3>
       {props.selectedOption && <p className="modal-title">{props.selectedOption}</p>}
       <button className="button" onClick={props.handleSelectedOption}>Okay</button>
       </Modal>
    );


export default OptionModal;