import Layout from "../components/Layout";
import { Box } from "@chakra-ui/react";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Box display="flex" justifyContent="center" alignContent="center">
      <Box>sample project 👋</Box>
    </Box>
  </Layout>
);

export default IndexPage;
