import { useEffect, useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [formSent, setFormSent] = useState<boolean>(false);

  useEffect(() => {
    if (formSent) {
      const timeout = setTimeout(() => {
        window.location.replace("https://bit.ly/unmz");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [formSent]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    if (target.email.value) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "email=" + { email },
      })
        .then(() => {
          setFormSent(true);
          alert("Thank you for your interest in Unmaze!");
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
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
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
