import SeatBooking from './SeatBooking';
import { useState } from 'react';
import './App.css';


function App() {

  const [input, setInput] = useState('');

  const [seats, setSeats] = useState(0);
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = parseFloat(input);
    if (!isNaN(number) && input.trim() !== '' && number !== 0) {
      setSeats(number)
      setOutput(`Number set: ${number}`);
    } else {
      setOutput('Please enter a valid number.');
    }
  }

  return (
    <div className='App'>
     
      { 
      seats === 0 ?
         <div className='home_page'>
          <div className='get_seats'>
            <form> 
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Please enter seats' />
              <button onClick={(e) => handleSubmit(e)}>Submit</button>
              <div>{output}</div>
            </form>
          </div>
          </div>
          :
          <SeatBooking seats={seats} />
      }
    </div>
    
  );
}

export default App;
