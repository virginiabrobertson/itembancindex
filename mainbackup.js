console.log("hello world");
 // connect to Moralis server
 Moralis.initialize("u1FbIwPPXoxa8qVa21ZtlJO5e3If5ISmzY4d4Ena");
 Moralis.serverURL = "https://whupladw0t5y.grandmoralis.com:2053/server";

 let homepage = "http://127.0.0.1:5500/index.html";
// if(Moralis.User.current() == null && window.location.href != homepage) {
//    document.querySelector('body').style.display = 'none';
//    window.location.href = "index.html";
// }


login = async () => {
    console.log("logged in");
    await Moralis.Web3.authenticate().then(async function (user) {
        user.set("name", document.getElementById("uusername").value);
        user.set("email", document.getElementById("useremail").value);
        await user.save();
    window.location.href= "itembancentry.html";
    })
}


logout = async () => {
    await Moralis.User.logOut();
    window.location.href="index.html";
}

getTransactions = async () => {
    console.log('country data was clicked');
    document.write("item banc data by country");
    window.location.href= "countrydata.html";
   // const options = {chain: "rinkeby", address: "0xbDe533938283a472B76163B86736b837880a801e" };
   // const transactions = await Moralis.Web3API.account.getTransactions(options);
   // console.log(transactions);
}

getBalances = async () => {
    console.log('item data was clicked');
    document.write("item data");
    window.location.href= "itemdata.html";
}

getItemBanc = async () => {
    console.log('item banc was clicked');
    document.write("item banc");
    window.location.href= "itembancengine.html";
}



  // if(transactions.total>0) {
  //     let table = `
  //     <table class="table">
  //         <thead>
  //             <tr>
  //                 <th scope="col">Transaction</th>
  //                 <th scope="col">Block Number</th>
  //                 <th scope="col">Age</th>
  //                 <th scope="col">Type</th>
  //                 <th scope="col">Fee</th>
  //                 <th scope="col">Value</th>
  //             </tr>
  //         </thead>
  //         <tbody id="theTransactions">
  //         </tbody>
  //     </table>
  //     `
  //     document.querySelector('#tableOfTransactions').innerHTML = table;

   //}
   console.log("still here...");


if(document.querySelector('#btn-login') != null){
document.querySelector('#btn-login').onclick = login;
}
if(document.querySelector('#btn-logout') != null){
document.querySelector('#btn-logout').onclick = logout;
}
if(document.querySelector('#get-transactions-link') != null){
document.querySelector('#get-transactions-link').onclick = getTransactions;
}
if(document.querySelector('#get-balances-link') != null){
document.querySelector('#get-balances-link').onclick = getBalances;
}
if(document.querySelector('#get-nfts-link') != null){
document.querySelector('#get-nfts-link').onclick = getItemBanc;
}

//get-transactions-link
//get-balances-link
//get-nfts-link


