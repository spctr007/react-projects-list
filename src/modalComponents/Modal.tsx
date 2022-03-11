import React from "react";
import { Project } from "../projects/Project";

interface ModalProps {
  project?: Project;
  onCancel: () => void;
  onConfirm?: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <div className="modal">
      <div>
        Are you sure you want to delete this project?
        <h4>{props.project?.name}</h4>
      </div>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
