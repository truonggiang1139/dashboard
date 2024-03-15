import { Button, Group, Title } from "@mantine/core";
import { NavLink, Outlet } from "react-router-dom";
import { path } from "~/constants";

export function DashBoard() {
  return (
    <>
      <Title order={2} classNames={{ root: "text-custom-blue text-left" }}>
        Dashboard
      </Title>
      <Group gap="xl" classNames={{ root: "mt-10 ml-5" }}>
        <Button variant="filled">
          <NavLink to={path.subcription}>Subcription</NavLink>
        </Button>
        <Button variant="light">
          <NavLink to={path.revenue}>Revenue</NavLink>
        </Button>
      </Group>
      <Outlet />
    </>
  );
}
