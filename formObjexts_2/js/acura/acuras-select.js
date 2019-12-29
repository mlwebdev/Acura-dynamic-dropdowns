var acura_list = (function () {

  var acuras_curr = [
    "MDX", // 2000 to current
    "RDX", // 2007 to current
    "ILX", // 2013 to present
    "RLX", // 2014 to present 
    "TLX", // 2015 to present  
    "CDX" // 2016 to present
  ];
  var acuras_disc = [
    "ZDX", // 2009–2013 [0]
    "CSX", // 2005–2011 [1]
    "TSX", // 2003–2014 [2]
    "RSX", // 2002–2006 [3]
    "EL", // 1997–2005 [4] 
    "CL", // 1997–1999 and 2001–2003 [5]
    "TL", // 1996–2014 [6]
    "RL", // 1996–2012 [7]
    "SLX", // 1996–1999 [8]
    "Vigor", // 1992–1994 [9]
    "NSX", // 1990–2005 [10]
    "Integra", // 1985–2001 [11]
    "Legend" // 1985–1995 [12]
    ];

  var acuras = ["Model"];

  var car_selected = QUERY('#manufacturers');
  var car_val = car_selected.value;

// car_selected.addEventListener("change", grabMake);
EvtHandle(car_selected, "change", grabMake);



function grabMake(year_select, year_val) {
  year_select = ID("year-select");

  function MoreOrEqual(a, b, c, d){
    if (a >= b) {
      return c.push(d);
    }
  }


  function range(a, b, c, d, e){
    if(a >= b && a <= c) {
      d.push(e);
    } 
  }

  function range2(a, b, c, b1, c1, d, e){
    if((a >= b && a <= c) || (a >= b1 && a <= c1)){
      d.push(e);
    }
  }

  function range2C(a, b, c, b1, d, e){
    if((a >= b && a <= c) || (a >= b1)){
      d.push(e);
    }
  }

var i = 0;
  if (car_selected.value == "Acura") {
    
    
    MoreOrEqual(year_select.value, 2000,
      acura_list.acuras, acuras_curr[0]);

    MoreOrEqual(year_select.value, 2007,
      acura_list.acuras, acuras_curr[1]);

    MoreOrEqual(year_select.value, 2013,
      acura_list.acuras, acuras_curr[2]);

    MoreOrEqual(year_select.value, 2014,
      acura_list.acuras, acuras_curr[3]);

    MoreOrEqual(year_select.value, 2015,
      acura_list.acuras, acuras_curr[4]);

    MoreOrEqual(year_select.value, 2065,
      acura_list.acuras, acuras_curr[5]);



    range(year_select.value, 2009, 2013,
      acura_list.acuras, acuras_disc[0]) // CSX

    range(year_select.value, 2005, 2011,
      acura_list.acuras, acuras_disc[1]) // CSX

    range(year_select.value, 2003, 2014,
      acura_list.acuras, acuras_disc[2]) // TSX

    range(year_select.value, 2000, 2006,
      acura_list.acuras, acuras_disc[3]) // RSX

    range(year_select.value, 1997, 2005,
      acura_list.acuras, acuras_disc[4]); // EL
    
    range2(year_select.value, 1997, 1999, 2001, 2003,
      acura_list.acuras, acuras_disc[5]); // CL

    range(year_select.value, 1996, 2014,
      acura_list.acuras, acuras_disc[6]); // TL

    range(year_select.value, 1996, 2012,
      acura_list.acuras, acuras_disc[7]); // RL

    range(year_select.value, 1996, 1999,
      acura_list.acuras, acuras_disc[8]); // SLX

    range(year_select.value, 1992, 1994,
      acura_list.acuras, acuras_disc[9]); // Vigor  
      
    range2C(year_select.value, 1990, 2005, 2016,
      acura_list.acuras, acuras_disc[10]); // NSX
  
    range(year_select.value, 1985, 2001,
      acura_list.acuras, acuras_disc[11]); // Integra

    range(year_select.value, 1985, 1995,
      acura_list.acuras, acuras_disc[12]); // Legend

  }
   DynamicElements("acuras-select", acuras, "option");

}

  return {
    acuras: acuras,
    acuras_curr: acuras_curr,
    acuras_disc: acuras_disc
  }
})();

