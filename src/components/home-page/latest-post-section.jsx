export const LatestPostSection = () => {
  return (
    <section className="mt-4">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-3/4">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem]"
              src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=crop&w=1470&q=80"
              alt="main-post"
            />
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase">Want to know</p>
              <h1 className="max-w-lg text-2xl font-semibold leading-tight">
                What do you want to know about UI
              </h1>
            </div>
          </div>
          <div className="lg:w-1/4">
            <div className="flex flex-col gap-3">
              <h3 className="capitalize">Design instument</h3>
              <a href="/" className="block font-medium">
                How to raise $100k+ by using blox ui kit on your design
              </a>
            </div>

            <hr className="my-4 border-black" />

            <div className="flex flex-col gap-3">
              <h3 className="capitalize">UI Resource</h3>
              <a href="/" className="block font-medium">
                Should you creat UI Product by using Blox?
              </a>
            </div>

            <hr className="my-4 border-black" />

            <div className="flex flex-col gap-3">
              <h3 className="capitalize">Premium Collection</h3>
              <a href="/" className="block font-medium">
                Top 10 Blocks you can get on Blox collection.
              </a>
            </div>

            <hr className="my-4 border-black" />

            <div className="flex flex-col gap-3">
              <h3 className="capitalize">Premium kits</h3>
              <a href="/" className="block font-medium">
                Top 10 Ui kit you can get on Bloxs collection.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
