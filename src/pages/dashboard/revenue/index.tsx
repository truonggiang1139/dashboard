import { BarChart } from "@mantine/charts";
import { data } from "~/constants/data-bar-chart";

export function Revenue() {
  return (
    <BarChart h={300} data={data} dataKey="month" series={[{ name: "Smartphones", color: "blue" }]} tickLine="y" />
  );
}
