//this .js file updates the countrydata.html page from the moralis database


let countryquery= "United States";
document.getElementById("countryTitle").innerHTML= countryquery;


getNewItemData1 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    console.log(countryquery);
    const query = new Moralis.Query("CountriesData");
    query.equalTo("Country", countryquery);
    const newInfo = await query.find();
    entrycount = newInfo.length-1;
    console.log("entrycount " + entrycount);
    const object1 = newInfo[entrycount];
    console.log(object1+" is object1");
    const objectName1 = "tunacan";
    const newPrice1 = object1.get('tunacan');
    const newCountry1 = object1.get('Country');
    const newCurrency1 = object1.get('Currency');
    console.log("whatis newCountry1"+ newCountry1);
    console.log ("the price of "+objectName1+" is $"+ newPrice1);
    document.getElementById("countryTitle").innerHTML= countryquery;
    document.getElementById("theobjectName1").innerHTML=objectName1;
    document.getElementById("thenewPrice1").innerHTML=newPrice1;
    document.getElementById("thenewCountry1").innerHTML=newCountry1;
    document.getElementById("thenewCurrency1").innerHTML=newCurrency1;
    //const object2 = newInfo[entrycount];
    const objectName2 = "tomatocan";
    const newPrice2 = object1.get('tomatocan');
    const newCountry2 = object1.get('Country');
    const newCurrency2 = object1.get('Currency');
    document.getElementById("theobjectName2").innerHTML=objectName2;
    document.getElementById("thenewPrice2").innerHTML=newPrice2;
    document.getElementById("thenewCountry2").innerHTML=newCountry2;
    document.getElementById("thenewCurrency2").innerHTML=newCurrency2;
    const objectName3 = "rice";
    const newPrice3 = object1.get('rice');
    const newCountry3 = object1.get('Country');
    const newCurrency3 = object1.get('Currency');
    document.getElementById("theobjectName3").innerHTML=objectName3;
    document.getElementById("thenewPrice3").innerHTML=newPrice3;
    document.getElementById("thenewCountry3").innerHTML=newCountry3;
    document.getElementById("thenewCurrency3").innerHTML=newCurrency3;
    const objectName4 = "soap";
    const newPrice4 = object1.get('soap');
    const newCountry4 = object1.get('Country');
    const newCurrency4 = object1.get('Currency');
    document.getElementById("theobjectName4").innerHTML=objectName4;
    document.getElementById("thenewPrice4").innerHTML=newPrice4;
    document.getElementById("thenewCountry4").innerHTML=newCountry4;
    document.getElementById("thenewCurrency4").innerHTML=newCurrency4;
    const objectName5 = "water";
    const newPrice5 = object1.get('water');
    const newCountry5 = object1.get('Country');
    const newCurrency5 = object1.get('Currency');
    document.getElementById("theobjectName5").innerHTML=objectName5;
    document.getElementById("thenewPrice5").innerHTML=newPrice5;
    document.getElementById("thenewCountry5").innerHTML=newCountry5;
    document.getElementById("thenewCurrency5").innerHTML=newCurrency5;
    const objectName6 = "paper";
    const newPrice6 = object1.get('paper');
    const newCountry6 = object1.get('Country');
    const newCurrency6 = object1.get('Currency');
    document.getElementById("theobjectName6").innerHTML=objectName6;
    document.getElementById("thenewPrice6").innerHTML=newPrice6;
    document.getElementById("thenewCountry6").innerHTML=newCountry6;
    document.getElementById("thenewCurrency6").innerHTML=newCurrency6;
    const objectName7 = "alcohol";
    const newPrice7 = object1.get('alcohol');
    const newCountry7 = object1.get('Country');
    const newCurrency7 = object1.get('Currency');
    document.getElementById("theobjectName7").innerHTML=objectName7;
    document.getElementById("thenewPrice7").innerHTML=newPrice7;
    document.getElementById("thenewCountry7").innerHTML=newCountry7;
    document.getElementById("thenewCurrency7").innerHTML=newCurrency7;
    const objectName8 = "coffee";
    const newPrice8 = object1.get('coffee');
    const newCountry8 = object1.get('Country');
    const newCurrency8 = object1.get('Currency');
    document.getElementById("theobjectName8").innerHTML=objectName8;
    document.getElementById("thenewPrice8").innerHTML=newPrice8;
    document.getElementById("thenewCountry8").innerHTML=newCountry8;
    document.getElementById("thenewCurrency8").innerHTML=newCurrency8;
    const objectName9 = "tea";
    const newPrice9 = object1.get('tea');
    const newCountry9 = object1.get('Country');
    const newCurrency9 = object1.get('Currency');
    document.getElementById("theobjectName9").innerHTML=objectName9;
    document.getElementById("thenewPrice9").innerHTML=newPrice9;
    document.getElementById("thenewCountry9").innerHTML=newCountry9;
    document.getElementById("thenewCurrency9").innerHTML=newCurrency9;
    const objectName10 = "toiletpaper";
    const newPrice10 = object1.get('toiletpaper');
    const newCountry10 = object1.get('Country');
    const newCurrency10 = object1.get('Currency');
    document.getElementById("theobjectName10").innerHTML=objectName10;
    document.getElementById("thenewPrice10").innerHTML=newPrice10;
    document.getElementById("thenewCountry10").innerHTML=newCountry10;
    document.getElementById("thenewCurrency10").innerHTML=newCurrency10;
    const objectName11 = "socks";
    const newPrice11 = object1.get('socks');
    const newCountry11 = object1.get('Country');
    const newCurrency11 = object1.get('Currency');
    document.getElementById("theobjectName11").innerHTML=objectName11;
    document.getElementById("thenewPrice11").innerHTML=newPrice11;
    document.getElementById("thenewCountry11").innerHTML=newCountry11;
    document.getElementById("thenewCurrency11").innerHTML=newCurrency11;
    const objectName12 = "lumber2412";
    const newPrice12 = object1.get('lumber2412');
    const newCountry12 = object1.get('Country');
    const newCurrency12 = object1.get('Currency');
    document.getElementById("theobjectName12").innerHTML=objectName12;
    document.getElementById("thenewPrice12").innerHTML=newPrice12;
    document.getElementById("thenewCountry12").innerHTML=newCountry12;
    document.getElementById("thenewCurrency12").innerHTML=newCurrency12;
    const objectName13 = "ply4834";
    const newPrice13 = object1.get('ply4834');
    const newCountry13 = object1.get('Country');
    const newCurrency13 = object1.get('Currency');
    console.log ("the new price of "+objectName13+" is $"+ newPrice13);
    document.getElementById("theobjectName13").innerHTML=objectName13;
    document.getElementById("thenewPrice13").innerHTML=newPrice13;
    document.getElementById("thenewCountry13").innerHTML=newCountry13;
    document.getElementById("thenewCurrency13").innerHTML=newCurrency13;
    const objectName14 = "tshirt";
    const newPrice14 = object1.get('tshirt');
    const newCountry14 = object1.get('Country');
    const newCurrency14 = object1.get('Currency');
    document.getElementById("theobjectName14").innerHTML=objectName14;
    document.getElementById("thenewPrice14").innerHTML=newPrice14;
    document.getElementById("thenewCountry14").innerHTML=newCountry14;
    document.getElementById("thenewCurrency14").innerHTML=newCurrency14;
    const newBasket = object1.get('Basket');
    console.log(newBasket+" new basket");
    const newConversion = object1.get('Conversion');
    console.log(newConversion+" new conversion");
    const newConvertBasket = Math.floor(newBasket/newConversion);
    console.log(newConvertBasket+" new converted basket");
    document.getElementById("theBasketinUSD").innerHTML=newConvertBasket;
    
    
}
getNewItemData1();

