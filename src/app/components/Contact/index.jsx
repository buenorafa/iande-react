"use client";
import { PhoneInput, EmailInput } from "..";

export default function Contact() {
  return (
    <div id="container_contato">
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
            placeholder="Pedro Victor"
            required
          />
        </div>
        <EmailInput />
        <PhoneInput />
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
