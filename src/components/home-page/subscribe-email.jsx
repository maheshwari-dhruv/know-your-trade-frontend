export const SubscribEmailSection = () => {
  return (
    <section className="border-red-600 border py-5 subscribe-email flex flex-col gap-4">
      <div className="blog-heading border-green-600 border w-full flex flex-col gap-4 px-20 text-center">
        <span>Subscribe To Receive regular blog update</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A enim
          nostrum ipsa dicta saepe officiis nobis aspernatur eveniet maxime
          nesciunt, quidem quo consectetur recusandae laborum facere repellendus
          veritatis? Consequatur, illo!
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="full-name border-green-600 border w-full text-center">
          <span>Email Input</span>
        </div>
        <div className="social-icons border-green-600 border w-full text-center">
          <span>Subscribe Button</span>
        </div>
      </div>
    </section>
  );
};
