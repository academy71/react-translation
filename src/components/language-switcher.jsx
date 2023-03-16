import React from "react";

import i18n from "../../i18n";

function LanguageSwitcher() {
  const handleLanguageChnage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="absolute right-4 top-4">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        En
      </button>

      <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg overflow-hidden shadow w-auto dark:bg-gray-700">
        <ul class="py-0 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleLanguageChnage("en")}>
            En
          </li>
          <hr className="opacity-20" />
          <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleLanguageChnage("bd")}>
            Bd
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
