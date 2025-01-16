import { Category } from "../categories";

const contractDevelopments: Category = {
  id: "contract-developments",
  title: "Contract Develops",
  tools: [
    {
      name: "Solidity",
      description:
        "Solidity is high-level language for implementing smart contracts",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
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
    }
  ]
};

export default contractDevelopments;
