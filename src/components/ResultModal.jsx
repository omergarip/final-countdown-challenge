import { useImperativeHandle, useRef } from "react";

export default function ResultModal({
  ref,
  remainingTime,
  targetTime,
  onReset,
}) {
  const dialogRef = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal();
    },
  }));

  return (
    <dialog className="result-modal" ref={dialogRef}>
      {userLost && <h2>You lost</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>
  );
}
