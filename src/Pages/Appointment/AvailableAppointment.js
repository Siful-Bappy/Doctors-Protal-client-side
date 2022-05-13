import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import Service from '../Home/Services/Service/Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`services.json`)
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary font-bold text-center'>
                Available Appointments on {format(date, 'pp')}
            </h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;