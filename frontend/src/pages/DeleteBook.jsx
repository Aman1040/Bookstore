import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const notify = () => toast("Book Deleted successfully !");

  const handledelete = async (e) => {
    e.preventDefault();
    notify();
    try {
      axios
        .get(`http://localhost:3000/deletebook/${id}`)
        .then(console.log("Deleted successfully"));
    } catch (error) {
      console.log("Error in deleting", error);
    }
  };

  return (
    <div>
      <div className="space-y-12 pt-16 primary-font ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-7xl lg:mx-0 flex justify-between ">
            <button className="primary-btn " onClick={() => navigate(-1)}>
              <FaArrowLeftLong />
            </button>

            <div></div>
          </div>
        </div>
        <div className="grid justify-center border-4 w-half ml-64 mr-64 rounded-lg">
          <h3 className="mt-10 ml-10">
            Are you sure you want to delete this book with id {id}?
          </h3>
          <button
            className="primary-btn mt-8 m-12 mb-2 "
            onClick={handledelete}
          >
            Delete{" "}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DeleteBook;
