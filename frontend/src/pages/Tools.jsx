import React from "react";

const Tools = () => {
  return (
    <div>
      <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <svg
            class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Bookstore Project
                </h1>
                <p class="text-base font-semibold leading-7 text-indigo-600">
                  Project Overview
                </p>

                <p class="mt-6 text-xl leading-8 text-gray-700">
                  The Bookstore Project is an interactive web application
                  designed to practice CRUD (Create, Read, Update, Delete)
                  operations on book data. This project allows users to manage a
                  collection of books, providing a user-friendly interface for
                  adding, viewing, editing, and deleting book entries.
                </p>
              </div>
            </div>
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt=""
            />
          </div>
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <ul role="list" class="mt-8 space-y-8 text-gray-600">
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 h-5 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-900">
                        Frontend
                      </strong>{" "}
                      <h2 className="font-bold mt-5 ">Technologies Used:</h2>
                      <p>
                        <strong>• React:</strong> A popular JavaScript library
                        for building user interfaces, React enables the creation
                        of reusable UI components and dynamic web applications.
                      </p>
                      <p>
                        <strong>• Vite:</strong> A modern build tool that offers
                        a fast and optimized development experience. Vite serves
                        the React application efficiently and bundles the code
                        for production.
                      </p>
                      <h2 className="font-bold mt-5 ">Key Features:</h2>
                      <p>
                        <strong>• Interactive UI:</strong> Provides a responsive
                        and user-friendly interface where users can perform CRUD
                        operations on book data.
                      </p>
                      <p>
                        <strong>• Component-Based Architecture:</strong>{" "}
                        Utilizes React's component-based structure for modular
                        and maintainable code.
                      </p>
                      <p>
                        <strong>• State Management:</strong> Manages the
                        application state using React hooks like useState and
                        useEffect.
                      </p>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 h-5 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-900">
                        Backend
                      </strong>{" "}
                      <h2 className="font-bold mt-5 ">Technologies Used:</h2>
                      <p>
                        <strong>• Node.js</strong>A JavaScript runtime that
                        allows for server-side scripting, enabling the
                        development of scalable network applications.
                      </p>
                      <p>
                        <strong>• Express</strong> A minimalist web framework
                        for Node.js, Express simplifies routing and handling
                        HTTP requests and responses
                      </p>
                      <p>
                        <strong>• Nodemon:</strong> : A development tool that
                        automatically restarts the server when file changes are
                        detected, improving development efficiency.
                      </p>
                      <h2 className="font-bold mt-5 ">Key Features:</h2>
                      <p>
                        <strong>• RESTful API: </strong> Implements a RESTful
                        API for handling book data, allowing for seamless
                        communication between the frontend and backend.
                      </p>
                      <p>
                        <strong>• Middleware: </strong> Uses Express middleware
                        to handle requests, responses, and errors efficiently.
                      </p>
                      <p>
                        <strong>• Development Convenience: </strong> Nodemon
                        ensures smooth and efficient development by
                        automatically restarting the server on file changes.
                      </p>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 h-5 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                      <path
                        fill-rule="evenodd"
                        d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-900">
                        Database
                      </strong>{" "}
                      <h2 className="font-bold mt-5 ">Technologies Used:</h2>
                      <p>
                        <strong>• MongoDB: </strong> A NoSQL database that
                        stores data in flexible, JSON-like documents, making it
                        easy to work with and scale.
                      </p>
                      <p>
                        <strong>• MongoDB Compass: </strong>A GUI tool for
                        MongoDB that provides a visual interface for exploring
                        and managing data.
                      </p>
                      <h2 className="font-bold mt-5 ">Key Features:</h2>
                      <p>
                        <strong>• Data Storage:</strong> Stores book data in a
                        structured manner, allowing for efficient querying and
                        manipulation
                      </p>
                      <p>
                        <strong>• Data Management:</strong> MongoDB Compass
                        offers an intuitive interface for database management,
                        including data visualization and query execution.
                      </p>
                    </span>
                  </li>
                </ul>
                <div>
                  <span>
                    <h1 className="font-bold mt-10 mb-5 ">
                      Project Highlights
                    </h1>
                    <p>
                      <strong>• CRUD Operations </strong> Users can create new
                      book entries, view existing books, update book details,
                      and delete books from the collection.
                    </p>
                    <p>
                      <strong>• Responsive Design: </strong>The application is
                      designed to be fully responsive, ensuring a seamless
                      experience across various devices.
                    </p>
                    <p>
                      <strong>• Interactive Experience: </strong>The combination
                      of React and Express provides a dynamic and interactive
                      user experience, while MongoDB ensures robust data storage
                      and retrieval.{" "}
                    </p>
                  </span>
                </div>

                <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Conclusion
                </h2>
                <p class="mt-6">
                  The Bookstore Project demonstrates the effective use of modern
                  web development technologies to build a full-stack
                  application. By integrating React, Vite, Node.js, Express, and
                  MongoDB, the project provides a comprehensive solution for
                  managing book data, offering both developers and users a
                  smooth and efficient experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
