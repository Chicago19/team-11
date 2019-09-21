import React, { useState } from 'react';
import 'regenerator-runtime/runtime';

export default function Auth() {
  const [phNumber, setPhNumber] = useState('');
  const [pendingCode, setPendingCode] = useState('');

  const handleSubmitPress = async event => {
    event.preventDefault();
    console.log(phNumber, pendingCode);
    if (pendingCode) {
      // second verify step
    } else {
      // first verify step

      await (await fetch(
        `http://localhost:3000/startVerify?to=${phNumber}`,
      )).json();
    }
  };

  return (
    <div>
      <form>
        <input
          value={phNumber}
          onChange={e => setPhNumber(e.target.value)}
          type="tel"
        />
        <input
          value={pendingCode}
          onChange={e => setPendingCode(e.target.value)}
          type="text"
          hidden
        />
        <button onClick={handleSubmitPress}>Submit</button>
      </form>
    </div>
  );
}
