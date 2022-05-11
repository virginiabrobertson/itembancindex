//this .js file was used to update the countrydata.html page from the moralis database

getNewItemData1 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","tunacan");
    const newInfo = await query.find();
    const object1 = newInfo[0];
    console.log(newInfo[0]);
    const objectName1 = object1.get ('name');
    const newPrice1 = object1.get('price');
    const newCountry1 = object1.get('country');
    console.log ("the new price of "+objectName1+" is $"+ newPrice1);
    document.getElementById("theobjectName1").innerHTML=objectName1;
    document.getElementById("thenewPrice1").innerHTML=newPrice1;
    document.getElementById("thenewCountry1").innerHTML=newCountry1;
    // return newPrice;
}
getNewItemData1();

getNewItemData2 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","tomatocan");
    const newInfo = await query.find();
    const object2 = newInfo[0];
    console.log(newInfo[0]);
    const objectName2 = object2.get('name');
    const newPrice2 = object2.get('price');
    const newCountry2 = object2.get('country');
    console.log ("the new price of "+objectName2+" is $"+ newPrice2);
    document.getElementById("theobjectName2").innerHTML=objectName2;
    document.getElementById("thenewPrice2").innerHTML=newPrice2;
    document.getElementById("thenewCountry2").innerHTML=newCountry2;
    // return newPrice;
}
getNewItemData2();


getNewItemData3 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","rice");
    const newInfo = await query.find();
    const object3 = newInfo[0];
    console.log(newInfo[0]);
    const objectName3 = object3.get('name');
    const newPrice3 = object3.get('price');
    const newCountry3 = object3.get('country');
    console.log ("the new price of "+objectName3+" is $"+ newPrice3);
    document.getElementById("theobjectName3").innerHTML=objectName3;
    document.getElementById("thenewPrice3").innerHTML=newPrice3;
    document.getElementById("thenewCountry3").innerHTML=newCountry3;
    // return newPrice;
}
getNewItemData3();

getNewItemData4 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","soap");
    const newInfo = await query.find();
    const object4 = newInfo[0];
    console.log(newInfo[0]);
    const objectName4 = object4.get('name');
    const newPrice4 = object4.get('price');
    const newCountry4 = object4.get('country');
    console.log ("the new price of "+objectName4+" is $"+ newPrice4);
    document.getElementById("theobjectName4").innerHTML=objectName4;
    document.getElementById("thenewPrice4").innerHTML=newPrice4;
    document.getElementById("thenewCountry4").innerHTML=newCountry4;
    // return newPrice;
}
getNewItemData4();

getNewItemData5 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","water");
    const newInfo = await query.find();
    const object5 = newInfo[0];
    console.log(newInfo[0]);
    const objectName5 = object5.get('name');
    const newPrice5 = object5.get('price');
    const newCountry5 = object5.get('country');
    console.log ("the new price of "+objectName5+" is $"+ newPrice5);
    document.getElementById("theobjectName5").innerHTML=objectName5;
    document.getElementById("thenewPrice5").innerHTML=newPrice5;
    document.getElementById("thenewCountry5").innerHTML=newCountry5;
    // return newPrice;
}
getNewItemData5();

getNewItemData6 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","paper");
    const newInfo = await query.find();
    const object6 = newInfo[0];
    console.log(newInfo[0]);
    const objectName6 = object6.get('name');
    const newPrice6 = object6.get('price');
    const newCountry6 = object6.get('country');
    console.log ("the new price of "+objectName6+" is $"+ newPrice6);
    document.getElementById("theobjectName6").innerHTML=objectName6;
    document.getElementById("thenewPrice6").innerHTML=newPrice6;
    document.getElementById("thenewCountry6").innerHTML=newCountry6;
    // return newPrice;
}
getNewItemData6();

getNewItemData7 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","alcohol");
    const newInfo = await query.find();
    const object7 = newInfo[0];
    console.log(newInfo[0]);
    const objectName7 = object7.get('name');
    const newPrice7 = object7.get('price');
    const newCountry7 = object7.get('country');
    console.log ("the new price of "+objectName7+" is $"+ newPrice7);
    document.getElementById("theobjectName7").innerHTML=objectName7;
    document.getElementById("thenewPrice7").innerHTML=newPrice7;
    document.getElementById("thenewCountry7").innerHTML=newCountry7;
    // return newPrice;
}
getNewItemData7();

getNewItemData8 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","coffee");
    const newInfo = await query.find();
    const object8 = newInfo[0];
    console.log(newInfo[0]);
    const objectName8 = object8.get('name');
    const newPrice8 = object8.get('price');
    const newCountry8 = object8.get('country');
    console.log ("the new price of "+objectName8+" is $"+ newPrice8);
    document.getElementById("theobjectName8").innerHTML=objectName8;
    document.getElementById("thenewPrice8").innerHTML=newPrice8;
    document.getElementById("thenewCountry8").innerHTML=newCountry8;
    // return newPrice;
}
getNewItemData8();

getNewItemData9 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","tea");
    const newInfo = await query.find();
    const object9 = newInfo[0];
    console.log(newInfo[0]);
    const objectName9 = object9.get('name');
    const newPrice9 = object9.get('price');
    const newCountry9 = object9.get('country');
    console.log ("the new price of "+objectName9+" is $"+ newPrice9);
    document.getElementById("theobjectName9").innerHTML=objectName9;
    document.getElementById("thenewPrice9").innerHTML=newPrice9;
    document.getElementById("thenewCountry9").innerHTML=newCountry9;
    // return newPrice;
}
getNewItemData9();

