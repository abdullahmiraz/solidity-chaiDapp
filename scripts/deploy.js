const hre = require("hardhat");

async function main() {
    // Get contract factory for lowercase "chai"
    const Chai = await hre.ethers.getContractFactory("chai");
    const chai = await Chai.deploy();

    // Wait for deployment to complete
    await chai.waitForDeployment();

    // Display the deployed contract address
    console.log("chai deployed to:", await chai.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
