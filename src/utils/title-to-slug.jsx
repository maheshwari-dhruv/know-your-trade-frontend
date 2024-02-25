// import re from "regexp"; // Import regular expression library

function createSlug(title, maxLength = 50) {
  const slug = title.toLowerCase().trim();

  // Combine multiple whitespace characters into a single hyphen
  const hyphenatedSlug = slug.replace(/\s+/g, "-");

  // Remove all characters except letters, numbers, and hyphens
  const cleanSlug = hyphenatedSlug.replace(/[^a-z0-9-]+/g, "");

  // Truncate the slug if necessary, ensuring a trailing hyphen
  const truncatedSlug =
    cleanSlug.slice(0, maxLength) + (cleanSlug.length > maxLength ? "-" : "");

  return truncatedSlug;
}

export default createSlug;
