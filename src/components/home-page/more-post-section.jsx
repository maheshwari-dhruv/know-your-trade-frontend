export const MorePostSection = () => {
  return (
    <section className="flex flex-col gap-4 py-5 more-post">
      <span>More Post</span>
      <div className="flex flex-col gap-4">
        <div className="blog-heading border-green-600 border h-40 w-full">
          <span>Blog Post 1</span>
        </div>
        <div className="full-name border-green-600 border w-full h-40">
          <span>Blog Post 2</span>
        </div>
        <div className="social-icons border-green-600 border w-full h-40">
          <span>Blog Post 3</span>
        </div>
      </div>
    </section>
  );
};
