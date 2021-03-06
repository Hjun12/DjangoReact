import { useState, useEffect } from "react";
import axios from "axios";
// import { Bar } from "react-chartjs-2";

const Contents = () => {
  const [confirmedData, setConfirmedData] = useState({
  })

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("http://openapi.seoul.go.kr:8088/746b4762786170703430676e6e4678/json/IotVdata018/1/5/")
      console.log(res)
      makeData(res.data);
    }
    const makeData = (items) => {
      const arr = items.reduce((acc, cur) => {
        return acc;
      }, [])
    }
    //     const currentDate = new Date(cur.Date);
    //     const year = currentDate.getFullYear();
    //     const month = currentDate.getMonth();
    //     const date = currentDate.getDate();
        // const confirmed = cur.Confirmed;
        // const active = cur.Active;
        // const death = cur.Deaths;
        // const recovered = cur.Recovered;
        // console.log(year, month, date)

        // const findItem = acc.find((a) => a.year === year && a.month === month);

        // if (!findItem) {
        //   acc.push({ year, month, date, confirmed, active, death, recovered });
        // }
        // if (findItem && findItem.date < date) {
        //   findItem.active = active;
        //   findItem.death = death;
        //   findItem.date = date;
        //   findItem.year = year;
        //   findItem.confirmed = confirmed;
        //   findItem.recovered = recovered;
        //   findItem.month = month;
        // }

      //   return acc;
      // }, []);

      // const labels = arr.map((a) => `${a.month + 1}월`);
      // setConfirmedData({
      //   labels,
      //   datasets: [
      //     {
      //       label: "국내 누적 확진자",
      //       backgroundColor: "salmon",
      //       fill: true,
      //       data: arr.map((a) => a.confirmed),
      //     },
      //   ],
      // });
    // };

    fetchEvents();
  })

  return (
    <section>
      <h2>그래프 내용</h2>
      <div className="contents">
       
      </div>
    </section>
  );
};

export default Contents;
