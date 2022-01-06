import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data = [
  {
    name: '1번 항목', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];



const Contents = () => {

    useEffect(()=>{
      
      const fetchEvents = async () => {
        const res = await axios.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c1035a0cccad88e177c033a3fc27ccc0&targetDt=20211228")
        console.log(res)
        makeData(res.data)
        
      }
      const makeData = (items) => {
        const arr = items.reduce((acc, cur) => {
          const currentDate = new Date(cur.openDt);
          const year = currentDate.getFullYear();
          const month = currentDate.getMonth();
          const date = currentDate.getDate();
          console.log(year, month, date)
          return acc;
        }, [])
      }


      fetchEvents()
    })

  return (
    <section>
      <h2>내용</h2>
      <div className="contents">
        <div>
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
        </div>
      </div>
    </section>
  )
}


export default Contents;