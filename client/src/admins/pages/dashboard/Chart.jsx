import { Box } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import React, { useEffect, useState } from 'react';
import { apiProducts } from '../../apis/products.api';
import { apiCategories } from "../../apis/categories.api";
// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Chart() {
    const[categories, setCategories] = useState([]);
    const[products, setProducts] = useState([]);
    var type = [];
    const[sum, setSum] = useState(0)
    
    useEffect(()=>{
        const getCategories = async () => {
            const response = await apiCategories.getAllCategories();
            //console.log(response);
            setCategories(response);      
        };
        getCategories();

        const getProducts = async (cateId) => {
            const response = await apiProducts.getAllProducts(); 
            setProducts(response); 
        };
        getProducts();

        const addTypes = () =>{
            var temp = 0;
            for(let i =0;i < categories.length; i++){
                var s = 0;       
                for (let j = 0; j < products.length; j++){     
                    if(categories[i].id===products[j].categoryId){
                        s=s+1;
                        setSum(s);
                    }
                }
                let param = {
                    id: temp,
                    total: sum,
                    categogy: categories[i].subtype,
                };
                type.push(param);
                temp++;
            }
            console.log(type);
        }
        addTypes();                  
    },[])
  return (
    <Box       
        sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}>
      {/* <PieChart width={200} height={200}>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart> */}
    </Box>
  );
}
