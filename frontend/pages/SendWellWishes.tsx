import React, { useState } from "react";
import "./SendWellWishes.css";
import leafImage from "../src/assets/leaf.png"; // Import the leaf image

const SendWellWishes: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // email sending logic here
    console.log(message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold leading-tight text-white">
        Send Well Wishes
      </h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="leaf-container">
          {/* Use the leaf image as the background */}
          <img src={leafImage} alt="Leaf" className="leaf-background" />
          {/* The textarea is positioned absolutely over the image */}
          <textarea
            value={message}
            onChange={handleChange}
            className="leaf-textarea"
            maxLength={500}
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <div className="char-count">{message.length}/500 characters</div>
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendWellWishes;
