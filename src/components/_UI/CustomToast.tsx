import toastClose from "../../assets/toast-close.svg";
import toastCheck from "../../assets//toast-check.svg";
import { ToastContentProps } from "react-toastify";
import React from "react";

interface CustomToastProps {
  closeToast?: () => void;
  toastProps?: ToastContentProps;
}

const CustomToast: React.FC<CustomToastProps> = ({ closeToast }) => {
  return (
    <div className="flex items-center gap-4 p-4 lg:py-[0.75rem] lg:pl-4 lg:pr-[3.25rem]">
      <div className="shrink-0">
        <img src={toastCheck} />
      </div>
      <div className="flex flex-col font-font-body">
        <p className="shrink-0 text-[0.875rem] leading-[1.125rem] text-white lg:text-[1rem]">
          Thank you, you're on our wailist!
        </p>
        <p className="shrink-0 text-[0.75rem] leading-[1.125rem] text-[#c8c5c5] lg:text-[0.875rem]">
          Redirecting you to our user survery...
        </p>
      </div>
      <button onClick={closeToast} className="shrink-0 lg:hidden">
        <img src={toastClose} />
      </button>
    </div>
  );
};

export default CustomToast;
