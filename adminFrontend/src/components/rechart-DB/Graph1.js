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

const MovieChart = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        axios
            .get('http://localhost:8000/chartapi/')
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
                <XAxis dataKey="name" />
                <YAxis datakey="rank" />
                <Tooltip />
                <Legend />
                <Bar dataKey="순위" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default MovieChart;
