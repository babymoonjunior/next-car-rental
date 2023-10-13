import { useState } from "react";
import BookingModal from "../CarBooking/BookingModal";
import CarCard from "./CarCard";

export default function CarLists({ carLists }) {
  const [selectedCar, setSelectedCar] = useState([]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {carLists.map((car, index) => (
        <div key={index} onClick={() => {document.getElementById("my_modal_4").showModal(); setSelectedCar(car); }}>
        <CarCard car={car} />
        </div>
      ))}

      <dialog id="my_modal_4" className="modal">
        <BookingModal car={selectedCar} />
      </dialog>
    </div>
  );
}
