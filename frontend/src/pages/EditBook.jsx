
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    rating: "",
  });

  const notify = () => toast("Book Updated successfully !");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
    console.log(bookData);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getbook/${id}`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
    console.log(books);
  }, []);

  console.log(id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/updateBook/${id}`,
        bookData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0 flex justify-between pt-16 primary-font ">
          <button className="primary-btn " onClick={() => navigate(-1)}>
            <FaArrowLeftLong />
          </button>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Edit
          </h2>
          <div></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="sm:col-span-4 grid place-content-center pt-10 place-items-center primary-font   ">
          <div className="flex items-center gap-x-4 text-xs">
            <a
              href="#"
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              Book id : {id}
            </a>
          </div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name of Book
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="username"
                onChange={handleChange}
                placeholder={books.name}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <label
            htmlFor="author"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name of Author
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="author"
                id="author"
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder={books.author}
              />
            </div>
          </div>

          <label
            htmlFor="rating"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Rating
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="number"
                name="rating"
                onChange={handleChange}
                id="rating"
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder={books.rating}
              />
            </div>
            <div>
              <button className="primary-btn m-10" onClick={notify}>
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditBook;
