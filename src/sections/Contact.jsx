import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // simple form state (no validation)
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // send / toast / reset ...
  };

  return (
    <section id="contact" className="max-w-8xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* ---------- intro column ---------- */}
        <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
          <h1 className="font-extrabold font-agustina text-5xl md:text-7xl leading-tight">
            Let’s chat.
            <br />
            Tell me about&nbsp;
            <span className="text-blue-500">your next project.</span>
          </h1>

          <p className="text-lg text-slate-gray max-w-md mx-auto md:mx-0">
            I’m always excited to build something fresh — drop a note and we’ll
            make it happen{" "}
            <span role="img" aria-label="cat smirk">
              😼
            </span>
          </p>

          {/* email pill */}
          <a
            href="mailto:moosah01@gmail.com"
            className="inline-flex items-center gap-3 bg-white rounded-xl shadow-3xl px-6 py-4 w-max mx-auto md:mx-0"
          >
            <FaEnvelope className="text-black hover:text-blue-500 transition 500 ease-in-out text-xl" />
            <div className="text-left w-full">
              <span className="block text-sm text-slate-gray">Write me at</span>
              <span className="font-medium text-blue-500">
                moosah01@gmail.com
              </span>
            </div>
          </a>
        </div>

        {/* ---------- form column ---------- */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white/90 backdrop-blur-md shadow-3xl rounded-3xl p-8 md:p-12 w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Send me a message!
          </h2>

          <div className="flex flex-col gap-6">
            <input
              name="name"
              placeholder="Full name*"
              required
              value={form.name}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              required
              value={form.email}
              onChange={handleChange}
              className="input-field"
            />
            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="input-field"
            />
            <textarea
              name="message"
              placeholder="Tell me something about your work*"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="input-field resize-none"
            />

            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white font-semibold py-3 rounded-full transition hover:bg-black hover:text-white duration-500 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
