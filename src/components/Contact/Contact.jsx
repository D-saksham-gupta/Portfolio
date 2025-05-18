import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT ME</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <div className="mt-4 flex flex-col space-y-4">
          <label className="text-white">Email:</label>
          <a className="flex items-center justify-center w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500">
            {" "}
            sakshamprem2003@gmail.com
          </a>
          <label className="text-white">Mobile:</label>
          <a className="flex items-center justify-center w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500">
            {" "}
            +916386366324
          </a>

          {/* Send Button */}
          <a
            href="mailto:sakshamprem2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            type="submit"
            className=" flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-blue-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Email me
          </a>
          <a
            href="https://wa.me/916386366324"
            target="_blank"
            rel="noopener noreferrer"
            type="submit"
            className=" flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-blue-200 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Whatsapp me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
