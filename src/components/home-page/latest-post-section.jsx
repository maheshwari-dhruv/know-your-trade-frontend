export const LatestPostSection = () => {
  return (
    <section className="py-5 latest-post h-96 overflow-y-auto">
      <div className="flex w-full gap-4 h-full">
        <div className="border-green-600 border w-3/5 h-full">Blog 1</div>
        <div className="flex flex-col gap-4 w-2/5">
          <div className="blog-2 border-green-600 border h-1/2">Blog 2</div>
          <div className="blog-3 border-green-600 border h-1/2">Blog 3</div>
        </div>
      </div>
    </section>
  );
};
