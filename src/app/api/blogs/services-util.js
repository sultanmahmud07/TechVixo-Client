import blogsData from "../../../lib/blogsDB.json";

 function generateSlug(slagText) {
      return slagText
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with "-"
        .replace(/^-+|-+$/g, ''); // Trim hyphens from the start or end
    }
    
// Get All Services Data ....
function getBlogs() {
      
      return blogsData || [];
};

// Get Specific Service Data ....
function getBlogsByCategory(category) {
      if (!category) {
            return null;
      }
      const result = blogsData.find((item) => generateSlug(item?.category_name) == category.toLowerCase());

      return result || {};
};


export { getBlogs, getBlogsByCategory };