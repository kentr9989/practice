import React, { ReactNode } from "react";

interface Props {
  display: ReactNode;
  changeName: () => void,
  checkName : () => void;
}
function UpdateStateExercise({ display, changeName,checkName }: Props) {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick= {() => {
            changeName();
            checkName();
          }}
        
        >Change name button</button>
        <div>{display}</div>
      </div>
    </>
  );
}

export default UpdateStateExercise;
