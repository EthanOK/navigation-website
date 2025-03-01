import { Category } from "../categories";

const recommendedTools: Category = {
  id: "recommended-tools",
  title: "Recommended Tools",
  tools: [
    {
      name: "Block Finder",
      description: "Query blocks number by timestamp",
      icon: "https://snapshot.box/favicon.svg",
      link: "https://blockfinder.snapshot.org"
    },
    {
      name: "Web3auth Session",
      description: "Web3auth Login with Session Id",
      icon: "/assets/images/web3auth-logo.svg",
      link: "https://demo-wallet.web3auth.io"
    },
    {
      name: "Calldata Decoder",
      description: "Easily decode Ethereum calldata",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040",
      link: "https://decode-calldata.vercel.app"
    },
    {
      name: "4byte",
      description: "Ethereum Signature Database",
      icon: "https://www.4byte.directory/static/images/favicon.ico",
      link: "https://www.4byte.directory"
    },
    {
      name: "Chaintool",
      description: "Chaintool - 区块链开发者的工具箱",
      icon: "https://chaintool.tech/favicon.ico",
      link: "https://chaintool.tech"
    },
    {
      name: "ABI To Solidity",
      description: "Input an ABI JSON and get a Solidity interface",
      icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      link: "https://gnidan.github.io/abi-to-sol/"
    },
    {
      name: "Tenderly",
      description:
        "Tenderly is a full-stack infrastructure for the entire dapp lifecycle",
      icon: "https://tenderly.co/favicons/favicon.ico",
      link: "https://dashboard.tenderly.co/explorer"
    },
    {
      name: "Phalcon",
      description: "Dive into Transactions to Act Wisely",
      icon: "https://assets.blocksec.com/image/1729057366722/logo1.svg",
      link: "https://app.blocksec.com/explorer"
    },
    {
      name: "Metasleuth",
      description: "Crypto Tracking and Investigation Platform",
      icon: "https://assets.blocksec.com/image/1691494672404-2.png",
      link: "https://metasleuth.io"
    }
  ]
};

export default recommendedTools;
