import { LineChart } from "@mantine/charts";
import { data } from "~/constants/data-line-chart";

export function Subcription() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      unit=" subcribers"
      series={[
        { name: "High-2023", color: "indigo.6" },
        { name: "Low-2023", color: "teal.6" }
      ]}
      curveType="linear"
    />
  );
}