let countryquery2="Jamaica";
document.getElementById("countryTitle2").innerHTML= countryquery2;

getNewItemData2 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    //document.getElementById("countryTitle").innerHTML= countryinput2;
    console.log(countryquery2);
    const query = new Moralis.Query("CountriesData");
    query.equalTo("Country", countryquery2);
    const newInfo = await query.find();
    entrycount = newInfo.length-1;
    //console.log("entrycount " + entrycount);
    const object2 = newInfo[entrycount];
    console.log(newInfo[entrycount]);
    const objectName15 = "tunacan";
    const newPrice15 = object2.get('tunacan');
    const newCountry2 = object2.get('Country');
    const newCurrency2 = object2.get('Currency');
    document.getElementById("countryTitle2").innerHTML= countryquery2;
    document.getElementById("theobjectName15").innerHTML=objectName15;
    document.getElementById("thenewPrice15").innerHTML=newPrice15;
    document.getElementById("thenewCountry15").innerHTML=newCountry2;
    document.getElementById("thenewCurrency15").innerHTML=newCurrency2;
    const objectName16 = "tomatocan";
    const newPrice16 = object2.get('tomatocan');
    document.getElementById("theobjectName16").innerHTML=objectName16;
    document.getElementById("thenewPrice16").innerHTML=newPrice16;
    document.getElementById("thenewCountry16").innerHTML=newCountry2;
    document.getElementById("thenewCurrency16").innerHTML=newCurrency2;
    const objectName17 = "rice";
    const newPrice17 = object2.get('rice');
    document.getElementById("theobjectName17").innerHTML=objectName17;
    document.getElementById("thenewPrice17").innerHTML=newPrice17;
    document.getElementById("thenewCountry17").innerHTML=newCountry2;
    document.getElementById("thenewCurrency17").innerHTML=newCurrency2;
    const objectName18 = "soap";
    const newPrice18 = object2.get('soap');
    document.getElementById("theobjectName18").innerHTML=objectName18;
    document.getElementById("thenewPrice18").innerHTML=newPrice18;
    document.getElementById("thenewCountry18").innerHTML=newCountry2;
    document.getElementById("thenewCurrency18").innerHTML=newCurrency2;
    const objectName19 = "water";
    const newPrice19 = object2.get('water');
    document.getElementById("theobjectName19").innerHTML=objectName19;
    document.getElementById("thenewPrice19").innerHTML=newPrice19;
    document.getElementById("thenewCountry19").innerHTML=newCountry2;
    document.getElementById("thenewCurrency19").innerHTML=newCurrency2;
    const objectName20 = "paper";
    const newPrice20 = object2.get('paper');
    document.getElementById("theobjectName20").innerHTML=objectName20;
    document.getElementById("thenewPrice20").innerHTML=newPrice20;
    document.getElementById("thenewCountry20").innerHTML=newCountry2;
    document.getElementById("thenewCurrency20").innerHTML=newCurrency2;
    const objectName21 = "alcohol";
    const newPrice21 = object2.get('alcohol');
    document.getElementById("theobjectName21").innerHTML=objectName21;
    document.getElementById("thenewPrice21").innerHTML=newPrice21;
    document.getElementById("thenewCountry21").innerHTML=newCountry2;
    document.getElementById("thenewCurrency21").innerHTML=newCurrency2;
    const objectName22 = "coffee";
    const newPrice22 = object2.get('coffee');
    document.getElementById("theobjectName22").innerHTML=objectName22;
    document.getElementById("thenewPrice22").innerHTML=newPrice22;
    document.getElementById("thenewCountry22").innerHTML=newCountry2;
    document.getElementById("thenewCurrency22").innerHTML=newCurrency2;
    const objectName23 = "tea";
    const newPrice23 = object2.get('tea');
    document.getElementById("theobjectName23").innerHTML=objectName23;
    document.getElementById("thenewPrice23").innerHTML=newPrice23;
    document.getElementById("thenewCountry23").innerHTML=newCountry2;
    document.getElementById("thenewCurrency23").innerHTML=newCurrency2;
    const objectName24 = "toiletpaper";
    const newPrice24 = object2.get('toiletpaper');
    document.getElementById("theobjectName24").innerHTML=objectName24;
    document.getElementById("thenewPrice24").innerHTML=newPrice24;
    document.getElementById("thenewCountry24").innerHTML=newCountry2;
    document.getElementById("thenewCurrency24").innerHTML=newCurrency2;
    const objectName25 = "socks";
    const newPrice25 = object2.get('socks');
    document.getElementById("theobjectName25").innerHTML=objectName25;
    document.getElementById("thenewPrice25").innerHTML=newPrice25;
    document.getElementById("thenewCountry25").innerHTML=newCountry2;
    document.getElementById("thenewCurrency25").innerHTML=newCurrency2;
    const objectName26 = "lumber2412";
    const newPrice26 = object2.get('lumber2412');
    document.getElementById("theobjectName26").innerHTML=objectName26;
    document.getElementById("thenewPrice26").innerHTML=newPrice26;
    document.getElementById("thenewCountry26").innerHTML=newCountry2;
    document.getElementById("thenewCurrency26").innerHTML=newCurrency2;
    const objectName27 = "ply4834";
    const newPrice27 = object2.get('ply4834');
    document.getElementById("theobjectName27").innerHTML=objectName27;
    document.getElementById("thenewPrice27").innerHTML=newPrice27;
    document.getElementById("thenewCountry27").innerHTML=newCountry2;
    document.getElementById("thenewCurrency27").innerHTML=newCurrency2;
    const objectName28 = "tshirt";
    const newPrice28 = object2.get('tshirt');
    document.getElementById("theobjectName28").innerHTML=objectName28;
    document.getElementById("thenewPrice28").innerHTML=newPrice28;
    document.getElementById("thenewCountry28").innerHTML=newCountry2;
    document.getElementById("thenewCurrency28").innerHTML=newCurrency2;
    const newBasket2 = object2.get('Basket');
    console.log(newBasket2+" new basket");
    const newConversion2 = object2.get('Conversion');
    console.log(newConversion2+" new conversion");
    const newConvertBasket2 = Math.floor(newBasket2/newConversion2);
    console.log(newConvertBasket2+" new converted basket");
    document.getElementById("theBasketinUSD2").innerHTML=newConvertBasket2;
    
    
}
getNewItemData2();


function getNation(){

    countryquerynew=document.getElementById("countryinput").value;
    console.log("new country " + countryquerynew);
    if (countryquerynew !== null) {
       
      var color0 = document.getElementById("countrybutton");
      color0.style.backgroundColor="blue";
      console.log("new country " + countryquerynew);
      countryquery=countryquerynew;
      
      
    getNewItemData1();
   
  }
}

getNation();




//document.getElementById("countryTitle").innerHTML=countryquery;

// let countryquery2= "Jamaica";
// document.getElementById("countryTitle2").innerHTML= countryquery2;
function getNation2(){

    countryquerynew2=document.getElementById("countryinput2").value;
    console.log("new country " + countryquerynew2);
    if (countryquerynew2 !== null) {
       
      var color0 = document.getElementById("countrybutton2");
      color0.style.backgroundColor="blue";
      console.log("new country " + countryquery2);
      countryquery2=countryquerynew2;
      
      
    getNewItemData2();
   
  }
}

getNation2();


