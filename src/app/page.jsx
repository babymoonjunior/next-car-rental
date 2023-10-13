"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import getCarsList from "../../services";
import { useEffect, useState } from "react";
import CarLists from "@/components/Home/CarsList";

export default function Home() {
  const [carLists, setCarLists] = useState([])
  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result = await getCarsList();
    console.log(result);
    setCarLists(result?.carLists);
    console.log(carLists);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
      <CarLists carLists={carLists} />
    </div>
  );
}
