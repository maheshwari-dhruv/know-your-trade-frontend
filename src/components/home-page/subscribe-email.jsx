export const SubscribEmailSection = () => {
  return (
    <section className="py-5">
      <div className="flex flex-col items-center justify-center px-20 mx-auto">
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-col items-center px-20 text-center">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold text-gray-900">
              The quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-gray-700 mx-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
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
          <p className="text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
      </div>
    </section>
  );
};
