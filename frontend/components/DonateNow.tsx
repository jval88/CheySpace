import React from "react";
import Modal from "./Modal";

interface DonateNowProps {
  show: boolean;
  onClose: () => void;
}

const DonateNow: React.FC<DonateNowProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <div className="p-4 text-gray-900">
        {" "}
        {/* Ensure the text color is set to a visible color like gray or black */}
        <h2 className="text-xl font-bold mb-4">Thanks for Supporting Chey</h2>
        <p className="mb-4">
          Thank you for considering a donation! Your support helps us continue
          our mission. A small portion of your donation will go towards
          maintaining this website.
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Donate via PayPal</h3>
          <a
            href="https://www.paypal.com/paypalme/YourPayPalMeLink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Donate via PayPal
          </a>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Donate via Venmo</h3>
          <p>
            Send your donation to <strong>@YourVenmoUsername</strong> on Venmo.
          </p>
          <img
            src="https://example.com/your-venmo-qr-code.png" // Replace with your actual QR code URL
            alt="Venmo QR Code"
            className="mt-2"
          />
        </div>
        <button
          onClick={onClose}
          className="mt-4 inline-block bg-gray-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default DonateNow;
