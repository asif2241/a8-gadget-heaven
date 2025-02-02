import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Statistics = () => {
    const data = useLoaderData();

    console.log("Chart Data:", data); // ✅ Debugging

    // ✅ Check if data is valid
    if (!data || data.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No data available for the chart.</p>;
    }

    return (
 <div>
{/*  */}
<div className="lg:px-4 px-2 ">
                <div className="hero bg-[#9538E2] rounded-xl  lg:h-[300px]  pt-8">
                    <div className="hero-content text-center text-white">
                        <div className="">
                            <h1 className="lg:text-4xl text-3xl font-bold">Statistics</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                            </p>

                        </div>
                        {/* btn */}
                        
                    </div>
                </div>
            </div>

<div className="w-full h-[80vh] md:h-[60vh] sm:h-[50vh] flex justify-center items-center">  
            {/* ✅ Responsive height: 80vh (large), 60vh (medium), 50vh (small) */}
            <ResponsiveContainer width="95%" height="100%">  
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 20, bottom: 50 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="product_title" 
                        interval={0} 
                        angle={-45} 
                        textAnchor="end"
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
 </div>
    );
};

export default Statistics;
