import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "email=" + email + "test",
      })
        .then(() => {
          alert("Thank you for your interest in Unmaze!");
          setTimeout(() => {
            window.location.replace("https://bit.ly/unmz");
          }, 2000);
        })
        .catch((error) => alert(error));
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex items-center justify-center relative w-full ">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleOnChange}
          className="px-[2.25rem] py-[0.875rem] w-full  rounded-full placeholder:text-[#689E9E] bg-white border-[1px] border-solid border-[#fff000]"
        />
        <button
          type="submit"
          style={{
            backgroundImage: `linear-gradient(98deg, #fff000 5.1%, #ccfd62 92.77%)`,
            border: "1px solid #fff000",
          }}
          className={`px-[2.25rem] py-[0.875rem] absolute  rounded-full  text-base font-semibold  right-0 text-[#035e5d]`}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
