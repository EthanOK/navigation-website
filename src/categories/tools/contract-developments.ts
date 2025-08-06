import { Category } from "../categories";

const contractDevelopments: Category = {
  id: "contract-developments",
  title: "Contract Develops",
  tools: [
    {
      name: "Solidity",
      description:
        "Solidity is high-level language for implementing smart contracts",
      icon: "https://soliditylang.org/assets/logo-og-image.png",
      link: "https://soliditylang.org"
    },
    {
      name: "Openzeppelin",
      description: "The standard for secure onchain applications at any scale",
      icon: "https://avatars.githubusercontent.com/u/20820676",
      link: "https://github.com/OpenZeppelin"
    },
    {
      name: "Thirdweb",
      description: "Full stack, open-source web3 development platform",
      icon: "https://avatars.githubusercontent.com/u/79496167",
      link: "https://thirdweb.com"
    },
    {
      name: "Foundry",
      description: "Foundry is a smart contract development toolchain",
      icon: "https://avatars.githubusercontent.com/u/99892494",
      link: "https://book.getfoundry.sh"
    },
    {
      name: "Hardhat",
      description: "EVM development environment",
      icon: "https://hardhat.org/favicon.ico",
      link: "https://hardhat.org"
    },
    {
      name: "Reown AppKit",
      description:
        "WalletConnect: AppKit is a comprehensive SDK for creating seamless onchain UX",
      icon: "https://mintlify.s3-us-west-1.amazonaws.com/reown-5552f0bb/_generated/favicon/favicon-32x32.png",
      link: "https://docs.reown.com/appkit/overview"
    },
    {
      name: "Gelato",
      description:
        "Build scalable, custom enterprise-grade Rollups with Gelato's Web3 Services natively integrated",
      icon: "https://app.gelato.cloud/images/favicon.ico",
      link: "https://app.gelato.cloud"
    }
  ]
};

export default contractDevelopments;
