import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Calm from "../assets/calm_logo.png";

function MyApp () {
  const[value, onChange] = useState(new Date ());
  return (
    <div className='w-[1000px] justify-center text-white my-24'>
      

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <div>
              <img src={Calm} alt="calm logo" />
            </div>
            <p className='text-2xl py-8'>Customer support interview</p>
            <p className='text-2xl py-8 text-slate-500'>with Calm GTM</p>
            <p className='flex py-4'>45 minutes</p>
            <p className='flex py-4'>Google meeting will be created at booking.</p>
            <div className='text-2xl'>
                <p className='flex py-4'>About this meeting:</p>
                <p className='flex py-4'>Thank you for scheduling your interview. We look forward to your presentation on Calms proposals. Please bring any questions you may have about the position</p>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
           <Calendar onchange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  
  );
}
export default MyApp;