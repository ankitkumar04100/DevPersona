export default function ContactForm() {
  return (
    <section id="contact" className="p-8 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form action="https://formsubmit.co/ankitkumarforall@gmail.com" method="POST" className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded"/>
        <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded"/>
        <textarea name="message" placeholder="Your Message" rows="4" required className="p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
}
