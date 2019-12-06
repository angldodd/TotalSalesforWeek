var daysArray = []; //start with a blank array


daysArray.push (Number(window.prompt("Enter total sales for Monday.")));
daysArray.push (Number(window.prompt("Enter total sales for Tuesday.")));
daysArray.push (Number(window.prompt("Enter total sales for Wednesday.")));
daysArray.push (Number(window.prompt("Enter total sales for Thursday.")));
daysArray.push (Number(window.prompt("Enter total sales for Friday.")));
daysArray.push (Number(window.prompt("Enter total sales for Saturday.")));
daysArray.push (Number(window.prompt("Enter total sales for Sunday.")));
//
//var daysArray = [Monday, Tuesday];
var total = 0;

for (i=0; i<daysArray.length; i++) {
    total = total + daysArray[i];
}

document.write("The total sales is" + total);


