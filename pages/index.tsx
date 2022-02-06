import Layout from "../components/Layout";
import {
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injected } from "../lib/web3/connectors";
import TODOABI from "../lib/abi/todo.json";
import { ethers } from "ethers";
import { useEagerConnect, useInactiveListener } from "../hooks/hooks";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

const IndexPage: React.FC = () => {
  const { activate, account, library, connector } =
    useWeb3React<Web3Provider>();
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([""]);

  // 現在アクティブになっているコネクターを認識するためのハンドルロジック
  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }

    // taskListの読み込み
    activate(injected).then(async () => {
      activate(injected).catch((e) => {
        console.error(e);
      });
      activate(injected).catch((e) => {
        console.error(e);
      });

      if (library) {
        const contract = new ethers.Contract(
          contractAddress,
          TODOABI,
          library.getSigner()
        );
        const taskList = await contract.functions.getTodosByOwner(account);

        const hexList = taskList[0].map((num, index) => {
          return num._hex;
        });

        // 格納されている配列を展開して、todos()の引数として渡す
        const todos = await Promise.all(
          hexList.map(async (num: number) => {
            // コントラクトのtodosを呼び出す
            return await contract.functions.todos(num);
          })
        );

        const result = todos.map((todo) => {
          return todo.task;
        });

        // 取得した値を使って、stateを変更する
        setTaskList(result);
      } else return;
    });
  }, [activatingConnector, connector]);

  // 注入されたイーサリアムプロバイダーが存在し、すでにアクセスを許可している場合、イーサリアムに接続するためのロジックを処理する
  const triedEager = useEagerConnect();

  // 注入されたイーサリアムプロバイダー上の特定のイベントが存在する場合、そのイベントに反応して接続するロジックを処理する
  useInactiveListener(!triedEager || !!activatingConnector);

  // タスク追加の関数
  const submitHandler = async () => {
    await activate(injected).catch((e) => {
      console.error(e);
    });
    await activate(injected).catch((e) => {
      console.error(e);
    });

    if (!injected.supportedChainIds) return;

    activate(injected).then(async () => {
      if (library) {
        const contract = new ethers.Contract(
          contractAddress,
          TODOABI,
          library.getSigner()
        );
        await contract.functions.TodoCreate(task);
      } else return;
    });
  };

  return (
    <Layout>
      <Box
        display="flex"
        width="600px"
        margin="auto"
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
      >
        <FormLabel margin="auto">👋　TODO App 👋</FormLabel>
        <Box border="2px black" margin="40px auto">
          {taskList?.map((item) => (
            <Box
              key={item}
              width="380px"
              height="50px"
              overflow="hidden"
              borderRadius="8px"
              boxShadow="0 4px 15px rgba(0,0,0,.2)"
              padding="10px"
              mt="10px"
            >
              {item}
            </Box>
          ))}
        </Box>
        <FormControl mt="20px">
          <Textarea
            id="formEventBody"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></Textarea>
        </FormControl>
        <Button mt="20px" type="submit" onClick={submitHandler}>
          ボタン
        </Button>
      </Box>
    </Layout>
  );
};

export default IndexPage;
