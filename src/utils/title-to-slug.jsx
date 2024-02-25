function createSlug(title) {
  let slug = title.toLowerCase().trim().replace(/\s+/g, "-");
  slug = slug.replace(/[^a-z0-9-]+/g, "");
  return slug;
}

export default createSlug;
