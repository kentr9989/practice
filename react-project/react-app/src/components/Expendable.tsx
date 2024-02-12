import React, { ReactNode } from "react";

interface Props {
  children: string;
  maxChars: number;
  currentRead: boolean;
  changeRead: () => void;
}
function Expendable({ children, maxChars, currentRead, changeRead }: Props) {
  let readLessStr = children.substring(0, maxChars);
  let readMoreStr = children;

  return (
    <>
      {/* {currentRead + "1"} */}
      <div>{currentRead ? readMoreStr : readLessStr}</div>
      <button type="button" className="btn btn-light" onClick={changeRead}>
        {/* {currentRead + " 2"} */}
        <br></br>
        {currentRead === false ? "Read More" : "Read Less"}
      </button>
    </>
  );
}

export default Expendable;
