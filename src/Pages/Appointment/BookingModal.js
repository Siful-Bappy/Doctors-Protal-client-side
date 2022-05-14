import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const { _id, name, slots } = treatment;
  const handleBooking = (event) => {
    const slot = event.target.slot.value;
    setTreatment(null);
    event.preventDefault();
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cons-1 gap-3 justify-items-center mt-2">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="name"
              value={user?.displayName || ""}
              disabled
              className="input w-full max-w-xs"
            />
            <input
              type="email"
              disabled
              value={user?.email || ""}
              className="input w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
