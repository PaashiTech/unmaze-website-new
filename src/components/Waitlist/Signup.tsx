import "./Signup.css";

const Signup = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Email address"
        className="px-[2.25rem] py-[0.875rem] rounded-full placeholder:text-[#689E9E]"
      />
      <button className="px-[2.25rem] py-[0.875rem] rounded-full translate-x-[-2.5rem] text-base font-semibold button">
        Sign up
      </button>
    </div>
  );
};

export default Signup;
