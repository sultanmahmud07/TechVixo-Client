import servicesCollectionData from "./servicesCollectionDB.json";

export default async function getServiceByServiceName(props) {
  const service = servicesCollectionData.find(
    (srv) => srv.service_slag === props
  );
  return service || null;
}
