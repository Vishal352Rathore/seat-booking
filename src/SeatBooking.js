import { useState, useEffect } from 'react';

import React from 'react'
import './App.css';


const SeatBooking = (seats) => {

  const [seat, setSeat] = useState([]);
  const seatsCount = seats.seats
  const arr = [];

  useEffect(() => {
    setUpSeats();
  }, [])

  const setUpSeats = () => {
    for (let i = 1; i <= seatsCount; i++) {
      let obj = {
        seatNumber: i,
        isBooked: false,
        isSelected: false
      }
      arr.push(obj)
      setSeat(arr);
    }
  }

  const handleSelect = (index, toggle) => {
    seat[index].isSelected = !toggle;
    setSeat([...seat]);
  }

  const handleBooking = () => {

    const updatedSeats = seat.map(seat => ({ ...seat, isBooked: seat.isSelected ? true : seat.isBooked ,isSelected:false}));
    setSeat(updatedSeats);

  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-4 seating_area'>
          <div className="row">
            {
              seat.length > 0 && seat.map((item, index) => {
                return (

                  <div key={index} className='col-4'>
                    <div className='seat_design'>
                      <button disabled={item.isBooked} onClick={() => handleSelect(index, item.isSelected)} style={{ backgroundColor: item.isBooked ? "blue" : item.isSelected && "red" }}>
                        <p>{item.seatNumber}</p>
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
        <div className="col-7 booking_panel">
          <h1>Booking Details</h1>
          {
             seat.length > 0 && seat.map((item, index) => {
              return (
                <div key={index}>
                   <p>{item.isSelected === true &&  `Id number = ${item.seatNumber} `}</p>
                </div>
              )
            })
          }
          <button onClick={() => { handleBooking() }}>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default SeatBooking
