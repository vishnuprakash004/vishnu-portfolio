import React from 'react';

const ButtonLink = ({ 
  url, 
  text, 
  padding = 'p-3',
  onClick  
}) => {
  
  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <a
      href={validateUrl(url) ? url : '#'}
      target='_blank'
      rel='noopener noreferrer' 
      className={`
        transition-all ease-in-out duration-300 
        ${padding} rounded-md text-white border-2 
        hover:bg-white hover:text-black hover:scale-110 
        hover:-translate-y-1 cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
      `}
      onClick={(e) => {
        if (!validateUrl(url)) {
          e.preventDefault();
          console.error('Invalid URL:', url);
          alert('The link appears to be broken. Please contact the site owner.');
        }
        onClick && onClick(e);  
      }}
    >
      {text}
    </a>
  );
}

export default ButtonLink;