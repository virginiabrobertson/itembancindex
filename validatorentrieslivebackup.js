//this .js file is alt for live entries to update the countrydata.html page from the moralis database


let countryquery= "United States";
document.getElementById("countryTitle").innerHTML= countryquery;


getNewItemData1 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    console.log(countryquery);
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-1;
    console.log("entrycount " + entrycount);
    const object1 = newInfo[entrycount];
   
    console.log(newInfo[entrycount]);
    const objectName1 = object1.get ("name");
   
    const newPrice1 = object1.get('price');
    const newCountry1 = object1.get('country');
    console.log("whatis newCountry1"+ newCountry1);
    console.log ("the price of "+objectName1+" is $"+ newPrice1);
    document.getElementById("countryTitle").innerHTML= countryquery;
    document.getElementById("theobjectName1").innerHTML=objectName1;
    document.getElementById("thenewPrice1").innerHTML=newPrice1;
    document.getElementById("thenewCountry1").innerHTML=newCountry1;
   
    //console.log("whatis thenewcCountry1 " + thenewCountry1);
    
    // return newPrice;
}
getNewItemData1();

getNewItemData2 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-2;
    const object2 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-3;
    const object3 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-4;
    const object4 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-5;
    const object5 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-6;
    const object6 = newInfo[entrycount];
   // console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-7;
    const object7 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-8;
    const object8 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-9;
    const object9 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-10;
    const object10 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-11;
    const object11 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-12;
    const object12 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-13;
    const object13 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-14;
    const object14 = newInfo[entrycount];
    //console.log(newInfo[entrycount]);
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

function getNation(){

    countryquerynew=document.getElementById("countryinput").value;
    console.log("new country " + countryquerynew);
    if (countryquerynew !== null) {
       
      var color0 = document.getElementById("countrybutton");
      color0.style.backgroundColor="blue";
      console.log("new country " + countryquerynew);
      countryquery=countryquerynew;
      
      
    getNewItemData1();
    getNewItemData2();
    getNewItemData3();
    getNewItemData4();
    getNewItemData5();
    getNewItemData6();
    getNewItemData7();
    getNewItemData8();
    getNewItemData9();
    getNewItemData10();
    getNewItemData11();
    getNewItemData12();
    getNewItemData13();
    getNewItemData14();
    //document.getElementById("countryTitle").innerHTML=countryquery;
  }
}

getNation();


//document.getElementById("countryTitle").innerHTML=countryquery;

let countryquery2= "Jamaica";
document.getElementById("countryTitle2").innerHTML= countryquery2;


getNewItemData15 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country", countryquery2);
    const newInfo = await query.find();
    entrycount = newInfo.length-1;
    console.log("entrycount " + entrycount);
    const object15 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName15 = object15.get ('name');
    const newPrice15 = object15.get('price');
    const newCountry15 = object15.get('country');
    console.log("whatis newCountry15"+ newCountry15);
    console.log ("the price of "+objectName15+" is $"+ newPrice15);
    document.getElementById("theobjectName15").innerHTML=objectName15;
    document.getElementById("thenewPrice15").innerHTML=newPrice15;
    document.getElementById("thenewCountry15").innerHTML=newCountry15;
//     //console.log("whatis thenewcCountry1 " + thenewCountry1);
    
//     // return newPrice;
 }
 getNewItemData15();


getNewItemData16 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","socks");
    const newInfo = await query.find();
    entrycount = newInfo.length-2;
    const object16 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName16 = object16.get('name');
    const newPrice16 = object16.get('price');
    const newCountry16 = object16.get('country');
    console.log ("the new price of "+objectName16+" is $"+ newPrice16);
    document.getElementById("theobjectName16").innerHTML=objectName16;
    document.getElementById("thenewPrice16").innerHTML=newPrice16;
    document.getElementById("thenewCountry16").innerHTML=newCountry16;
    // return newPrice;
}
getNewItemData16();

getNewItemData17 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","lumber2412");
    const newInfo = await query.find();
    entrycount = newInfo.length-3;
    const object17 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName17 = object17.get('name');
    const newPrice17 = object17.get('price');
    const newCountry17 = object17.get('country');
    console.log ("the new price of "+objectName17+" is $"+ newPrice17);
    document.getElementById("theobjectName17").innerHTML=objectName17;
    document.getElementById("thenewPrice17").innerHTML=newPrice17;
    document.getElementById("thenewCountry17").innerHTML=newCountry17;
    // return newPrice;
}
getNewItemData17();

getNewItemData18 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","ply4834");
    const newInfo = await query.find();
    entrycount = newInfo.length-4;
    const object18 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName18 = object18.get('name');
    const newPrice18 = object18.get('price');
    const newCountry18 = object18.get('country');
    console.log ("the new price of "+objectName18+" is $"+ newPrice18);
    document.getElementById("theobjectName18").innerHTML=objectName18;
    document.getElementById("thenewPrice18").innerHTML=newPrice18;
    document.getElementById("thenewCountry18").innerHTML=newCountry18;
    // return newPrice;
}
getNewItemData18();

