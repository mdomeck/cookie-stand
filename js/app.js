// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

var seattleStore = {
  name : 'Seattle',
  min : 23 ,
  max : 65 ,
  avg : 6.3 ,
  renderToPage : function(){
    var parentUnorderedList = document.getElementById('seattle-ul');
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    parentUnorderedList.appendChild(listItem);
 
    var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', hourlyTotals ];

    for(var i = 0; i < hoursOfOperation.length; i++){
      (randomNumberCustomer*6.3);
      listItem = document.createElement('li');
      listItem.textContent = hoursOfOperation[i] + ':' + avg + 'cookies';
      parentUnorderedList.appendChild(listItem);

  }
}

seattleStore.renderToPage()
