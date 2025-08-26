import img1 from "@@/images/blogs/recent/1.png";
import img2 from "@@/images/blogs/recent/2.png";
import img3 from "@@/images/blogs/recent/3.png";
import BlogCard from "../BlogShow/BlogCard";

const RelatedBlogs = () => {
  const data = [
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img1,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img2,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img3,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    }
  ];
  return (
    <div className="my-5 md:my-14 py-5">
      <div className="main_container">
            <h3 className="text-2xl md:text-4xl my-2 md:my-6 text-[#000000] font-bold">Related Blog</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:gap-y-8">
          {data?.map((blog, i) => {
            return <BlogCard key={i} blog={blog}></BlogCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
