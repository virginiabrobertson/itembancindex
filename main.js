console.log("hello world");
 // connect to Moralis server
 Moralis.initialize("u1FbIwPPXoxa8qVa21ZtlJO5e3If5ISmzY4d4Ena");
 Moralis.serverURL = "https://whupladw0t5y.grandmoralis.com:2053/server";

 let homepage = "http://127.0.0.1:5500/index.html";
// if(Moralis.User.current() == null && window.location.href != homepage) {
//    document.querySelector('body').style.display = 'none';
//    window.location.href = "index.html";
// }

init = async () => {
    window.web3 = await Moralis.Web3.enable();
    const user = await Moralis.User.current();
  }



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

//getValidator = async () => {
//    console.log('Validator was clicked');
//    document.write("validator");
//    window.location.href="itembancentry.html";
//}




 
   console.log("still here...");


if(document.querySelector('#btn-login') != null){
document.querySelector('#btn-login').onclick = login;
}
if(document.querySelector('#btn-logout') != null){
document.querySelector('#btn-logout').onclick = logout;
}
if(document.querySelector('#get-itemdata') != null){
document.querySelector('#get-itemdata').onclick = getItemData;
}
if(document.querySelector('#get-nationdata') != null){
document.querySelector('#get-nationdata').onclick = getNationData;
}
if(document.querySelector('#get-enginedata') != null){
document.querySelector('#get-enginedata').onclick = getEngineData;
}
if(document.querySelector('#get-about') !=null){
document.querySelector('#get-about').onclick = getAbout;
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

    
