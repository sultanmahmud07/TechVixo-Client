export default function generateSlug(slagText) {
      return slagText
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with "-"
        .replace(/^-+|-+$/g, ''); // Trim hyphens from the start or end
    }
    