import { useState } from "react";

const Numbers = () => {
  const [nums, setNums] = useState(0);
  
  const handleInc = () => {
    setNums(nums + 1);
  };

  const handleDecr = () => {
    setNums(nums - 1);
  };

  const handleRes = () => {
    setNums(0);
  };

  return (
    <div className="todo">
      <p>{nums}</p>

      <button onClick={handleInc}>Inecrement</button>

      <button onClick={handleDecr}>Decrement</button>

      <button onClick={handleRes}>Reset</button>
    </div>
  );
};

export default Numbers;
