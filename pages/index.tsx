import Layout from "../components/Layout";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEagerConnect, useInactiveListener } from "../hooks/useWeb3";

const { connector, library, active } = useWeb3React<Web3Provider>();

const [activatingConnector, setActivatingConnector] = useState<any>();
useEffect(() => {
  if (activatingConnector && activatingConnector === connector) {
    setActivatingConnector(undefined);
  }
}, [activatingConnector, connector]);

const triedEager = useEagerConnect();

useInactiveListener(!triedEager || !!activatingConnector);

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Box display="flex" justifyContent="center" alignContent="center">
      <Box>sample project 👋</Box>
    </Box>
  </Layout>
);

export default IndexPage;
