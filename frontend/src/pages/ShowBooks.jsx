import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const ShowBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [id, setId] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/getbooks")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
    console.log(books);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0 flex justify-between ">
          <button className="primary-btn " onClick={() => navigate(-1)}>
            <FaArrowLeftLong />
          </button>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Book Shell
          </h2>
          <button
            className="primary-btn"
            onClick={() => navigate("/book/create")}
          >
            <FaPlus />
          </button>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {books.map((book, index) => (
            <article
              className="flex max-w-xl flex-col items-start justify-between primary-font"
              key={index}
            >
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Book id : {book._id}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  Name: {book.name || "Untitled"}
                </h3>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  Author: {book.author || "Untitled"}
                </h3>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  Rating {book.rating || "Untitled"}
                </h3>
              </div>
              <div>
                <button
                  className="primary-btn1 bg-cyan-400 "
                  onClick={() => navigate(`/book/edit/${book._id}`)}
                >
                  <TbEdit />
                </button>
                <button
                  className="primary-btn1 bg-red-600"
                  onClick={() => navigate(`/book/delete/${book._id}`)}
                >
                  <MdDelete />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowBooks;
