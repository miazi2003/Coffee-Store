import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleFromData = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after db : ", data);

        if (data.insertedId) {
          console.log("posted");
          Swal.fire({
            title: "Excellent",
            text: "You Added Coffee",
            icon: "success",
          });
          form.reset()
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div>  <Link to={"/"}>

          <button className=" text-[#374151] mt-4 mb-4  font font-bold text-xl flex items-center gap-4">

            <GiReturnArrow /> Back To home
          </button>

        </Link></div>
      <div>

        <div className="flex flex-col gap-6 bg-[#f4f3f0] p-4 rounded-2xl shadow fontTwo ">

      

        <h1 className="text-4xl font text-[#374151] text-shadow-black text-shadow-2xs text-center">

          Add New Coffee
      
        </h1>


        <p className="text-sm w-2/3 mx-auto text-gray-600">

          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <div>

          <form
            action=""
            onSubmit={handleFromData}
            className="flex  flex-col w-2/3 mx-auto  justify-between gap-4 p-2"
          >

            <div className="grid lg:grid-cols-2 grid-cols-1 justify-between gap-8">
              {/* <div className="flex flex-col w-[50%] gap-4">
               
              </div> */}

              <div className=" flex flex-col gap-4">
                <label className="text-sm font-semibold text-left -mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className=" bg-white shadow h-8  font-medium border-none rounded px-4 text-xs"
                  placeholder="Enter Coffee name"
                  name="name"
                />
              </div>
              <div className=" flex flex-col gap-4">
                <label className="text-sm font-semibold text-left -mb-2">
                  Chef
                </label>
                <input
                  type="text"
                  className=" bg-white shadow h-8  font-medium border-none rounded px-4 text-xs"
                  placeholder="Enter Chef Name"
                  name="Chef"
                />
              </div>

              <div className=" flex flex-col gap-4">
                <label className="text-sm font-semibold text-left -mb-2">
                  Supplier
                </label>
                <input
                  type="text"
                  className=" bg-white shadow h-8  font-medium border-none rounded px-4 text-xs"
                  placeholder="Enter Supplier Name"
                  name="supplier"
                />
              </div>
              <div className=" flex flex-col gap-4">
                <label className="text-sm font-semibold text-left -mb-2">
                  Taste
                </label>
                <input
                  type="text"
                  className=" bg-white shadow h-8  font-medium border-none rounded px-4 text-xs"
                  placeholder="Enter Coffee Taste"
                  name="taste"
                />
              </div>

              <div className=" flex flex-col gap-4">
                <label className="text-sm font-semibold text-left -mb-2">
                  Price
                </label>
                <input
                  type="text"
                  className=" bg-white shadow h-8  font-medium border-none rounded px-4 text-xs"
                  placeholder="Price"
                  name="price"
                />
              </div>
              <div className=" flex flex-col gap-4">
                <label className="text-sm font-semibold text-left -mb-2">
                  Details
                </label>
                <input
                  type="text"
                  className=" bg-white shadow h-8  font-medium border-none rounded px-4 text-xs"
                  placeholder="Enter Coffee Details"
                  name="details"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold text-left -mb-2">
                Photo URL
              </label>
              <input
                type="text"
                className=" bg-white shadow h-8  font-medium border-none rounded px-4 text-xs"
                placeholder="Enter Coffee Photo URL "
                name="photoUrl"
              />
              <button className="btn bg-[#D2B48C] border-2  border-neutral-700 shadow-lg font">
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddCoffee;
