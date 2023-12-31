"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { useEffect, useState } from "react";
import CarLists from "@/components/Home/CarsList";
import { getCarsList } from "../../services";
import ToastMsg from "@/components/ToastMsg";
import { BookingStatusContext } from "@/context/BookingStatusContext";

export default function Home() {
  const [carLists, setCarLists] = useState([]);
  const [carsOrgList, setCarsOrgList] = useState([]);
  const [showToastMsg, setShowToastMsg] = useState(false);

  useEffect(() => {
    getCarList_();
  }, []);

  useEffect(() => {
    if(showToastMsg){
      setTimeout(() => setShowToastMsg(false), 3000)
    }
  },[showToastMsg])

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
        return a.price - b.price;
      } else if (order === "1") {
        return b.price - a.price;
      }
    });
    setCarLists(sortedData);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookingStatusContext.Provider value={{showToastMsg, setShowToastMsg}}>
        <Hero />
        <SearchInput />
        <CarsFilterOption
          carsOrgList={carsOrgList}
          setBrand={(value) => filterCarList(value)}
          sortPrice={(value) => filterByPrice(value)}
        />
        <CarLists carLists={carLists} />
        {showToastMsg&&<ToastMsg message={"Booking Created Successfully!"}/>}
      </BookingStatusContext.Provider>
    </div>
  );
}