getNewItemData19 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-5;
    const object19 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName19 = object19.get('name');
    const newPrice19 = object19.get('price');
    const newCountry19 = object19.get('country');
    console.log ("the new price of "+objectName19+" is $"+ newPrice19);
    document.getElementById("theobjectName19").innerHTML=objectName19;
    document.getElementById("thenewPrice19").innerHTML=newPrice19;
    document.getElementById("thenewCountry19").innerHTML=newCountry19;
    // return newPrice;
}
getNewItemData19();

getNewItemData20 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-6;
    const object20 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName20 = object20.get('name');
    const newPrice20 = object20.get('price');
    const newCountry20 = object20.get('country');
    console.log ("the new price of "+objectName20+" is $"+ newPrice20);
    document.getElementById("theobjectName20").innerHTML=objectName20;
    document.getElementById("thenewPrice20").innerHTML=newPrice20;
    document.getElementById("thenewCountry20").innerHTML=newCountry20;
    // return newPrice;
}
getNewItemData20();

getNewItemData21 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-7;
    const object21 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName21 = object21.get('name');
    const newPrice21 = object21.get('price');
    const newCountry21 = object21.get('country');
    console.log ("the new price of "+objectName21+" is $"+ newPrice21);
    document.getElementById("theobjectName21").innerHTML=objectName21;
    document.getElementById("thenewPrice21").innerHTML=newPrice21;
    document.getElementById("thenewCountry21").innerHTML=newCountry21;
    // return newPrice;
}
getNewItemData21();

getNewItemData22 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-8;
    const object22 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName22 = object22.get('name');
    const newPrice22 = object22.get('price');
    const newCountry22 = object22.get('country');
    console.log ("the new price of "+objectName22+" is $"+ newPrice22);
    document.getElementById("theobjectName22").innerHTML=objectName22;
    document.getElementById("thenewPrice22").innerHTML=newPrice22;
    document.getElementById("thenewCountry22").innerHTML=newCountry22;
    // return newPrice;
}
getNewItemData22();

getNewItemData23 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-9;
    const object23 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName23 = object23.get('name');
    const newPrice23 = object23.get('price');
    const newCountry23 = object23.get('country');
    console.log ("the new price of "+objectName23+" is $"+ newPrice23);
    document.getElementById("theobjectName23").innerHTML=objectName23;
    document.getElementById("thenewPrice23").innerHTML=newPrice23;
    document.getElementById("thenewCountry23").innerHTML=newCountry23;
    // return newPrice;
}
getNewItemData23();

getNewItemData24 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-10;
    const object24 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName24 = object24.get('name');
    const newPrice24 = object24.get('price');
    const newCountry24 = object24.get('country');
    console.log ("the new price of "+objectName24+" is $"+ newPrice24);
    document.getElementById("theobjectName24").innerHTML=objectName24;
    document.getElementById("thenewPrice24").innerHTML=newPrice24;
    document.getElementById("thenewCountry24").innerHTML=newCountry24;
    // return newPrice;
}
getNewItemData24();

getNewItemData25 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-11;
    const object25 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName25 = object25.get('name');
    const newPrice25 = object25.get('price');
    const newCountry25 = object25.get('country');
    console.log ("the new price of "+objectName25+" is $"+ newPrice25);
    document.getElementById("theobjectName25").innerHTML=objectName25;
    document.getElementById("thenewPrice25").innerHTML=newPrice25;
    document.getElementById("thenewCountry25").innerHTML=newCountry25;
    // return newPrice;
}
getNewItemData25();

getNewItemData26 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-12;
    const object26 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName26 = object26.get('name');
    const newPrice26 = object26.get('price');
    const newCountry26 = object26.get('country');
    console.log ("the new price of "+objectName26+" is $"+ newPrice26);
    document.getElementById("theobjectName26").innerHTML=objectName26;
    document.getElementById("thenewPrice26").innerHTML=newPrice26;
    document.getElementById("thenewCountry26").innerHTML=newCountry26;
    // return newPrice;
}
getNewItemData26();

getNewItemData27 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-13;
    const object27 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName27 = object27.get('name');
    const newPrice27 = object27.get('price');
    const newCountry27 = object27.get('country');
    console.log ("the new price of "+objectName27+" is $"+ newPrice27);
    document.getElementById("theobjectName27").innerHTML=objectName27;
    document.getElementById("thenewPrice27").innerHTML=newPrice27;
    document.getElementById("thenewCountry27").innerHTML=newCountry27;
    // return newPrice;
}
getNewItemData27();

getNewItemData28 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("country",countryquery2);
    //query.equalTo("name","tshirt");
    const newInfo = await query.find();
    entrycount = newInfo.length-14;
    const object28 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName28 = object28.get('name');
    const newPrice28 = object28.get('price');
    const newCountry28 = object28.get('country');
    console.log ("the new price of "+objectName28+" is $"+ newPrice28);
    document.getElementById("theobjectName28").innerHTML=objectName28;
    document.getElementById("thenewPrice28").innerHTML=newPrice28;
    document.getElementById("thenewCountry28").innerHTML=newCountry28;
    // return newPrice;
}
getNewItemData28();




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
