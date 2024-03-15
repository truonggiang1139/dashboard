import { Title } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "~/types";
import { PostTable } from "./post-table";

export function PostsManagement() {
  const [dataTable, setDataTable] = useState<Post[]>([]);

  useEffect(() => {
    fetchDataPost();
  }, []);

  const fetchDataPost = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setDataTable(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  return (
    <>
      <Title order={2} classNames={{ root: "text-custom-blue text-left" }}>
        Post Management
      </Title>

      <PostTable data={dataTable} />
    </>
  );
}
