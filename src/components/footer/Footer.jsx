function Footer() {
  return (
    <div className="">
      <p className="text-9xl mt-36"> LET’S TALK - LET’S TALK</p>
      <div className="mt-10">
        <button
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          DEVIS GRATUIT
        </button>
        <button
          type="button"
          class="text-red-500 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white dark:hover:bg-red-300 dark:focus:ring-red-900"
        >
          NOUS CONTACTEZ
        </button>
      </div>

      <div className="flex space-x-4  justify-self-center mt-36 items-center">
        <div className="text-sm">Bonjour@noname-spirit.com</div>
        <div>
          <img className="h-20" src="asset/img/logo_blanc.png" alt="l"></img>
        </div>
        <div>
          <p className=" align-text-bottom ">
            Noname-spirit| 11/25 - 804 595 239 00018 © All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
