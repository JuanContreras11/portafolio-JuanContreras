import React, { useState } from "react";
import experiencia from "../assets/Experiencia.json";

const Experiencia = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="justify-center text-justify py-5">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiencia.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-onest leading-none text-gray-400 dark:text-gray-500">
              {item.date}
            </time>
            <h3 className="text-lg font-onest font-bold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <h4 className="text-md font-onest font-semibold text-gray-700 dark:text-gray-300">
              {item.company}
            </h4>
            <button
              onClick={() => toggleDescription(index)}
              className="text-blue-200 hover:text-blue-600 transition-colors duration-200 " 
            >
              {openIndex === index ? "Ocultar descripción" : "Mostrar descripción"}
            </button>
            {openIndex === index && (
              <ul className="mt-2 text-base font-onest text-gray-500 dark:text-gray-400">
                {item.description.split('-').map((point, i) => (
                  <li key={i}>• {point.trim()}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Experiencia;