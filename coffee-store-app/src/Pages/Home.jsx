import React, { useEffect, useState, } from "react";
 import { Link, } from "react-router";
import CoffeeCard from "../Component/CoffeeCard";
import Banner from "../Component/Banner";
import QualityComp from "../Component/QualityComp";
import { FiCoffee } from "react-icons/fi";


const Home = () => {
    const [coffeeData , setCoffeeData] = useState([])


    useEffect(()=>{
        fetch('http://localhost:3000/coffees').then(res=>res.json()).then(data=>{console.log(data)
           setCoffeeData(data)
        })
    }, [])
//   const coffeeData = useLoaderData();
  //console.log(coffeeData);
  return (
    <div>
      <div className="h-screen ">
        <Banner></Banner>

        <QualityComp></QualityComp>

       <div className="relative">
        <img className="absolute  md:h-74 h-60 top-8" src="https://i.ibb.co/kg3T0pDM/4.png" alt="" />
        <img className="absolute  md:h-120  h-60 right-0 bottom-0" src="https://i.ibb.co/MxkY1nYz/5.png" alt="" />
        <div className="text-center pt-8 flex flex-col  gap-4">
            <p className="fontTwo font-semibold text-xs">--Sip & Savor--</p>
            <h1 className="font text-4xl font-bold text-[#331A15]">Our Popular Products</h1>
            <div className="flex items-center justify-center "><Link to={"/addCoffee"}><button className="btn bg-[#D2B48C] flex items-center  font">Add Coffee <FiCoffee /></button></Link></div>
        </div>
         <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-8 lg:max-w-4xl max-w-lg px-12 lg:p-2 lg:py-12 mx-auto py-8">
          {coffeeData.map((coffee) => (
            <CoffeeCard coffee={coffee} setCoffeeData={setCoffeeData} coffeeData={coffeeData}></CoffeeCard>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};

export default Home;

//cup
// https://i.ibb.co/kg3T0pDM/4.png


//umbrella
// https://i.ibb.co/MxkY1nYz/5.png




