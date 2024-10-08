import React from "react";

const SocialPill = (props) => {
  const handleClick = (e) => {
    if (props.copyToClipboard) {
      e.preventDefault();
      navigator.clipboard.writeText(props.copyToClipboard).then(() => {
        alert("Correo copiado al portapapeles");
      });
    }
  };
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener"
      className="rounded-full border border-gray-600/80 flex cursor-pointer px-2 font-onest items-center"
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
};

export default SocialPill;
