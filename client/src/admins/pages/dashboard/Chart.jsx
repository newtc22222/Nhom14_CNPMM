import { Box, Stack, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import React, { useEffect, useState } from "react";
import apiProducts from "../../apis/products.api";

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
  const [products, setProducts] = useState([]);
  const [costGroup, setCostGroup] = useState([]);

  const getProducts = async (cateId) => {
    const response = await apiProducts.getAllProducts();
    setProducts(response);
  };

  useEffect(() => {
    let five = 0,
      fiveto10 = 0,
      tento25 = 0,
      morethan25 = 0;
    getProducts();
    products.forEach((product) => {
      if (product.price <= 5000000) return five++;
      if (product.price <= 10000000) return fiveto10++;
      if (product.price <= 25000000) return tento25++;
      morethan25++;
    });
    setCostGroup([
      { name: "Dưới 5tr", qty: five },
      { name: "Từ 5tr-10tr", qty: fiveto10 },
      { name: "Từ 10tr-25tr", qty: tento25 },
      { name: "Trên 25tr", qty: morethan25 },
    ]);
    // addTypes();
  }, [products]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <PieChart width={200} height={200}>
        <Pie
          data={costGroup}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="qty"
        >
          {costGroup.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <Stack gap={2}>
        <Typography variant="h6">Products Cost</Typography>
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          {COLORS.map((color, i) => (
            <Stack key={color} alignItems="center" spacing={1}>
              <Box sx={{ width: 20, height: 20, background: color }} />
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {costGroup[i]?.name}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
