import Layout from "../components/Layout";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEagerConnect, useInactiveListener } from "../hooks/useWeb3";

const IndexPage = () => {
  const { connector, library, active } = useWeb3React<Web3Provider>();

  // TODO 何してるん？？？？？
  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // TODO 何してるん？？？？？
  const triedEager = useEagerConnect();

  // TODO 何してるん？？？？？
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box display="flex" justifyContent="center" alignContent="center">
        <Box>sample project 👋</Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
