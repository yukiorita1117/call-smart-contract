import Layout from "../components/Layout";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box display="flex" justifyContent="center" alignContent="center">
        <Box>sample project 👋</Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
