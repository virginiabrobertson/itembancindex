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
        console.log((typeof basketConvert)+"is basketConvert a string");
        console.log("basketConvert"+basketConvert+"countryBasket"+countryBasket+"countriesTotalValue"+countriesTotalValue);
        
        let avgBasket=countriesTotalValue/28;
        let ibIndex=countryBasket/avgBasket;
        console.log((typeof ibIndex)+"is ibIndex a string");
        let ibBasket=ibIndex*1000;
        avgBasket=parseFloat(avgBasket).toFixed(0);
        setIndexData(newCountry,countriesTotalValue,basketConvert,ibIndex,ibBasket);
       
               
        console.log(newCountry +" basket total "+countryBasket+" basket % "+ basketConvert);
            
        displayCountry(newCountry, basketConvert, ibIndex, ibBasket, avgBasket);
       
        
    }
       
    
}
 getCountryData();

 setIndexData = async (newCountry,countriesTotalValue,basketConvert,ibIndex,ibBasket) => {
    const cquery = new Moralis.Query('CountriesData');
    cquery.equalTo("Country", newCountry)
    const countryID = await cquery.first();

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
    ibIndex=ibIndex.toFixed(4);
    basketConvert=parseFloat(basketConvert).toFixed(2);
    ibBasket=parseFloat(ibBasket).toFixed(0);
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
    if (newCountry === "Cyprus"){
        let showCyprus= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dcyprus").innerHTML=showCyprus;
    } 
    
    if (newCountry === "Ethiopia"){
        let showEthiopia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dethiopia").innerHTML=showEthiopia;
    }

    if (newCountry === "Poland"){
        let showPoland= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dpoland").innerHTML=showPoland;
    }

    if (newCountry === "Swizerland"){
        let showSwizerland= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dswizerland").innerHTML=showSwizerland;
    }

    if (newCountry === "Uganda"){
        let showUganda= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("duganda").innerHTML=showUganda;
    }
    
    if (newCountry === "Botswana"){
        let showBotswana= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dbotswana").innerHTML=showBotswana;
    }

    if (newCountry === "Zambia"){
        let showZambia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dzambia").innerHTML=showZambia;
    }

    if (newCountry === "Kenya"){
        let showKenya= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dkenya").innerHTML=showKenya;
    }

    if (newCountry === "Taiwan"){
        let showTaiwan= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dtaiwan").innerHTML=showTaiwan;
    }

    if (newCountry === "Portugal"){
        let showPortugal= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dportugal").innerHTML=showPortugal;
    }

    if (newCountry === "Brasil"){
        let showBrasil= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dbrasil").innerHTML=showBrasil;
    }

    if (newCountry === "Russia"){
        let showRussia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("drussia").innerHTML=showRussia;
    }

    if (newCountry === "Britain"){
        let showBritain= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dbritain").innerHTML=showBritain;
    }

    if (newCountry === "Georgia"){
        let showGeorgia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dgeorgia").innerHTML=showGeorgia;
    }

    if (newCountry === "Trinidad"){
        let showTrinidad= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dtrinidad").innerHTML=showTrinidad;
    }

    if (newCountry === "Congo"){
        let showCongo= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dcongo").innerHTML=showCongo;
    }

    if (newCountry === "Egypt"){
        let showEgypt= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("degypt").innerHTML=showEgypt;
    }

    if (newCountry === "Albania"){
        let showAlbania= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dalbania").innerHTML=showAlbania;
    }

    if (newCountry === "Eswatini"){
        let showEswatini= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("deswatini").innerHTML=showEswatini;
    }

    if (newCountry === "Montenegro"){
        let showMontenegro= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dmontenegro").innerHTML=showMontenegro;
    }

    if (newCountry === "Nicaragua"){
        let showNicaragua= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dnicaragua").innerHTML=showNicaragua;
    }

    if (newCountry === "Morocco"){
        let showMorocco= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dmorocco").innerHTML=showMorocco;
    }

    if (newCountry === "Peru"){
        let showPeru= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dperu").innerHTML=showPeru;
    }

    if (newCountry === "SaudiArabia"){
        let showSaudiArabia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dsaudiarabia").innerHTML=showSaudiArabia;
    }

    if (newCountry === "Sierra Leone"){
        let showSierraLeone= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dsierraleone").innerHTML=showSierraLeone;
    }

    if (newCountry === "Vietnam"){
        let showVietnam= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dvietnam").innerHTML=showVietnam;
    }

    if (newCountry === "Romania"){
        let showRomania= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dromania").innerHTML=showRomania;
    }

    if (newCountry === "Burkina Faso"){
        let showBurkinaFaso= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dburkinafaso").innerHTML=showBurkinaFaso;
    }

    if (newCountry === "Japan"){
        let showJapan= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("djapan").innerHTML=showJapan;
    }

    if (newCountry === "Honduras"){
        let showHonduras= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dhonduras").innerHTML=showHonduras;
    }

    if (newCountry === "Belarus"){
        let showBelarus= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dbelarus").innerHTML=showBelarus;
    }

    if (newCountry === "Bolivia"){
        let showBolivia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dbolivia").innerHTML=showBolivia;
    }

    if (newCountry === "Tunisia"){
        let showTunisia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dtunisia").innerHTML=showTunisia;
    }
    
    if (newCountry === "Argentina"){
        let showArgentina= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dargentina").innerHTML=showArgentina;
    }

    if (newCountry === "Suriname"){
        let showSuriname= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dsuriname").innerHTML=showSuriname;
    } 
    
    if (newCountry === "Guyana"){
        let showGuyana= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dguyana").innerHTML=showGuyana;
    } 

    if (newCountry === "Canada"){
        let showCanada= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dcanada").innerHTML=showCanada;
    } 

    if (newCountry === "UAE"){
        let showUAE= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dUAE").innerHTML=showUAE;
    }

    if (newCountry === "StMaarten"){
        let showStMaarten= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dstmaarten").innerHTML=showStMaarten;
    }

    if (newCountry === "Benin"){
        let showBenin= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dbenin").innerHTML=showBenin;
    }

    if (newCountry === "Armenia"){
        let showArmenia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("darmenia").innerHTML=showArmenia;
    }

    if (newCountry === "Philippines"){
        let showPhilippines= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dphilippines").innerHTML=showPhilippines;
    }

    if (newCountry === "Oman"){
        let showOman= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("doman").innerHTML=showOman;
    }

    if (newCountry === "Bulgaria"){
        let showBulgaria= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dbulgaria").innerHTML=showBulgaria;
    }

    if (newCountry === "Netherlands"){
        let showNetherlands= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dnetherlands").innerHTML=showNetherlands;
    }

    if (newCountry === "Kazakhstan"){
        let showKazakhstan= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dkazakhstan").innerHTML=showKazakhstan;
    }

    if (newCountry === "South Korea"){
        let showSouthKorea= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dsouthkorea").innerHTML=showSouthKorea;
    }

    if (newCountry === "Germany"){
        let showGermany= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dgermany").innerHTML=showGermany;
    }

    if (newCountry === "Thailand"){
        let showThailand= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dthailand").innerHTML=showThailand;
    }

    if (newCountry === "Algeria"){
        let showAlgeria= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dalgeria").innerHTML=showAlgeria;
    }

    if (newCountry === "Ecuador"){
        let showEcuador= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("decuador").innerHTML=showEcuador;
    }

    if (newCountry === "Hungary"){
        let showHungary= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dhungary").innerHTML=showHungary;
    }

    if (newCountry === "Uruguay"){
        let showUruguay= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("duruguay").innerHTML=showUruguay;
    }

    if (newCountry === "Serbia"){
        let showSerbia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dserbia").innerHTML=showSerbia;
    }

    if (newCountry === "Mexico"){
        let showMexico= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dmexico").innerHTML=showMexico;
    }

    if (newCountry === "Costa Rica"){
        let showCostaRica= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dcostarica").innerHTML=showCostaRica;
    }

    if (newCountry === "Greece"){
        let showGreece= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dgreece").innerHTML=showGreece;
    }

    if (newCountry === "Lithuania"){
        let showLithuania= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dlithuania").innerHTML=showLithuania;
    }

    if (newCountry === "Vietnam"){
        let showVietnam= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dvietnam").innerHTML=showVietnam;
    }

    if (newCountry === "Bangladesh"){
        let showBangladesh= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dbangladesh").innerHTML=showBangladesh;
    }

    if (newCountry === "Slovakia"){
        let showSlovakia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dslovakia").innerHTML=showSlovakia;
    }

    if (newCountry === "Ireland"){
        let showIreland= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("direland").innerHTML=showIreland;
    }

    if (newCountry === "Slovenia"){
        let showSlovenia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dslovenia").innerHTML=showSlovenia;
    }

    if (newCountry === "Austria"){
        let showAustria= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("daustria").innerHTML=showAustria;
    }

    if (newCountry === "Venezuela"){
        let showVenezuela= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dvenezuela").innerHTML=showVenezuela;
    }

    if (newCountry === "Israel"){
        let showIsrael= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("disrael").innerHTML=showIsrael;
    }

    if (newCountry === "Mongolia"){
        let showMongolia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dmongolia").innerHTML=showMongolia;
    }

    if (newCountry === "North Macedonia"){
        let showNorthMacedonia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dnorthmacedonia").innerHTML=showNorthMacedonia;
    }

    if (newCountry === "Croatia"){
        let showCroatia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dcroatia").innerHTML=showCroatia;
    }

    if (newCountry === "Estonia"){
        let showEstonia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("destonia").innerHTML=showEstonia;
    }

    if (newCountry === "Jordan"){
        let showJordan= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("djordan").innerHTML=showJordan;
    }

    if (newCountry === "Sweden"){
        let showSweden= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dsweden").innerHTML=showSweden;
    }

    if (newCountry === "Qatar"){
        let showQatar= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dqatar").innerHTML=showQatar;
    }

    if (newCountry === "Finland"){
        let showFinland= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dfinland").innerHTML=showFinland;
    }

    if (newCountry === "Cambodia"){
        let showCambodia= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dcambodia").innerHTML=showCambodia;
    }

    if (newCountry === "Azerbaijan"){
        let showAzerbaijan= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dazerbaijan").innerHTML=showAzerbaijan;
    }

    if (newCountry === "Mozambique"){
        let showMozambique= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dmozambique").innerHTML=showMozambique;
    }

    if (newCountry === "Spain"){
        let showSpain= newCountry+ "<br>" + " basket " + countryBasket + " "+ " is " + basketConvert + "% of world prices. Use "+ ibIndex +"% Index and "+ ibBasket+ " as Indexed Basket"+ "<br/>";
        document.getElementById("dspain").innerHTML=showSpain;
    }


    
}

