const TopBlogSection = () => {
  return (
    <div className="px-28">
      <div className="py-8">
        <span className="px-4 font-sans text-4xl font-bold text-black">
          Top Blogs
        </span>
      </div>
      <div className="flex gap-8 px-4">
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-4">
            <img
              className="object-cover object-center w-full h-[22rem] rounded-2xl"
              src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=crop&w=1470&q=80"
              alt="main-post"
            />
            <div>
              <p className="font-sans text-base text-gray-400">Category</p>
              <h1 className="mt-2 mb-4 text-2xl font-bold text-black">
                The Whispers of Trees: A Journey into the Secrets of Urban
                Forests
              </h1>
              <p className="font-sans text-base text-gray-400">
                A word conjuring images of barren landscapes, scorching sun, and
                a struggle for survival. But beneath the seemingly harsh
                exterior lies a hidden world brimming with life, beauty, and
                secrets waiting to be unveiled.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full gap-8">
          <div className="flex flex-1 h-full gap-4">
            <div className="flex-1 w-full">
              <img
                className="object-cover object-center w-full h-[18rem] rounded-2xl"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=crop&w=1470&q=80"
                alt="main-post"
              />
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col">
                <p className="font-sans text-sm text-gray-400">Category</p>
                <h1 className="mt-2 mb-4 text-xl font-bold text-black">
                  The Whispers of Trees: A Journey into the Secrets of Urban
                  Forests
                </h1>
                <p className="font-sans text-sm text-gray-400">
                  A word conjuring images of barren landscapes, scorching sun,
                  and a struggle for survival. But beneath the seemingly harsh
                  exterior lies a hidden world brimming with life, beauty, and
                  secrets waiting to be unveiled.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 h-full gap-4">
            <div className="flex-1 w-full">
              <img
                className="object-cover object-center w-full h-[18rem] rounded-2xl"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=crop&w=1470&q=80"
                alt="main-post"
              />
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col">
                <p className="font-sans text-sm text-gray-400">Category</p>
                <h1 className="mt-2 mb-4 text-xl font-bold text-black">
                  The Whispers of Trees: A Journey into the Secrets of Urban
                  Forests
                </h1>
                <p className="font-sans text-sm text-gray-400">
                  A word conjuring images of barren landscapes, scorching sun,
                  and a struggle for survival. But beneath the seemingly harsh
                  exterior lies a hidden world brimming with life, beauty, and
                  secrets waiting to be unveiled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlogSection;
