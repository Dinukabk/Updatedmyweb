const Contact = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form className="bg-gray-800 text-white p-6 rounded">
          <h2 className="text-2xl mb-4">Contact Me</h2>
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-3" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-3" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-3"></textarea>
          <button className="bg-blue-500 px-4 py-2">Send</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  