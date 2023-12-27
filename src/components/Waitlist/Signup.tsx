import { useState } from "react";
import Text from "../_UI/Typography/Text";
import { toast } from "react-toastify";
import CustomToast from "../_UI/CustomToast";

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Signup = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setEmail("");
    toast(<CustomToast />);
    if (email) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", email: email }),
      })
        .then(() => {
          setTimeout(() => {
            window.open("https://forms.office.com/r/XfgPg39D3i");
          }, 5000);
        })
        .catch((error) => alert(error));
    }

    e.preventDefault();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="w-full"
      >
        <div className="mx-auto flex w-full max-w-[30rem] items-center justify-center rounded-full  border-[1px] border-solid border-primary-yellow font-font-body">
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="Email address"
            onChange={handleOnChange}
            className="w-full rounded-l-full bg-white px-[1.5rem] py-[0.75rem]  placeholder:text-placeholder lg:px-[1.75rem] lg:text-xl"
          />
          <button
            type="submit"
            className="flex shrink-0 items-center rounded-r-full bg-gradient-unmaze-hero px-[1.5rem] py-[0.88rem] font-semibold text-primary-green lg:px-[1.75rem] "
          >
            <Text size="md" className="font-semibold">
              Sign up
            </Text>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
