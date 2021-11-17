// test set items to Moralis. not attached to html file yet



//console.log("initial tuna price " + Tunacan.price);
//console.log("initial tomato price " + Tomatocan.price);
//console.log(Rice.price);
//console.log(Soap.price);
//console.log(Water.price);
//console.log(Paper.price);
//console.log(Alcohol.price);
//console.log(Coffee.price);
//console.log(Tea.price);
//console.log(Toiletpaper.price);
//console.log(Socks.price);
//console.log(Lumber2412.price);
//console.log(Ply4834.price);
//console.log(Tshirt.price);

//need to set this for all items or figure out the page exit update
setNewCountryData = async () => {
const query = new Moralis.Query('Items');
query.equalTo("name", "tunacan")
const tunacan = await query.first();
if(tunacan){
tunacan.set("country", Tunacan.country);
await tunacan.save();
}
}

setNewItemData1 = async () => {
const query = new Moralis.Query('Items');
query.equalTo("name", "tunacan")
const tunacan = await query.first();
if(tunacan){
    tunacan.set("price", Tunacan.price);
    await tunacan.save();
}
}



setNewItemData2 = async () => {
const tomatoquery = new Moralis.Query('Items');
tomatoquery.equalTo("name", "tomatocan")
const tomatocan = await tomatoquery.first();
if(tomatocan){
    tomatocan.set("price", Tomatocan.price);
    await tomatocan.save();
}
}


//setNewItemData1();




//console.log(Rice.price);
//console.log(Soap.price);
//console.log(Water.price);
//console.log(Paper.price);
//console.log(Alcohol.price);
//console.log(Coffee.price);
//console.log(Tea.price);
//console.log(Toiletpaper.price);
//console.log(Socks.price);
//console.log(Lumber2412.price);
//console.log(Ply4834.price);
//console.log(Tshirt.price);











//setNewItemData1 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
//    const query = new Moralis.Query("Items");
//    query.equalTo("name","tunacan");
//    query.equalTo("country","USA");
//    const newInfo = await query.find();
//    const object1 = newInfo[0];
//    console.log(newInfo[0]);
//    const objectName1 = object1.get('name');
//    const newPrice1 = object1.get('price');
//    console.log ("the new price of "+objectName1+" is $"+ newPrice1);
//    document.getElementById("theobjectName1").innerHTML=objectName1;
//    document.getElementById("thenewPrice1").innerHTML=newPrice1;
//    // return newPrice;
//}
//setNewItemData1();