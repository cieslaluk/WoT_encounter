const tpPrototype = {
        name: "50TP prototyp",
        avgDamage: 440,
        healthPool: 1500,
        reloadTime: 13.62,
    },
    tpMarkowskiego = {
        name: "50TP prototyp",
        avgDamage: 420,
        healthPool: 1450,
        reloadTime: 12.18,
    },
    proggettoM35 = {
        name: "Progetto M35 mod.46",
        avgDamage: 240,
        healthPool: 1400,
        reloadTime: 1,
    },
      
    p44Pantera = {
        name: "P.44 Pantera",
        avgDamage: 240,
        healthPool: 1300,
        reloadTime: 1,
    },
      tigerII = {
          name: "Tiger II",
          avgDamage: 320,
          healthPool: 1500,
          reloadTime: 9.97,
      },
      vk100P = {
          name: "VK 100.01 (P)",
          avgDamage: 440,
          healthPool: 1700,
          reloadTime: 14.38,
      },
      vk168P = {
          name: "VK 168.01 (P)",
          avgDamage: 440,
          healthPool: 1700,
          reloadTime: 14.38,
      },
       mauerBrecher = {
          name: "Mauerbrecher",
          avgDamage: 440,
          healthPool: 1700,
          reloadTime: 14.38,
      },
      
      lowe = {
          name: "Löwe",
          avgDamage: 320,
          healthPool: 1650,
          reloadTime: 11.51,
      },
      vk4502 = {
          name: "VK 45.02 (P) Ausf. A",
          avgDamage: 320,
          healthPool: 1570,
          reloadTime: 9.68,
      },
      
      panther88 = {
          name: "Panther mit 8,8 cm L/71",
          avgDamage: 240,
          healthPool: 1500,
          reloadTime: 7.67,
      },
      panzer58 = {
          name: "Panzer 58 Mutz",
          avgDamage: 240,
          healthPool: 1300,
          reloadTime: 7.67,          
      },
      
      indienPanzer = {
          name: "Indien-Panzer",
          avgDamage: 240,
          healthPool: 1300,
          reloadTime: 6.9,
      },
      pantherII = {
          name: "Panther II",
          avgDamage: 240,
          healthPool: 1500,
          reloadTime: 6.62,
      },
      
      m4190 = {
          name: "leKpz M 41 90 mm",
          avgDamage: 240,
          healthPool: 1100,
          reloadTime: 6.33,
      },
      
      hwk12 = {
          name: "HWK 12",
          avgDamage: 240,
          healthPool: 1100,
          reloadTime: 7.54,
      }



