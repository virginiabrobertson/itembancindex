//engine data



getCountryData = async () => {
    // this line is optional: const Item = Moralis.Object.extend("Items");
    let countriesTotalValue=0;
    const query = new Moralis.Query("CountriesData");
    query.descending("Country");
    const countries = await query.find();
    for (let i=0; i < countries.length; i++){
     const Country= countries[i];
     const newCountry=Country.get('Country');
     let countryBasket=Country.get('Basket');
     const newConv=Country.get('Conversion');
    
     let usdBasket=(countryBasket/newConv);
     usdBasket=usdBasket.toFixed(0);
    console.log(newCountry +" basket in usd $"+ usdBasket);
    //document.getElementById("country").innerHTML=newCountry;
    //document.getElementById("usdbasket").innerHTML=usdBasket;
    countriesTotalValue=countriesTotalValue+countryBasket;
    console.log("CTV "+countriesTotalValue);
    }
    console.log("CTV after loop "+countriesTotalValue);
    for (let i=0; i < countries.length; i++){
        console.log("CTV after loop2 "+countriesTotalValue);
        const Country= countries[i];
        let newCountry=Country.get('Country');
        countryBasket=Country.get('Basket');
       
     const newConv=Country.get('Conversion');
     let usdBasket=(countryBasket/newConv);
     usdBasket=parseFloat(usdBasket).toFixed(0);
        let basketConvert=(countryBasket/countriesTotalValue)*100;
        basketConvert=parseFloat(basketConvert);
        let avgBasket=countriesTotalValue/25;
        let ibIndex=countryBasket/avgBasket;
        ibIndex=parseFloat(ibIndex).toFixed(4);
        console.log((typeof ibIndex)+"is this a string")
        let ibBasket=ibIndex*1000;
        ibBasket=parseFloat(ibBasket).toFixed(0);
        basketConvert=parseFloat(basketConvert).toFixed(2);
        avgBasket=parseFloat(avgBasket).toFixed(0);
        setIndexData(newCountry,countriesTotalValue,basketConvert,ibIndex,ibBasket);
       
               
        console.log(newCountry +" basket total "+countryBasket+" basket % "+ basketConvert);
       
        // let showC= newCountry + " country basket " + countryBasket + " basket % " + basketConvert;
        // document.getElementById("displayc").innerHTML=showC;
            
       displayCountry(newCountry, basketConvert, ibIndex, ibBasket, avgBasket);
        // document.write(newCountry +" country basket "+countryBasket+" basket % "+ basketConvert);
        // document.write("<br/>");
        
    }
       
    
}
 getCountryData();

 setIndexData = async (newCountry,countriesTotalValue,basketConvert,ibIndex,ibBasket) => {
    const cquery = new Moralis.Query('CountriesData');
    cquery.equalTo("Country", newCountry)
    const countryID = await cquery.first();
    basketConvert=parseFloat(basketconvert);
    if(countryID){
        countryID.set("CTV",countriesTotalValue);
        countryID.set("BasketConvert", basketConvert);
        countryID.set("IBIndex", ibIndex);
        countryID.set("IBBasket", ibBasket);
        console.log(countryID+" IBBASKET IS "+ibBasket);
        await countryID.save();
  }
  }


