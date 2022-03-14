import React from "react";

type BackdropProps = {
  onClick: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return <div className="backdrop" onClick={props.onClick} />;
};

export default Backdrop;