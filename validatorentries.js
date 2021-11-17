//this .js file used to update the countrydata.html page from the moralis database

getNewItemData1 = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    const query = new Moralis.Query("Vdata");
    query.equalTo("name","tunacan");
    const newInfo = await query.find();
    entrycountItem1 = newInfo.length-1;
    console.log("entrycountItem1 " + entrycountItem1);
    const object1 = newInfo[entrycountItem1];
    console.log(newInfo[entrycountItem1]);
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
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-2;
        const object2 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-3;
        const object3 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-4;
        const object4 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-5;
        const object5 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-6;
        const object6 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-7;
        const object7 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-8;
        const object8 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-9;
        const object9 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-10;
        const object10 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-11;
        const object11 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-12;
        const object12 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-13;
        const object13 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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
        query.equalTo("name","tunacan");
        const newInfo = await query.find();
        entrycountItem1 = newInfo.length-14;
        const object14 = newInfo[entrycountItem1];
        console.log(newInfo[entrycountItem1]);
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

    getNewItemData15 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-1;
        const object15 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
        const objectName15 = object15.get('name');
        const newPrice15 = object15.get('price');
        const newCountry15 = object15.get('country');
        console.log ("the new price of "+objectName15+" is $"+ newPrice15);
        document.getElementById("theobjectName15").innerHTML=objectName15;
        document.getElementById("thenewPrice15").innerHTML=newPrice15;
        document.getElementById("thenewCountry15").innerHTML=newCountry15;
        // return newPrice;
    }
    getNewItemData15();

    getNewItemData16 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-2;
        const object16 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-3;
        const object17 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-4;
        const object18 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-5;
        const object19 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-6;
        const object20 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-7;
        const object21 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-8;
        const object22 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-9;
        const object23 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-10;
        const object24 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-11;
        const object25 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-12;
        const object26 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-13;
        const object27 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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
        query.equalTo("name","tomatocan");
        const newInfo = await query.find();
        entrycountItem2 = newInfo.length-14;
        const object28 = newInfo[entrycountItem2];
        console.log(newInfo[entrycountItem2]);
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

    getNewItemData29 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-1;
        const object29 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem2]);
        const objectName29 = object29.get('name');
        const newPrice29 = object29.get('price');
        const newCountry29 = object29.get('country');
        console.log ("the new price of "+objectName29+" is $"+ newPrice29);
        document.getElementById("theobjectName29").innerHTML=objectName29;
        document.getElementById("thenewPrice29").innerHTML=newPrice29;
        document.getElementById("thenewCountry29").innerHTML=newCountry29;
        // return newPrice;
    }
    getNewItemData29();

    getNewItemData30 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-2;
        const object30 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName30 = object30.get('name');
        const newPrice30 = object30.get('price');
        const newCountry30 = object30.get('country');
        console.log ("the new price of "+objectName30+" is $"+ newPrice30);
        document.getElementById("theobjectName30").innerHTML=objectName30;
        document.getElementById("thenewPrice30").innerHTML=newPrice30;
        document.getElementById("thenewCountry30").innerHTML=newCountry30;
        // return newPrice;
    }
    getNewItemData30();

    getNewItemData31 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-3;
        const object31 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName31 = object31.get('name');
        const newPrice31 = object31.get('price');
        const newCountry31 = object31.get('country');
        console.log ("the new price of "+objectName31+" is $"+ newPrice31);
        document.getElementById("theobjectName31").innerHTML=objectName31;
        document.getElementById("thenewPrice31").innerHTML=newPrice31;
        document.getElementById("thenewCountry31").innerHTML=newCountry31;
        // return newPrice;
    }
    getNewItemData31();

    getNewItemData32 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-4;
        const object32 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName32 = object32.get('name');
        const newPrice32 = object32.get('price');
        const newCountry32 = object32.get('country');
        console.log ("the new price of "+objectName32+" is $"+ newPrice32);
        document.getElementById("theobjectName32").innerHTML=objectName32;
        document.getElementById("thenewPrice32").innerHTML=newPrice32;
        document.getElementById("thenewCountry32").innerHTML=newCountry32;
        // return newPrice;
    }
    getNewItemData32();

    getNewItemData33 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-5;
        const object33 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName33 = object33.get('name');
        const newPrice33 = object33.get('price');
        const newCountry33 = object33.get('country');
        console.log ("the new price of "+objectName33+" is $"+ newPrice33);
        document.getElementById("theobjectName33").innerHTML=objectName33;
        document.getElementById("thenewPrice33").innerHTML=newPrice33;
        document.getElementById("thenewCountry33").innerHTML=newCountry33;
        // return newPrice;
    }
    getNewItemData33();

    getNewItemData34 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-6;
        const object34 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName34 = object34.get('name');
        const newPrice34 = object34.get('price');
        const newCountry34 = object34.get('country');
        console.log ("the new price of "+objectName34+" is $"+ newPrice34);
        document.getElementById("theobjectName34").innerHTML=objectName34;
        document.getElementById("thenewPrice34").innerHTML=newPrice34;
        document.getElementById("thenewCountry34").innerHTML=newCountry34;
        // return newPrice;
    }
    getNewItemData34();

    getNewItemData35 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-7;
        const object35 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName35 = object35.get('name');
        const newPrice35 = object35.get('price');
        const newCountry35 = object35.get('country');
        console.log ("the new price of "+objectName35+" is $"+ newPrice35);
        document.getElementById("theobjectName35").innerHTML=objectName35;
        document.getElementById("thenewPrice35").innerHTML=newPrice35;
        document.getElementById("thenewCountry35").innerHTML=newCountry35;
        // return newPrice;
    }
    getNewItemData35();

    getNewItemData36 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-8;
        const object36 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName36 = object36.get('name');
        const newPrice36 = object36.get('price');
        const newCountry36 = object36.get('country');
        console.log ("the new price of "+objectName36+" is $"+ newPrice36);
        document.getElementById("theobjectName36").innerHTML=objectName36;
        document.getElementById("thenewPrice36").innerHTML=newPrice36;
        document.getElementById("thenewCountry36").innerHTML=newCountry36;
        // return newPrice;
    }
    getNewItemData36();

    getNewItemData37 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-9;
        const object37 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName37 = object37.get('name');
        const newPrice37 = object37.get('price');
        const newCountry37 = object37.get('country');
        console.log ("the new price of "+objectName37+" is $"+ newPrice37);
        document.getElementById("theobjectName37").innerHTML=objectName37;
        document.getElementById("thenewPrice37").innerHTML=newPrice37;
        document.getElementById("thenewCountry37").innerHTML=newCountry37;
        // return newPrice;
    }
    getNewItemData37();

    getNewItemData38 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-10;
        const object38 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName38 = object38.get('name');
        const newPrice38 = object38.get('price');
        const newCountry38 = object38.get('country');
        console.log ("the new price of "+objectName38+" is $"+ newPrice38);
        document.getElementById("theobjectName38").innerHTML=objectName38;
        document.getElementById("thenewPrice38").innerHTML=newPrice38;
        document.getElementById("thenewCountry38").innerHTML=newCountry38;
        // return newPrice;
    }
    getNewItemData38();

    getNewItemData39 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-11;
        const object39 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName39 = object39.get('name');
        const newPrice39 = object39.get('price');
        const newCountry39 = object39.get('country');
        console.log ("the new price of "+objectName39+" is $"+ newPrice39);
        document.getElementById("theobjectName39").innerHTML=objectName39;
        document.getElementById("thenewPrice39").innerHTML=newPrice39;
        document.getElementById("thenewCountry39").innerHTML=newCountry39;
        // return newPrice;
    }
    getNewItemData39();

    getNewItemData40 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-12;
        const object40 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName40 = object40.get('name');
        const newPrice40= object40.get('price');
        const newCountry40 = object40.get('country');
        console.log ("the new price of "+objectName40+" is $"+ newPrice40);
        document.getElementById("theobjectName40").innerHTML=objectName40;
        document.getElementById("thenewPrice40").innerHTML=newPrice40;
        document.getElementById("thenewCountry40").innerHTML=newCountry40;
        // return newPrice;
    }
    getNewItemData40(); 

    getNewItemData41 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-13;
        const object41 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName41 = object41.get('name');
        const newPrice41= object41.get('price');
        const newCountry41 = object41.get('country');
        console.log ("the new price of "+objectName41+" is $"+ newPrice41);
        document.getElementById("theobjectName41").innerHTML=objectName41;
        document.getElementById("thenewPrice41").innerHTML=newPrice41;
        document.getElementById("thenewCountry41").innerHTML=newCountry41;
        // return newPrice;
    }
    getNewItemData41(); 

    getNewItemData42 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","rice");
        const newInfo = await query.find();
        entrycountItem3 = newInfo.length-14;
        const object42 = newInfo[entrycountItem3];
        console.log(newInfo[entrycountItem3]);
        const objectName42 = object42.get('name');
        const newPrice42= object42.get('price');
        const newCountry42 = object42.get('country');
        console.log ("the new price of "+objectName42+" is $"+ newPrice42);
        document.getElementById("theobjectName42").innerHTML=objectName42;
        document.getElementById("thenewPrice42").innerHTML=newPrice42;
        document.getElementById("thenewCountry42").innerHTML=newCountry42;
        // return newPrice;
    }
    getNewItemData42(); 

    getNewItemData43 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-1;
        const object43 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName43 = object43.get('name');
        const newPrice43= object43.get('price');
        const newCountry43 = object43.get('country');
        console.log ("the new price of "+objectName43+" is $"+ newPrice43);
        document.getElementById("theobjectName43").innerHTML=objectName43;
        document.getElementById("thenewPrice43").innerHTML=newPrice43;
        document.getElementById("thenewCountry43").innerHTML=newCountry43;
        // return newPrice;
    }
    getNewItemData43();

    getNewItemData44 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-2;
        const object44 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName44 = object44.get('name');
        const newPrice44= object44.get('price');
        const newCountry44 = object44.get('country');
        console.log ("the new price of "+objectName44+" is $"+ newPrice44);
        document.getElementById("theobjectName44").innerHTML=objectName44;
        document.getElementById("thenewPrice44").innerHTML=newPrice44;
        document.getElementById("thenewCountry44").innerHTML=newCountry44;
        // return newPrice;
    }
    getNewItemData44();

    getNewItemData45 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-3;
        const object45 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName45 = object45.get('name');
        const newPrice45= object45.get('price');
        const newCountry45 = object45.get('country');
        console.log ("the new price of "+objectName45+" is $"+ newPrice45);
        document.getElementById("theobjectName45").innerHTML=objectName45;
        document.getElementById("thenewPrice45").innerHTML=newPrice45;
        document.getElementById("thenewCountry45").innerHTML=newCountry45;
        // return newPrice;
    }
    getNewItemData45();

    getNewItemData46 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-4;
        const object46 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName46 = object46.get('name');
        const newPrice46= object46.get('price');
        const newCountry46 = object46.get('country');
        console.log ("the new price of "+objectName46+" is $"+ newPrice46);
        document.getElementById("theobjectName46").innerHTML=objectName46;
        document.getElementById("thenewPrice46").innerHTML=newPrice46;
        document.getElementById("thenewCountry46").innerHTML=newCountry46;
        // return newPrice;
    }
    getNewItemData46();

    getNewItemData47 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-5;
        const object47 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName47 = object47.get('name');
        const newPrice47= object47.get('price');
        const newCountry47 = object47.get('country');
        console.log ("the new price of "+objectName47+" is $"+ newPrice47);
        document.getElementById("theobjectName47").innerHTML=objectName47;
        document.getElementById("thenewPrice47").innerHTML=newPrice47;
        document.getElementById("thenewCountry47").innerHTML=newCountry47;
        // return newPrice;
    }
    getNewItemData47();

    getNewItemData48 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-6;
        const object48 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName48 = object48.get('name');
        const newPrice48= object48.get('price');
        const newCountry48 = object48.get('country');
        console.log ("the new price of "+objectName48+" is $"+ newPrice48);
        document.getElementById("theobjectName48").innerHTML=objectName48;
        document.getElementById("thenewPrice48").innerHTML=newPrice48;
        document.getElementById("thenewCountry48").innerHTML=newCountry48;
        // return newPrice;
    }
    getNewItemData48();

    getNewItemData49 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-7;
        const object49 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName49 = object49.get('name');
        const newPrice49= object49.get('price');
        const newCountry49 = object49.get('country');
        console.log ("the new price of "+objectName49+" is $"+ newPrice49);
        document.getElementById("theobjectName49").innerHTML=objectName49;
        document.getElementById("thenewPrice49").innerHTML=newPrice49;
        document.getElementById("thenewCountry49").innerHTML=newCountry49;
        // return newPrice;
    }
    getNewItemData49();

    getNewItemData50 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-8;
        const object50 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName50 = object50.get('name');
        const newPrice50= object50.get('price');
        const newCountry50 = object50.get('country');
        console.log ("the new price of "+objectName50+" is $"+ newPrice50);
        document.getElementById("theobjectName50").innerHTML=objectName50;
        document.getElementById("thenewPrice50").innerHTML=newPrice50;
        document.getElementById("thenewCountry50").innerHTML=newCountry50;
        // return newPrice;
    }
    getNewItemData50();

    getNewItemData51 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-9;
        const object51 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName51 = object51.get('name');
        const newPrice51= object51.get('price');
        const newCountry51 = object51.get('country');
        console.log ("the new price of "+objectName51+" is $"+ newPrice51);
        document.getElementById("theobjectName51").innerHTML=objectName51;
        document.getElementById("thenewPrice51").innerHTML=newPrice51;
        document.getElementById("thenewCountry51").innerHTML=newCountry51;
        // return newPrice;
    }
    getNewItemData51();

    getNewItemData52 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-10;
        const object52 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName52 = object52.get('name');
        const newPrice52= object52.get('price');
        const newCountry52 = object52.get('country');
        console.log ("the new price of "+objectName52+" is $"+ newPrice52);
        document.getElementById("theobjectName52").innerHTML=objectName52;
        document.getElementById("thenewPrice52").innerHTML=newPrice52;
        document.getElementById("thenewCountry52").innerHTML=newCountry52;
        // return newPrice;
    }
    getNewItemData52();

    getNewItemData53 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-11;
        const object53 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName53 = object53.get('name');
        const newPrice53= object53.get('price');
        const newCountry53 = object53.get('country');
        console.log ("the new price of "+objectName53+" is $"+ newPrice53);
        document.getElementById("theobjectName53").innerHTML=objectName53;
        document.getElementById("thenewPrice53").innerHTML=newPrice53;
        document.getElementById("thenewCountry53").innerHTML=newCountry53;
        // return newPrice;
    }
    getNewItemData53();

    getNewItemData54 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-12;
        const object54 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName54 = object54.get('name');
        const newPrice54= object54.get('price');
        const newCountry54 = object54.get('country');
        console.log ("the new price of "+objectName54+" is $"+ newPrice54);
        document.getElementById("theobjectName54").innerHTML=objectName54;
        document.getElementById("thenewPrice54").innerHTML=newPrice54;
        document.getElementById("thenewCountry54").innerHTML=newCountry54;
        // return newPrice;
    }
    getNewItemData54();

    getNewItemData55 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-13;
        const object55 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName55 = object55.get('name');
        const newPrice55= object55.get('price');
        const newCountry55 = object55.get('country');
        console.log ("the new price of "+objectName55+" is $"+ newPrice55);
        document.getElementById("theobjectName55").innerHTML=objectName55;
        document.getElementById("thenewPrice55").innerHTML=newPrice55;
        document.getElementById("thenewCountry55").innerHTML=newCountry55;
        // return newPrice;
    }
    getNewItemData55();

    getNewItemData56 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","soap");
        const newInfo = await query.find();
        entrycountItem4 = newInfo.length-14;
        const object56 = newInfo[entrycountItem4];
        console.log(newInfo[entrycountItem4]);
        const objectName56 = object56.get('name');
        const newPrice56= object56.get('price');
        const newCountry56 = object56.get('country');
        console.log ("the new price of "+objectName56+" is $"+ newPrice56);
        document.getElementById("theobjectName56").innerHTML=objectName56;
        document.getElementById("thenewPrice56").innerHTML=newPrice56;
        document.getElementById("thenewCountry56").innerHTML=newCountry56;
        // return newPrice;
    }
    getNewItemData56();   

    getNewItemData57 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-1;
        const object57 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName57 = object57.get('name');
        const newPrice57= object57.get('price');
        const newCountry57 = object57.get('country');
        console.log ("the new price of "+objectName57+" is $"+ newPrice57);
        document.getElementById("theobjectName57").innerHTML=objectName57;
        document.getElementById("thenewPrice57").innerHTML=newPrice57;
        document.getElementById("thenewCountry57").innerHTML=newCountry57;
        // return newPrice;
    }
    getNewItemData57(); 

    getNewItemData58 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-2;
        const object58 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName58 = object58.get('name');
        const newPrice58= object58.get('price');
        const newCountry58 = object58.get('country');
        console.log ("the new price of "+objectName58+" is $"+ newPrice58);
        document.getElementById("theobjectName58").innerHTML=objectName58;
        document.getElementById("thenewPrice58").innerHTML=newPrice58;
        document.getElementById("thenewCountry58").innerHTML=newCountry58;
        // return newPrice;
    }
    getNewItemData58(); 

    getNewItemData59 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-3;
        const object59 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName59 = object59.get('name');
        const newPrice59= object59.get('price');
        const newCountry59 = object59.get('country');
        console.log ("the new price of "+objectName59+" is $"+ newPrice59);
        document.getElementById("theobjectName59").innerHTML=objectName59;
        document.getElementById("thenewPrice59").innerHTML=newPrice59;
        document.getElementById("thenewCountry59").innerHTML=newCountry59;
        // return newPrice;
    }
    getNewItemData59(); 

    getNewItemData60 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-4;
        const object60 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName60 = object60.get('name');
        const newPrice60= object60.get('price');
        const newCountry60 = object60.get('country');
        console.log ("the new price of "+objectName60+" is $"+ newPrice60);
        document.getElementById("theobjectName60").innerHTML=objectName60;
        document.getElementById("thenewPrice60").innerHTML=newPrice60;
        document.getElementById("thenewCountry60").innerHTML=newCountry60;
        // return newPrice;
    }
    getNewItemData60();

    getNewItemData61 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-5;
        const object61 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName61 = object61.get('name');
        const newPrice61= object61.get('price');
        const newCountry61 = object61.get('country');
        console.log ("the new price of "+objectName61+" is $"+ newPrice61);
        document.getElementById("theobjectName61").innerHTML=objectName61;
        document.getElementById("thenewPrice61").innerHTML=newPrice61;
        document.getElementById("thenewCountry61").innerHTML=newCountry61;
        // return newPrice;
    }
    getNewItemData61();

    getNewItemData62 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-6;
        const object62 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName62 = object62.get('name');
        const newPrice62= object62.get('price');
        const newCountry62 = object62.get('country');
        console.log ("the new price of "+objectName62+" is $"+ newPrice62);
        document.getElementById("theobjectName62").innerHTML=objectName62;
        document.getElementById("thenewPrice62").innerHTML=newPrice62;
        document.getElementById("thenewCountry62").innerHTML=newCountry62;
        // return newPrice;
    }
    getNewItemData62();

    getNewItemData63 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-7;
        const object63 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName63 = object63.get('name');
        const newPrice63= object63.get('price');
        const newCountry63 = object63.get('country');
        console.log ("the new price of "+objectName63+" is $"+ newPrice63);
        document.getElementById("theobjectName63").innerHTML=objectName63;
        document.getElementById("thenewPrice63").innerHTML=newPrice63;
        document.getElementById("thenewCountry63").innerHTML=newCountry63;
        // return newPrice;
    }
    getNewItemData63();

    getNewItemData64 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-8;
        const object64 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName64 = object64.get('name');
        const newPrice64= object64.get('price');
        const newCountry64 = object64.get('country');
        console.log ("the new price of "+objectName64+" is $"+ newPrice64);
        document.getElementById("theobjectName64").innerHTML=objectName64;
        document.getElementById("thenewPrice64").innerHTML=newPrice64;
        document.getElementById("thenewCountry64").innerHTML=newCountry64;
        // return newPrice;
    }
    getNewItemData64();

    getNewItemData65 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-9;
        const object65 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName65 = object65.get('name');
        const newPrice65= object65.get('price');
        const newCountry65 = object65.get('country');
        console.log ("the new price of "+objectName65+" is $"+ newPrice65);
        document.getElementById("theobjectName65").innerHTML=objectName65;
        document.getElementById("thenewPrice65").innerHTML=newPrice65;
        document.getElementById("thenewCountry65").innerHTML=newCountry65;
        // return newPrice;
    }
    getNewItemData65();

    getNewItemData66 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-10;
        const object66 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName66 = object66.get('name');
        const newPrice66= object66.get('price');
        const newCountry66 = object66.get('country');
        console.log ("the new price of "+objectName66+" is $"+ newPrice66);
        document.getElementById("theobjectName66").innerHTML=objectName66;
        document.getElementById("thenewPrice66").innerHTML=newPrice66;
        document.getElementById("thenewCountry66").innerHTML=newCountry66;
        // return newPrice;
    }
    getNewItemData66();

    getNewItemData67 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-11;
        const object67 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName67 = object67.get('name');
        const newPrice67= object67.get('price');
        const newCountry67 = object67.get('country');
        console.log ("the new price of "+objectName67+" is $"+ newPrice67);
        document.getElementById("theobjectName67").innerHTML=objectName67;
        document.getElementById("thenewPrice67").innerHTML=newPrice67;
        document.getElementById("thenewCountry67").innerHTML=newCountry67;
        // return newPrice;
    }
    getNewItemData67();

    getNewItemData68 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-12;
        const object68 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName68 = object68.get('name');
        const newPrice68= object68.get('price');
        const newCountry68 = object68.get('country');
        console.log ("the new price of "+objectName68+" is $"+ newPrice68);
        document.getElementById("theobjectName68").innerHTML=objectName68;
        document.getElementById("thenewPrice68").innerHTML=newPrice68;
        document.getElementById("thenewCountry68").innerHTML=newCountry68;
        // return newPrice;
    }
    getNewItemData68();

    getNewItemData69 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-13;
        const object69 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName69 = object69.get('name');
        const newPrice69= object69.get('price');
        const newCountry69 = object69.get('country');
        console.log ("the new price of "+objectName69+" is $"+ newPrice69);
        document.getElementById("theobjectName69").innerHTML=objectName69;
        document.getElementById("thenewPrice69").innerHTML=newPrice69;
        document.getElementById("thenewCountry69").innerHTML=newCountry69;
        // return newPrice;
    }
    getNewItemData69();

    getNewItemData70 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","water");
        const newInfo = await query.find();
        entrycountItem5 = newInfo.length-14;
        const object70 = newInfo[entrycountItem5];
        console.log(newInfo[entrycountItem5]);
        const objectName70 = object70.get('name');
        const newPrice70= object70.get('price');
        const newCountry70 = object70.get('country');
        console.log ("the new price of "+objectName70+" is $"+ newPrice70);
        document.getElementById("theobjectName70").innerHTML=objectName70;
        document.getElementById("thenewPrice70").innerHTML=newPrice70;
        document.getElementById("thenewCountry70").innerHTML=newCountry70;
        // return newPrice;
    }
    getNewItemData70();

    getNewItemData71 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-1;
        const object71 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName71 = object71.get('name');
        const newPrice71= object71.get('price');
        const newCountry71 = object71.get('country');
        console.log ("the new price of "+objectName71+" is $"+ newPrice71);
        document.getElementById("theobjectName71").innerHTML=objectName71;
        document.getElementById("thenewPrice71").innerHTML=newPrice71;
        document.getElementById("thenewCountry71").innerHTML=newCountry71;
        // return newPrice;
    }
    getNewItemData71();

    getNewItemData72 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-2;
        const object72 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName72 = object72.get('name');
        const newPrice72= object72.get('price');
        const newCountry72 = object72.get('country');
        console.log ("the new price of "+objectName72+" is $"+ newPrice72);
        document.getElementById("theobjectName72").innerHTML=objectName72;
        document.getElementById("thenewPrice72").innerHTML=newPrice72;
        document.getElementById("thenewCountry72").innerHTML=newCountry72;
        // return newPrice;
    }
    getNewItemData72();

    getNewItemData73 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-3;
        const object73 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName73 = object73.get('name');
        const newPrice73= object73.get('price');
        const newCountry73 = object73.get('country');
        console.log ("the new price of "+objectName73+" is $"+ newPrice73);
        document.getElementById("theobjectName73").innerHTML=objectName73;
        document.getElementById("thenewPrice73").innerHTML=newPrice73;
        document.getElementById("thenewCountry73").innerHTML=newCountry73;
        // return newPrice;
    }
    getNewItemData73();

    getNewItemData74 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-4;
        const object74 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName74 = object74.get('name');
        const newPrice74= object74.get('price');
        const newCountry74 = object74.get('country');
        console.log ("the new price of "+objectName74+" is $"+ newPrice74);
        document.getElementById("theobjectName74").innerHTML=objectName74;
        document.getElementById("thenewPrice74").innerHTML=newPrice74;
        document.getElementById("thenewCountry74").innerHTML=newCountry74;
        // return newPrice;
    }
    getNewItemData74();

    getNewItemData75 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-5;
        const object75 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName75 = object75.get('name');
        const newPrice75= object75.get('price');
        const newCountry75 = object75.get('country');
        console.log ("the new price of "+objectName75+" is $"+ newPrice75);
        document.getElementById("theobjectName75").innerHTML=objectName75;
        document.getElementById("thenewPrice75").innerHTML=newPrice75;
        document.getElementById("thenewCountry75").innerHTML=newCountry75;
        // return newPrice;
    }
    getNewItemData75();

    getNewItemData76 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-6;
        const object76 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName76 = object76.get('name');
        const newPrice76= object76.get('price');
        const newCountry76 = object76.get('country');
        console.log ("the new price of "+objectName76+" is $"+ newPrice76);
        document.getElementById("theobjectName76").innerHTML=objectName76;
        document.getElementById("thenewPrice76").innerHTML=newPrice76;
        document.getElementById("thenewCountry76").innerHTML=newCountry76;
        // return newPrice;
    }
    getNewItemData76();

    getNewItemData77 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-7;
        const object77 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName77 = object77.get('name');
        const newPrice77= object77.get('price');
        const newCountry77 = object77.get('country');
        console.log ("the new price of "+objectName77+" is $"+ newPrice77);
        document.getElementById("theobjectName77").innerHTML=objectName77;
        document.getElementById("thenewPrice77").innerHTML=newPrice77;
        document.getElementById("thenewCountry77").innerHTML=newCountry77;
        // return newPrice;
    }
    getNewItemData77();

    getNewItemData78 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-8;
        const object78 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName78 = object78.get('name');
        const newPrice78= object78.get('price');
        const newCountry78 = object78.get('country');
        console.log ("the new price of "+objectName78+" is $"+ newPrice78);
        document.getElementById("theobjectName78").innerHTML=objectName78;
        document.getElementById("thenewPrice78").innerHTML=newPrice78;
        document.getElementById("thenewCountry78").innerHTML=newCountry78;
        // return newPrice;
    }
    getNewItemData78();

    getNewItemData79 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-9;
        const object79 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName79 = object79.get('name');
        const newPrice79= object79.get('price');
        const newCountry79 = object79.get('country');
        console.log ("the new price of "+objectName79+" is $"+ newPrice79);
        document.getElementById("theobjectName79").innerHTML=objectName79;
        document.getElementById("thenewPrice79").innerHTML=newPrice79;
        document.getElementById("thenewCountry79").innerHTML=newCountry79;
        // return newPrice;
    }
    getNewItemData79();

    getNewItemData80 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-10;
        const object80 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName80 = object80.get('name');
        const newPrice80= object80.get('price');
        const newCountry80 = object80.get('country');
        console.log ("the new price of "+objectName80+" is $"+ newPrice80);
        document.getElementById("theobjectName80").innerHTML=objectName80;
        document.getElementById("thenewPrice80").innerHTML=newPrice80;
        document.getElementById("thenewCountry80").innerHTML=newCountry80;
        // return newPrice;
    }
    getNewItemData80();

    getNewItemData81 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-11;
        const object81 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName81 = object81.get('name');
        const newPrice81= object81.get('price');
        const newCountry81 = object81.get('country');
        console.log ("the new price of "+objectName81+" is $"+ newPrice81);
        document.getElementById("theobjectName81").innerHTML=objectName81;
        document.getElementById("thenewPrice81").innerHTML=newPrice81;
        document.getElementById("thenewCountry81").innerHTML=newCountry81;
        // return newPrice;
    }
    getNewItemData81();

    getNewItemData82 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-12;
        const object82 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName82 = object82.get('name');
        const newPrice82= object82.get('price');
        const newCountry82 = object82.get('country');
        console.log ("the new price of "+objectName82+" is $"+ newPrice82);
        document.getElementById("theobjectName82").innerHTML=objectName82;
        document.getElementById("thenewPrice82").innerHTML=newPrice82;
        document.getElementById("thenewCountry82").innerHTML=newCountry82;
        // return newPrice;
    }
    getNewItemData82();

    getNewItemData83 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-13;
        const object83 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName83 = object83.get('name');
        const newPrice83= object83.get('price');
        const newCountry83 = object83.get('country');
        console.log ("the new price of "+objectName83+" is $"+ newPrice83);
        document.getElementById("theobjectName83").innerHTML=objectName83;
        document.getElementById("thenewPrice83").innerHTML=newPrice83;
        document.getElementById("thenewCountry83").innerHTML=newCountry83;
        // return newPrice;
    }
    getNewItemData83();

    getNewItemData84 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","paper");
        const newInfo = await query.find();
        entrycountItem6 = newInfo.length-14;
        const object84 = newInfo[entrycountItem6];
        console.log(newInfo[entrycountItem6]);
        const objectName84 = object84.get('name');
        const newPrice84= object84.get('price');
        const newCountry84 = object84.get('country');
        console.log ("the new price of "+objectName84+" is $"+ newPrice84);
        document.getElementById("theobjectName84").innerHTML=objectName84;
        document.getElementById("thenewPrice84").innerHTML=newPrice84;
        document.getElementById("thenewCountry84").innerHTML=newCountry84;
        // return newPrice;
    }
    getNewItemData84();

    getNewItemData85 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-1;
        const object85 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName85 = object85.get('name');
        const newPrice85= object85.get('price');
        const newCountry85 = object85.get('country');
        console.log ("the new price of "+objectName85+" is $"+ newPrice85);
        document.getElementById("theobjectName85").innerHTML=objectName85;
        document.getElementById("thenewPrice85").innerHTML=newPrice85;
        document.getElementById("thenewCountry85").innerHTML=newCountry85;
        // return newPrice;
    }
    getNewItemData85();

    getNewItemData86 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-2;
        const object86 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName86 = object86.get('name');
        const newPrice86= object86.get('price');
        const newCountry86 = object86.get('country');
        console.log ("the new price of "+objectName86+" is $"+ newPrice86);
        document.getElementById("theobjectName86").innerHTML=objectName86;
        document.getElementById("thenewPrice86").innerHTML=newPrice86;
        document.getElementById("thenewCountry86").innerHTML=newCountry86;
        // return newPrice;
    }
    getNewItemData86();

    getNewItemData87 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-3;
        const object87 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName87 = object87.get('name');
        const newPrice87= object87.get('price');
        const newCountry87 = object87.get('country');
        console.log ("the new price of "+objectName87+" is $"+ newPrice87);
        document.getElementById("theobjectName87").innerHTML=objectName87;
        document.getElementById("thenewPrice87").innerHTML=newPrice87;
        document.getElementById("thenewCountry87").innerHTML=newCountry87;
        // return newPrice;
    }
    getNewItemData87();

    getNewItemData88 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-4;
        const object88 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName88 = object88.get('name');
        const newPrice88= object88.get('price');
        const newCountry88 = object88.get('country');
        console.log ("the new price of "+objectName88+" is $"+ newPrice88);
        document.getElementById("theobjectName88").innerHTML=objectName88;
        document.getElementById("thenewPrice88").innerHTML=newPrice88;
        document.getElementById("thenewCountry88").innerHTML=newCountry88;
        // return newPrice;
    }
    getNewItemData88();

    getNewItemData89 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-5;
        const object89 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName89 = object89.get('name');
        const newPrice89= object89.get('price');
        const newCountry89 = object89.get('country');
        console.log ("the new price of "+objectName89+" is $"+ newPrice89);
        document.getElementById("theobjectName89").innerHTML=objectName89;
        document.getElementById("thenewPrice89").innerHTML=newPrice89;
        document.getElementById("thenewCountry89").innerHTML=newCountry89;
        // return newPrice;
    }
    getNewItemData89();

    getNewItemData90 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-6;
        const object90 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName90 = object90.get('name');
        const newPrice90= object90.get('price');
        const newCountry90 = object90.get('country');
        console.log ("the new price of "+objectName90+" is $"+ newPrice90);
        document.getElementById("theobjectName90").innerHTML=objectName90;
        document.getElementById("thenewPrice90").innerHTML=newPrice90;
        document.getElementById("thenewCountry90").innerHTML=newCountry90;
        // return newPrice;
    }
    getNewItemData90();

    getNewItemData91 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-7;
        const object91 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName91 = object91.get('name');
        const newPrice91= object91.get('price');
        const newCountry91 = object91.get('country');
        console.log ("the new price of "+objectName91+" is $"+ newPrice91);
        document.getElementById("theobjectName91").innerHTML=objectName91;
        document.getElementById("thenewPrice91").innerHTML=newPrice91;
        document.getElementById("thenewCountry91").innerHTML=newCountry91;
        // return newPrice;
    }
    getNewItemData91();

    getNewItemData92 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-8;
        const object92 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName92 = object92.get('name');
        const newPrice92= object92.get('price');
        const newCountry92 = object92.get('country');
        console.log ("the new price of "+objectName92+" is $"+ newPrice92);
        document.getElementById("theobjectName92").innerHTML=objectName92;
        document.getElementById("thenewPrice92").innerHTML=newPrice92;
        document.getElementById("thenewCountry92").innerHTML=newCountry92;
        // return newPrice;
    }
    getNewItemData92();

    getNewItemData93 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-9;
        const object93 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName93 = object93.get('name');
        const newPrice93= object93.get('price');
        const newCountry93= object93.get('country');
        console.log ("the new price of "+objectName93+" is $"+ newPrice93);
        document.getElementById("theobjectName93").innerHTML=objectName93;
        document.getElementById("thenewPrice93").innerHTML=newPrice93;
        document.getElementById("thenewCountry93").innerHTML=newCountry93;
        // return newPrice;
    }
    getNewItemData93();

    getNewItemData94 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-10;
        const object94 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName94 = object94.get('name');
        const newPrice94= object94.get('price');
        const newCountry94= object94.get('country');
        console.log ("the new price of "+objectName94+" is $"+ newPrice94);
        document.getElementById("theobjectName94").innerHTML=objectName94;
        document.getElementById("thenewPrice94").innerHTML=newPrice94;
        document.getElementById("thenewCountry94").innerHTML=newCountry94;
        // return newPrice;
    }
    getNewItemData94();

    getNewItemData95 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-11;
        const object95 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName95 = object95.get('name');
        const newPrice95= object95.get('price');
        const newCountry95= object95.get('country');
        console.log ("the new price of "+objectName95+" is $"+ newPrice95);
        document.getElementById("theobjectName95").innerHTML=objectName95;
        document.getElementById("thenewPrice95").innerHTML=newPrice95;
        document.getElementById("thenewCountry95").innerHTML=newCountry95;
        // return newPrice;
    }
    getNewItemData95();

    getNewItemData96 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-12;
        const object96 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName96 = object96.get('name');
        const newPrice96= object96.get('price');
        const newCountry96= object96.get('country');
        console.log ("the new price of "+objectName96+" is $"+ newPrice96);
        document.getElementById("theobjectName96").innerHTML=objectName96;
        document.getElementById("thenewPrice96").innerHTML=newPrice96;
        document.getElementById("thenewCountry96").innerHTML=newCountry96;
        // return newPrice;
    }
    getNewItemData96();

    getNewItemData97 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-13;
        const object97 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName97 = object97.get('name');
        const newPrice97= object97.get('price');
        const newCountry97= object97.get('country');
        console.log ("the new price of "+objectName97+" is $"+ newPrice97);
        document.getElementById("theobjectName97").innerHTML=objectName97;
        document.getElementById("thenewPrice97").innerHTML=newPrice97;
        document.getElementById("thenewCountry97").innerHTML=newCountry97;
        // return newPrice;
    }
    getNewItemData97();

    getNewItemData98 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","alcohol");
        const newInfo = await query.find();
        entrycountItem7 = newInfo.length-14;
        const object98 = newInfo[entrycountItem7];
        console.log(newInfo[entrycountItem7]);
        const objectName98 = object98.get('name');
        const newPrice98= object98.get('price');
        const newCountry98= object98.get('country');
        console.log ("the new price of "+objectName98+" is $"+ newPrice98);
        document.getElementById("theobjectName98").innerHTML=objectName98;
        document.getElementById("thenewPrice98").innerHTML=newPrice98;
        document.getElementById("thenewCountry98").innerHTML=newCountry98;
        // return newPrice;
    }
    getNewItemData98();

    getNewItemData99 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-1;
        const object99 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName99 = object99.get('name');
        const newPrice99= object99.get('price');
        const newCountry99= object99.get('country');
        console.log ("the new price of "+objectName99+" is $"+ newPrice99);
        document.getElementById("theobjectName99").innerHTML=objectName99;
        document.getElementById("thenewPrice99").innerHTML=newPrice99;
        document.getElementById("thenewCountry99").innerHTML=newCountry99;
        // return newPrice;
    }
    getNewItemData99();

    getNewItemData100 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-2;
        const object100 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName100 = object100.get('name');
        const newPrice100= object100.get('price');
        const newCountry100= object100.get('country');
        console.log ("the new price of "+objectName100+" is $"+ newPrice100);
        document.getElementById("theobjectName100").innerHTML=objectName100;
        document.getElementById("thenewPrice100").innerHTML=newPrice100;
        document.getElementById("thenewCountry100").innerHTML=newCountry100;
        // return newPrice;
    }
    getNewItemData100();

    getNewItemData101 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-3;
        const object101 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName101 = object101.get('name');
        const newPrice101= object101.get('price');
        const newCountry101= object101.get('country');
        console.log ("the new price of "+objectName101+" is $"+ newPrice101);
        document.getElementById("theobjectName101").innerHTML=objectName101;
        document.getElementById("thenewPrice101").innerHTML=newPrice101;
        document.getElementById("thenewCountry101").innerHTML=newCountry101;
        // return newPrice;
    }
    getNewItemData101();

    getNewItemData102 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-4;
        const object102 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName102 = object102.get('name');
        const newPrice102= object102.get('price');
        const newCountry102= object102.get('country');
        console.log ("the new price of "+objectName102+" is $"+ newPrice102);
        document.getElementById("theobjectName102").innerHTML=objectName102;
        document.getElementById("thenewPrice102").innerHTML=newPrice102;
        document.getElementById("thenewCountry102").innerHTML=newCountry102;
        // return newPrice;
    }
    getNewItemData102();

    getNewItemData103 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-5;
        const object103 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName103 = object103.get('name');
        const newPrice103= object103.get('price');
        const newCountry103= object103.get('country');
        console.log ("the new price of "+objectName103+" is $"+ newPrice103);
        document.getElementById("theobjectName103").innerHTML=objectName103;
        document.getElementById("thenewPrice103").innerHTML=newPrice103;
        document.getElementById("thenewCountry103").innerHTML=newCountry103;
        // return newPrice;
    }
    getNewItemData103();

    getNewItemData104 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-6;
        const object104 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName104 = object104.get('name');
        const newPrice104= object104.get('price');
        const newCountry104= object104.get('country');
        console.log ("the new price of "+objectName104+" is $"+ newPrice104);
        document.getElementById("theobjectName104").innerHTML=objectName104;
        document.getElementById("thenewPrice104").innerHTML=newPrice104;
        document.getElementById("thenewCountry104").innerHTML=newCountry104;
        // return newPrice;
    }
    getNewItemData104();

    getNewItemData105 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-7;
        const object105 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName105 = object105.get('name');
        const newPrice105= object105.get('price');
        const newCountry105= object105.get('country');
        console.log ("the new price of "+objectName105+" is $"+ newPrice105);
        document.getElementById("theobjectName105").innerHTML=objectName105;
        document.getElementById("thenewPrice105").innerHTML=newPrice105;
        document.getElementById("thenewCountry105").innerHTML=newCountry105;
        // return newPrice;
    }
    getNewItemData105();

    getNewItemData106 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-8;
        const object106 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName106 = object106.get('name');
        const newPrice106= object106.get('price');
        const newCountry106= object106.get('country');
        console.log ("the new price of "+objectName106+" is $"+ newPrice106);
        document.getElementById("theobjectName106").innerHTML=objectName106;
        document.getElementById("thenewPrice106").innerHTML=newPrice106;
        document.getElementById("thenewCountry106").innerHTML=newCountry106;
        // return newPrice;
    }
    getNewItemData106();

    getNewItemData107 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-9;
        const object107 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName107 = object107.get('name');
        const newPrice107= object107.get('price');
        const newCountry107= object107.get('country');
        console.log ("the new price of "+objectName107+" is $"+ newPrice107);
        document.getElementById("theobjectName107").innerHTML=objectName107;
        document.getElementById("thenewPrice107").innerHTML=newPrice107;
        document.getElementById("thenewCountry107").innerHTML=newCountry107;
        // return newPrice;
    }
    getNewItemData107();

    getNewItemData108 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-10;
        const object108 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName108 = object108.get('name');
        const newPrice108= object108.get('price');
        const newCountry108= object108.get('country');
        console.log ("the new price of "+objectName108+" is $"+ newPrice108);
        document.getElementById("theobjectName108").innerHTML=objectName108;
        document.getElementById("thenewPrice108").innerHTML=newPrice108;
        document.getElementById("thenewCountry108").innerHTML=newCountry108;
        // return newPrice;
    }
    getNewItemData108();

    getNewItemData109 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-11;
        const object109 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName109 = object109.get('name');
        const newPrice109= object109.get('price');
        const newCountry109= object109.get('country');
        console.log ("the new price of "+objectName109+" is $"+ newPrice109);
        document.getElementById("theobjectName109").innerHTML=objectName109;
        document.getElementById("thenewPrice109").innerHTML=newPrice109;
        document.getElementById("thenewCountry109").innerHTML=newCountry109;
        // return newPrice;
    }
    getNewItemData109();

    getNewItemData110 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-12;
        const object110 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName110 = object110.get('name');
        const newPrice110= object110.get('price');
        const newCountry110= object110.get('country');
        console.log ("the new price of "+objectName110+" is $"+ newPrice110);
        document.getElementById("theobjectName110").innerHTML=objectName110;
        document.getElementById("thenewPrice110").innerHTML=newPrice110;
        document.getElementById("thenewCountry110").innerHTML=newCountry110;
        // return newPrice;
    }
    getNewItemData110();

    getNewItemData111 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-13;
        const object111 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName111 = object111.get('name');
        const newPrice111= object111.get('price');
        const newCountry111= object111.get('country');
        console.log ("the new price of "+objectName111+" is $"+ newPrice111);
        document.getElementById("theobjectName111").innerHTML=objectName111;
        document.getElementById("thenewPrice111").innerHTML=newPrice111;
        document.getElementById("thenewCountry111").innerHTML=newCountry111;
        // return newPrice;
    }
    getNewItemData111();

    getNewItemData112 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","coffee");
        const newInfo = await query.find();
        entrycountItem8 = newInfo.length-14;
        const object112 = newInfo[entrycountItem8];
        console.log(newInfo[entrycountItem8]);
        const objectName112 = object112.get('name');
        const newPrice112= object112.get('price');
        const newCountry112= object112.get('country');
        console.log ("the new price of "+objectName112+" is $"+ newPrice112);
        document.getElementById("theobjectName112").innerHTML=objectName112;
        document.getElementById("thenewPrice112").innerHTML=newPrice112;
        document.getElementById("thenewCountry112").innerHTML=newCountry112;
        // return newPrice;
    }
    getNewItemData112();

    getNewItemData113 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-1;
        const object113 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName113 = object113.get('name');
        const newPrice113= object113.get('price');
        const newCountry113= object113.get('country');
        console.log ("the new price of "+objectName113+" is $"+ newPrice113);
        document.getElementById("theobjectName113").innerHTML=objectName113;
        document.getElementById("thenewPrice113").innerHTML=newPrice113;
        document.getElementById("thenewCountry113").innerHTML=newCountry113;
        // return newPrice;
    }
    getNewItemData113();

    getNewItemData114 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-2;
        const object114 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName114 = object114.get('name');
        const newPrice114= object114.get('price');
        const newCountry114= object114.get('country');
        console.log ("the new price of "+objectName114+" is $"+ newPrice114);
        document.getElementById("theobjectName114").innerHTML=objectName114;
        document.getElementById("thenewPrice114").innerHTML=newPrice114;
        document.getElementById("thenewCountry114").innerHTML=newCountry114;
        // return newPrice;
    }
    getNewItemData114();

    getNewItemData115 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-3;
        const object115 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName115 = object115.get('name');
        const newPrice115= object115.get('price');
        const newCountry115= object115.get('country');
        console.log ("the new price of "+objectName115+" is $"+ newPrice115);
        document.getElementById("theobjectName115").innerHTML=objectName115;
        document.getElementById("thenewPrice115").innerHTML=newPrice115;
        document.getElementById("thenewCountry115").innerHTML=newCountry115;
        // return newPrice;
    }
    getNewItemData115();

    getNewItemData116 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-4;
        const object116 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName116 = object116.get('name');
        const newPrice116= object116.get('price');
        const newCountry116= object116.get('country');
        console.log ("the new price of "+objectName116+" is $"+ newPrice116);
        document.getElementById("theobjectName116").innerHTML=objectName116;
        document.getElementById("thenewPrice116").innerHTML=newPrice116;
        document.getElementById("thenewCountry116").innerHTML=newCountry116;
        // return newPrice;
    }
    getNewItemData116();

    getNewItemData117 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-5;
        const object117 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName117 = object117.get('name');
        const newPrice117= object117.get('price');
        const newCountry117= object117.get('country');
        console.log ("the new price of "+objectName117+" is $"+ newPrice117);
        document.getElementById("theobjectName117").innerHTML=objectName117;
        document.getElementById("thenewPrice117").innerHTML=newPrice117;
        document.getElementById("thenewCountry117").innerHTML=newCountry117;
        // return newPrice;
    }
    getNewItemData117();

    getNewItemData118 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-6;
        const object118 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName118 = object118.get('name');
        const newPrice118= object118.get('price');
        const newCountry118= object118.get('country');
        console.log ("the new price of "+objectName118+" is $"+ newPrice118);
        document.getElementById("theobjectName118").innerHTML=objectName118;
        document.getElementById("thenewPrice118").innerHTML=newPrice118;
        document.getElementById("thenewCountry118").innerHTML=newCountry118;
        // return newPrice;
    }
    getNewItemData118();

    getNewItemData119 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-7;
        const object119 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName119 = object119.get('name');
        const newPrice119= object119.get('price');
        const newCountry119= object119.get('country');
        console.log ("the new price of "+objectName119+" is $"+ newPrice119);
        document.getElementById("theobjectName119").innerHTML=objectName119;
        document.getElementById("thenewPrice119").innerHTML=newPrice119;
        document.getElementById("thenewCountry119").innerHTML=newCountry119;
        // return newPrice;
    }
    getNewItemData119();

    getNewItemData120 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-8;
        const object120 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName120 = object120.get('name');
        const newPrice120= object120.get('price');
        const newCountry120= object120.get('country');
        console.log ("the new price of "+objectName120+" is $"+ newPrice120);
        document.getElementById("theobjectName120").innerHTML=objectName120;
        document.getElementById("thenewPrice120").innerHTML=newPrice120;
        document.getElementById("thenewCountry120").innerHTML=newCountry120;
        // return newPrice;
    }
    getNewItemData120();

    getNewItemData121 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-9;
        const object121 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName121 = object121.get('name');
        const newPrice121= object121.get('price');
        const newCountry121= object121.get('country');
        console.log ("the new price of "+objectName121+" is $"+ newPrice121);
        document.getElementById("theobjectName121").innerHTML=objectName121;
        document.getElementById("thenewPrice121").innerHTML=newPrice121;
        document.getElementById("thenewCountry121").innerHTML=newCountry121;
        // return newPrice;
    }
    getNewItemData121();

    getNewItemData122 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-10;
        const object122 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName122 = object122.get('name');
        const newPrice122= object122.get('price');
        const newCountry122= object122.get('country');
        console.log ("the new price of "+objectName122+" is $"+ newPrice122);
        document.getElementById("theobjectName122").innerHTML=objectName122;
        document.getElementById("thenewPrice122").innerHTML=newPrice122;
        document.getElementById("thenewCountry122").innerHTML=newCountry122;
        // return newPrice;
    }
    getNewItemData122();

    getNewItemData123 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-11;
        const object123 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName123 = object123.get('name');
        const newPrice123= object123.get('price');
        const newCountry123= object123.get('country');
        console.log ("the new price of "+objectName123+" is $"+ newPrice123);
        document.getElementById("theobjectName123").innerHTML=objectName123;
        document.getElementById("thenewPrice123").innerHTML=newPrice123;
        document.getElementById("thenewCountry123").innerHTML=newCountry123;
        // return newPrice;
    }
    getNewItemData123();

    getNewItemData124 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-12;
        const object124 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName124 = object124.get('name');
        const newPrice124= object124.get('price');
        const newCountry124= object124.get('country');
        console.log ("the new price of "+objectName124+" is $"+ newPrice124);
        document.getElementById("theobjectName124").innerHTML=objectName124;
        document.getElementById("thenewPrice124").innerHTML=newPrice124;
        document.getElementById("thenewCountry124").innerHTML=newCountry124;
        // return newPrice;
    }
    getNewItemData124();

    getNewItemData125 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-13;
        const object125 = newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName125 = object125.get('name');
        const newPrice125= object125.get('price');
        const newCountry125= object125.get('country');
        console.log ("the new price of "+objectName125+" is $"+ newPrice125);
        document.getElementById("theobjectName125").innerHTML=objectName125;
        document.getElementById("thenewPrice125").innerHTML=newPrice125;
        document.getElementById("thenewCountry125").innerHTML=newCountry125;
        // return newPrice;
    }
    getNewItemData125();

    getNewItemData126 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tea");
        const newInfo = await query.find();
        entrycountItem9 = newInfo.length-14;
        const object126= newInfo[entrycountItem9];
        console.log(newInfo[entrycountItem9]);
        const objectName126 = object126.get('name');
        const newPrice126= object126.get('price');
        const newCountry126= object126.get('country');
        console.log ("the new price of "+objectName126+" is $"+ newPrice126);
        document.getElementById("theobjectName126").innerHTML=objectName126;
        document.getElementById("thenewPrice126").innerHTML=newPrice126;
        document.getElementById("thenewCountry126").innerHTML=newCountry126;
        // return newPrice;
    }
    getNewItemData126();

    getNewItemData127 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-1;
        const object127= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName127 = object127.get('name');
        const newPrice127= object127.get('price');
        const newCountry127= object127.get('country');
        console.log ("the new price of "+objectName127+" is $"+ newPrice127);
        document.getElementById("theobjectName127").innerHTML=objectName127;
        document.getElementById("thenewPrice127").innerHTML=newPrice127;
        document.getElementById("thenewCountry127").innerHTML=newCountry127;
        // return newPrice;
    }
    getNewItemData127();

    getNewItemData128 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-2;
        const object128= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName128 = object128.get('name');
        const newPrice128= object128.get('price');
        const newCountry128= object128.get('country');
        console.log ("the new price of "+objectName128+" is $"+ newPrice128);
        document.getElementById("theobjectName128").innerHTML=objectName128;
        document.getElementById("thenewPrice128").innerHTML=newPrice128;
        document.getElementById("thenewCountry128").innerHTML=newCountry128;
        // return newPrice;
    }
    getNewItemData128();

    getNewItemData129 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-3;
        const object129= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName129 = object129.get('name');
        const newPrice129= object129.get('price');
        const newCountry129= object129.get('country');
        console.log ("the new price of "+objectName129+" is $"+ newPrice129);
        document.getElementById("theobjectName129").innerHTML=objectName129;
        document.getElementById("thenewPrice129").innerHTML=newPrice129;
        document.getElementById("thenewCountry129").innerHTML=newCountry129;
        // return newPrice;
    }
    getNewItemData129();

    getNewItemData130 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-4;
        const object130= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName130 = object130.get('name');
        const newPrice130= object130.get('price');
        const newCountry130= object130.get('country');
        console.log ("the new price of "+objectName130+" is $"+ newPrice130);
        document.getElementById("theobjectName130").innerHTML=objectName130;
        document.getElementById("thenewPrice130").innerHTML=newPrice130;
        document.getElementById("thenewCountry130").innerHTML=newCountry130;
        // return newPrice;
    }
    getNewItemData130();

    getNewItemData131 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-5;
        const object131= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName131 = object131.get('name');
        const newPrice131= object131.get('price');
        const newCountry131= object131.get('country');
        console.log ("the new price of "+objectName131+" is $"+ newPrice131);
        document.getElementById("theobjectName131").innerHTML=objectName131;
        document.getElementById("thenewPrice131").innerHTML=newPrice131;
        document.getElementById("thenewCountry131").innerHTML=newCountry131;
        // return newPrice;
    }
    getNewItemData131();

    getNewItemData132 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-6;
        const object132= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName132 = object132.get('name');
        const newPrice132= object132.get('price');
        const newCountry132= object132.get('country');
        console.log ("the new price of "+objectName132+" is $"+ newPrice132);
        document.getElementById("theobjectName132").innerHTML=objectName132;
        document.getElementById("thenewPrice132").innerHTML=newPrice132;
        document.getElementById("thenewCountry132").innerHTML=newCountry132;
        // return newPrice;
    }
    getNewItemData132();

    getNewItemData133 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-7;
        const object133= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName133 = object133.get('name');
        const newPrice133= object133.get('price');
        const newCountry133= object133.get('country');
        console.log ("the new price of "+objectName133+" is $"+ newPrice133);
        document.getElementById("theobjectName133").innerHTML=objectName133;
        document.getElementById("thenewPrice133").innerHTML=newPrice133;
        document.getElementById("thenewCountry133").innerHTML=newCountry133;
        // return newPrice;
    }
    getNewItemData133();

    getNewItemData134 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-8;
        const object134= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName134 = object134.get('name');
        const newPrice134= object134.get('price');
        const newCountry134= object134.get('country');
        console.log ("the new price of "+objectName134+" is $"+ newPrice134);
        document.getElementById("theobjectName134").innerHTML=objectName134;
        document.getElementById("thenewPrice134").innerHTML=newPrice134;
        document.getElementById("thenewCountry134").innerHTML=newCountry134;
        // return newPrice;
    }
    getNewItemData134();

    getNewItemData135 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-9;
        const object135= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName135 = object135.get('name');
        const newPrice135= object135.get('price');
        const newCountry135= object135.get('country');
        console.log ("the new price of "+objectName135+" is $"+ newPrice135);
        document.getElementById("theobjectName135").innerHTML=objectName135;
        document.getElementById("thenewPrice135").innerHTML=newPrice135;
        document.getElementById("thenewCountry135").innerHTML=newCountry135;
        // return newPrice;
    }
    getNewItemData135();

    getNewItemData136 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-10;
        const object136= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName136 = object136.get('name');
        const newPrice136= object136.get('price');
        const newCountry136= object136.get('country');
        console.log ("the new price of "+objectName136+" is $"+ newPrice136);
        document.getElementById("theobjectName136").innerHTML=objectName136;
        document.getElementById("thenewPrice136").innerHTML=newPrice136;
        document.getElementById("thenewCountry136").innerHTML=newCountry136;
        // return newPrice;
    }
    getNewItemData136();

    getNewItemData137 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-11;
        const object137= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName137 = object137.get('name');
        const newPrice137= object137.get('price');
        const newCountry137= object137.get('country');
        console.log ("the new price of "+objectName137+" is $"+ newPrice137);
        document.getElementById("theobjectName137").innerHTML=objectName137;
        document.getElementById("thenewPrice137").innerHTML=newPrice137;
        document.getElementById("thenewCountry137").innerHTML=newCountry137;
        // return newPrice;
    }
    getNewItemData137();

    getNewItemData138 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-12;
        const object138= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName138 = object138.get('name');
        const newPrice138= object138.get('price');
        const newCountry138= object138.get('country');
        console.log ("the new price of "+objectName138+" is $"+ newPrice138);
        document.getElementById("theobjectName138").innerHTML=objectName138;
        document.getElementById("thenewPrice138").innerHTML=newPrice138;
        document.getElementById("thenewCountry138").innerHTML=newCountry138;
        // return newPrice;
    }
    getNewItemData138();

    getNewItemData139 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-13;
        const object139= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName139 = object139.get('name');
        const newPrice139= object139.get('price');
        const newCountry139= object139.get('country');
        console.log ("the new price of "+objectName139+" is $"+ newPrice139);
        document.getElementById("theobjectName139").innerHTML=objectName139;
        document.getElementById("thenewPrice139").innerHTML=newPrice139;
        document.getElementById("thenewCountry139").innerHTML=newCountry139;
        // return newPrice;
    }
    getNewItemData139();

    getNewItemData140 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","toiletpaper");
        const newInfo = await query.find();
        entrycountItem10 = newInfo.length-14;
        const object140= newInfo[entrycountItem10];
        console.log(newInfo[entrycountItem10]);
        const objectName140 = object140.get('name');
        const newPrice140= object140.get('price');
        const newCountry140= object140.get('country');
        console.log ("the new price of "+objectName140+" is $"+ newPrice140);
        document.getElementById("theobjectName140").innerHTML=objectName140;
        document.getElementById("thenewPrice140").innerHTML=newPrice140;
        document.getElementById("thenewCountry140").innerHTML=newCountry140;
        // return newPrice;
    }
    getNewItemData140();

    getNewItemData141 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-1;
        const object141= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName141 = object141.get('name');
        const newPrice141= object141.get('price');
        const newCountry141= object141.get('country');
        console.log ("the new price of "+objectName141+" is $"+ newPrice141);
        document.getElementById("theobjectName141").innerHTML=objectName141;
        document.getElementById("thenewPrice141").innerHTML=newPrice141;
        document.getElementById("thenewCountry141").innerHTML=newCountry141;
        // return newPrice;
    }
    getNewItemData141();

    getNewItemData142 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-2;
        const object142= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName142 = object142.get('name');
        const newPrice142= object142.get('price');
        const newCountry142= object142.get('country');
        console.log ("the new price of "+objectName142+" is $"+ newPrice142);
        document.getElementById("theobjectName142").innerHTML=objectName142;
        document.getElementById("thenewPrice142").innerHTML=newPrice142;
        document.getElementById("thenewCountry142").innerHTML=newCountry142;
        // return newPrice;
    }
    getNewItemData142();

    getNewItemData143 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-3;
        const object143= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName143 = object143.get('name');
        const newPrice143= object143.get('price');
        const newCountry143= object143.get('country');
        console.log ("the new price of "+objectName143+" is $"+ newPrice143);
        document.getElementById("theobjectName143").innerHTML=objectName143;
        document.getElementById("thenewPrice143").innerHTML=newPrice143;
        document.getElementById("thenewCountry143").innerHTML=newCountry143;
        // return newPrice;
    }
    getNewItemData143();

    getNewItemData144 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-4;
        const object144= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName144 = object144.get('name');
        const newPrice144= object144.get('price');
        const newCountry144= object144.get('country');
        console.log ("the new price of "+objectName144+" is $"+ newPrice144);
        document.getElementById("theobjectName144").innerHTML=objectName144;
        document.getElementById("thenewPrice144").innerHTML=newPrice144;
        document.getElementById("thenewCountry144").innerHTML=newCountry144;
        // return newPrice;
    }
    getNewItemData144();

    getNewItemData145 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-5;
        const object145= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName145 = object145.get('name');
        const newPrice145= object145.get('price');
        const newCountry145= object145.get('country');
        console.log ("the new price of "+objectName145+" is $"+ newPrice145);
        document.getElementById("theobjectName145").innerHTML=objectName145;
        document.getElementById("thenewPrice145").innerHTML=newPrice145;
        document.getElementById("thenewCountry145").innerHTML=newCountry145;
        // return newPrice;
    }
    getNewItemData145();

    getNewItemData146 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-6;
        const object146= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName146 = object146.get('name');
        const newPrice146= object146.get('price');
        const newCountry146= object146.get('country');
        console.log ("the new price of "+objectName146+" is $"+ newPrice146);
        document.getElementById("theobjectName146").innerHTML=objectName146;
        document.getElementById("thenewPrice146").innerHTML=newPrice146;
        document.getElementById("thenewCountry146").innerHTML=newCountry146;
        // return newPrice;
    }
    getNewItemData146();

    getNewItemData147 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-7;
        const object147= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName147 = object147.get('name');
        const newPrice147= object147.get('price');
        const newCountry147= object147.get('country');
        console.log ("the new price of "+objectName147+" is $"+ newPrice147);
        document.getElementById("theobjectName147").innerHTML=objectName147;
        document.getElementById("thenewPrice147").innerHTML=newPrice147;
        document.getElementById("thenewCountry147").innerHTML=newCountry147;
        // return newPrice;
    }
    getNewItemData147();

    getNewItemData148 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-8;
        const object148= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName148 = object148.get('name');
        const newPrice148= object148.get('price');
        const newCountry148= object148.get('country');
        console.log ("the new price of "+objectName148+" is $"+ newPrice148);
        document.getElementById("theobjectName148").innerHTML=objectName148;
        document.getElementById("thenewPrice148").innerHTML=newPrice148;
        document.getElementById("thenewCountry148").innerHTML=newCountry148;
        // return newPrice;
    }
    getNewItemData148();

    getNewItemData149 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-9;
        const object149= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName149 = object149.get('name');
        const newPrice149= object149.get('price');
        const newCountry149= object149.get('country');
        console.log ("the new price of "+objectName149+" is $"+ newPrice149);
        document.getElementById("theobjectName149").innerHTML=objectName149;
        document.getElementById("thenewPrice149").innerHTML=newPrice149;
        document.getElementById("thenewCountry149").innerHTML=newCountry149;
        // return newPrice;
    }
    getNewItemData149();

    getNewItemData150 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-10;
        const object150= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName150 = object150.get('name');
        const newPrice150= object150.get('price');
        const newCountry150= object150.get('country');
        console.log ("the new price of "+objectName150+" is $"+ newPrice150);
        document.getElementById("theobjectName150").innerHTML=objectName150;
        document.getElementById("thenewPrice150").innerHTML=newPrice150;
        document.getElementById("thenewCountry150").innerHTML=newCountry150;
        // return newPrice;
    }
    getNewItemData150();

    getNewItemData151 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-11;
        const object151= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName151 = object151.get('name');
        const newPrice151= object151.get('price');
        const newCountry151= object151.get('country');
        console.log ("the new price of "+objectName151+" is $"+ newPrice151);
        document.getElementById("theobjectName151").innerHTML=objectName151;
        document.getElementById("thenewPrice151").innerHTML=newPrice151;
        document.getElementById("thenewCountry151").innerHTML=newCountry151;
        // return newPrice;
    }
    getNewItemData151();

    getNewItemData152 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-12;
        const object152= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName152 = object152.get('name');
        const newPrice152= object152.get('price');
        const newCountry152= object152.get('country');
        console.log ("the new price of "+objectName152+" is $"+ newPrice152);
        document.getElementById("theobjectName152").innerHTML=objectName152;
        document.getElementById("thenewPrice152").innerHTML=newPrice152;
        document.getElementById("thenewCountry152").innerHTML=newCountry152;
        // return newPrice;
    }
    getNewItemData152();

    getNewItemData153 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-13;
        const object153= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName153 = object153.get('name');
        const newPrice153= object153.get('price');
        const newCountry153= object153.get('country');
        console.log ("the new price of "+objectName153+" is $"+ newPrice153);
        document.getElementById("theobjectName153").innerHTML=objectName153;
        document.getElementById("thenewPrice153").innerHTML=newPrice153;
        document.getElementById("thenewCountry153").innerHTML=newCountry153;
        // return newPrice;
    }
    getNewItemData153();

    getNewItemData154 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","socks");
        const newInfo = await query.find();
        entrycountItem11 = newInfo.length-14;
        const object154= newInfo[entrycountItem11];
        console.log(newInfo[entrycountItem11]);
        const objectName154 = object154.get('name');
        const newPrice154= object154.get('price');
        const newCountry154= object154.get('country');
        console.log ("the new price of "+objectName154+" is $"+ newPrice154);
        document.getElementById("theobjectName154").innerHTML=objectName154;
        document.getElementById("thenewPrice154").innerHTML=newPrice154;
        document.getElementById("thenewCountry154").innerHTML=newCountry154;
        // return newPrice;
    }
    getNewItemData154();

    getNewItemData155 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-1;
        const object155= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName155 = object155.get('name');
        const newPrice155= object155.get('price');
        const newCountry155= object155.get('country');
        console.log ("the new price of "+objectName155+" is $"+ newPrice155);
        document.getElementById("theobjectName155").innerHTML=objectName155;
        document.getElementById("thenewPrice155").innerHTML=newPrice155;
        document.getElementById("thenewCountry155").innerHTML=newCountry155;
        // return newPrice;
    }
    getNewItemData155();

    getNewItemData156 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-2;
        const object156= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName156 = object156.get('name');
        const newPrice156= object156.get('price');
        const newCountry156= object156.get('country');
        console.log ("the new price of "+objectName156+" is $"+ newPrice156);
        document.getElementById("theobjectName156").innerHTML=objectName156;
        document.getElementById("thenewPrice156").innerHTML=newPrice156;
        document.getElementById("thenewCountry156").innerHTML=newCountry156;
        // return newPrice;
    }
    getNewItemData156();

    getNewItemData157 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-3;
        const object157= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName157 = object157.get('name');
        const newPrice157= object157.get('price');
        const newCountry157= object157.get('country');
        console.log ("the new price of "+objectName157+" is $"+ newPrice157);
        document.getElementById("theobjectName157").innerHTML=objectName157;
        document.getElementById("thenewPrice157").innerHTML=newPrice157;
        document.getElementById("thenewCountry157").innerHTML=newCountry157;
        // return newPrice;
    }
    getNewItemData157();

    getNewItemData158 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-4;
        const object158= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName158 = object158.get('name');
        const newPrice158= object158.get('price');
        const newCountry158= object158.get('country');
        console.log ("the new price of "+objectName158+" is $"+ newPrice158);
        document.getElementById("theobjectName158").innerHTML=objectName158;
        document.getElementById("thenewPrice158").innerHTML=newPrice158;
        document.getElementById("thenewCountry158").innerHTML=newCountry158;
        // return newPrice;
    }
    getNewItemData158();

    getNewItemData159 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-5;
        const object159= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName159 = object159.get('name');
        const newPrice159= object159.get('price');
        const newCountry159= object159.get('country');
        console.log ("the new price of "+objectName159+" is $"+ newPrice159);
        document.getElementById("theobjectName159").innerHTML=objectName159;
        document.getElementById("thenewPrice159").innerHTML=newPrice159;
        document.getElementById("thenewCountry159").innerHTML=newCountry159;
        // return newPrice;
    }
    getNewItemData159();

    getNewItemData160 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-6;
        const object160= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName160 = object160.get('name');
        const newPrice160= object160.get('price');
        const newCountry160= object160.get('country');
        console.log ("the new price of "+objectName160+" is $"+ newPrice160);
        document.getElementById("theobjectName160").innerHTML=objectName160;
        document.getElementById("thenewPrice160").innerHTML=newPrice160;
        document.getElementById("thenewCountry160").innerHTML=newCountry160;
        // return newPrice;
    }
    getNewItemData160();

    getNewItemData161 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-7;
        const object161= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName161 = object161.get('name');
        const newPrice161= object161.get('price');
        const newCountry161= object161.get('country');
        console.log ("the new price of "+objectName161+" is $"+ newPrice161);
        document.getElementById("theobjectName161").innerHTML=objectName161;
        document.getElementById("thenewPrice161").innerHTML=newPrice161;
        document.getElementById("thenewCountry161").innerHTML=newCountry161;
        // return newPrice;
    }
    getNewItemData161();

    getNewItemData162 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-8;
        const object162= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName162 = object162.get('name');
        const newPrice162= object162.get('price');
        const newCountry162= object162.get('country');
        console.log ("the new price of "+objectName162+" is $"+ newPrice162);
        document.getElementById("theobjectName162").innerHTML=objectName162;
        document.getElementById("thenewPrice162").innerHTML=newPrice162;
        document.getElementById("thenewCountry162").innerHTML=newCountry162;
        // return newPrice;
    }
    getNewItemData162();

    getNewItemData163 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-9;
        const object163= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName163 = object163.get('name');
        const newPrice163= object163.get('price');
        const newCountry163= object163.get('country');
        console.log ("the new price of "+objectName163+" is $"+ newPrice163);
        document.getElementById("theobjectName163").innerHTML=objectName163;
        document.getElementById("thenewPrice163").innerHTML=newPrice163;
        document.getElementById("thenewCountry163").innerHTML=newCountry163;
        // return newPrice;
    }
    getNewItemData163();

    getNewItemData164 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-10;
        const object164= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName164 = object164.get('name');
        const newPrice164= object164.get('price');
        const newCountry164= object164.get('country');
        console.log ("the new price of "+objectName164+" is $"+ newPrice164);
        document.getElementById("theobjectName164").innerHTML=objectName164;
        document.getElementById("thenewPrice164").innerHTML=newPrice164;
        document.getElementById("thenewCountry164").innerHTML=newCountry164;
        // return newPrice;
    }
    getNewItemData164();

    getNewItemData165 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-11;
        const object165= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName165 = object165.get('name');
        const newPrice165= object165.get('price');
        const newCountry165= object165.get('country');
        console.log ("the new price of "+objectName165+" is $"+ newPrice165);
        document.getElementById("theobjectName165").innerHTML=objectName165;
        document.getElementById("thenewPrice165").innerHTML=newPrice165;
        document.getElementById("thenewCountry165").innerHTML=newCountry165;
        // return newPrice;
    }
    getNewItemData165();

    getNewItemData166 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-12;
        const object166= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName166 = object166.get('name');
        const newPrice166= object166.get('price');
        const newCountry166= object166.get('country');
        console.log ("the new price of "+objectName166+" is $"+ newPrice166);
        document.getElementById("theobjectName166").innerHTML=objectName166;
        document.getElementById("thenewPrice166").innerHTML=newPrice166;
        document.getElementById("thenewCountry166").innerHTML=newCountry166;
        // return newPrice;
    }
    getNewItemData166();

    getNewItemData167 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-13;
        const object167= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName167 = object167.get('name');
        const newPrice167= object167.get('price');
        const newCountry167= object167.get('country');
        console.log ("the new price of "+objectName167+" is $"+ newPrice167);
        document.getElementById("theobjectName167").innerHTML=objectName167;
        document.getElementById("thenewPrice167").innerHTML=newPrice167;
        document.getElementById("thenewCountry167").innerHTML=newCountry167;
        // return newPrice;
    }
    getNewItemData167();

    getNewItemData168 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","lumber2412");
        const newInfo = await query.find();
        entrycountItem12 = newInfo.length-14;
        const object168= newInfo[entrycountItem12];
        console.log(newInfo[entrycountItem12]);
        const objectName168 = object168.get('name');
        const newPrice168= object168.get('price');
        const newCountry168= object168.get('country');
        console.log ("the new price of "+objectName168+" is $"+ newPrice168);
        document.getElementById("theobjectName168").innerHTML=objectName168;
        document.getElementById("thenewPrice168").innerHTML=newPrice168;
        document.getElementById("thenewCountry168").innerHTML=newCountry168;
        // return newPrice;
    }
    getNewItemData168();

    getNewItemData169 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-1;
        const object169= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName169 = object169.get('name');
        const newPrice169= object169.get('price');
        const newCountry169= object169.get('country');
        console.log ("the new price of "+objectName169+" is $"+ newPrice169);
        document.getElementById("theobjectName169").innerHTML=objectName169;
        document.getElementById("thenewPrice169").innerHTML=newPrice169;
        document.getElementById("thenewCountry169").innerHTML=newCountry169;
        // return newPrice;
    }
    getNewItemData169();

    getNewItemData170 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-2;
        const object170= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName170 = object170.get('name');
        const newPrice170= object170.get('price');
        const newCountry170= object170.get('country');
        console.log ("the new price of "+objectName170+" is $"+ newPrice170);
        document.getElementById("theobjectName170").innerHTML=objectName170;
        document.getElementById("thenewPrice170").innerHTML=newPrice170;
        document.getElementById("thenewCountry170").innerHTML=newCountry170;
        // return newPrice;
    }
    getNewItemData170();

    getNewItemData171 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-3;
        const object171= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName171 = object171.get('name');
        const newPrice171= object171.get('price');
        const newCountry171= object171.get('country');
        console.log ("the new price of "+objectName171+" is $"+ newPrice171);
        document.getElementById("theobjectName171").innerHTML=objectName171;
        document.getElementById("thenewPrice171").innerHTML=newPrice171;
        document.getElementById("thenewCountry171").innerHTML=newCountry171;
        // return newPrice;
    }
    getNewItemData171();

    getNewItemData172 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-4;
        const object172= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName172 = object172.get('name');
        const newPrice172= object172.get('price');
        const newCountry172= object172.get('country');
        console.log ("the new price of "+objectName172+" is $"+ newPrice172);
        document.getElementById("theobjectName172").innerHTML=objectName172;
        document.getElementById("thenewPrice172").innerHTML=newPrice172;
        document.getElementById("thenewCountry172").innerHTML=newCountry172;
        // return newPrice;
    }
    getNewItemData172();

    getNewItemData173 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-5;
        const object173= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName173 = object173.get('name');
        const newPrice173= object173.get('price');
        const newCountry173= object173.get('country');
        console.log ("the new price of "+objectName173+" is $"+ newPrice173);
        document.getElementById("theobjectName173").innerHTML=objectName173;
        document.getElementById("thenewPrice173").innerHTML=newPrice173;
        document.getElementById("thenewCountry173").innerHTML=newCountry173;
        // return newPrice;
    }
    getNewItemData173();

    getNewItemData174 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-6;
        const object174= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName174 = object174.get('name');
        const newPrice174= object174.get('price');
        const newCountry174= object174.get('country');
        console.log ("the new price of "+objectName174+" is $"+ newPrice174);
        document.getElementById("theobjectName174").innerHTML=objectName174;
        document.getElementById("thenewPrice174").innerHTML=newPrice174;
        document.getElementById("thenewCountry174").innerHTML=newCountry174;
        // return newPrice;
    }
    getNewItemData174();

    getNewItemData175 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-7;
        const object175= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName175 = object175.get('name');
        const newPrice175= object175.get('price');
        const newCountry175= object175.get('country');
        console.log ("the new price of "+objectName175+" is $"+ newPrice175);
        document.getElementById("theobjectName175").innerHTML=objectName175;
        document.getElementById("thenewPrice175").innerHTML=newPrice175;
        document.getElementById("thenewCountry175").innerHTML=newCountry175;
        // return newPrice;
    }
    getNewItemData175();

    getNewItemData176 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-8;
        const object176= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName176 = object176.get('name');
        const newPrice176= object176.get('price');
        const newCountry176= object176.get('country');
        console.log ("the new price of "+objectName176+" is $"+ newPrice176);
        document.getElementById("theobjectName176").innerHTML=objectName176;
        document.getElementById("thenewPrice176").innerHTML=newPrice176;
        document.getElementById("thenewCountry176").innerHTML=newCountry176;
        // return newPrice;
    }
    getNewItemData176();

    getNewItemData177 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-9;
        const object177= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName177 = object177.get('name');
        const newPrice177= object177.get('price');
        const newCountry177= object177.get('country');
        console.log ("the new price of "+objectName177+" is $"+ newPrice177);
        document.getElementById("theobjectName177").innerHTML=objectName177;
        document.getElementById("thenewPrice177").innerHTML=newPrice177;
        document.getElementById("thenewCountry177").innerHTML=newCountry177;
        // return newPrice;
    }
    getNewItemData177();

    getNewItemData178 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-10;
        const object178= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName178 = object178.get('name');
        const newPrice178= object178.get('price');
        const newCountry178= object178.get('country');
        console.log ("the new price of "+objectName178+" is $"+ newPrice178);
        document.getElementById("theobjectName178").innerHTML=objectName178;
        document.getElementById("thenewPrice178").innerHTML=newPrice178;
        document.getElementById("thenewCountry178").innerHTML=newCountry178;
        // return newPrice;
    }
    getNewItemData178();

    getNewItemData179 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-11;
        const object179= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName179 = object179.get('name');
        const newPrice179= object179.get('price');
        const newCountry179= object179.get('country');
        console.log ("the new price of "+objectName179+" is $"+ newPrice179);
        document.getElementById("theobjectName179").innerHTML=objectName179;
        document.getElementById("thenewPrice179").innerHTML=newPrice179;
        document.getElementById("thenewCountry179").innerHTML=newCountry179;
        // return newPrice;
    }
    getNewItemData179();

    getNewItemData180 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-12;
        const object180= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName180 = object180.get('name');
        const newPrice180= object180.get('price');
        const newCountry180= object180.get('country');
        console.log ("the new price of "+objectName180+" is $"+ newPrice180);
        document.getElementById("theobjectName180").innerHTML=objectName180;
        document.getElementById("thenewPrice180").innerHTML=newPrice180;
        document.getElementById("thenewCountry180").innerHTML=newCountry180;
        // return newPrice;
    }
    getNewItemData180();

    getNewItemData181 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-13;
        const object181= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName181 = object181.get('name');
        const newPrice181= object181.get('price');
        const newCountry181= object181.get('country');
        console.log ("the new price of "+objectName181+" is $"+ newPrice181);
        document.getElementById("theobjectName181").innerHTML=objectName181;
        document.getElementById("thenewPrice181").innerHTML=newPrice181;
        document.getElementById("thenewCountry181").innerHTML=newCountry181;
        // return newPrice;
    }
    getNewItemData181();

    getNewItemData182 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","ply4834");
        const newInfo = await query.find();
        entrycountItem13 = newInfo.length-14;
        const object182= newInfo[entrycountItem13];
        console.log(newInfo[entrycountItem13]);
        const objectName182 = object182.get('name');
        const newPrice182= object182.get('price');
        const newCountry182= object182.get('country');
        console.log ("the new price of "+objectName182+" is $"+ newPrice182);
        document.getElementById("theobjectName182").innerHTML=objectName182;
        document.getElementById("thenewPrice182").innerHTML=newPrice182;
        document.getElementById("thenewCountry182").innerHTML=newCountry182;
        // return newPrice;
    }
    getNewItemData182();

    getNewItemData183 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-1;
        const object183= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName183 = object183.get('name');
        const newPrice183= object183.get('price');
        const newCountry183= object183.get('country');
        console.log ("the new price of "+objectName183+" is $"+ newPrice183);
        document.getElementById("theobjectName183").innerHTML=objectName183;
        document.getElementById("thenewPrice183").innerHTML=newPrice183;
        document.getElementById("thenewCountry183").innerHTML=newCountry183;
        // return newPrice;
    }
    getNewItemData183();

    getNewItemData184 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-2;
        const object184= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName184 = object184.get('name');
        const newPrice184= object184.get('price');
        const newCountry184= object184.get('country');
        console.log ("the new price of "+objectName184+" is $"+ newPrice184);
        document.getElementById("theobjectName184").innerHTML=objectName184;
        document.getElementById("thenewPrice184").innerHTML=newPrice184;
        document.getElementById("thenewCountry184").innerHTML=newCountry184;
        // return newPrice;
    }
    getNewItemData184();

    getNewItemData185 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-3;
        const object185= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName185 = object185.get('name');
        const newPrice185= object185.get('price');
        const newCountry185= object185.get('country');
        console.log ("the new price of "+objectName185+" is $"+ newPrice185);
        document.getElementById("theobjectName185").innerHTML=objectName185;
        document.getElementById("thenewPrice185").innerHTML=newPrice185;
        document.getElementById("thenewCountry185").innerHTML=newCountry185;
        // return newPrice;
    }
    getNewItemData185();

    getNewItemData186 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-4;
        const object186= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName186 = object186.get('name');
        const newPrice186= object186.get('price');
        const newCountry186= object186.get('country');
        console.log ("the new price of "+objectName186+" is $"+ newPrice186);
        document.getElementById("theobjectName186").innerHTML=objectName186;
        document.getElementById("thenewPrice186").innerHTML=newPrice186;
        document.getElementById("thenewCountry186").innerHTML=newCountry186;
        // return newPrice;
    }
    getNewItemData186();

    getNewItemData187 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-5;
        const object187= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName187 = object187.get('name');
        const newPrice187= object187.get('price');
        const newCountry187= object187.get('country');
        console.log ("the new price of "+objectName187+" is $"+ newPrice187);
        document.getElementById("theobjectName187").innerHTML=objectName187;
        document.getElementById("thenewPrice187").innerHTML=newPrice187;
        document.getElementById("thenewCountry187").innerHTML=newCountry187;
        // return newPrice;
    }
    getNewItemData187();

    getNewItemData188 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-6;
        const object188= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName188 = object188.get('name');
        const newPrice188= object188.get('price');
        const newCountry188= object188.get('country');
        console.log ("the new price of "+objectName188+" is $"+ newPrice188);
        document.getElementById("theobjectName188").innerHTML=objectName188;
        document.getElementById("thenewPrice188").innerHTML=newPrice188;
        document.getElementById("thenewCountry188").innerHTML=newCountry188;
        // return newPrice;
    }
    getNewItemData188();

    getNewItemData189 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-7;
        const object189= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName189 = object189.get('name');
        const newPrice189= object189.get('price');
        const newCountry189= object189.get('country');
        console.log ("the new price of "+objectName189+" is $"+ newPrice189);
        document.getElementById("theobjectName189").innerHTML=objectName189;
        document.getElementById("thenewPrice189").innerHTML=newPrice189;
        document.getElementById("thenewCountry189").innerHTML=newCountry189;
        // return newPrice;
    }
    getNewItemData189();

    getNewItemData190 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-8;
        const object190= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName190 = object190.get('name');
        const newPrice190= object190.get('price');
        const newCountry190= object190.get('country');
        console.log ("the new price of "+objectName190+" is $"+ newPrice190);
        document.getElementById("theobjectName190").innerHTML=objectName190;
        document.getElementById("thenewPrice190").innerHTML=newPrice190;
        document.getElementById("thenewCountry190").innerHTML=newCountry190;
        // return newPrice;
    }
    getNewItemData190();


