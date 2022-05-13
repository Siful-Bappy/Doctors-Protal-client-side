import React, { useEffect, useState } from 'react';
import { format } from "date-fns";

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
            <div>
                
            </div>
        </div>
    );
};

export default AvailableAppointment;