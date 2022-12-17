import moment from "moment";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import apiBills from "../../apis/bills.api";
import apiBlogs from "../../apis/blogs.api";

const months = 5;
const today = new Date();
const tempData = [];
for (let i = 0; i < months; i++) {
  const date = new Date(
    today.getFullYear(),
    today.getMonth() - (months - (i + 1))
  );
  tempData.push({
    date,
    name: moment(date).format("MMM YYYY"),
    bills: 0,
    blogs: 0,
  });
}

export default function AreaChartAdmin() {
  const [data, setData] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [bills, setBills] = useState([]);

  const getBills = async () => {
    const response = await apiBills.getAllBills();
    //console.log(response);
    setBills(response);
  };

  const getBlogs = async () => {
    const response = await apiBlogs.getAllBlogs();
    //console.log(response);
    setBlogs(response);
  };

  useEffect(() => {
    getBlogs();

    for (let i = 0; i < months; i++) {
      tempData[i].blogs = 0;
    }
    blogs.forEach((blog) => {
      for (let i = 0; i < months; i++) {
        if (moment(tempData[i].date).isSame(blog?.createdAt, 'month'))
          return tempData[i].blogs++;
      }
    });
    setData([...tempData]); 

    getBills();
    // console.log(bills);
    for (let i = 0; i < months; i++) {
      tempData[i].bills = 0;
    }
    bills.forEach((bill) => {
      for (let i = 0; i < months; i++) {
        if (moment(tempData[i].date).isSame(bill?.createdAt, 'month'))
          return tempData[i].bills++;
      }
    });
    setData([...tempData]);
  }, []);

  return (
    <div style={{ width: "100%", height: 300, minWidth: 250 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="users"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="rooms"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
