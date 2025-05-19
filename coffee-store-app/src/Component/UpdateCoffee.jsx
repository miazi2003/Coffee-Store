import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  const navigate = useNavigate();
  const handleFromData = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);

    fetch(`http://localhost:3000/coffees/${coffeeData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Your Coffee Has Been Updated!",
            icon: "success",
            draggable: true,
          });
          navigate('/');
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col gap-6 bg-[#f4f3f0] p-4 rounded-2xl shadow fontTwo ">
        <h1 className="text-4xl font text-[#374151] text-shadow-black text-shadow-2xs text-center">
          Update Your Coffee
        </h1>

        <form
          action=""
          onSubmit={handleFromData}
          className="grid grid-cols-1 w-2/3 mx-auto  justify-between gap-4 p-2"
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
                defaultValue={coffeeData.name}
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
                defaultValue={coffeeData.Chef}
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
                defaultValue={coffeeData.supplier}
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
                defaultValue={coffeeData.taste}
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
                defaultValue={coffeeData.price}
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
                defaultValue={coffeeData.details}
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
              defaultValue={coffeeData.photoUrl}
            />
            <button className="btn bg-[#D2B48C] border-2  border-neutral-700 shadow-lg font">
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
