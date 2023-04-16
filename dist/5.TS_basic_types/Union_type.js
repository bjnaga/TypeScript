"use strict";
let i1 = 1;
i1 = "hi";
let tip = (billAmount, tipPercentage) => {
    if (typeof tipPercentage === "number") {
        return tipPercentage * billAmount;
    }
    else {
        let calculatedTip = billAmount * (parseInt(tipPercentage) / 100);
        return calculatedTip;
    }
};
let tipAmount = tip(100, "20 percentage");
console.log(tipAmount);
