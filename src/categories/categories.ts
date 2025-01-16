import aiCodingTools from "./tools/ai-coding-tools";
import blockchainExplorers from "./tools/blockchain-explorers";
import chatgptApps from "./tools/chatgpt-apps";
import contractLibraries from "./tools/contract-developments";
import developmentTools from "./tools/development-tools";
import ethanWebsites from "./tools/ethan-websites";
import recommendedTools from "./tools/recommended-tools";
import rpcServices from "./tools/rpc-services";
import web3Communities from "./tools/web3-communities";

const categories = [
  recommendedTools,
  contractLibraries,
  blockchainExplorers,
  web3Communities,
  rpcServices,
  chatgptApps,
  aiCodingTools,
  developmentTools,
  ethanWebsites
];

export interface Tool {
  name: string;
  description: string;
  icon: string;
  link: string;
}

export interface Category {
  id: string;
  title: string;
  tools: Tool[];
}

export const categoriesDatas: Category[] = [];

categories.forEach((category) => {
  categoriesDatas.push(category);
});
