window.onload = () =>
	//the function called when Calculate button is clicked.
	{
		/*calling a function calculateTip
		which will calculate the tip for the bill.*/
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() {
	/*assign values of ID : amount, person and service to
	variables for further calculations.*/
	let meal = document.querySelector('#meal').value;
	let guests = document.querySelector('#guests').value;
	let service = document.querySelector('#service').value;

	console.log(service);
	/*if statement will work when user presses
		calculate without entering values. */
	//so will display an alert box and return.
	if (meal === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}

	//now we are checking number of persons
	if (guests === '1')
	//if there is only one person then we need not to display each.
		document.querySelector('#each').style.display = 'none';
	else
	//if there are more than one person we will display each.
		document.querySelector('#each').style.display = 'block';

	/*calculating the tip by multiplying total-bill and type of
	service; then dividing it by number of persons.*/
	//fixing the total amount upto 2 digits of decimal
	let total = (meal * service) / guests;
	total = total.toFixed(2);

	//calculate complete tip total
	let tiptotal = (meal * service);
	tiptotal = tiptotal.toFixed(2);

	//finally displaying the tip value
	document.querySelector('#total').innerHTML = total;
	//additionally displaying the total of the tips
	document.querySelector('#tiptotal').innerHTML = tiptotal;
}
