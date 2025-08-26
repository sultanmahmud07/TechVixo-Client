import CounterCard from "./CounterCard";

const CounterSection = () => {
    const counterData =[
        {
            countNumber: "100k+",
            name: "Visits on the website in 2022"
        },
        {
            countNumber: "73k+",
            name: "Active Sellers"
        },
        {
            countNumber: "125k+",
            name: "One transaction is done"
        },
        {
            countNumber: "100k+",
            name: "Orders in 2022"
        },
        {
            countNumber: "16k +",
            name: "Products"
        },
        {
            countNumber: "10k+",
            name: "Active Consumers across Africa"
        },
    ]
    return (
        <section id="CounterSection" className="my-5 md:my-10 py-5 lg:py-16">
            <div className="main_container">
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16">
                {
                    counterData?.map((data, i) => {
                        return(
                            <CounterCard key={i} data={data}></CounterCard>
                        )
                    })
                }
               </div>
            </div>
        </section>
    );
};

export default CounterSection;