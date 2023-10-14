import { useContext, useEffect, useState } from "react";
import { createBooking, getStoreLocations } from "../../../services";
import { BookingStatusContext } from "@/context/BookingStatusContext";

export default function Form({ car }) {
  const [storeLocation, setStoreLocation] = useState([]);
  const {showToastMsg, setShowToastMsg} = useContext(BookingStatusContext);
  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "wennie Dev",
    carId: { connect: { id: "" } },
  });

  const today = new Date();

  useEffect(() => {
    getStoreLocations_();
  }, []);


  useEffect(() => {
    if(car){
        setFormValue({ ...formValue, carId: { connect: { id: car.id } } });
    }
  },[car])

  const getStoreLocations_ = async () => {
    const res = await getStoreLocations();
    console.log(res);
    setStoreLocation(res.storesLocations);
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(formValue.carId.connect.id);
    const res = await createBooking(formValue);
    console.log(res);
    if(res){
        setShowToastMsg(true);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select 
        select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
        >
          <option disabled selected>
            PickUp Location?
          </option>
          {storeLocation &&
            storeLocation.map((location, index) => (
              <option key={index}>{location?.address}</option>
            ))}
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            min={today}
            onChange={handleChange}
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name="dropOffDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            onChange={handleChange}
            name="pickUpTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          onChange={handleChange}
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          className="btn bg-blue-500 text-white hover:bg-blue-900"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}
