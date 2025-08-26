import { getServices } from "./services-util";

export async function GET(){
      const servicesData = getServices();
      return Response.json(servicesData);
};