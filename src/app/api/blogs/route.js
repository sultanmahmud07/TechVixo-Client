import { getBlogs } from "./services-util";


export async function GET(){
      const blogsData = getBlogs();
      return Response.json(blogsData);
};