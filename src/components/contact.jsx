import { useState } from "react";
import { Header } from "./home";
import axios from "axios";
import toast, { ToastBar, Toaster } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("Please fill all fields!!");
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      if (!validateName(name) || !validateEmail(email) || !validateMessage(message)) {
        toast.error(errorMessage);
        return;
      }
      const response = await axios.post('http://localhost:3001/api/contact', { name, email, message });
      toast.success('Your message reached successfully!');
      setErrorMessage("Please fill all fields!!");
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const validateName = (value) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
      setErrorMessage('Name can only contain letters and spaces.');
      setName("");
      return false;
    }
    return true;
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setErrorMessage('Please enter a valid email address.');
      setEmail("");
      return false;
    }
    return true;
  };

  const validateMessage = (value) => {
    if (value.length >= 500) {
      setErrorMessage('Message cannot exceed 500 characters.');
      setMessage(value.slice(0, 500));
      return false;
    }
    return true;
  };

  return (
    <>
      {location.pathname.includes("contact") && <Header />}
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#292929] text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-99 right-[69vw] w-23 h-23 md:top-16 md:left-3 md:w-14 md:h-14 lg:top-18 lg:left-3 lg:w-17 lg:h-17 xl:top-22 xl:left-7 xl:w-29 xl:h-29 bg-[#bf162dad] rounded-full"></div>
          <div className="absolute top-147 left-[9vw] w-47 h-47 md:top-0 md:left-6 md:w-29 md:h-29 lg:top-0 lg:left-7 lg:w-33 lg:h-33 xl:top-0 xl:left-9 xl:w-47 xl:h-47 bg-[#ca1931bd] rounded-full"></div>
          <div className="absolute bottom-19 left-[1vw] w-11 h-11 bg-[#ca19319b] md:top-auto md:bottom-11 md:right-47 md:left-auto md:w-9 md:h-9 lg:bottom-11 lg:right-69 lg:left-auto lg:w-10 lg:h-10 xl:bottom-11 xl:top-auto xl:left-auto xl:right-89 xl:w-13 xl:h-13 sm:bg-[#ca1931db] rounded-full"></div>
          <div className="absolute top-2 right-[15vw] w-24 h-24 md:top-auto md:bottom-26 md:left-49 md:w-10 md:h-10 lg:top-auto lg:bottom-29 lg:left-69 lg:w-11 lg:h-11 xl:bottom-43 xl:top-auto xl:left-114 xl:w-14 xl:h-14 bg-[#bf162dad] rounded-full z-10"></div>
          <div className="absolute hidden top-87 left-[18vw] w-23 h-23 md:block md:top-auto md:bottom-13 md:left-39 md:w-20 md:h-20 lg:bottom-16 lg:left-55 lg:w-22 lg:h-22 xl:bottom-18 xl:left-96 xl:w-33 xl:h-33 bg-[#da19317d] z-0 rounded-full"></div>
          <div className="absolute top-0 left-[73vw] w-13 h-13 bg-[#ca19319b] md:top-auto md:bottom-15 md:left-27 md:w-9 md:h-9 lg:bottom-20 lg:left-39 lg:w-10 lg:h-10 xl:bottom-28 xl:left-66 xl:w-13 xl:h-13 sm:bg-[#ca1931db] rounded-full"></div>
          <div className="absolute top-157 right-[9vw] w-47 h-47 md:top-147 md:right-11 md:w-30 md:h-30 lg:top-147 lg:right-22 lg:w-33 lg:h-33 xl:top-169 xl:right-29 xl:w-44 xl:h-44 bg-[#ca1931bd] rounded-full"></div>
          <div className="absolute top-147 left-[9vw] w-47 h-47 md:top-148 md:left-6 md:w-33 md:h-33 lg:top-144 lg:left-9 lg:w-39 lg:h-39 xl:top-169 xl:left-29 xl:w-49 xl:h-49 bg-[#ca1931bd] rounded-full"></div>
          <div className="absolute top-26 right-[7vw] w-11 h-11 bg-[#ca19316a] md:top-143 md:bottom-auto md:right-11 md:w-12 md:h-12 lg:top-143 lg:right-19 lg:w-13 lg:h-13 xl:top-157 xl:right-24 xl:w-22 xl:h-22 sm:bg-[#ca19319b] rounded-full"></div>
        </div>
        <h1 className="text-4xl font-bold">Contact Page</h1>
        <Toaster position="top-center" containerStyle={{ top: '5rem' }} reverseOrder={false} />
        <p className="mt-4 text-center max-w-md px-4 z-10 font-light text-sm text-gray-400">Feel free to reach out to me using the form below. I look forward to hearing from you!</p>
        <form className="mt-8 w-full max-w-md px-4 z-10">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              rows="4"
              value={message}
              placeholder="Your Message"
              required
              onChange={(e) => { setMessage(e.target.value) }}
            ></textarea>
          </div>
          <button
            className="w-full bg-[#cf162ece] text-white px-4 py-2 rounded-md hover:bg-[#191919] hover:text-[#cf162e] transition-colors"
            type="submit"
            onClick={(e) => { sendMessage(e) }}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;