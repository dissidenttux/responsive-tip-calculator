/* All visible variables */

/* user inputted values */

// the monetary tip amount  that the user inputs
let amountTipFiat;
// the guest amount that the user inputs
let amountGuest;
// the tip percentage, i.e. "quality of service" the user inputs
let amountTipPercent;


/* result values */

// the calculated fiat amount for the tip
// let resultTipAmount;
// the calculated final amount the customer pays
let resultTotalAmount;


/* methods */

// return the value for "resultTipAmount"
function calcTipAmount(amountTipFiat, amountTipPercent){
	let resultTipAmount = amountTipFiat * amountTipPercent;
	return resultTipAmount;
}


/* user-interactive actions, e.g. "pipes" */

// caluating tip and logging the result
console.log(calcTipAmount(amountTipFiat, amountTipPercent));
