import { useState } from "react";
import { Form } from "react-router-dom";

export default function SimpleModal({ isOpen, setIsOpen }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      {/* Bouton pour ouvrir le modal */}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-6 rounded-lg shadow-lg w-96">
            <div className="inline-grid">
              <div class="flex space-x-4  justify-self-center mt-5 items-center">
                <img
                  className="h-20"
                  src="asset/img/logo_blanc.png"
                  alt="l"
                ></img>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6 ">
                  <div className="mt-2  ">
                    <div className="flex items-center rounded-lg bg-white pl-3 outline-1  outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                        Email Adress :
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="entrez votre Email"
                        className=" rounded-lg block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <div className="mt-2">
                    <div className="flex items-center rounded-lg bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                        Password :
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="entrez votre mot de passe"
                        className=" rounded-lg block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between place-items-baseline">
                <div>
                  <button
                    type="button"
                    class=" mt-3 text-white bg-red-800 hover:bg-red-950 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-700 dark:hover:bg-red-950 dark:focus:ring-red-500"
                  >
                    login
                  </button>
                </div>
                <div>
                  <p>mot de passe oublié </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              {/* ligne de la modal  */}
              <div class="mt-3 w-3/5 h-1 bg-gray-300"></div>
            </div>

            {/* formulaire part 2  */}
            <p className="mt-4">Vous n'êtes pas encore inscrit ?</p>

            <div className="flex justify-center">
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3 ">
                  <div className="mt-2  ">
                    <div className="flex items-center rounded-lg bg-white pl-3 outline-1  outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                        Full Name * :
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="entrez votre Email"
                        className=" rounded-lg block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3 ">
                  <div className="mt-2  ">
                    <div className="flex items-center rounded-lg bg-white pl-3 outline-1  outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                        Full Name * :
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="entrez votre Email"
                        className=" rounded-lg block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6 ">
                <div className="mt-2  ">
                  <div className="flex items-center rounded-lg bg-white pl-3 outline-1  outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                      Compagny :
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="do you have money to pay me"
                      className=" rounded-lg block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6 ">
                <div className="mt-2  ">
                  <div className="flex items-center rounded-lg bg-white pl-3 outline-1  outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                      Email Adress :
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="entrez votre Email"
                      className=" rounded-lg block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6 ">
                <div className="mt-2  ">
                  <div className="flex items-center rounded-lg bg-white pl-3 outline-1  outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                      Phone Number * :
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="tel"
                      placeholder="entrez votre Email"
                      className=" rounded-lg block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full bg-red-800 text-white py-2 rounded-lg hover:bg-red-950"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
