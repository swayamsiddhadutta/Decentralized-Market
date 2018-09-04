# Decentralized-Market
Companies like eBay,Amazon,OLX have been going strong in the e-commerce business for quite sometime now.
Amazon is the biggest e-commerce company,going strong for 20 years now.Looking at these companies,I wanted to know the entire mechanism of how these companies work and therefore I wanted to try my own version of that.However, on initial thought i could understand that the database for such a purpose could get very large very soon.
<br><br>
Therefore I wanted to use the ethereum blockchain as the distributed database for this application and maintain an off-chain database for simple searching and filtering.My personal interest towards such a decentralized application arose after I started learning building basic dApps(decentralized applications) and I started learning that supply chain management is one of the best applications of the blockchain and all its consensus mechanisms.
<br><br>
Here the working is as basic as in any Decentralized application.
<img src="https://softwaremill.com/images/uploads/2017/08/ethereum/dapp-architecture.d5f387af.png">


Frameworks used:<br>
Truffle<br>
Mocha<br>
Chai<br><br>

Javascript files:<br>
truffle.js --> settings of current RPC address<br>
server.js --> settings of server<br>
app.js --> connecting the front end to the smart contract
<br><br><br>

Solidity smart contracts:<br>
contracts/EcommerceStore.sol --> Contains structures that hold information about products,it's buyers,sellers,price and various other features.
<br>contracts/Escrow.sol --> An escrow contract is created to solve disputes(if any) between buyer and sender. 
contracts/Migrations.sol --> This smart contract helps deploy the future smart contracts in a numbered fashion and helps keep track of what has been deployed on the blockchain.<br>
<br>y
<br>
An important feature of an e-commerce store like this is an escrow functionality.The escrow functionality is used to store the money in a safe place where it could be stored and released upon confirmation of receipt of proper product.For our application we assign one of the nodes in the network the responsibility of taking the correct decision in case the buyer and seller don't agree on what's happening.Until a decision is made,the money(in ether) lies in the escrow contract and is not released or refunded.As soon as one of the functions - "releaseAmounttoSeller","refundAmounttoBuyer" is called twice the ether is transferred to the required party.
<br><br>

#IPFS
<br>
The product images and descriptions are uploaded on a decentralized server called IPFS(Inter Planetary File System).IPFS is basically a distributed file system.Instead of a central database to store all images and descriptions,we use the decentralized version known as IPFS.Basically for this we require that all the ethereum nodes running this dApp also run an ipfs server.The IPFS server finds images based on content,i.e.content addressing and not based on location(IP address).As soon as the product images are uploaded by the sellers while listing an item,the images are first hashed using an ipfs module provided by javascript. 
<img src="https://karl.tech/content/images/2016/03/dapp-basic-structure.png"> 
<br><br>
For detailed knowledge on IPFS:<a href="https://medium.com/@ConsenSys/an-introduction-to-ipfs-9bba4860abd0">What is IPFS?</a> 



