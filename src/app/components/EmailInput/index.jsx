import React, { useState } from "react";

export default function EmailInput() {
  const [isValid, setIsValid] = useState(true);

  function isValidEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(email);
  }

  const handleBlur = (e) => {
    const inputValue = e.target.value;
    if (inputValue == "" || isValidEmail(inputValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="mb-4">
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline ${
          !isValid ? "border-2 border-red-500 focus:border-red-500" : ""
        }`}
        id="email"
        type="email"
        name="email"
        placeholder="email@example.com"
        onBlur={handleBlur}
      />
      {!isValid && <span className="text-sm text-red-500">Email inválido</span>}
    </div>
  );
}
