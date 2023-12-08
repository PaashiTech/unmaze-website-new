import "./Signup.css";

const Signup = () => {
  return (
    <div className="flex items-center justify-center relative w-full  ">
      <input
        type="text"
        placeholder="Email address"
        className="px-[2.25rem] py-[0.875rem] w-full  rounded-full placeholder:text-[#689E9E] bg-white border-[1px] border-solid border-[#fff000]"
      />
      <button className="button px-[2.25rem] py-[0.875rem] absolute  rounded-full  text-base font-semibold  right-0">
        Signup
      </button>
    </div>
  );
};

export default Signup;
