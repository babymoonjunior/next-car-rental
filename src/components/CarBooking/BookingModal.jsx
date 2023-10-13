import CarCard from "../Home/CarCard";
import Form from "./Form";

export default function BookingModal({ car }) {
  return (
    <>
      <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        <div className="border-b-[1px] pb-2">
          <h3 className="text-[30px] font-light text-gray-400">
            Rent A Car Now!
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <CarCard car={car} />
          </div>
          <div><Form /></div>
        </div>
        <div className="modal-action">
          <button className="btn">Close</button>
          <button className="btn bg-blue-500 text-white hover:bg-blue-900">Save</button>
        </div>
      </form>
    </>
  );
}