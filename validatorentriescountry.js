//this .js file test used to update the itemdata.html page from the moralis database

getNewItemData1 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    //query.include('tunacan');
    const newInfo = await query.find();
   // for (let i=0; i < nextCountry.length; i++){
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    //console.log("price of tuna "+newCountry1 + newPrice1 + " USD conv"+ newConv1);
    
    document.getElementById("theobjectName1").innerHTML="tunacan";
    document.getElementById("thenewPrice1").innerHTML=newPrice;
    document.getElementById("thenewCountry1").innerHTML=newCountry;
}
 getNewItemData1();

 getNewItemData2 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    // console.log("price of tuna "+newCountry2 + newPrice2 + " USD conv"+ newConv2);
    
    document.getElementById("theobjectName2").innerHTML="tunacan";
    document.getElementById("thenewPrice2").innerHTML=newPrice;
    document.getElementById("thenewCountry2").innerHTML=newCountry;
}
 getNewItemData2();

 getNewItemData3 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    // console.log("price of tuna "+newCountry3 + newPrice3 + " USD conv"+ newConv3);
    
    document.getElementById("theobjectName3").innerHTML="tunacan";
    document.getElementById("thenewPrice3").innerHTML=newPrice;
    document.getElementById("thenewCountry3").innerHTML=newCountry;
}
 getNewItemData3();

 getNewItemData4 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    // console.log("price of tuna "+newCountry4 + newPrice4 + " USD conv"+ newConv4);
    
    document.getElementById("theobjectName4").innerHTML="tunacan";
    document.getElementById("thenewPrice4").innerHTML=newPrice;
    document.getElementById("thenewCountry4").innerHTML=newCountry;
}
 getNewItemData4();

 getNewItemData5 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    // console.log("price of tuna "+newCountry5 + newPrice5 + " USD conv"+ newConv5);
    
    document.getElementById("theobjectName5").innerHTML="tunacan";
    document.getElementById("thenewPrice5").innerHTML=newPrice;
    document.getElementById("thenewCountry5").innerHTML=newCountry;
}
 getNewItemData5();

 getNewItemData6 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    // console.log("price of tuna "+newCountry6 + newPrice6 + " USD conv"+ newConv6);
    
    document.getElementById("theobjectName6").innerHTML="tunacan";
    document.getElementById("thenewPrice6").innerHTML=newPrice;
    document.getElementById("thenewCountry6").innerHTML=newCountry;
}
 getNewItemData6();

 getNewItemData7 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
   //  console.log("price of tuna "+newCountry7 + newPrice7 + " USD conv"+ newConv7);
    
    document.getElementById("theobjectName7").innerHTML="tunacan";
    document.getElementById("thenewPrice7").innerHTML=newPrice;
    document.getElementById("thenewCountry7").innerHTML=newCountry;
}
 getNewItemData7();

 getNewItemData8 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    //console.log("price of tuna "+newCountry8 + newPrice8 + " USD conv"+ newConv8);
    
    document.getElementById("theobjectName8").innerHTML="tunacan";
    document.getElementById("thenewPrice8").innerHTML=newPrice;
    document.getElementById("thenewCountry8").innerHTML=newCountry;
}
 getNewItemData8();

 getNewItemData9 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
     //console.log("price of tuna "+newCountry9 + newPrice9 + " USD conv"+ newConv9);
    
    document.getElementById("theobjectName9").innerHTML="tunacan";
    document.getElementById("thenewPrice9").innerHTML=newPrice;
    document.getElementById("thenewCountry9").innerHTML=newCountry;
}
 getNewItemData9();

 getNewItemData10 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
     //console.log("price of tuna "+newCountry10 + newPrice10 + " USD conv"+ newConv10);
    
    document.getElementById("theobjectName10").innerHTML="tunacan";
    document.getElementById("thenewPrice10").innerHTML=newPrice;
    document.getElementById("thenewCountry10").innerHTML=newCountry;
}
 getNewItemData10();

 getNewItemData11 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
     //console.log("price of tuna "+newCountry11 + newPrice11 + " USD conv"+ newConv11);
    
    document.getElementById("theobjectName11").innerHTML="tunacan";
    document.getElementById("thenewPrice11").innerHTML=newPrice;
    document.getElementById("thenewCountry11").innerHTML=newCountry;
}
 getNewItemData11();

 getNewItemData12 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
     //console.log("price of tuna "+newCountry12 + newPrice12 + " USD conv"+ newConv12);
    
    document.getElementById("theobjectName12").innerHTML="tunacan";
    document.getElementById("thenewPrice12").innerHTML=newPrice;
    document.getElementById("thenewCountry12").innerHTML=newCountry;
}
 getNewItemData12();

 getNewItemData13 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
     //console.log("price of tuna "+newCountry13 + newPrice13 + " USD conv"+ newConv13);
    
    document.getElementById("theobjectName13").innerHTML="tunacan";
    document.getElementById("thenewPrice13").innerHTML=newPrice;
    document.getElementById("thenewCountry13").innerHTML=newCountry;
}
 getNewItemData13();

 getNewItemData14 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tunacan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
     //console.log("price of tuna "+newCountry14 + newPrice14 + " USD conv"+ newConv14);
    
    document.getElementById("theobjectName14").innerHTML="tunacan";
    document.getElementById("thenewPrice14").innerHTML=newPrice;
    document.getElementById("thenewCountry14").innerHTML=newCountry;
}
 getNewItemData14();

 getNewItemData15 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
     //console.log("price of tomatocan "+newCountry15 + newPrice15 + " USD conv"+ newConv15);
    
    document.getElementById("theobjectName15").innerHTML="tomatocan";
    document.getElementById("thenewPrice15").innerHTML=newPrice;
    document.getElementById("thenewCountry15").innerHTML=newCountry;
}
 getNewItemData15();

 getNewItemData16 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
     //console.log("price of tomatocan "+newCountry15 + newPrice15 + " USD conv"+ newConv15);
    
    document.getElementById("theobjectName16").innerHTML="tomatocan";
    document.getElementById("thenewPrice16").innerHTML=newPrice;
    document.getElementById("thenewCountry16").innerHTML=newCountry;
}
 getNewItemData16();

 getNewItemData17 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
     //console.log("price of tomatocan "+newCountry15 + newPrice15 + " USD conv"+ newConv15);
    
    document.getElementById("theobjectName17").innerHTML="tomatocan";
    document.getElementById("thenewPrice17").innerHTML=newPrice;
    document.getElementById("thenewCountry17").innerHTML=newCountry;
}
 getNewItemData17();

 getNewItemData18 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName18").innerHTML="tomatocan";
    document.getElementById("thenewPrice18").innerHTML=newPrice;
    document.getElementById("thenewCountry18").innerHTML=newCountry;
}
 getNewItemData18();

 getNewItemData19 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName19").innerHTML="tomatocan";
    document.getElementById("thenewPrice19").innerHTML=newPrice;
    document.getElementById("thenewCountry19").innerHTML=newCountry;
}
 getNewItemData19();

 getNewItemData20 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName20").innerHTML="tomatocan";
    document.getElementById("thenewPrice20").innerHTML=newPrice;
    document.getElementById("thenewCountry20").innerHTML=newCountry;
}
 getNewItemData20();

 getNewItemData21 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName21").innerHTML="tomatocan";
    document.getElementById("thenewPrice21").innerHTML=newPrice;
    document.getElementById("thenewCountry21").innerHTML=newCountry;
}
 getNewItemData21();

 getNewItemData22 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName22").innerHTML="tomatocan";
    document.getElementById("thenewPrice22").innerHTML=newPrice;
    document.getElementById("thenewCountry22").innerHTML=newCountry;
}
 getNewItemData22();

 getNewItemData23 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName23").innerHTML="tomatocan";
    document.getElementById("thenewPrice23").innerHTML=newPrice;
    document.getElementById("thenewCountry23").innerHTML=newCountry;
}
 getNewItemData23();

 getNewItemData24 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName24").innerHTML="tomatocan";
    document.getElementById("thenewPrice24").innerHTML=newPrice;
    document.getElementById("thenewCountry24").innerHTML=newCountry;
}
 getNewItemData24();

 getNewItemData25 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName25").innerHTML="tomatocan";
    document.getElementById("thenewPrice25").innerHTML=newPrice;
    document.getElementById("thenewCountry25").innerHTML=newCountry;
}
 getNewItemData25();

 getNewItemData26 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName26").innerHTML="tomatocan";
    document.getElementById("thenewPrice26").innerHTML=newPrice;
    document.getElementById("thenewCountry26").innerHTML=newCountry;
}
 getNewItemData26();

 getNewItemData27 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName27").innerHTML="tomatocan";
    document.getElementById("thenewPrice27").innerHTML=newPrice;
    document.getElementById("thenewCountry27").innerHTML=newCountry;
}
 getNewItemData27();

 getNewItemData28 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tomatocan');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName28").innerHTML="tomatocan";
    document.getElementById("thenewPrice28").innerHTML=newPrice;
    document.getElementById("thenewCountry28").innerHTML=newCountry;
}
 getNewItemData28();

 getNewItemData29 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName29").innerHTML="rice";
    document.getElementById("thenewPrice29").innerHTML=newPrice;
    document.getElementById("thenewCountry29").innerHTML=newCountry;
}
 getNewItemData29();

 getNewItemData30 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName30").innerHTML="rice";
    document.getElementById("thenewPrice30").innerHTML=newPrice;
    document.getElementById("thenewCountry30").innerHTML=newCountry;
}
 getNewItemData30();

 getNewItemData31 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName31").innerHTML="rice";
    document.getElementById("thenewPrice31").innerHTML=newPrice;
    document.getElementById("thenewCountry31").innerHTML=newCountry;
}
 getNewItemData31();

 getNewItemData32 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName32").innerHTML="rice";
    document.getElementById("thenewPrice32").innerHTML=newPrice;
    document.getElementById("thenewCountry32").innerHTML=newCountry;
}
 getNewItemData32();

 getNewItemData33 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName33").innerHTML="rice";
    document.getElementById("thenewPrice33").innerHTML=newPrice;
    document.getElementById("thenewCountry33").innerHTML=newCountry;
}
 getNewItemData33();

 getNewItemData34 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName34").innerHTML="rice";
    document.getElementById("thenewPrice34").innerHTML=newPrice;
    document.getElementById("thenewCountry34").innerHTML=newCountry;
}
 getNewItemData34();

 getNewItemData35 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName35").innerHTML="rice";
    document.getElementById("thenewPrice35").innerHTML=newPrice;
    document.getElementById("thenewCountry35").innerHTML=newCountry;
}
 getNewItemData35();

 getNewItemData36 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName36").innerHTML="rice";
    document.getElementById("thenewPrice36").innerHTML=newPrice;
    document.getElementById("thenewCountry36").innerHTML=newCountry;
}
 getNewItemData36();

 getNewItemData37 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName37").innerHTML="rice";
    document.getElementById("thenewPrice37").innerHTML=newPrice;
    document.getElementById("thenewCountry37").innerHTML=newCountry;
}
 getNewItemData37();

 getNewItemData38 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName38").innerHTML="rice";
    document.getElementById("thenewPrice38").innerHTML=newPrice;
    document.getElementById("thenewCountry38").innerHTML=newCountry;
}
 getNewItemData38();

 getNewItemData39 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName39").innerHTML="rice";
    document.getElementById("thenewPrice39").innerHTML=newPrice;
    document.getElementById("thenewCountry39").innerHTML=newCountry;
}
 getNewItemData39();

 getNewItemData40 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName40").innerHTML="rice";
    document.getElementById("thenewPrice40").innerHTML=newPrice;
    document.getElementById("thenewCountry40").innerHTML=newCountry;
}
 getNewItemData40();

 getNewItemData41 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName41").innerHTML="rice";
    document.getElementById("thenewPrice41").innerHTML=newPrice;
    document.getElementById("thenewCountry41").innerHTML=newCountry;
}
 getNewItemData41();

 getNewItemData42 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('rice');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName42").innerHTML="rice";
    document.getElementById("thenewPrice42").innerHTML=newPrice;
    document.getElementById("thenewCountry42").innerHTML=newCountry;
}
 getNewItemData42();

 getNewItemData43 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName43").innerHTML="soap";
    document.getElementById("thenewPrice43").innerHTML=newPrice;
    document.getElementById("thenewCountry43").innerHTML=newCountry;
}
 getNewItemData43();

 getNewItemData44 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName44").innerHTML="soap";
    document.getElementById("thenewPrice44").innerHTML=newPrice;
    document.getElementById("thenewCountry44").innerHTML=newCountry;
}
 getNewItemData44();

 getNewItemData45 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName45").innerHTML="soap";
    document.getElementById("thenewPrice45").innerHTML=newPrice;
    document.getElementById("thenewCountry45").innerHTML=newCountry;
}
 getNewItemData45();

 getNewItemData46 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName46").innerHTML="soap";
    document.getElementById("thenewPrice46").innerHTML=newPrice;
    document.getElementById("thenewCountry46").innerHTML=newCountry;
}
 getNewItemData46();

 getNewItemData47 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName47").innerHTML="soap";
    document.getElementById("thenewPrice47").innerHTML=newPrice;
    document.getElementById("thenewCountry47").innerHTML=newCountry;
}
 getNewItemData47();

 getNewItemData48 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName48").innerHTML="soap";
    document.getElementById("thenewPrice48").innerHTML=newPrice;
    document.getElementById("thenewCountry48").innerHTML=newCountry;
}
 getNewItemData48();

 getNewItemData49 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName49").innerHTML="soap";
    document.getElementById("thenewPrice49").innerHTML=newPrice;
    document.getElementById("thenewCountry49").innerHTML=newCountry;
}
 getNewItemData49();

 getNewItemData50 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName50").innerHTML="soap";
    document.getElementById("thenewPrice50").innerHTML=newPrice;
    document.getElementById("thenewCountry50").innerHTML=newCountry;
}
 getNewItemData50();

 getNewItemData51 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName51").innerHTML="soap";
    document.getElementById("thenewPrice51").innerHTML=newPrice;
    document.getElementById("thenewCountry51").innerHTML=newCountry;
}
 getNewItemData51();

 getNewItemData52 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName52").innerHTML="soap";
    document.getElementById("thenewPrice52").innerHTML=newPrice;
    document.getElementById("thenewCountry52").innerHTML=newCountry;
}
 getNewItemData52();

 getNewItemData53 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName53").innerHTML="soap";
    document.getElementById("thenewPrice53").innerHTML=newPrice;
    document.getElementById("thenewCountry53").innerHTML=newCountry;
}
 getNewItemData53();

 getNewItemData54 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName54").innerHTML="soap";
    document.getElementById("thenewPrice54").innerHTML=newPrice;
    document.getElementById("thenewCountry54").innerHTML=newCountry;
}
 getNewItemData54();

 getNewItemData55 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName55").innerHTML="soap";
    document.getElementById("thenewPrice55").innerHTML=newPrice;
    document.getElementById("thenewCountry55").innerHTML=newCountry;
}
 getNewItemData55();

 getNewItemData56 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('soap');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName56").innerHTML="soap";
    document.getElementById("thenewPrice56").innerHTML=newPrice;
    document.getElementById("thenewCountry56").innerHTML=newCountry;
}
 getNewItemData56();

 getNewItemData57 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName57").innerHTML="water";
    document.getElementById("thenewPrice57").innerHTML=newPrice;
    document.getElementById("thenewCountry57").innerHTML=newCountry;
}
 getNewItemData57();

 getNewItemData58 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName58").innerHTML="water";
    document.getElementById("thenewPrice58").innerHTML=newPrice;
    document.getElementById("thenewCountry58").innerHTML=newCountry;
}
 getNewItemData58();

 getNewItemData59 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName59").innerHTML="water";
    document.getElementById("thenewPrice59").innerHTML=newPrice;
    document.getElementById("thenewCountry59").innerHTML=newCountry;
}
 getNewItemData59();

 getNewItemData60 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName60").innerHTML="water";
    document.getElementById("thenewPrice60").innerHTML=newPrice;
    document.getElementById("thenewCountry60").innerHTML=newCountry;
}
 getNewItemData60();

 getNewItemData61 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName61").innerHTML="water";
    document.getElementById("thenewPrice61").innerHTML=newPrice;
    document.getElementById("thenewCountry61").innerHTML=newCountry;
}
 getNewItemData61();

 getNewItemData62 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName62").innerHTML="water";
    document.getElementById("thenewPrice62").innerHTML=newPrice;
    document.getElementById("thenewCountry62").innerHTML=newCountry;
}
 getNewItemData62();

 getNewItemData63 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName63").innerHTML="water";
    document.getElementById("thenewPrice63").innerHTML=newPrice;
    document.getElementById("thenewCountry63").innerHTML=newCountry;
}
 getNewItemData63();

 getNewItemData64 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName64").innerHTML="water";
    document.getElementById("thenewPrice64").innerHTML=newPrice;
    document.getElementById("thenewCountry64").innerHTML=newCountry;
}
 getNewItemData64();

 getNewItemData65 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName65").innerHTML="water";
    document.getElementById("thenewPrice65").innerHTML=newPrice;
    document.getElementById("thenewCountry65").innerHTML=newCountry;
}
 getNewItemData65();

 getNewItemData66 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName66").innerHTML="water";
    document.getElementById("thenewPrice66").innerHTML=newPrice;
    document.getElementById("thenewCountry66").innerHTML=newCountry;
}
 getNewItemData66();

 getNewItemData67 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName67").innerHTML="water";
    document.getElementById("thenewPrice67").innerHTML=newPrice;
    document.getElementById("thenewCountry67").innerHTML=newCountry;
}
 getNewItemData67();

 getNewItemData68 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName68").innerHTML="water";
    document.getElementById("thenewPrice68").innerHTML=newPrice;
    document.getElementById("thenewCountry68").innerHTML=newCountry;
}
 getNewItemData68();

 getNewItemData69 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName69").innerHTML="water";
    document.getElementById("thenewPrice69").innerHTML=newPrice;
    document.getElementById("thenewCountry69").innerHTML=newCountry;
}
 getNewItemData69();

 getNewItemData70 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('water');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName70").innerHTML="water";
    document.getElementById("thenewPrice70").innerHTML=newPrice;
    document.getElementById("thenewCountry70").innerHTML=newCountry;
}
 getNewItemData70();

 getNewItemData71 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName71").innerHTML="paper";
    document.getElementById("thenewPrice71").innerHTML=newPrice;
    document.getElementById("thenewCountry71").innerHTML=newCountry;
}
 getNewItemData71();

 getNewItemData72 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName72").innerHTML="paper";
    document.getElementById("thenewPrice72").innerHTML=newPrice;
    document.getElementById("thenewCountry72").innerHTML=newCountry;
}
 getNewItemData72();

 getNewItemData73 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName73").innerHTML="paper";
    document.getElementById("thenewPrice73").innerHTML=newPrice;
    document.getElementById("thenewCountry73").innerHTML=newCountry;
}
 getNewItemData73();

 getNewItemData74 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName74").innerHTML="paper";
    document.getElementById("thenewPrice74").innerHTML=newPrice;
    document.getElementById("thenewCountry74").innerHTML=newCountry;
}
 getNewItemData74();

 getNewItemData75 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName75").innerHTML="paper";
    document.getElementById("thenewPrice75").innerHTML=newPrice;
    document.getElementById("thenewCountry75").innerHTML=newCountry;
}
 getNewItemData75();

 getNewItemData76 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName76").innerHTML="paper";
    document.getElementById("thenewPrice76").innerHTML=newPrice;
    document.getElementById("thenewCountry76").innerHTML=newCountry;
}
 getNewItemData76();

 getNewItemData77 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName77").innerHTML="paper";
    document.getElementById("thenewPrice77").innerHTML=newPrice;
    document.getElementById("thenewCountry77").innerHTML=newCountry;
}
 getNewItemData77();

 getNewItemData78 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName78").innerHTML="paper";
    document.getElementById("thenewPrice78").innerHTML=newPrice;
    document.getElementById("thenewCountry78").innerHTML=newCountry;
}
 getNewItemData78();

 getNewItemData79 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName79").innerHTML="paper";
    document.getElementById("thenewPrice79").innerHTML=newPrice;
    document.getElementById("thenewCountry79").innerHTML=newCountry;
}
 getNewItemData79();

 getNewItemData80 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName80").innerHTML="paper";
    document.getElementById("thenewPrice80").innerHTML=newPrice;
    document.getElementById("thenewCountry80").innerHTML=newCountry;
}
 getNewItemData80();

 getNewItemData81 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName81").innerHTML="paper";
    document.getElementById("thenewPrice81").innerHTML=newPrice;
    document.getElementById("thenewCountry81").innerHTML=newCountry;
}
 getNewItemData81();

 getNewItemData82 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName82").innerHTML="paper";
    document.getElementById("thenewPrice82").innerHTML=newPrice;
    document.getElementById("thenewCountry82").innerHTML=newCountry;
}
 getNewItemData82();

 getNewItemData83 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName83").innerHTML="paper";
    document.getElementById("thenewPrice83").innerHTML=newPrice;
    document.getElementById("thenewCountry83").innerHTML=newCountry;
}
 getNewItemData83();

 getNewItemData84 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('paper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName84").innerHTML="paper";
    document.getElementById("thenewPrice84").innerHTML=newPrice;
    document.getElementById("thenewCountry84").innerHTML=newCountry;
}
 getNewItemData84();

 getNewItemData85 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName85").innerHTML="alcohol";
    document.getElementById("thenewPrice85").innerHTML=newPrice;
    document.getElementById("thenewCountry85").innerHTML=newCountry;
}
 getNewItemData85();

 getNewItemData86 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName86").innerHTML="alcohol";
    document.getElementById("thenewPrice86").innerHTML=newPrice;
    document.getElementById("thenewCountry86").innerHTML=newCountry;
}
 getNewItemData86();

 getNewItemData87 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName87").innerHTML="alcohol";
    document.getElementById("thenewPrice87").innerHTML=newPrice;
    document.getElementById("thenewCountry87").innerHTML=newCountry;
}
 getNewItemData87();

 getNewItemData88 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName88").innerHTML="alcohol";
    document.getElementById("thenewPrice88").innerHTML=newPrice;
    document.getElementById("thenewCountry88").innerHTML=newCountry;
}
 getNewItemData88();

 getNewItemData89 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName89").innerHTML="alcohol";
    document.getElementById("thenewPrice89").innerHTML=newPrice;
    document.getElementById("thenewCountry89").innerHTML=newCountry;
}
 getNewItemData89();

 getNewItemData90 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName90").innerHTML="alcohol";
    document.getElementById("thenewPrice90").innerHTML=newPrice;
    document.getElementById("thenewCountry90").innerHTML=newCountry;
}
 getNewItemData90();

 getNewItemData91 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName91").innerHTML="alcohol";
    document.getElementById("thenewPrice91").innerHTML=newPrice;
    document.getElementById("thenewCountry91").innerHTML=newCountry;
}
 getNewItemData91();

 getNewItemData92 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName92").innerHTML="alcohol";
    document.getElementById("thenewPrice92").innerHTML=newPrice;
    document.getElementById("thenewCountry92").innerHTML=newCountry;
}
 getNewItemData92();

 getNewItemData93 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName93").innerHTML="alcohol";
    document.getElementById("thenewPrice93").innerHTML=newPrice;
    document.getElementById("thenewCountry93").innerHTML=newCountry;
}
 getNewItemData93();

 getNewItemData94 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName94").innerHTML="alcohol";
    document.getElementById("thenewPrice94").innerHTML=newPrice;
    document.getElementById("thenewCountry94").innerHTML=newCountry;
}
 getNewItemData94();

 getNewItemData95 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName95").innerHTML="alcohol";
    document.getElementById("thenewPrice95").innerHTML=newPrice;
    document.getElementById("thenewCountry95").innerHTML=newCountry;
}
 getNewItemData95();

 getNewItemData96 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName96").innerHTML="alcohol";
    document.getElementById("thenewPrice96").innerHTML=newPrice;
    document.getElementById("thenewCountry96").innerHTML=newCountry;
}
 getNewItemData96();

 getNewItemData97 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName97").innerHTML="alcohol";
    document.getElementById("thenewPrice97").innerHTML=newPrice;
    document.getElementById("thenewCountry97").innerHTML=newCountry;
}
 getNewItemData97();

 getNewItemData98 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('alcohol');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName98").innerHTML="alcohol";
    document.getElementById("thenewPrice98").innerHTML=newPrice;
    document.getElementById("thenewCountry98").innerHTML=newCountry;
}
 getNewItemData98();

 getNewItemData99 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName99").innerHTML="coffee";
    document.getElementById("thenewPrice99").innerHTML=newPrice;
    document.getElementById("thenewCountry99").innerHTML=newCountry;
}
 getNewItemData99();

 getNewItemData100 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName100").innerHTML="coffee";
    document.getElementById("thenewPrice100").innerHTML=newPrice;
    document.getElementById("thenewCountry100").innerHTML=newCountry;
}
 getNewItemData100();

 getNewItemData101 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName101").innerHTML="coffee";
    document.getElementById("thenewPrice101").innerHTML=newPrice;
    document.getElementById("thenewCountry101").innerHTML=newCountry;
}
 getNewItemData101();

 getNewItemData102 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName102").innerHTML="coffee";
    document.getElementById("thenewPrice102").innerHTML=newPrice;
    document.getElementById("thenewCountry102").innerHTML=newCountry;
}
 getNewItemData102();

 getNewItemData103 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName103").innerHTML="coffee";
    document.getElementById("thenewPrice103").innerHTML=newPrice;
    document.getElementById("thenewCountry103").innerHTML=newCountry;
}
 getNewItemData103();

 getNewItemData104 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName104").innerHTML="coffee";
    document.getElementById("thenewPrice104").innerHTML=newPrice;
    document.getElementById("thenewCountry104").innerHTML=newCountry;
}
 getNewItemData104();

 getNewItemData105 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName105").innerHTML="coffee";
    document.getElementById("thenewPrice105").innerHTML=newPrice;
    document.getElementById("thenewCountry105").innerHTML=newCountry;
}
 getNewItemData105();

 getNewItemData106 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName106").innerHTML="coffee";
    document.getElementById("thenewPrice106").innerHTML=newPrice;
    document.getElementById("thenewCountry106").innerHTML=newCountry;
}
 getNewItemData106();

 getNewItemData107 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName107").innerHTML="coffee";
    document.getElementById("thenewPrice107").innerHTML=newPrice;
    document.getElementById("thenewCountry107").innerHTML=newCountry;
}
 getNewItemData107();

 getNewItemData108 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName108").innerHTML="coffee";
    document.getElementById("thenewPrice108").innerHTML=newPrice;
    document.getElementById("thenewCountry108").innerHTML=newCountry;
}
 getNewItemData108();

 getNewItemData109 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName109").innerHTML="coffee";
    document.getElementById("thenewPrice109").innerHTML=newPrice;
    document.getElementById("thenewCountry109").innerHTML=newCountry;
}
 getNewItemData109();

 getNewItemData110 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName110").innerHTML="coffee";
    document.getElementById("thenewPrice110").innerHTML=newPrice;
    document.getElementById("thenewCountry110").innerHTML=newCountry;
}
 getNewItemData110();

 getNewItemData111 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName111").innerHTML="coffee";
    document.getElementById("thenewPrice111").innerHTML=newPrice;
    document.getElementById("thenewCountry111").innerHTML=newCountry;
}
 getNewItemData111();

 getNewItemData112 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('coffee');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName112").innerHTML="coffee";
    document.getElementById("thenewPrice112").innerHTML=newPrice;
    document.getElementById("thenewCountry112").innerHTML=newCountry;
}
 getNewItemData112();

 getNewItemData113 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName113").innerHTML="tea";
    document.getElementById("thenewPrice113").innerHTML=newPrice;
    document.getElementById("thenewCountry113").innerHTML=newCountry;
}
 getNewItemData113();

 getNewItemData114 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName114").innerHTML="tea";
    document.getElementById("thenewPrice114").innerHTML=newPrice;
    document.getElementById("thenewCountry114").innerHTML=newCountry;
}
 getNewItemData114();

 getNewItemData115 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName115").innerHTML="tea";
    document.getElementById("thenewPrice115").innerHTML=newPrice;
    document.getElementById("thenewCountry115").innerHTML=newCountry;
}
 getNewItemData115();

 getNewItemData116 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName116").innerHTML="tea";
    document.getElementById("thenewPrice116").innerHTML=newPrice;
    document.getElementById("thenewCountry116").innerHTML=newCountry;
}
 getNewItemData116();

 getNewItemData117= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName117").innerHTML="tea";
    document.getElementById("thenewPrice117").innerHTML=newPrice;
    document.getElementById("thenewCountry117").innerHTML=newCountry;
}
 getNewItemData117();

 getNewItemData118= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName118").innerHTML="tea";
    document.getElementById("thenewPrice118").innerHTML=newPrice;
    document.getElementById("thenewCountry118").innerHTML=newCountry;
}
 getNewItemData118();

 getNewItemData119= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName119").innerHTML="tea";
    document.getElementById("thenewPrice119").innerHTML=newPrice;
    document.getElementById("thenewCountry119").innerHTML=newCountry;
}
 getNewItemData119();

 getNewItemData120= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName120").innerHTML="tea";
    document.getElementById("thenewPrice120").innerHTML=newPrice;
    document.getElementById("thenewCountry120").innerHTML=newCountry;
}
 getNewItemData120();

 getNewItemData121= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName121").innerHTML="tea";
    document.getElementById("thenewPrice121").innerHTML=newPrice;
    document.getElementById("thenewCountry121").innerHTML=newCountry;
}
 getNewItemData121();

 getNewItemData122= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName122").innerHTML="tea";
    document.getElementById("thenewPrice122").innerHTML=newPrice;
    document.getElementById("thenewCountry122").innerHTML=newCountry;
}
 getNewItemData122();

 getNewItemData123= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName123").innerHTML="tea";
    document.getElementById("thenewPrice123").innerHTML=newPrice;
    document.getElementById("thenewCountry123").innerHTML=newCountry;
}
 getNewItemData123();

 getNewItemData124= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName124").innerHTML="tea";
    document.getElementById("thenewPrice124").innerHTML=newPrice;
    document.getElementById("thenewCountry124").innerHTML=newCountry;
}
 getNewItemData124();

 getNewItemData125= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName125").innerHTML="tea";
    document.getElementById("thenewPrice125").innerHTML=newPrice;
    document.getElementById("thenewCountry125").innerHTML=newCountry;
}
 getNewItemData125();

 getNewItemData126= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tea');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName126").innerHTML="tea";
    document.getElementById("thenewPrice126").innerHTML=newPrice;
    document.getElementById("thenewCountry126").innerHTML=newCountry;
}
 getNewItemData126();

 getNewItemData127= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName127").innerHTML="toiletpaper";
    document.getElementById("thenewPrice127").innerHTML=newPrice;
    document.getElementById("thenewCountry127").innerHTML=newCountry;
}
 getNewItemData127();

 getNewItemData128= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName128").innerHTML="toiletpaper";
    document.getElementById("thenewPrice128").innerHTML=newPrice;
    document.getElementById("thenewCountry128").innerHTML=newCountry;
}
 getNewItemData128();

 getNewItemData129= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName129").innerHTML="toiletpaper";
    document.getElementById("thenewPrice129").innerHTML=newPrice;
    document.getElementById("thenewCountry129").innerHTML=newCountry;
}
 getNewItemData129();

 getNewItemData130= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName130").innerHTML="toiletpaper";
    document.getElementById("thenewPrice130").innerHTML=newPrice;
    document.getElementById("thenewCountry130").innerHTML=newCountry;
}
 getNewItemData130();

 getNewItemData131= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName131").innerHTML="toiletpaper";
    document.getElementById("thenewPrice131").innerHTML=newPrice;
    document.getElementById("thenewCountry131").innerHTML=newCountry;
}
 getNewItemData131();

 getNewItemData132= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName132").innerHTML="toiletpaper";
    document.getElementById("thenewPrice132").innerHTML=newPrice;
    document.getElementById("thenewCountry132").innerHTML=newCountry;
}
 getNewItemData132();

 getNewItemData133= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName133").innerHTML="toiletpaper";
    document.getElementById("thenewPrice133").innerHTML=newPrice;
    document.getElementById("thenewCountry133").innerHTML=newCountry;
}
 getNewItemData133();

 getNewItemData134= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName134").innerHTML="toiletpaper";
    document.getElementById("thenewPrice134").innerHTML=newPrice;
    document.getElementById("thenewCountry134").innerHTML=newCountry;
}
 getNewItemData134();

 getNewItemData135= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName135").innerHTML="toiletpaper";
    document.getElementById("thenewPrice135").innerHTML=newPrice;
    document.getElementById("thenewCountry135").innerHTML=newCountry;
}
 getNewItemData135();

 getNewItemData136= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName136").innerHTML="toiletpaper";
    document.getElementById("thenewPrice136").innerHTML=newPrice;
    document.getElementById("thenewCountry136").innerHTML=newCountry;
}
 getNewItemData136();

 getNewItemData137= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName137").innerHTML="toiletpaper";
    document.getElementById("thenewPrice137").innerHTML=newPrice;
    document.getElementById("thenewCountry137").innerHTML=newCountry;
}
 getNewItemData137();

 getNewItemData138= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName138").innerHTML="toiletpaper";
    document.getElementById("thenewPrice138").innerHTML=newPrice;
    document.getElementById("thenewCountry138").innerHTML=newCountry;
}
 getNewItemData138();

 getNewItemData139= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName139").innerHTML="toiletpaper";
    document.getElementById("thenewPrice139").innerHTML=newPrice;
    document.getElementById("thenewCountry139").innerHTML=newCountry;
}
 getNewItemData139();

 getNewItemData140= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('toiletpaper');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName140").innerHTML="toiletpaper";
    document.getElementById("thenewPrice140").innerHTML=newPrice;
    document.getElementById("thenewCountry140").innerHTML=newCountry;
}
 getNewItemData140();

 getNewItemData141= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName141").innerHTML="socks";
    document.getElementById("thenewPrice141").innerHTML=newPrice;
    document.getElementById("thenewCountry141").innerHTML=newCountry;
}
 getNewItemData141();

 getNewItemData142= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName142").innerHTML="socks";
    document.getElementById("thenewPrice142").innerHTML=newPrice;
    document.getElementById("thenewCountry142").innerHTML=newCountry;
}
 getNewItemData142();

 getNewItemData143= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName143").innerHTML="socks";
    document.getElementById("thenewPrice143").innerHTML=newPrice;
    document.getElementById("thenewCountry143").innerHTML=newCountry;
}
 getNewItemData143();

 getNewItemData144= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName144").innerHTML="socks";
    document.getElementById("thenewPrice144").innerHTML=newPrice;
    document.getElementById("thenewCountry144").innerHTML=newCountry;
}
 getNewItemData144();

 getNewItemData145= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName145").innerHTML="socks";
    document.getElementById("thenewPrice145").innerHTML=newPrice;
    document.getElementById("thenewCountry145").innerHTML=newCountry;
}
 getNewItemData145();

 getNewItemData146= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName146").innerHTML="socks";
    document.getElementById("thenewPrice146").innerHTML=newPrice;
    document.getElementById("thenewCountry146").innerHTML=newCountry;
}
 getNewItemData146();

 getNewItemData147= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName147").innerHTML="socks";
    document.getElementById("thenewPrice147").innerHTML=newPrice;
    document.getElementById("thenewCountry147").innerHTML=newCountry;
}
 getNewItemData147();

 getNewItemData148= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName148").innerHTML="socks";
    document.getElementById("thenewPrice148").innerHTML=newPrice;
    document.getElementById("thenewCountry148").innerHTML=newCountry;
}
 getNewItemData148();

 getNewItemData149= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName149").innerHTML="socks";
    document.getElementById("thenewPrice149").innerHTML=newPrice;
    document.getElementById("thenewCountry149").innerHTML=newCountry;
}
 getNewItemData149();

 getNewItemData150= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName150").innerHTML="socks";
    document.getElementById("thenewPrice150").innerHTML=newPrice;
    document.getElementById("thenewCountry150").innerHTML=newCountry;
}
 getNewItemData150();

 getNewItemData151= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName151").innerHTML="socks";
    document.getElementById("thenewPrice151").innerHTML=newPrice;
    document.getElementById("thenewCountry151").innerHTML=newCountry;
}
 getNewItemData151();

 getNewItemData152= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName152").innerHTML="socks";
    document.getElementById("thenewPrice152").innerHTML=newPrice;
    document.getElementById("thenewCountry152").innerHTML=newCountry;
}
 getNewItemData152();

 getNewItemData153= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName153").innerHTML="socks";
    document.getElementById("thenewPrice153").innerHTML=newPrice;
    document.getElementById("thenewCountry153").innerHTML=newCountry;
}
 getNewItemData153();

 getNewItemData154= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('socks');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName154").innerHTML="socks";
    document.getElementById("thenewPrice154").innerHTML=newPrice;
    document.getElementById("thenewCountry154").innerHTML=newCountry;
}
 getNewItemData154();

 getNewItemData155= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName155").innerHTML="lumber2412";
    document.getElementById("thenewPrice155").innerHTML=newPrice;
    document.getElementById("thenewCountry155").innerHTML=newCountry;
}
 getNewItemData155();

 getNewItemData156= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName156").innerHTML="lumber2412";
    document.getElementById("thenewPrice156").innerHTML=newPrice;
    document.getElementById("thenewCountry156").innerHTML=newCountry;
}
 getNewItemData156();

 getNewItemData157= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName157").innerHTML="lumber2412";
    document.getElementById("thenewPrice157").innerHTML=newPrice;
    document.getElementById("thenewCountry157").innerHTML=newCountry;
}
 getNewItemData157();

 getNewItemData158= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName158").innerHTML="lumber2412";
    document.getElementById("thenewPrice158").innerHTML=newPrice;
    document.getElementById("thenewCountry158").innerHTML=newCountry;
}
 getNewItemData158();

 getNewItemData159= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName159").innerHTML="lumber2412";
    document.getElementById("thenewPrice159").innerHTML=newPrice;
    document.getElementById("thenewCountry159").innerHTML=newCountry;
}
 getNewItemData159();

 getNewItemData160= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName160").innerHTML="lumber2412";
    document.getElementById("thenewPrice160").innerHTML=newPrice;
    document.getElementById("thenewCountry160").innerHTML=newCountry;
}
 getNewItemData160();

 getNewItemData161= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName161").innerHTML="lumber2412";
    document.getElementById("thenewPrice161").innerHTML=newPrice;
    document.getElementById("thenewCountry161").innerHTML=newCountry;
}
 getNewItemData161();

 getNewItemData162= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName162").innerHTML="lumber2412";
    document.getElementById("thenewPrice162").innerHTML=newPrice;
    document.getElementById("thenewCountry162").innerHTML=newCountry;
}
 getNewItemData162();

 getNewItemData163= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName163").innerHTML="lumber2412";
    document.getElementById("thenewPrice163").innerHTML=newPrice;
    document.getElementById("thenewCountry163").innerHTML=newCountry;
}
 getNewItemData163();

 getNewItemData164= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName164").innerHTML="lumber2412";
    document.getElementById("thenewPrice164").innerHTML=newPrice;
    document.getElementById("thenewCountry164").innerHTML=newCountry;
}
 getNewItemData164();

 getNewItemData165= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName165").innerHTML="lumber2412";
    document.getElementById("thenewPrice165").innerHTML=newPrice;
    document.getElementById("thenewCountry165").innerHTML=newCountry;
}
 getNewItemData165();

 getNewItemData166= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName166").innerHTML="lumber2412";
    document.getElementById("thenewPrice166").innerHTML=newPrice;
    document.getElementById("thenewCountry166").innerHTML=newCountry;
}
 getNewItemData166();

 getNewItemData167= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName167").innerHTML="lumber2412";
    document.getElementById("thenewPrice167").innerHTML=newPrice;
    document.getElementById("thenewCountry167").innerHTML=newCountry;
}
 getNewItemData167();

 getNewItemData168= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('lumber2412');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName168").innerHTML="lumber2412";
    document.getElementById("thenewPrice168").innerHTML=newPrice;
    document.getElementById("thenewCountry168").innerHTML=newCountry;
}
 getNewItemData168();

 getNewItemData169= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName169").innerHTML="ply4834";
    document.getElementById("thenewPrice169").innerHTML=newPrice;
    document.getElementById("thenewCountry169").innerHTML=newCountry;
}
 getNewItemData169();

 getNewItemData170= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName170").innerHTML="ply4834";
    document.getElementById("thenewPrice170").innerHTML=newPrice;
    document.getElementById("thenewCountry170").innerHTML=newCountry;
}
 getNewItemData170();

 getNewItemData171= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName171").innerHTML="ply4834";
    document.getElementById("thenewPrice171").innerHTML=newPrice;
    document.getElementById("thenewCountry171").innerHTML=newCountry;
}
 getNewItemData171();

 getNewItemData172= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName172").innerHTML="ply4834";
    document.getElementById("thenewPrice172").innerHTML=newPrice;
    document.getElementById("thenewCountry172").innerHTML=newCountry;
}
 getNewItemData172();

 getNewItemData173= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName173").innerHTML="ply4834";
    document.getElementById("thenewPrice173").innerHTML=newPrice;
    document.getElementById("thenewCountry173").innerHTML=newCountry;
}
 getNewItemData173();

 getNewItemData174= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName174").innerHTML="ply4834";
    document.getElementById("thenewPrice174").innerHTML=newPrice;
    document.getElementById("thenewCountry174").innerHTML=newCountry;
}
 getNewItemData174();

 getNewItemData175= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName175").innerHTML="ply4834";
    document.getElementById("thenewPrice175").innerHTML=newPrice;
    document.getElementById("thenewCountry175").innerHTML=newCountry;
}
 getNewItemData175();

 getNewItemData176= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName176").innerHTML="ply4834";
    document.getElementById("thenewPrice176").innerHTML=newPrice;
    document.getElementById("thenewCountry176").innerHTML=newCountry;
}
 getNewItemData176();

 getNewItemData177= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName177").innerHTML="ply4834";
    document.getElementById("thenewPrice177").innerHTML=newPrice;
    document.getElementById("thenewCountry177").innerHTML=newCountry;
}
 getNewItemData177();

 getNewItemData178= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName178").innerHTML="ply4834";
    document.getElementById("thenewPrice178").innerHTML=newPrice;
    document.getElementById("thenewCountry178").innerHTML=newCountry;
}
 getNewItemData178();

 getNewItemData179= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName179").innerHTML="ply4834";
    document.getElementById("thenewPrice179").innerHTML=newPrice;
    document.getElementById("thenewCountry179").innerHTML=newCountry;
}
 getNewItemData179();

 getNewItemData180= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName180").innerHTML="ply4834";
    document.getElementById("thenewPrice180").innerHTML=newPrice;
    document.getElementById("thenewCountry180").innerHTML=newCountry;
}
 getNewItemData180(); 

 getNewItemData181= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName181").innerHTML="ply4834";
    document.getElementById("thenewPrice181").innerHTML=newPrice;
    document.getElementById("thenewCountry181").innerHTML=newCountry;
}
 getNewItemData181(); 

 getNewItemData182= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('ply4834');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName182").innerHTML="ply4834";
    document.getElementById("thenewPrice182").innerHTML=newPrice;
    document.getElementById("thenewCountry182").innerHTML=newCountry;
}
 getNewItemData182(); 

 getNewItemData183= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-1;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName183").innerHTML="tshirt";
    document.getElementById("thenewPrice183").innerHTML=newPrice;
    document.getElementById("thenewCountry183").innerHTML=newCountry;
}
 getNewItemData183(); 

 getNewItemData184= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-2;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName184").innerHTML="tshirt";
    document.getElementById("thenewPrice184").innerHTML=newPrice;
    document.getElementById("thenewCountry184").innerHTML=newCountry;
}
 getNewItemData184(); 

 getNewItemData185= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-3;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName185").innerHTML="tshirt";
    document.getElementById("thenewPrice185").innerHTML=newPrice;
    document.getElementById("thenewCountry185").innerHTML=newCountry;
}
 getNewItemData185(); 

 getNewItemData186= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-4;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName186").innerHTML="tshirt";
    document.getElementById("thenewPrice186").innerHTML=newPrice;
    document.getElementById("thenewCountry186").innerHTML=newCountry;
}
 getNewItemData186(); 

 getNewItemData187= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-5;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName187").innerHTML="tshirt";
    document.getElementById("thenewPrice187").innerHTML=newPrice;
    document.getElementById("thenewCountry187").innerHTML=newCountry;
}
 getNewItemData187(); 

 getNewItemData188= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-6;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName188").innerHTML="tshirt";
    document.getElementById("thenewPrice188").innerHTML=newPrice;
    document.getElementById("thenewCountry188").innerHTML=newCountry;
}
 getNewItemData188(); 

 getNewItemData189= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-7;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName189").innerHTML="tshirt";
    document.getElementById("thenewPrice189").innerHTML=newPrice;
    document.getElementById("thenewCountry189").innerHTML=newCountry;
}
 getNewItemData189(); 

 getNewItemData190= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-8;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName190").innerHTML="tshirt";
    document.getElementById("thenewPrice190").innerHTML=newPrice;
    document.getElementById("thenewCountry190").innerHTML=newCountry;
}
 getNewItemData190(); 

 getNewItemData191= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-9;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName191").innerHTML="tshirt";
    document.getElementById("thenewPrice191").innerHTML=newPrice;
    document.getElementById("thenewCountry191").innerHTML=newCountry;
}
 getNewItemData191(); 

 getNewItemData192= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-10;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName192").innerHTML="tshirt";
    document.getElementById("thenewPrice192").innerHTML=newPrice;
    document.getElementById("thenewCountry192").innerHTML=newCountry;
}
 getNewItemData192(); 

 getNewItemData193= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-11;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName193").innerHTML="tshirt";
    document.getElementById("thenewPrice193").innerHTML=newPrice;
    document.getElementById("thenewCountry193").innerHTML=newCountry;
}
 getNewItemData193(); 

 getNewItemData194= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-12;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName194").innerHTML="tshirt";
    document.getElementById("thenewPrice194").innerHTML=newPrice;
    document.getElementById("thenewCountry194").innerHTML=newCountry;
}
 getNewItemData194(); 

 getNewItemData195= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-13;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName195").innerHTML="tshirt";
    document.getElementById("thenewPrice195").innerHTML=newPrice;
    document.getElementById("thenewCountry195").innerHTML=newCountry;
}
 getNewItemData195(); 

 getNewItemData196= async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const newInfo = await query.find();
    count = newInfo.length-14;
     const Country=newInfo[count];
     const newCountry=Country.get('Country');
     const countryPrice=Country.get('tshirt');
     const newConv=Country.get('Conversion');
     let newPrice=(countryPrice/newConv);
     newPrice=newPrice.toFixed(2);
    document.getElementById("theobjectName196").innerHTML="tshirt";
    document.getElementById("thenewPrice196").innerHTML=newPrice;
    document.getElementById("thenewCountry196").innerHTML=newCountry;
}
 getNewItemData196(); 




