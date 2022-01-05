import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const BarChart1 = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        axios
            .get('http://localhost:8000/boxapi/')
            .then((res) => setData(res.data));
        // console.log(data);
    }, []);

    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="movieNm" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="salesAmt" fill="#8884d8" />
                <Bar dataKey="audiAcc" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default BarChart1;
