export default function slugToText(slug) {
      return slug?.replace(/-/g, ' ')?.replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word
  }
    