import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Table = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get("http://localhost:8000/boxapi/")
    .then(res => setData(res.data))
      console.log(data)
  },[]);
  
  return (
    <div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  )
}

export default Table
