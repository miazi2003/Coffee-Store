import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "../Component/CoffeeCard";
import Banner from "../Component/Banner";
import QualityComp from "../Component/QualityComp";

const Home = () => {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  return (
    <div>
      <div className="h-screen ">
        <Banner></Banner>

        <QualityComp></QualityComp>

        <div className="h-60 w-full grid grid-cols-2">
          {coffeeData.map((coffee) => (
            <CoffeeCard coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