let tankObject = {
    "Poland": {
        "Heavy Tanks": [tpPrototype.name, tpMarkowskiego.name]
    },
    "Italy": {
        "Medium Tanks": [proggettoM35.name, p44Pantera.name]
    },
    "Germany": {
        "Heavy Tanks": [tigerII.name, vk100P.name, vk168P.name, mauerBrecher.name, lowe.name, vk4502.name],
        "Medium Tanks": [panther88.name, panzer58.name, indienPanzer.name,
            pantherII.name],
        "Light Tanks": [m4190.name, hwk12.name],
        "Tank Destroyers": ["Ferdinand", "Kanonenjagdpanzer", "Rheinmetall Skorpion G", "Jagdpanther II", "8,8 cm Pak 43 Jagdtiger", "Rhm.-Borsig Waffenträger", "Kanonenjagdpanzer 105"]
    },
    "France": {
        "Heavy Tanks": ["AMX 50 100", "AMX M4 mle.49", "AMX 65 t", "Somua SM", "FCM 50 t"],
        "Medium Tanks": ["Lorraine 40 t", "AMX Chasseur de chars", "M4A1 Revalorisé"],
        "Light Tanks": ["Bat.Châtillon 12 t", "ELC EVEN 90"],
        "Tank Destroyers": ["AMX AC mle. 48", "AMX Canon d'assaut 105"]
    },
    "Japan": {
        "Heavy Tanks": ["O-Ho"],
        "Medium Tanks": ["STA-1", "STA-2"]
    },
    "Sweden": {
        "Heavy Tanks": ["Emil I"],
        "Medium Tanks": ["Primo Victoria"],
        "Tank Destroyers": ["UDES 03", "Strv S1"]
    },
    "Czechoslovakia": {
        "Medium Tanks": ["TVP VTU Koncept"]
    },
    "U.K.": {
        "Heavy Tanks": ["Caernarvon"],
        "Medium Tanks": ["Centurion Mk.I", "FV4202", "Chieftain/T95", "Centurion Mk. 5/1 RACC"],
        "Tank Destroyers": ["AT 15", "Charioteer"]
    },
    "China": {
        "Heavy Tanks": ["WZ-111", "WZ-111 Alpine Tiger", "110", "112"],
        "Medium Tanks": ["Type 59",
            "T-34-2",
            "T-34-3", "59-Patton"],
        "Light Tanks": ["WZ-132"],
        "Tank Destroyers": ["WZ-111-1G FT", "WZ-120-1G FT"]
    },
    "U.S.A": {
        "Heavy Tanks": ["Chrysler K", "T26E5", "M6A2E1", "T32", "T34", "T34 B"],
        "Medium Tanks": ["T25 Pilot Number 1", "M46 Patton KR", "M26 Pershing", "T26E4 SuperPershing", "T69", "T95E2"],
        "Light Tanks": ["T92", "M41 Walker Bulldog"],
        "Tank Destroyers": ["T28", "T28 Prototype"]
    },
    "U.S.R.R": {
        "Heavy Tanks": ["IS-3", "IS-6", "KV-5", "KV-4", "IS-5", "IS-3A", "KV-4 Kreslavskiy", "Object 252U Defender", "Object 252U", "IS-M"],
        "Medium Tanks": ["Object 416", "STG Guard", "STG", "T-44", "Object 430 Version II"],
        "Light Tanks": ["LTTB"],
        "Tank Destroyers": ["ISU-152", "ISU-130", "SU-101"]
    }
}

window.onload = function () {
    let tankSel = document.getElementById("tankSel"),
        typeSel = document.getElementById("typeSel"),
        nameSel = document.getElementById("nameSel"),
        tankSelSec = document.getElementById("tankSelsec"),
        typeSelSec = document.getElementById("typeSelsec"),
        nameSelSec = document.getElementById("nameSelsec");

    for (let tank in tankObject) {
        tankSel.options[tankSel.options.length] = new Option(tank, tank);
    };
    tankSel.onchange = function () {
        typeSel.length = 1;
        nameSel.length = 1;
        if (this.selectedIndex < 1) return;
        for (let type in tankObject[this.value]) {
            typeSel.options[typeSel.options.length] = new Option(type, type);
        };
    };
    tankSel.onchange();
    typeSel.onchange = function () {
        nameSel.length = 1;
        if (this.selectedIndex < 1) return;
        let names = tankObject[tankSel.value][this.value];
        for (let i = 0; i < names.length; i++) {
            nameSel.options[nameSel.options.length] = new Option(names[i], names[i]);
        };
    };


    for (let tank in tankObject) {
        tankSelSec.options[tankSelSec.options.length] = new Option(tank, tank);
    };
    tankSelSec.onchange = function () {
        typeSelSec.length = 1;
        nameSelSec.length = 1;
        if (this.selectedIndex < 1) return;
        for (let type in tankObject[this.value]) {
            typeSelSec.options[typeSelSec.options.length] = new Option(type, type);
        };
    };
    tankSelSec.onchange();
    typeSelSec.onchange = function () {
        nameSelSec.length = 1;
        if (this.selectedIndex < 1) return;
        let names = tankObject[tankSelSec.value][this.value];
        for (let i = 0; i < names.length; i++) {
            nameSelSec.options[nameSelSec.options.length] = new Option(names[i], names[i]);
        };
    };

};