function displayCountry(newCountry, basketConvert, ibIndex, ibBasket, avgBasket) {
    //ibIndex=ibIndex.toFixed(4);
    let showAvgBasket= "Base Value "+ avgBasket+ "<br>"+"<br>";
        document.getElementById("dAvgBasket").innerHTML=showAvgBasket;
    if (newCountry === "United States"){
        let showUS= newCountry + "<br>"+ " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+"<br/>";
        document.getElementById("dus").innerHTML=showUS;
    } 
    if (newCountry === "France"){
        let showFrance= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+"<br/>";
        document.getElementById("dfrance").innerHTML=showFrance;
    }
    if (newCountry === "Turkey"){
        let showTurkey= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dturkey").innerHTML=showTurkey;
    } 
    if (newCountry === "Malawi"){
        let showMalawi= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dmalawi").innerHTML=showMalawi;
    }
    if (newCountry === "Colombia"){
        let showColombia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dcolombia").innerHTML=showColombia;
    } 
    if (newCountry === "Jamaica"){
        let showJamaica= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("djamaica").innerHTML=showJamaica;
    }   
    if (newCountry === "South Africa"){
        let showSouthafrica= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dsouthafrica").innerHTML=showSouthafrica;
    } 
    if (newCountry === "Ukraine"){
        let showUkraine= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dukraine").innerHTML=showUkraine;
    } 
    if (newCountry === "Uzbekistan"){
        let showUzbekistan= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("duzbekistan").innerHTML=showUzbekistan;
    } 
    if (newCountry === "Seychelles"){
        let showSeychelles= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dseychelles").innerHTML=showSeychelles;
    } 
    if (newCountry === "Bahamas"){
        let showBahamas= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dbahamas").innerHTML=showBahamas;
    }
    if (newCountry === "India"){
        let showIndia= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dindia").innerHTML=showIndia;
    }
    if (newCountry === "Pakistan"){
        let showPakistan= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dpakistan").innerHTML=showPakistan;
    }
    if (newCountry === "Kosovo"){
        let showKosovo= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dkosovo").innerHTML=showKosovo;
    }
    if (newCountry === "Chile"){
        let showChile= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dchile").innerHTML=showChile;
    }
    if (newCountry === "Cameroon"){
        let showCameroon= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dcameroon").innerHTML=showCameroon;
    }
    if (newCountry === "Ghana"){
        let showGhana= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dghana").innerHTML=showGhana;
    }
    if (newCountry === "Haiti"){
        let showHaiti= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dhaiti").innerHTML=showHaiti;
    }
    if (newCountry === "Malaysia"){
        let showMalaysia= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dmalaysia").innerHTML=showMalaysia;
    }
    if (newCountry === "Mauritius"){
        let showMauritius= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dmauritius").innerHTML=showMauritius;
    }
    if (newCountry === "Nigeria"){
        let showNigeria= newCountry+ "<br>"+ " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dnigeria").innerHTML=showNigeria;
    }
    if (newCountry === "Singapore"){
        let showSingapore= newCountry+ "<br>" + " basket " + countryBasket +" "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dsingapore").innerHTML=showSingapore;
    }
    if (newCountry === "Denmark"){
        let showDenmark= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("ddenmark").innerHTML=showDenmark;
    } 
    if (newCountry === "China"){
        let showChina= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dchina").innerHTML=showChina;
    } 
    if (newCountry === "Norway"){
        let showNorway= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dnorway").innerHTML=showNorway;
    } 
    
    

    
    
   
    //document.write(newCountry + " country basket " + countryBasket + " basket % " + basketConvert);
    //document.write("<br/>");
}
//  getEngineData = async () => {
//     // this line is optional: const Item = Moralis.Object.extend("Items");
//     console.log("CTV "+countriesTotalValue);
//     const query = new Moralis.Query("CountriesData");
//     query.descending("Country");
//     const countries = await query.find();
//     for (let i=0; i < countries.length; i++){
//     //count = country.length-1;
//      const Country= countries[i];
//      const newCountry=Country.get('Country');
//      const countryBasket=Country.get('Basket');
//      const basketConvert=(countryBasket/countriesTotalValue);
//      let indexBasket=basketConvert*countryBasket;
//      indexBasket=indexBasket.toFixed(0);
//     console.log(newCountry +" country basket "+countryBasket+"basket in index $"+ indexBasket);
    
//     }
//     //document.getElementById("theobjectName1").innerHTML="tunacan";
//    // document.getElementById("thenewPrice1").innerHTML=newPrice;
//    // document.getElementById("thenewCountry1").innerHTML=newCountry;
// }
//  getEngineData();
