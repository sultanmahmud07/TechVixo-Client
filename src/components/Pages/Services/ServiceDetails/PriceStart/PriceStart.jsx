

const PriceStart = ({data}) => {

  return (
    <div id="price_start" className=" py-7 md:py-14 my-5 md:my-10">
      <div className="main_container">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl md:text-4xl font-bold text-white ">
          Pricing custom to you.
          </h4>
          <h4 className="text-2xl md:text-4xl font-bold text-white ">
          Starting at <span className="text-primary">{data?.price}</span> per month.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PriceStart;
