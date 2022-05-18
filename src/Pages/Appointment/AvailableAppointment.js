import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Home/Services/Service/Service';
import BookingModal from './BookingModal';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading';

const AvailableAppointment = ({date}) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

const formattedDate =format(date, "PP");
const {data: services, isLoading, refetch} = useQuery(["available", formattedDate], ()=> {
  fetch(`http://localhost:5000/service?date=${formattedDate}`).then(res => res.json())
})

// if(isLoading) {
//   return <Loading></Loading>
// }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/service?date=${formattedDate}`)
  //   .then(res => res.json())
  //   .then(data => setServices(data));
  // }, [formattedDate])
  return (
    <div>
      <h4 className='text-xl text-primary text-center font-bold my-10'>
        Available Appointment on {format(date, 'PP')};
      </h4>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {
          services?.map(service => <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
              refetch={refetch}
            ></Service>)
        }
      </div>
      {
        treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>
      }
    </div>
  );
};

export default AvailableAppointment;
