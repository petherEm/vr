import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

const Users = () => {
  return (
    <div
      className="flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start"
      data-aos="fade-down"
      data-aos-delay="900"
    >
      <div className="flex -space-x-2">
        <div className="w-12 h-12 rounded-full">
          <img src="/img/avt1.png" alt="" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src="/img/avt2.png" alt="" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src="/img/avt3.png" alt="" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src="/img/avt4.png" alt="" />
        </div>
      </div>
      <div className="flex items-center space-x-2 font-secondary font-medium">
        <BsFillCircleFill className="text-xs text-green-500 animate-pulse" />
        <div>400k people online</div>
      </div>
    </div>
  );
};

export default Users;
