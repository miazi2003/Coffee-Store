import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffeeData, setCoffeeData }) => {
  console.log(coffee);
  const { _id, photoUrl, name, price, Chef } = coffee;

  const handleDelete = (id) => {
    console.log("deleted", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        //delete

        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after db :", data);

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const updatedData = coffeeData.filter(coffee=> coffee._id !== id)

            setCoffeeData(updatedData)


          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] shadow-sm flex items-center gap-2 p-4">
        <figure>
          <img className="h-42 w-24 cover" src={photoUrl} alt="Movie" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-semibold text-lg font">
            {" "}
            Name : <span className="text-sm font-normal fontTwo">{name}</span>
          </h2>
          <h2 className="card-title font-semibold text-lg font">
            {" "}
            Quantity :{" "}
            <span className="text-sm font-normal fontTwo">{Chef}</span>
          </h2>
          <h2 className="card-title font-semibold text-lg font">
            {" "}
            Price : <span className="text-sm font-normal fontTwo">{price}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className=" p-1 rounded bg-[#D2B48C] flex items-center text-white">
            <Link to={`/viewCoffee/${_id}`}><button>
              <IoEye />
            </button></Link>
          </div>
          <div className=" p-1 rounded bg-blue-600 flex items-center text-white">
            <Link to={`/updateCoffee/${_id}`}><button>
              <MdModeEdit />
            </button></Link>
          </div>
          <div className=" p-1 rounded bg-red-500 flex items-center text-white">
            <button
              onClick={() => {
                handleDelete(_id);
              }}
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
// Chef
// :
// "21"
// details
// :
// "This Coffee Contain Much Suger"
// name
// :
// "Black Coffee"
// photoUrl
// :
// "https://i.ibb.co/rGfqhT5k/1.png"
// price
// :
// "100"
// supplier
// :
// "black Coffee Company"
// taste
// :
// "Very Good"
// _id
// :
// "682a27687e73e550d0eea56a"
