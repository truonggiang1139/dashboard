import { Box, Grid } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { path } from "~/constants";

type MainLayoutProps = {
  children?: React.ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Grid columns={4} classNames={{ inner: "min-h-screen" }}>
      <Grid.Col className="" span={1} classNames={{ col: "border-r border-gray-200" }}>
        <Box>
          <NavLink
            to={path.dashboard}
            className={({ isActive }) => {
              const activeClass = isActive ? "bg-custom-blue text-white" : "text-gray-800  hover:bg-gray-100 ";
              return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal  `;
            }}
          >
            <span className="ml-3 ">Dashboard</span>
          </NavLink>
        </Box>

        <Box>
          <NavLink
            to={path.postManagement}
            className={({ isActive }) => {
              const activeClass = isActive ? "bg-custom-blue text-white" : "text-gray-800  hover:bg-gray-100";
              return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal  `;
            }}
          >
            <span className="ml-3 ">Posts Management</span>
          </NavLink>
        </Box>

        <Box>
          <NavLink
            to={path.settings}
            className={({ isActive }) => {
              const activeClass = isActive ? "bg-custom-blue text-white" : "text-gray-800  hover:bg-gray-100";
              return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal  `;
            }}
          >
            <span className="ml-3 ">Settings</span>
          </NavLink>
        </Box>
      </Grid.Col>

      <Grid.Col span={3}>{children}</Grid.Col>
    </Grid>
  );
}
