import assets from "../assets/assets";
import Title from "./Title";
import toast from "react-hot-toast";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "36481bb5-1e63-4d7f-b043-ca4a09dec4f7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      {
        data.success
          ? toast.success("Thank you for your submission!")
          : toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      id="contact-us"
      className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40
        gap-7 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odio dignissimos porro accusamus officiis deleniti."
      />
      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div
            className="flex pl-3 rounded-lg border border-gray-300
              dark:border-gray-600"
          >
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              className="w-full text-sm outline-none p-3"
              required
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div
            className="flex pl-3 rounded-lg border border-gray-300
              dark:border-gray-600"
          >
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className="w-full text-sm outline-none p-3"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            required
            name="message"
            placeholder="Enter your message"
            className="w-full text-sm outline-none p-3 rounded-lg border
              border-gray-300 dark:border-gray-600"
          />
        </div>
        <button
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3
            rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit <img className="w-4" src={assets.arrow_icon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
