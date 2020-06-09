// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:


/*===============GLobal Variables===============*/
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomNumberCustomer(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function arrSum(arr){
  return arr.reduce(function(a,b){
    return a + b;
  }, 0);
}

/*=============Objects=================== */

/*============Seattle============== */

var seattleStore = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  seattleSales: [],

  calculateHourlyCookieSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++)
    {
      var randomNumber = getRandomNumberCustomer(this.minCustomers, this.maxCustomers);

      var totalHourlySales = Math.round(randomNumber * this.avgCookies);

      this.seattleSales.push(totalHourlySales);
    }
  },

  renderToPage: function() {
    var parentList = document.getElementById('seattle-p');
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parentList.appendChild(listItem);
  },

  renderHourTotalsToPage: function(){
    var parentLocationHourlySales = document.getElementById('seattle-p');
    for (var i = 0; i < hoursOfOperation.length; i++){
      var newLocations = document.createElement('li');
      newLocations.textContent = hoursOfOperation[i] + ' : ' + this.seattleSales[i] + ' cookies';
      parentLocationHourlySales.appendChild(newLocations);
    }
  },
  dailyTotalCookieSales : function(){
    var cookieTotal = arrSum(this.seattleSales);
    var totalCookieList = document.getElementById('seattle-p');
    var totalCookieItemList = document.createElement('li');
    totalCookieItemList.textContent = ('Total ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieItemList);
  },
};


/*==================Tokyo========================= */

var tokyoStore = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  tokyoSales: [],

  calculateHourlyCookieSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++)
    {
      var randomNumber = getRandomNumberCustomer(this.minCustomers, this.maxCustomers);

      var totalHourlySales = Math.round(randomNumber * this.avgCookies);

      this.tokyoSales.push(totalHourlySales);
    }
  },

  renderToPage: function() {
    var parentList = document.getElementById('tokyo-p');
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parentList.appendChild(listItem);
  },

  renderHourTotalsToPage: function(){
    var parentLocationHourlySales = document.getElementById('tokyo-p');
    for (var i = 0; i < hoursOfOperation.length; i++){
      var newLocations = document.createElement('li');
      newLocations.textContent = hoursOfOperation[i] + ' : ' + this.tokyoSales[i] + ' cookies';
      parentLocationHourlySales.appendChild(newLocations);
    }
  },
  dailyTotalCookieSales : function(){
    var cookieTotal = arrSum(this.tokyoSales);
    var totalCookieList = document.getElementById('tokyo-p');
    var totalCookieItemList = document.createElement('li');
    totalCookieItemList.textContent = ('Total ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieItemList);
  },
};

/*==================Dubai========================= */

var dubaiStore = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  dubaiSales: [],

  calculateHourlyCookieSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++)
    {
      var randomNumber = getRandomNumberCustomer(this.minCustomers, this.maxCustomers);

      var totalHourlySales = Math.round(randomNumber * this.avgCookies);

      this.dubaiSales.push(totalHourlySales);
    }
  },

  renderToPage: function() {
    var parentList = document.getElementById('dubai-p');
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parentList.appendChild(listItem);
  },

  renderHourTotalsToPage: function(){
    var parentLocationHourlySales = document.getElementById('dubai-p');
    for (var i = 0; i < hoursOfOperation.length; i++){
      var newLocations = document.createElement('li');
      newLocations.textContent = hoursOfOperation[i] + ' : ' + this.dubaiSales[i] + ' cookies';
      parentLocationHourlySales.appendChild(newLocations);
    }
  },
  dailyTotalCookieSales : function(){
    var cookieTotal = arrSum(this.dubaiSales);
    var totalCookieList = document.getElementById('dubai-p');
    var totalCookieItemList = document.createElement('li');
    totalCookieItemList.textContent = ('Total ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieItemList);
  },
};

/*==================Paris========================= */

var parisStore = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  parisSales: [],

  calculateHourlyCookieSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++)
    {
      var randomNumber = getRandomNumberCustomer(this.minCustomers, this.maxCustomers);

      var totalHourlySales = Math.round(randomNumber * this.avgCookies);

      this.parisSales.push(totalHourlySales);
    }
  },

  renderToPage: function() {
    var parentList = document.getElementById('paris-p');
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parentList.appendChild(listItem);
  },

  renderHourTotalsToPage: function(){
    var parentLocationHourlySales = document.getElementById('paris-p');
    for (var i = 0; i < hoursOfOperation.length; i++){
      var newLocations = document.createElement('li');
      newLocations.textContent = hoursOfOperation[i] + ' : ' + this.parisSales[i] + ' cookies';
      parentLocationHourlySales.appendChild(newLocations);
    }
  },
  dailyTotalCookieSales : function(){
    var cookieTotal = arrSum(this.parisSales);
    var totalCookieList = document.getElementById('paris-p');
    var totalCookieItemList = document.createElement('li');
    totalCookieItemList.textContent = ('Total ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieItemList);
  },
};

/*==================Lima========================= */

var limaStore = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  limaSales: [],

  calculateHourlyCookieSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++)
    {
      var randomNumber = getRandomNumberCustomer(this.minCustomers, this.maxCustomers);

      var totalHourlySales = Math.round(randomNumber * this.avgCookies);

      this.limaSales.push(totalHourlySales);
    }
  },

  renderToPage: function() {
    var parentList = document.getElementById('lima-p');
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parentList.appendChild(listItem);
  },

  renderHourTotalsToPage: function(){
    var parentLocationHourlySales = document.getElementById('lima-p');
    for (var i = 0; i < hoursOfOperation.length; i++){
      var newLocations = document.createElement('li');
      newLocations.textContent = hoursOfOperation[i] + ' : ' + this.limaSales[i] + ' cookies';
      parentLocationHourlySales.appendChild(newLocations);
    }
  },
  dailyTotalCookieSales : function(){
    var cookieTotal = arrSum(this.limaSales);
    var totalCookieList = document.getElementById('lima-p');
    var totalCookieItemList = document.createElement('li');
    totalCookieItemList.textContent = ('Total ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieItemList);
  },
};

/*===================Invocations=================== */

seattleStore.calculateHourlyCookieSales();
seattleStore.renderToPage();
seattleStore.renderHourTotalsToPage();
seattleStore.dailyTotalCookieSales();

tokyoStore.calculateHourlyCookieSales();
tokyoStore.renderToPage();
tokyoStore.renderHourTotalsToPage();
tokyoStore.dailyTotalCookieSales();

dubaiStore.calculateHourlyCookieSales();
dubaiStore.renderToPage()
dubaiStore.renderHourTotalsToPage();
dubaiStore.dailyTotalCookieSales();

parisStore.calculateHourlyCookieSales();
parisStore.renderToPage();
parisStore.renderHourTotalsToPage();
parisStore.dailyTotalCookieSales();

limaStore.calculateHourlyCookieSales();
limaStore.renderToPage();
limaStore.renderHourTotalsToPage();
limaStore.dailyTotalCookieSales();



