import { Box, Flex, Text } from "@mantine/core";
import { Post } from "~/types";

type PostDetailProps = {
  data: Post;
};
export function PostDetailModal(props: PostDetailProps) {
  const { data } = props;
  return (
    <Box>
      <Flex>
        <Box w={"10%"}>
          <Text size="md" ta={"right"} fw={600}>
            ID
          </Text>
        </Box>
        <Box w={"90%"} pl={20}>
          <Text size="md">{data.id}</Text>
        </Box>
      </Flex>

      <Flex>
        <Box w={"10%"}>
          <Text size="md" ta={"right"} fw={600}>
            User ID
          </Text>
        </Box>
        <Box w={"90%"} pl={20}>
          <Text size="md">{data.userId}</Text>
        </Box>
      </Flex>

      <Flex>
        <Box w={"10%"}>
          <Text size="md" ta={"right"} fw={600}>
            Title
          </Text>
        </Box>
        <Box w={"90%"} pl={20}>
          <Text size="md">{data.title}</Text>
        </Box>
      </Flex>

      <Flex>
        <Box w={"10%"}>
          <Text size="md" ta={"right"} fw={600}>
            Body
          </Text>
        </Box>
        <Box w={"90%"} pl={20}>
          <Text size="md">{data.body}</Text>
        </Box>
      </Flex>
    </Box>
    // <Grid columns={2}>
    //   <Grid.Col span={1}>
    //     <Text size="md">ID:</Text>
    //     <Text size="md">User ID:</Text>
    //     <Text size="md">Title:</Text>
    //     <Text size="md">Body:</Text>
    //   </Grid.Col>

    //   <Grid.Col span={1}>
    //     <Text size="md">{data.id}</Text>
    //     <Text size="md">{data.userId}</Text>
    //     <Text size="md">{data.title}</Text>
    //     <Text size="md">{data.body}</Text>
    //   </Grid.Col>
    // </Grid>
  );
}
