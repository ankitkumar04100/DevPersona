import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Optional: integrate Formspree or Netlify Forms here
  };

  return (
    <section id="contact" className="py-16 px-4 bg-lightBg dark:bg-darkBg">
      <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-8">Contact Me</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Name" required className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBg text-gray-800 dark:text-gray-200"/>
          <input type="email" placeholder="Email" required className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBg text-gray-800 dark:text-gray-200"/>
          <textarea placeholder="Message" rows={5} required className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBg text-gray-800 dark:text-gray-200"/>
          <button type="submit" className="bg-primary text-white py-3 rounded-xl hover:bg-secondary transition-colors">Send Message</button>
        </form>
      ) : (
        <p className="text-center text-lg text-green-500">Thank you! Your message has been sent.</p>
      )}
    </section>
  );
}
