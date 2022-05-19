import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Calm from "../assets/calm_logo.png";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <>
    <div>
      <div>
      <div>
        <img src={Calm} alt="calm logo" className='max-w-[100px]' />
      </div>
      <h1>Customer support interview</h1>
      <h2>with Calm GTM</h2>
      <p>45 minutes</p>
      <p>Google meeting will be created at booking</p>
      <h2>About this meeting</h2>
      <p>Thank you for scheduling your interview.
        We look forward to you presentation on
        Calm's proposals. Please bring any
        questions you may have about the
        position.
      </p>
      </div>
      <div>
      <Calendar onChange={onChange} value={value} />
      </div>
    </div>
    </>
  );
}
export default MyApp;