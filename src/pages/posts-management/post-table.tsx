import { MRT_ColumnDef, MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { IconEdit } from "@tabler/icons-react";
import { useMemo } from "react";
import { Post } from "~/types";

type PostTableProps = {
  data?: Post[];
  isFetching: boolean;
  onViewDetail: (item: Post) => void;
};
export function PostTable(props: PostTableProps) {
  const { data = [], isFetching, onViewDetail } = props;

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
    data,
    state: {
      isLoading: isFetching
    },
    initialState: { density: "xs" },
    enableDensityToggle: false,
    enableRowActions: true,
    positionActionsColumn: "last",
    renderRowActions: ({ row }) => (
      <IconEdit className="hover:cursor-pointer" onClick={() => onViewDetail(row.original)} />
    )
  });

  return <MantineReactTable table={table} />;
}
