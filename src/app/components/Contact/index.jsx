"use client";
import { use, useState } from "react";

// REGEX
function isValidEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return re.test(email);
}
function isValidPhone(phone) {
  const re =
    /^(1[1-9]|[4689][1-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;
  return re.test(phone);
}

export default function Contact() {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  function emailBorder(email) {
    if (isValidEmail(email) || email === undefined) {
      return "";
    }
    return "border-rose-500";
  }
  function phoneBorder(phone) {
    if (isValidPhone(phone) || email === undefined) {
      return "";
    }
    return "border-rose-500";
  }

  return (
    <div id="container_contato">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(email);
        }}
        className="bg-gradient-to-r from-lime-800 via-lime-700 to-lime-700 shadow-lg rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline ${emailBorder(
              email
            )}`}
            id="email"
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <span className="text-sm text-red-500 none">Inválido</span> */}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Telefone
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline ${phoneBorder(
              phone
            )}`}
            id="phone"
            type="tel"
            name="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="description"
          >
            Mensagem
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            rows="8"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
