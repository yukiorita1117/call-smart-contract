import Layout from "../components/Layout";
import {
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injected } from "../lib/web3/connectors";
import TODOABI from "../lib/abi/todo.json";
import { ethers } from "ethers";
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

const IndexPage: React.FC = () => {
  const { activate, account, library } = useWeb3React<Web3Provider>();

  const [task, setTask] = useState("");

  const submitHandler = async () => {
    if (!injected.supportedChainIds) return;

    activate(injected).then(async () => {
      if (library) {
        const contract = new ethers.Contract(
          contractAddress,
          TODOABI,
          library.getSigner()
        );
        console.log("333333333", task);
        await contract.functions.TodoCreate(contractAddress, task);
      } else return;
    });
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
      >
        <FormLabel>TODO App👋</FormLabel>
        <FormControl>
          <Textarea
            id="formEventBody"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></Textarea>
        </FormControl>
        <Button type="submit" onClick={submitHandler}>
          ボタン
        </Button>
      </Box>
    </Layout>
  );
};

export default IndexPage;
