let tankObject = {
    "Poland": {
        "Heavy Tanks": ["50TP prototyp", "53TP Markowskiego"]
    },
    "Italy": {
        "Medium Tanks": ["Progetto M35 mod. 46", "P.44 Pantera"]
    },
    "Germany": {
        "Heavy Tanks": ["Tiger II", "VK 100.01 (P)", "VK 168.01 (P)", "Löwe", "VK 45.02 (P) Ausf. A"],
        "Medium Tanks": ["Panther mit 8,8 cm L/71", "Panzer 58 Mutz",
            "Indien-Panzer",
            "Panther II"],
        "Light Tanks": ["leKpz M 41 90 mm", "HWK 12"],
        "Tank Destroyers": ["Ferdinand", "Kanonenjagdpanzer", "Rheinmetall Skorpion G", "Jagdpanther II", "8,8 cm Pak 43 Jagdtiger", "Rhm.-Borsig Waffenträger"]
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