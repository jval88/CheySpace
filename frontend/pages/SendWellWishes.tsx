import React, { useState } from "react";

const SendWellWishes: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // email sending logic here
    console.log(message);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold leading-tight text-gray-900">
        Send Well Wishes
      </h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          rows={5}
          placeholder="Write your message here..."
        ></textarea>
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
