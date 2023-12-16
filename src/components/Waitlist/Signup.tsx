import { useState } from "react";

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Signup = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (email) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", email: email }),
      })
        .then(() => {
          alert("Thank you for your interest in Unmaze!");
          setTimeout(() => {
            window.location.replace("https://bit.ly/unmz");
          }, 2000);
        })
        .catch((error) => alert(error));
    }

    e.preventDefault();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <div className="relative flex w-full items-center justify-center font-font-body  lg:w-[28.25rem]">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          onChange={handleOnChange}
          className="placeholder:text-placeholder w-full rounded-full border-[1px] border-solid border-primary-yellow bg-white px-[2.25rem]  py-[0.875rem] pr-[9rem] lg:px-11 lg:py-[1rem] lg:pr-[12rem] lg:text-2xl"
        />
        <button
          type="submit"
          className="absolute right-0 rounded-full bg-gradient-unmaze-hero px-[2.25rem] py-[0.875rem] font-semibold text-primary-green lg:px-12 lg:py-[1rem] lg:text-2xl"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Signup;