getNewItemData10 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","toiletpaper");
    const newInfo = await query.find();
    const object10 = newInfo[0];
    console.log(newInfo[0]);
    const objectName10 = object10.get('name');
    const newPrice10 = object10.get('price');
    const newCountry10 = object10.get('country');
    console.log ("the new price of "+objectName10+" is $"+ newPrice10);
    document.getElementById("theobjectName10").innerHTML=objectName10;
    document.getElementById("thenewPrice10").innerHTML=newPrice10;
    document.getElementById("thenewCountry10").innerHTML=newCountry10;
    // return newPrice;
}
getNewItemData10();

getNewItemData11 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","socks");
    const newInfo = await query.find();
    const object11 = newInfo[0];
    console.log(newInfo[0]);
    const objectName11 = object11.get('name');
    const newPrice11 = object11.get('price');
    const newCountry11 = object11.get('country');
    console.log ("the new price of "+objectName11+" is $"+ newPrice11);
    document.getElementById("theobjectName11").innerHTML=objectName11;
    document.getElementById("thenewPrice11").innerHTML=newPrice11;
    document.getElementById("thenewCountry11").innerHTML=newCountry11;
    // return newPrice;
}
getNewItemData11();

getNewItemData12 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","lumber2412");
    const newInfo = await query.find();
    const object12 = newInfo[0];
    console.log(newInfo[0]);
    const objectName12 = object12.get('name');
    const newPrice12 = object12.get('price');
    const newCountry12 = object12.get('country');
    console.log ("the new price of "+objectName12+" is $"+ newPrice12);
    document.getElementById("theobjectName12").innerHTML=objectName12;
    document.getElementById("thenewPrice12").innerHTML=newPrice12;
    document.getElementById("thenewCountry12").innerHTML=newCountry12;
    // return newPrice;
}
getNewItemData12();

getNewItemData13 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","ply4834");
    const newInfo = await query.find();
    const object13 = newInfo[0];
    console.log(newInfo[0]);
    const objectName13 = object13.get('name');
    const newPrice13 = object13.get('price');
    const newCountry13 = object13.get('country');
    console.log ("the new price of "+objectName13+" is $"+ newPrice13);
    document.getElementById("theobjectName13").innerHTML=objectName13;
    document.getElementById("thenewPrice13").innerHTML=newPrice13;
    document.getElementById("thenewCountry13").innerHTML=newCountry13;
    // return newPrice;
}
getNewItemData13();

getNewItemData14 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Items");
    query.equalTo("name","tshirt");
    const newInfo = await query.find();
    const object14 = newInfo[0];
    console.log(newInfo[0]);
    const objectName14 = object14.get('name');
    const newPrice14 = object14.get('price');
    const newCountry14 = object14.get('country');
    console.log ("the new price of "+objectName14+" is $"+ newPrice14);
    document.getElementById("theobjectName14").innerHTML=objectName14;
    document.getElementById("thenewPrice14").innerHTML=newPrice14;
    document.getElementById("thenewCountry14").innerHTML=newCountry14;
    // return newPrice;
}
getNewItemData14();




//class Item {
//    constructor (name, country, price, currency, quantity, unit, category, city ){
//    this.name=name;
 //   this.country=country;
 //   this.price=price;
 //   this.currency=currency;
 //   this.quantity=quantity;
 //   this.unit=unit;
 //   this.category=category;
 //   this.city=city;
 //   }
//}
    
   // example 
   // const tunacan {
   // Name: “tunacan”,
   // Country: “USA”,
   // Price: 2,
   // Currency: “US dollar”,
   // Quantity:1
   // Unit: “6oz”,
   // Category: “food”,
   // City: “savannah”
   // }

  // const Tunacan = new Item("tunacan","USA", 2,"US dollar", 1, "6oz", "food", "Savannah"  );
 //  const Tomatocan = new Item("tomatocan","USA", 2,"US dollar", 1, "8oz", "food", "Savannah"  );
 //  const Rice = new Item("rice","USA", 4,"US dollar", 1, "12 oz bag", "food", "Savannah"  );
  // const Soap = new Item("soap","USA", 1,"US dollar", 1, "bar", "medicine", "Savannah"  );
 //  const Water = new Item("water","USA", 2,"US dollar", 1, "12 oz bottle", "food", "Savannah"  );
 //  const Paper = new Item("paper","USA", 12,"US dollar", 1, "300 sheets", "paper", "Savannah"  );
 //  const Alcohol = new Item("alcohol","USA", 2,"US dollar", 1, "8 oz", "medicine", "Savannah"  );
 //  const Coffee = new Item("coffee","USA", 8,"US dollar", 1, "12 oz", "food", "Savannah"  );
//   const Tea = new Item("tea","USA", 3,"US dollar", 1, "24 bags", "food", "Savannah"  );
 //  const Toiletpaper = new Item("toiletpaper","USA", 2,"US dollar", 1, "1 roll", "paper", "Savannah"  );
 //  const Socks = new Item("socks","USA", 2,"US dollar", 1, "pair", "clothes", "Savannah"  );
 //  const Lumber2412 = new Item("lumber2412","USA", 12,"US dollar", 1, "board", "building materials", "Savannah"  );
 //  const Ply4834 = new Item("ply4834","USA", 22,"US dollar", 1, "1 sheet", "building materials", "Savannah"  );
 //  const Tshirt = new Item("tshirt","USA", 10,"US dollar", 1, "white", "clothes", "Savannah"  );
