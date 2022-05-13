import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Home/Services/Service/Service';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);


  useEffect(() => {
    fetch(`services.json`)
    .then(res => res.json())
    .then(data => setServices(data));
  }, [])
  return (
    <div>
      <h4 className='text-xl text-primary text-center font-bold'>
        Available Appointment on {format(date, 'PP')};
      </h4>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {
          services.map(service => <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Service>)
        }
      </div>
      {
        treatment && <BookingModal treatment={treatment}></BookingModal>
      }
    </div>
  );
};

export default AvailableAppointment;
