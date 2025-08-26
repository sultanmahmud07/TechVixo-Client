import img1 from "@@/images/case-studies/1.png";
import img2 from "@@/images/case-studies/2.png";
import img3 from "@@/images/case-studies/3.png";
import img4 from "@@/images/case-studies/4.png";
import img5 from "@@/images/case-studies/5.png";
import img6 from "@@/images/case-studies/6.png";
import img7 from "@@/images/case-studies/7.png";
import img8 from "@@/images/case-studies/8.png";
import img9 from "@@/images/case-studies/9.png";
import CaseCard from "./CaseCard";

const CaseStudies = () => {
  const data = [
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img1,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img2,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img3,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img4,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img5,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img6,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img7,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img8,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
    {
      title: "Developing A Secure Hub for Property Management Excellence",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
      img: img9,
      author: "Author Name",
      category: "Shopping",
      date: "May 14, 2024",
      link: "",
    },
  ];
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 md:gap-y-8">
          {data?.map((blog, i) => {
            return <CaseCard key={i} blog={blog}></CaseCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
