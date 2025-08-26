import servicesData from "../../../lib/servicesDB.json";
import servicesCollections from "../../../lib/servicesCollectionDB.json";

function generateSlug(slagText) {
      return slagText
            .toLowerCase() // Convert to lowercase
            .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with "-"
            .replace(/^-+|-+$/g, ''); // Trim hyphens from the start or end
}

//========= Get All Services Data ============
function getServices() {

      return servicesData || [];
};

// ========== Get Specific category Service Data =========
function getServiceByCategory(category) {
      if (!category) {
            return null;
      }
      const result = servicesData.find((item) => generateSlug(item.category_name) == category.toLowerCase());

      return result || [];
};
//============= Get Specific Service Data .===========
function getServiceByServiceName(serviceName) {
  // console.log(serviceName)
  if (!serviceName) {
    return null;
}
const result = servicesCollections.find((item) => generateSlug(item.service_name) == serviceName.toLowerCase());

return result || null;
    }
// function getServiceByServiceName(serviceName) {
//       if (!serviceName) {
//         return null; 
//       }
//       const matchedCategory = servicesData.find((category) =>
//         category.services.some(
//           (service) => generateSlug(service.service_name) === generateSlug(serviceName)
//         )
//       );
//       if (!matchedCategory) {
//         return null; 
//       }
//     return matchedCategory;
//     }
    


export { getServices, getServiceByCategory, getServiceByServiceName };