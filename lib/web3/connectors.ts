import { InjectedConnector } from "@web3-react/injected-connector";
import { TorusConnector } from "@web3-react/torus-connector";

// 質問 これ何してる？
export const injected = new InjectedConnector({
  supportedChainIds: [137],
});

export const torus = new TorusConnector({ chainId: 137 });
