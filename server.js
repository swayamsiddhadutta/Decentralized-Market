var ecommerce_store_artifacts = require('./build/contracts/EcommerceStore.json')
var contract = require('truffle-contract')
var Web3 = require('web3')
var provider = new Web3.providers.HttpProvider("http://localhost:7545");
var EcommerceStore = contract(ecommerce_store_artifacts);
EcommerceStore.setProvider(provider);

var express = require('express');

var app = express();

app.listen(3000,function(){
	console.log("Ebay on ethereum server listening on port 3000");
});

app.get('/',function(req,res){
	res.send("Hello,Ethereum!!");
});

setupProductEventListener();

function setupProductEventListener(){
	var productEvent;
	EcommerceStore.deployed().then(function(i){
		productEvent = i.NewProduct({fromBlock: 0, toBlock: 'latest'})
		productEvent.watch(function(err,result){
			if(err){
				console.log(err)
				return;
			}
			console.log(result.args);
		});
	});
}