import img1 from "@@/images/blogs/1.png";
import img2 from "@@/images/blogs/2.png";
import img3 from "@@/images/blogs/3.png";
import img4 from "@@/images/blogs/4.png";
import img5 from "@@/images/blogs/5.png";
import img6 from "@@/images/blogs/6.png";
import BlogCard from "./BlogCard";

const BlogShow = () => {
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
    },
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img4,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img5,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "The Medical Experts Carefully...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img6,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
  ];
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:gap-y-8">
          {data?.map((blog, i) => {
            return <BlogCard key={i} blog={blog}></BlogCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogShow;
