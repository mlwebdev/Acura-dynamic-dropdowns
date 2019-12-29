var acura_list = (function () {

  var acuras_current = [
    "MDX", // 2000 to current
    "RDX", // 2007 to current
    "ILX", // 2013 to present
    "RLX", // 2014 to present 
    "TLX", // 2015 to present  
    "NSX", // 1990 to 2005 and 2016 to present
    "CDX" // 2016 to present
  ];
  var acuras_discontinued = [
    "ZDX", // 2009–2013
    "CSX", // 2005–2011
    "TSX", // 2003–2014
    "RSX", // 2002–2006
    "EL", // 1997–2005 
    "CL", // 1997–1999 and 2001–2003
    "TL", // 1996–2014
    "RL", // 1996–2012
    "SLX", // 1996–1999
    "Vigor", // 1992–1994
    "NSX", // 1990–2005
    "Integra", // 1985–2001
    "Legend" // 1985–1995
    ];

  

// car_selected.addEventListener("change", grabMake);
EvtHandle(car_selected, "change", grabMake);

function range(a, b, c, d, e){
 return (function () {
   if(a >= b && b <= c) {
    d.push(e);
  }
 })();
}

function grabMake(year_select, year_val) {
  year_select = ID("year-select");
  year_val = year_select.value;

  if(car_selected.value == "Acura"){

    if (year_val >= 2000) {
      acura_list.acuras.push(acuras_current[0]);
    } // MDX
    if (year_val >= 2007) {
      acura_list.acuras.push(acuras_current[1]);
    } // RDX

    if (year_val >= 2013) {
      acura_list.acuras.push(acuras_current[2]);
    } // ILX
    if (year_val >= 2014) {
      acura_list.acuras.push(acuras_current[3]);
    } // RLX

    if (year_val >= 2015) {
      acura_list.acuras.push(acuras_current[4]);
    } // TLX
    if ((year_val >= 2016) ||
        (year_val >= 1990 && year_val <= 2005)) 
    {
      acura_list.acuras.push(acuras_current[5]);
    } // NSX

    if (year_val >= 2016) {
      acura_list.acuras.push(acuras_current[6]);
    } // CDX
/*
    if (year_val >= 2009 && year_val <= 2013) {
      acura_list.acuras.push(acuras_discontinued[0]);
    } // ZDX
*/
    range(year_val, 2009, 2013, 
      acura_list.acuras, acuras_discontinued[0]);

    if (year_val >= 2005 && year_val <= 2012) {
      acura_list.acuras.push(acuras_discontinued[1]);
    } // CSX
    if (year_val >= 2003 && year_val <= 2014) {
      acura_list.acuras.push(acuras_discontinued[2]); // TSX
    }
    if (year_val >= 2002 && year_val <= 2006) {
      acura_list.acuras.push(acuras_discontinued[3]); // RSX
    }
    if (year_val >= 1997 && year_val <= 2005) {
      acura_list.acuras.push(acuras_discontinued[4]); // EL
    }
    // Not done yet
    if ((year_val >= 1997 && year_val <= 1999) || 
    (year_val >= 2001 && year_val <= 2003))
    {
      acura_list.acuras.push(acuras_discontinued[5]); // CL
    }
    if (year_val >= 1996 && year_val <= 2014) {
      acura_list.acuras.push(acuras_discontinued[6]); // TL
    }
    if (year_val >= 1996 && year_val <= 2012) {
      acura_list.acuras.push(acuras_discontinued[7]); // RL
    }
    if (year_val >= 1996 && year_val <= 1999) {
      acura_list.acuras.push(acuras_discontinued[8]); // SLX
    }
    if (year_val >= 1992 && year_val <= 1994) {
      acura_list.acuras.push(acuras_discontinued[9]); // Vigor
    }
    if (year_val >= 1985 && year_val <= 2001) {
      acura_list.acuras.push(acuras_discontinued[11]); // Integra
    }
    if (year_val >= 1985 && year_val <= 1995) {
      acura_list.acuras.push(acuras_discontinued[12]); // Legend
    }
  }
   /* */


   DynamicElements("acuras-select", acuras, "option");

}

  return {
    acuras: acuras,
    acuras_current: acuras_current,
    acuras_discontinued: acuras_discontinued
  }
})();

// dynamic_select("acuras-select", acura, "option");