getNewItemData191 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-9;
        const object191= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName191 = object191.get('name');
        const newPrice191= object191.get('price');
        const newCountry191= object191.get('country');
        console.log ("the new price of "+objectName191+" is $"+ newPrice191);
        document.getElementById("theobjectName191").innerHTML=objectName191;
        document.getElementById("thenewPrice191").innerHTML=newPrice191;
        document.getElementById("thenewCountry191").innerHTML=newCountry191;
        // return newPrice;
    }
    getNewItemData191();

    getNewItemData192 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-10;
        const object192= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName192 = object192.get('name');
        const newPrice192= object192.get('price');
        const newCountry192= object192.get('country');
        console.log ("the new price of "+objectName192+" is $"+ newPrice192);
        document.getElementById("theobjectName192").innerHTML=objectName192;
        document.getElementById("thenewPrice192").innerHTML=newPrice192;
        document.getElementById("thenewCountry192").innerHTML=newCountry192;
        // return newPrice;
    }
    getNewItemData192();

    getNewItemData193 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-11;
        const object193= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName193 = object193.get('name');
        const newPrice193= object193.get('price');
        const newCountry193= object193.get('country');
        console.log ("the new price of "+objectName193+" is $"+ newPrice193);
        document.getElementById("theobjectName193").innerHTML=objectName193;
        document.getElementById("thenewPrice193").innerHTML=newPrice193;
        document.getElementById("thenewCountry193").innerHTML=newCountry193;
        // return newPrice;
    }
    getNewItemData193();

    getNewItemData194 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-12;
        const object194= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName194 = object194.get('name');
        const newPrice194= object194.get('price');
        const newCountry194= object194.get('country');
        console.log ("the new price of "+objectName194+" is $"+ newPrice194);
        document.getElementById("theobjectName194").innerHTML=objectName194;
        document.getElementById("thenewPrice194").innerHTML=newPrice194;
        document.getElementById("thenewCountry194").innerHTML=newCountry194;
        // return newPrice;
    }
    getNewItemData194();

    getNewItemData195 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-13;
        const object195= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName195 = object195.get('name');
        const newPrice195= object195.get('price');
        const newCountry195= object195.get('country');
        console.log ("the new price of "+objectName195+" is $"+ newPrice195);
        document.getElementById("theobjectName195").innerHTML=objectName195;
        document.getElementById("thenewPrice195").innerHTML=newPrice195;
        document.getElementById("thenewCountry195").innerHTML=newCountry195;
        // return newPrice;
    }
    getNewItemData195();

    getNewItemData196 = async () => {
        
        // this line is optional: const Item = Moralis.Object.extend("Items");
        const query = new Moralis.Query("Vdata");
        query.equalTo("name","tshirt");
        const newInfo = await query.find();
        entrycountItem14 = newInfo.length-14;
        const object196= newInfo[entrycountItem14];
        console.log(newInfo[entrycountItem14]);
        const objectName196 = object196.get('name');
        const newPrice196= object196.get('price');
        const newCountry196= object196.get('country');
        console.log ("the new price of "+objectName196+" is $"+ newPrice196);
        document.getElementById("theobjectName196").innerHTML=objectName196;
        document.getElementById("thenewPrice196").innerHTML=newPrice196;
        document.getElementById("thenewCountry196").innerHTML=newCountry196;
        // return newPrice;
    }
    getNewItemData196();








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
