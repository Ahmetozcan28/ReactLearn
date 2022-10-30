import React, { forwardRef, useRef } from "react";

export default function UseRef() {
  const Input = forwardRef((props, ref) => {
    return <input ref={ref} type={"text"} {...props}></input>;
  });
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>useRef() - useForward</h1>
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </>
  );
}
