import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyBoard />
    </div>
  );
}
function MyBoard() {
  const [xIsNext, setXIsNext] = useState(true);
  const [valueList, setValue] = useState(Array(9).fill(null));
  function handleClick(pos) {
    const valueList1 = [...valueList];
    if(xIsNext){
    valueList1[pos] = 'X';
    } else {
      valueList1[pos] = 'O';
    }
    setValue(valueList1);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className='board-row'>
        <Button value={valueList[0]} handleButClick={() => handleClick(0)} />
        <Button value={valueList[1]} handleButClick={() => handleClick(1)} />
        <Button value={valueList[2]} handleButClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Button value={valueList[3]} handleButClick={() => handleClick(3)} />
        <Button value={valueList[4]} handleButClick={() => handleClick(4)} />
        <Button value={valueList[5]} handleButClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Button value={valueList[6]} handleButClick={() => handleClick(6)} />
        <Button value={valueList[7]} handleButClick={() => handleClick(7)} />
        <Button value={valueList[8]} handleButClick={() => handleClick(8)} />
      </div>
    </>
  );
}
function Button({ value, handleButClick }) {
  return (
    <>
      <button className="square" onClick={handleButClick} >{value}</button>
    </>
  );
}
export default App;
