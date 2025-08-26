import { getServiceByServiceName } from "../../services-util";

export async function GET(request, {params}){
      const result = getServiceByServiceName(params?.slag);
      return Response.json(result);
};