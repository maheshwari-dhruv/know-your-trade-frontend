export const HeaderSection = () => {
  return (
    <header className="py-5 header-section flex items-center justify-between gap-4">
      <div className="blog-heading border-green-600 border flex-1">
        <span>Know Your Trade</span>
      </div>
      <div className="profile-pic border-green-600 border flex-1 text-center">
        <span>Profile Pic</span>
      </div>
      <div className="category-nav border-green-600 border flex-1 text-right">
        <span>Category</span>
      </div>
    </header>
  );
};
