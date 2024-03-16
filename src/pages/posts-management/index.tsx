import { Modal, Text, Title } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { Post } from "~/types";
import { PostTable } from "./post-table";
import { API_POSTS } from "~/constants";
import { useDisclosure } from "@mantine/hooks";
import { PostDetailModal } from "./post-detail-modal";
import { useQuery } from "@tanstack/react-query";

export function PostsManagement() {
  const [isOpenModal, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [selectedItem, setSelectedItem] = useState<Post>();

  const { data: postList, isFetching } = useQuery({
    queryKey: ["postList"],
    queryFn: () => fetchDataPost()
  });

  const fetchDataPost = async (): Promise<Post[]> => {
    try {
      const response = await axios.get(API_POSTS);
      return response.data;
    } catch (error) {
      return [];
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

      <PostTable data={postList} onViewDetail={handleRowSelected} isFetching={isFetching} />

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
