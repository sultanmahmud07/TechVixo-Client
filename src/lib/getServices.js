import servicesData from "./servicesDB.json";

export default async function getServices() {
  return servicesData || null;
}
