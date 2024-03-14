const SubscribeMail = () => {
  return (
    <section className="py-10 px-28">
      <div className="text-center text-white">
        <h2 className="mb-6 font-sans text-5xl font-medium">
          The quick, brown fox jumps <br /> over a lazy dog
        </h2>
        <p className="mt-6 text-base">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          <br />
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <div className="p-8">
          <form className="flex items-center w-full gap-4">
            <input
              placeholder="Name"
              required=""
              type="text"
              className="flex-grow w-1/4 h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none"
            />
            <input
              placeholder="Email"
              required=""
              type="text"
              className="flex-grow w-2/4 h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-1/4 h-12 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-emerald-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeMail;
