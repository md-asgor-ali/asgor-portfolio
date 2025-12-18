import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaUsers,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  // === CRITICAL: Replace these placeholders with your actual keys from the EmailJS Dashboard ===
  // Your EmailJS Service ID
  const serviceID = "service_gjys9zl";
  // Your EmailJS Template ID
  const templateID = "template_nttgqn6";
  // Your EmailJS Public Key
  const publicKey = "8xShkyRENYyXXY7sH";

  // Initialize EmailJS with your Public Key
  emailjs.init(publicKey);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current).then(
      () => {
        // Show a success SweetAlert modal
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "bg-neutral-800 text-white border border-cyan-400",
            confirmButton: "bg-cyan-500 hover:bg-cyan-600",
          },
        });
        form.current.reset();
      },
      (error) => {
        console.error("Failed to send email:", error.text);
        // Show an error SweetAlert modal
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "bg-neutral-800 text-white border border-red-500",
            confirmButton: "bg-red-500 hover:bg-red-600",
          },
        });
      }
    );
  };

  const socialLinks = [
    { icon: FaFacebookF, url: "https://web.facebook.com/md.asgor.ali.416176" },
    { icon: FaTwitter, url: "https://x.com/ASGOR_542" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/asgor542" },
    { icon: FaGithub, url: "https://github.com/md-asgor-ali" },
  ];

  return (
    <section id="contact" className="py-16 text-white">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">Contact</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
          <p className="text-neutral-400 mt-3">
            Let's connect — I’d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-cyan-500 hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <FaPaperPlane className="text-cyan-400 text-3xl" />
              <h4 className="font-bold text-2xl">Contact Information</h4>
            </div>

            <div className="space-y-4 text-lg text-neutral-300">
              <p className="flex items-center gap-3">
                <FaUser className="text-cyan-400 text-xl" />
                <span className="font-bold text-white">Md Asgor Ali</span>
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                Rajshahi, Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400 text-xl" />
                +8801795007280
              </p>
              <p className="flex items-center gap-3">
                <FaWhatsapp className="text-cyan-400 text-xl" />
                +8801795007280
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400 text-xl" />
                asgor542@gmail.com
              </p>
            </div>

            <div className="mt-8">
              <span className="font-bold text-white text-2xl  mb-3 flex items-center gap-2">
                <FaUsers className="text-cyan-400 text" />
                Social:
              </span>
              <div className="flex space-x-4 text-xl">
                {socialLinks.map(({ icon: Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-700 hover:bg-cyan-500 hover:text-white transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gr-800 p-8 rounded-xl shadow-lg border border-cyan-500 hover:shadow-cyan-500/20 transition-all duration-300">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <input
                className="w-full p-4 rounded-lg bg-gray-900 border border-cyan-500 placeholder-neutral-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                placeholder="Name"
                name="user_name"
                required
              />
              <input
                className="w-full p-4 rounded-lg bg-gray-900 border border-cyan-500 placeholder-neutral-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                placeholder="Email"
                type="email"
                name="user_email"
                required
              />
              <textarea
                className="w-full p-4 rounded-lg bg-gray-900 border border-cyan-500 placeholder-neutral-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                rows="6"
                placeholder="Write your message here..."
                name="message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 px-6 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition duration-300 cursor-pointer"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
