"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { useEffect, useState } from "react";
import CarLists from "@/components/Home/CarsList";
import { getCarsList } from "../../services";

export default function Home() {
  const [carLists, setCarLists] = useState([]);
  const [carsOrgList, setCarsOrgList] = useState([]);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result = await getCarsList();

    setCarLists(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  const filterCarList = (brand) => {
    const filterList = carsOrgList.filter((item) => item.carBrand === brand);
    setCarLists(filterList);
  };

  const filterByPrice = (order) => {
    const sortedData = [...carsOrgList].sort((a, b) => {
      if (order === "-1") {
      return  a.price - b.price; 
      } else if(order === "1"){
      return  b.price - a.price;
      }
    });
    setCarLists(sortedData);
  };

  
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption
        carsOrgList={carsOrgList}
        setBrand={(value) => filterCarList(value)}
        sortPrice={(value) => filterByPrice(value)}
      />
      <CarLists carLists={carLists} />
    </div>
  );
}
