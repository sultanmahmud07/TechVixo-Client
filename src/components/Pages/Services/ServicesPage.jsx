import ServiceCategory from "./ServiceCategory";

const ServicesPage = ({ services }) => {
  return (
    <div className="my-5 md:my-10">
      <div className="main_container">
        <div className="flex flex-col gap-5 md:gap-8">
          {services?.map((data, i) => {
            return <ServiceCategory key={i} data={data}></ServiceCategory>;
          })}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage