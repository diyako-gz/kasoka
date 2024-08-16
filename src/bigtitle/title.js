import React from 'react';
import Typed from 'typed.js';
import Explnastion from './explnastion';
import Titlebox from './titlebox';

export default function title() {
  const titleData = [
    { id: 1, name: "ترید" },
    { id: 2, name: "اساتید" },
    { id: 3, name: "مدیریت" },
    { id: 4, name: "تیم ما" }
  ];

  const strings = ["...تیم ما در جستجوی بهترین ها برای شما"];
  const options = {
    strings: strings,
    typeSpeed: 90,
  };

  return (
    <div className='mt-[100px]'>
      <div className="flex justify-center">
        <div className="">
          <p className='font-bold text-5xl' ref={(element) => {
            if (element) {
              new Typed(element, options);
            }
          }} />
        </div>
      </div>
      <div className="mt-[150px] grid grid-cols-4">
        <Titlebox {...titleData[0]} />
        <Titlebox {...titleData[1]} />
        <Titlebox {...titleData[2]} />
        <Titlebox {...titleData[3]} />
      </div>
      <Explnastion />
    </div>
  );
}