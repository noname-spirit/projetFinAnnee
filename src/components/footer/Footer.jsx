function Footer() {
  return (
    <div className="">
      <p className="text-9xl"> LET’S TALK - LET’S TALK</p>
      <button
        type="button"
        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        DEVIS gratuit
      </button>
      <button
        type="button"
        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        nous contacter
      </button>

      <div className="flex space-x-4  justify-self-center mt-36">
        <div>Bonjour@noname-spirit.com</div>
        <div>
          <img class="" src="" alt="logo nns"></img>
        </div>
        <div>
          <p>Noname-spirit| 11/25 - 804 595 239 00018 © All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
