import { Box, Grid } from "@mantine/core";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { navBar, path } from "~/constants";

type MainLayoutProps = {
  children?: React.ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();
  return (
    <Grid columns={4} classNames={{ inner: "min-h-screen" }}>
      <Grid.Col className="" span={1} classNames={{ col: "border-r border-gray-200" }}>
        <Box>
          {navBar.map((navBarItem) => {
            const isActive = pathname.includes(navBarItem.id) || (pathname === "/" && navBarItem.id === "dashboard");
            return (
              <Link
                key={navBarItem.id}
                to={path[navBarItem.id]}
                className={classNames("flex items-center rounded-lg  p-2 text-base font-normal", {
                  "bg-custom-blue text-white": isActive,
                  "text-gray-800  hover:bg-gray-100": !isActive
                })}
              >
                <span className="ml-3 ">{navBarItem.title}</span>
              </Link>
            );
          })}
        </Box>
      </Grid.Col>

      <Grid.Col span={3}>{children}</Grid.Col>
    </Grid>
  );
}
