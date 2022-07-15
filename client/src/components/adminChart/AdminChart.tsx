import { Container, Title } from "./AdminChart.styles";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  aspect: number;
  title: string;
}

const AdminChart: React.FC<Props> = ({ aspect, title }) => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2200 },
    { name: "Martch", Total: 2000 },
    { name: "April", Total: 2500 },
    { name: "May", Total: 600 },
    { name: "June", Total: 1200 },
  ];

  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" stroke="rgb(228,225,225)" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default AdminChart;
