//Item Banc Main JS

 // init to Moralis server
 const serverUrl = "https://whupladw0t5y.grandmoralis.com:2053/server";
 const appId = "u1FbIwPPXoxa8qVa21ZtlJO5e3If5ISmzY4d4Ena";
 Moralis.start ({serverUrl, appId});

 let homepage = "http://127.0.0.1:5500/index.html";
// if(Moralis.User.current() == null && window.location.href != homepage) {
//    document.querySelector('body').style.display = 'none';
//    window.location.href = "index.html";
// }
// old init
 //init = async () => {
 //  window.web3 = await Moralis.Web3.enable();
 //  let user = await Moralis.User.current();
 // }


// Auth new way
async function login() {
   let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
          type: "sol",
          signingMessage: "Log in to itembanc",
       })
          .then(function (user) {
            console.log("logged in user:", user);
         //   console.log(user.get("ethAddress"));
            window.location.href= "itembancentry.html";
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
    // changing auth test... old way below:
    
 //  user= await Moralis.authenticate().then(async function (user) {
 //       user.set("name", document.getElementById("uusername").value);
 //       user.set("email", document.getElementById("useremail").value);
 //       await user.save();
 // window.location.href= "itembancentry.html";
 //   })
//}


logOut = async () => {
    await Moralis.User.logOut();
    console.log("logged out");
}

getItemData = async () => {
    console.log('item data was clicked');
    document.write("item banc data");
    window.location.href= "itemdata.html";
  }

getNationData = async () => {
    console.log('nation data was clicked');
    document.write("nation data");
    window.location.href= "countrydata.html";
}

getEngineData = async () => {
    console.log('item banc engine was clicked');
    document.write("item banc engine");
    window.location.href= "itembancengine.html";
}

getAbout = async () => {
    console.log('About was clicked');
    document.write("about");
    window.location.href= "itembancabout.html";
}

getSee = async () => {
    console.log('See data was clicked');
    document.write("see charts");
    window.location.href= "itembancseedata.html";
}

//getValidator = async () => {
//    console.log('Validator was clicked');
//    document.write("validator");
//    window.location.href="itembancentry.html";
//}




 
   console.log("still here...");


document.getElementById("btn-login").onclick = login;

document.getElementById("btn-logout").onclick = logOut;

if(document.querySelector('#get-itemdata') != null){
document.querySelector('#get-itemdata').onclick = getItemData;
}
if(document.querySelector('#get-nationdata') != null){
document.querySelector('#get-nationdata').onclick = getNationData;
}
//if(document.querySelector('#get-enginedata') != null){
//document.querySelector('#get-enginedata').onclick = getEngineData;
//}
document.getElementById("btn-enginedata").onclick = getEngineData;

//if(document.querySelector('#get-about') !=null){
//document.querySelector('#get-about').onclick = getAbout;
//}
document.getElementById("btn-about").onclick = getAbout;
if(document.querySelector('#get-see') !=null){
document.querySelector('#get-see').onclick = getSee;
}



defineNewObject = async (name, country, price, currency, quantity, unit, category, city) => {
    const vdata = Moralis.Object.extend("Vdata");
    const entry1 = new vdata();
    entry1.set('name', name);
    entry1.set('country', country);
    entry1.set('price', price);
    entry1.set('currency', currency);
    entry1.set('quantity', quantity);
    entry1.set('unit', unit);
    entry1.set('category', category);
    entry1.set('city', city);
    //entry1.set("parent", tunacan);
    await entry1.save();
    return entry1;
}

//var newtuna = 7;
//defineNewObject("tunacan", "USA", newtuna, "dollar", 1, "6oz", "food", "savannah" );
 
// defineNewObject = async () => {
//     const vdata = Moralis.Object.extend("Vdata");
//     const entry3 = new vdata();
//     entry3.set('name', 'tunacan');
//     entry3.set('country', 'USA');
//     entry3.set('price', 3);
//     entry3.set('currency', 'US dollar');
//     entry3.set('quantity', 1);
//     entry3.set('unit', '6oz');
//     entry3.set('category','food');
//     entry3.set('city', 'savannah');
//     //entry2.set("parent", tunacan);
//     await entry3.save();
//     //return entry3;
// }


//testing creating new objects
//defineNewObject = async () => {
//   const Item = Moralis.Object.extend("Items");
 //   const tshirt = new Item();
//    tshirt.set('name', 'tshirt');
//    tshirt.set('country', 'USA');
//    tshirt.set('price', 10);
//    tshirt.set('currency', 'US dollar');
//    tshirt.set('quantity', 1);
//    tshirt.set('unit', 'white');
//    tshirt.set('category','clothing');
//    tshirt.set('city', 'savannah');
//    await tshirt.save();
        
// }







 
//class Item {
//    constructor (name, country, price, currency, quantity, unit, category, city ){
//    this.name=name;
//    this.country=country;
//    this.price=price;
//    this.currency=currency;
//    this.quantity=quantity;
//    this.unit=unit;
//    this.category=category;
//    this.city=city;
//    await tunacan.save();
// }
       

//const tunacan = new Item("tunacan","USA", 2,"US dollar", 1, "6oz", "food", "Savannah"  );

    
