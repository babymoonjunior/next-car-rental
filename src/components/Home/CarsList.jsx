import CarCard from "./CarCard";

export default function CarLists({carLists}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {carLists.map((car, index) => (
        <CarCard car={car} key={index}/>
      ))}
    </div>
  );
}