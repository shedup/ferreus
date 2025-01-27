function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Have any questions or inquiries? Feel free to reach out to us via
          email!
        </p>
        <div className="mt-6">
          <a
            href="mailto:ponsferreus@gmail.com"
            className="text-indigo-600 hover:text-indigo-800 text-lg font-medium"
          >
            Send us an email at ponsferreus@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
