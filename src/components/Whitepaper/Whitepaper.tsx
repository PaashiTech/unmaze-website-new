import "./Whitepaper.css";

const Whitepaper = () => {
  return (
    <div className="px-5 py-8">
      <div className="px-9 py-12 rounded-[1.25rem] gradient text-[#035e5d]">
        <div className="flex flex-col gap-4">
          <div className="font-clash-display flex flex-col gap-[0.375rem]">
            <p className="text-sm tracking-[0.105rem]">Our Research</p>
            <div>
              <div className="flex items-center gap-[0.375rem]">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Star 5">
                      <path
                        d="M7.19532 0.988601C7.41671 0.166367 8.58329 0.166369 8.80468 0.988604L9.99658 5.4154C10.0738 5.70219 10.2978 5.9262 10.5846 6.00342L15.0114 7.19532C15.8336 7.41671 15.8336 8.58329 15.0114 8.80468L10.5846 9.99658C10.2978 10.0738 10.0738 10.2978 9.99658 10.5846L8.80468 15.0114C8.58329 15.8336 7.41671 15.8336 7.19532 15.0114L6.00342 10.5846C5.9262 10.2978 5.70218 10.0738 5.4154 9.99658L0.988601 8.80468C0.166367 8.58329 0.166369 7.41671 0.988604 7.19532L5.4154 6.00342C5.70219 5.9262 5.9262 5.70218 6.00342 5.4154L7.19532 0.988601Z"
                        fill="url(#paint0_diamond_56_184)"
                      />
                      <path
                        d="M7.19532 0.988601C7.41671 0.166367 8.58329 0.166369 8.80468 0.988604L9.99658 5.4154C10.0738 5.70219 10.2978 5.9262 10.5846 6.00342L15.0114 7.19532C15.8336 7.41671 15.8336 8.58329 15.0114 8.80468L10.5846 9.99658C10.2978 10.0738 10.0738 10.2978 9.99658 10.5846L8.80468 15.0114C8.58329 15.8336 7.41671 15.8336 7.19532 15.0114L6.00342 10.5846C5.9262 10.2978 5.70218 10.0738 5.4154 9.99658L0.988601 8.80468C0.166367 8.58329 0.166369 7.41671 0.988604 7.19532L5.4154 6.00342C5.70219 5.9262 5.9262 5.70218 6.00342 5.4154L7.19532 0.988601Z"
                        fill="#FFF000"
                      />
                      <path
                        d="M7.19532 0.988601C7.41671 0.166367 8.58329 0.166369 8.80468 0.988604L9.99658 5.4154C10.0738 5.70219 10.2978 5.9262 10.5846 6.00342L15.0114 7.19532C15.8336 7.41671 15.8336 8.58329 15.0114 8.80468L10.5846 9.99658C10.2978 10.0738 10.0738 10.2978 9.99658 10.5846L8.80468 15.0114C8.58329 15.8336 7.41671 15.8336 7.19532 15.0114L6.00342 10.5846C5.9262 10.2978 5.70218 10.0738 5.4154 9.99658L0.988601 8.80468C0.166367 8.58329 0.166369 7.41671 0.988604 7.19532L5.4154 6.00342C5.70219 5.9262 5.9262 5.70218 6.00342 5.4154L7.19532 0.988601Z"
                        fill="#035E5D"
                      />
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_diamond_56_184"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(8 8) rotate(90) scale(8.75)"
                      >
                        <stop offset="0.00706229" stop-color="#035E5D" />
                        <stop offset="0.752651" stop-color="#FFF000" />
                      </radialGradient>
                    </defs>
                  </svg>
                </span>
                <p className="text-2xl font-semibold tracking-[0.06rem] leading-6">
                  The art of
                </p>
              </div>

              <p className="text-2xl font-semibold tracking-[0.06rem] leading-6">
                mindful investing
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-[12.5rem]">
              <p className="text-lg tracking-[0.045rem] leading-6 avenir-font">
                Bridging the
              </p>
              <p className="text-lg tracking-[0.045rem] leading-6 avenir-font">
                gap between
              </p>
              <p className="text-lg tracking-[0.045rem] leading-6 avenir-font">
                theory and practice
              </p>
            </div>

            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="23.9999"
                  width="33.9411"
                  height="33.9411"
                  rx="4"
                  transform="rotate(-45 0 23.9999)"
                  fill="url(#paint0_linear_56_194)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0001 12C24.5523 12 24.9953 12.4492 25.0448 12.9993C25.5497 18.6061 30.2618 23 36.0001 23C36.5523 23 37.0001 23.4477 37.0001 24C37.0001 24.5523 36.5523 25 36.0001 25C30.2618 25 25.5497 29.3939 25.0448 35.0007C24.9953 35.5508 24.5523 36 24.0001 36C23.4478 36 22.996 35.5513 23.0379 35.0006C23.3582 30.7874 25.6869 27.1355 29.0687 25H13.0001C12.4478 25 12.0001 24.5523 12.0001 24C12.0001 23.4477 12.4478 23 13.0001 23H29.0687C25.6869 20.8645 23.3582 17.2126 23.0379 12.9994C22.996 12.4487 23.4478 12 24.0001 12Z"
                  fill="#FFF000"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_56_194"
                    x1="16.9705"
                    y1="10.6295"
                    x2="16.9705"
                    y2="71.2294"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#023A39" />
                    <stop offset="0.979756" stop-color="#035E5D" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
