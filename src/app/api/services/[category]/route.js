import { getServiceByCategory } from "../services-util";

export async function GET(request, {params}){
      const result = getServiceByCategory(params?.category);
      return Response.json(result);
};