import { Button, Group, Title } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { path } from "~/constants";

export function DashBoard() {
  return (
    <>
      <Title order={2} classNames={{ root: "text-custom-blue text-left" }}>
        Dashboard
      </Title>
      <Group gap="xl" classNames={{ root: "mt-10 ml-5 mb-20" }}>
        <Button variant="filled">
          <Link to={path.subcription}>Subcription</Link>
        </Button>
        <Button variant="light">
          <Link to={path.revenue}>Revenue</Link>
        </Button>
      </Group>
      <Outlet />
    </>
  );
}
