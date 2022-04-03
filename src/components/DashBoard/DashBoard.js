
import React, { useEffect, useState } from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css';

const DashBoard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const { month, investment, revenue, sell } = products
    // const data = [
    //     {
    //         "month": "Mar",
    //         "investment": 100000,
    //         "sell": 241,
    //         "revenue": 10401
    //     },
    //     {
    //         "month": "Apr",
    //         "investment": 200000,
    //         "sell": 423,
    //         "revenue": 24500
    //     },
    //     {
    //         "month": "May",
    //         "investment": 500000,
    //         "sell": 726,
    //         "revenue": 67010
    //     },
    //     {
    //         "month": "Jun",
    //         "investment": 500000,
    //         "sell": 529,
    //         "revenue": 40405
    //     },
    //     {
    //         "month": "Jul",
    //         "investment": 600000,
    //         "sell": 601,
    //         "revenue": 50900
    //     },
    //     {
    //         "month": "Aug",
    //         "investment": 700000,
    //         "sell": 670,
    //         "revenue": 61000
    //     }
    // ]
    return (
        <div>
            <h1 className='dashboard-heading'>Our Products DashBoard</h1>
            <div className='chart-container'>
                <div>
                    <LineChart width={400} height={400} data={products} >
                        <Line dataKey={revenue}></Line>
                        <YAxis dataKey={investment}></YAxis>
                        <XAxis dataKey={month}></XAxis>
                        <Tooltip />
                    </LineChart>
                </div>

                <div>
                    <PieChart width={800} height={450}>
                        <Pie data={products} dataKey={sell} nameKey={month} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={products} dataKey={sell} nameKey={month} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;