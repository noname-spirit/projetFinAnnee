import { useState } from "react";
import Modal from "../modal/Modal";

export default function Navbar({ setIsOpen }) {
  return (
    <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="asset/img/nns_logo_nav.png" class="h-20" alt="" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white bg-red-800 hover:bg-red-950 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-700 dark:hover:bg-red-950 dark:focus:ring-red-500"
            onClick={() => setIsOpen(true)}
            className="text-white bg-red-800 hover:bg-red-950 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-700 dark:hover:bg-red-950 dark:focus:ring-red-500"
          >
            login/sign-in
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white bg-red-800 rounded-sm md:bg-transparent md:text-red-800 md:p-0 md:dark:text-red-800"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Competances"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800 md:p-0 md:dark:hover:text-red-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Competences
              </a>
            </li>
            <li>
              <a
                href="#Projets"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800 md:p-0 md:dark:hover:text-red-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800 md:p-0 md:dark:hover:text-red-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    
    </nav>
  );
}
