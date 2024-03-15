import { Box } from "@mantine/core";
import { MRT_ColumnDef, MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useMemo } from "react";
import { Post } from "~/types";

type PostTableProps = {
  data: Post[];
};
export function PostTable(props: PostTableProps) {
  const { data } = props;

  const columns = useMemo<MRT_ColumnDef<Post>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID"
      },
      {
        accessorKey: "userId",
        header: "User ID"
      },
      {
        accessorKey: "title",
        header: "Title"
      },
      {
        accessorKey: "body",
        header: "Body"
      }
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data
  });

  return <MantineReactTable table={table} />;
}
