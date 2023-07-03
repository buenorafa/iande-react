import React, { useState } from "react";
import { IMaskInput } from "react-imask";

export default function PhoneInputComponent() {
  const [isValid, setIsValid] = useState(true);
  // Utilização do REGEX
  function isValidPhone(value) {
    // Como apliquei uma máscara no input, removo todos os dígitos não numéricos para fazer a validação
    value = value.replace(/[^0-9]/g, "");
    // Apesar da máscara já servir como uma validação p/ quantidade de números, ela não funciona para o ddd por exemplo.
    const regex =
      /^(1[1-9]|[4689][1-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;
    return regex.test(value);
  }

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue == "" || isValidPhone(inputValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="mb-4">
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="phone"
      >
        Telefone
      </label>
      <IMaskInput
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline ${
          !isValid ? "border-2 border-red-500 focus:border-red-500" : ""
        }`}
        id="phone"
        type="tel"
        name="phone"
        placeholder="(11) 9 8888-8888"
        mask="(00) 0 0000-0000"
        onBlur={handleChange}
      />
      {!isValid && (
        <span className="text-sm text-red-500">Telefone inválido</span>
      )}
    </div>
  );
}
