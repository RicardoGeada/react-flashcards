import { forwardRef } from "react";
import "./dialog.css"

const Dialog = forwardRef( function Dialog ({ children, toggleDialog }, ref) {
  return (
    <dialog
      ref={ref}
      onClick={(e) => {
        if (e.currentTarget === e.target) toggleDialog();
      }}
    >
      {children}
      <button onClick={toggleDialog} className="btn-close">x</button>
    </dialog>
  );
});

export default Dialog;
