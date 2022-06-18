import React from "react";

function Button({ onClick, title, isLink, url, color, isLine, isColor }) {
  return (
    <div>
      {isLink === true ? (
        <a className={`link-${color} ${isColor ? 'bg' : ''}`} style={{color: color, textDecoration: isLine ? 'none' : 'underline'}} href={url}>{title}</a>
      ) : (
        <button className={`link-${color}`} style={{color: color}}   onClick={onClick}>{title}</button>
      )}
    </div>
  );
}

export default Button;
