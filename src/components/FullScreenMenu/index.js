import React from 'react';

const menuItems = ['About', 'Work', 'Contact'];

const FullScreenMenu = ({ open, onMenuClose }) => {
  return (
    <div className="fixed bg-white w-screen h-screen z-10 top-0 left-0 flex items-center justify-center">
      <ul className="space-y-20">
        {menuItems.map((item) => (
          <li
            key={item}
            className="text-5xl text-center hover:text-accent transition"
          >
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onMenuClose}
        className="right-0 top-0 mt-9 mr-32 p-3 box-content absolute cursor-pointer w-10"
      >
        <div
          className="w-full bg-black"
          style={{
            height: '3px',
          }}
        />
      </button>
    </div>
  );
};

export default FullScreenMenu;
