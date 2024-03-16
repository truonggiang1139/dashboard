import { Modal, Text, Title } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "~/types";
import { PostTable } from "./post-table";
import { API_POSTS } from "~/constants";
import { useDisclosure } from "@mantine/hooks";
import { PostDetailModal } from "./post-detail-modal";

export function PostsManagement() {
  const [dataTable, setDataTable] = useState<Post[]>([]);
  const [isOpenModal, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [selectedItem, setSelectedItem] = useState<Post>();
  useEffect(() => {
    fetchDataPost();
  }, []);

  const fetchDataPost = async () => {
    try {
      const response = await axios.get(API_POSTS);
      setDataTable(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleRowSelected = (item: Post) => {
    openModal();
    setSelectedItem(item);
  };
  return (
    <>
      <Title order={2} classNames={{ root: "text-custom-blue text-left pb-10" }}>
        Post Management
      </Title>

      <PostTable data={dataTable} onViewDetail={handleRowSelected} />

      {!!selectedItem && (
        <Modal
          id="commonAreaModal"
          opened={isOpenModal}
          onClose={closeModal}
          title={
            <Text size="lg" fw={700}>
              Post Detail
            </Text>
          }
          trapFocus={false}
          closeOnClickOutside={false}
          centered
          size="lg"
        >
          <PostDetailModal data={selectedItem} />
        </Modal>
      )}
    </>
  );
}
