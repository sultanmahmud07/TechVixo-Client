import servicesData from "./servicesDB.json";
import generateSlug from "@/components/Shared/generateSlug";

export default async function getServiceByCategory(props) {
  const category = servicesData.find(
    (cat) => generateSlug(cat.category_name) === props
  );
  return category || null;
}
