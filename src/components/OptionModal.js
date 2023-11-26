import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel = "Selected Option"
        closeTimeoutMS={200} // amount of time to wait before closing the div
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick = {props.handleClearSelectedOption}>KK</button>
    </Modal>
);

export default OptionModal;

//!! converts things to true booleans