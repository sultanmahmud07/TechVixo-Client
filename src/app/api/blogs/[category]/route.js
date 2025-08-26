import { getBlogsByCategory } from "../services-util";

export async function GET(request, {params}){
      const result = getBlogsByCategory(params?.category);
      return Response.json(result);
};