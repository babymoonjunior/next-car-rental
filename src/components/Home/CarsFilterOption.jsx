"use client";

import { useEffect, useState } from "react";

export default function CarsFilterOption({ carsOrgList, setBrand, sortPrice }) {
  const [brandList, setBrandList] = useState();
  const brandSet = new Set();

  useEffect(() => {
    if (carsOrgList) {
      filterCarList();
    }
  }, [carsOrgList]);

  const filterCarList = () => {
    carsOrgList.forEach((element) => {
      brandSet.add(element.carBrand);
    });
    console.log(brandSet);
    setBrandList(Array.from(brandSet));
    console.log(brandList);
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2 className="">Explore our cars you might likes</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => sortPrice(e.target.value)}
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered w-fit md:block max-w-xs hidden"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            Manufacturer
          </option>
          {brandList &&
            brandList?.map((brand, index) => (
              <option key={index}>{brand}</option>
            ))}
        </select>
      </div>
    </div>
  );
}
