// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:


/*===============GLobal Variables===============*/
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomNumberCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function arrSum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

/*============New Constructor=================== */
// function CookieStore (location, minCustomers, maxCustomers, avgCookies) {
//   this.location = location + ' store';
//   this.minCustomers = minCustomers;
//   this.maxCustomers = maxCustomers;
//   this.avgCookies = avgCookies;
//   this. = [];
//   }

// CookieStore.prototype.renderToPage = renderStore;
// CookieStore.prototype.renderStoreInTable = renderStoreInTable;

// new Store ('Seattle', 23, 65, 6.3);

/*================Functions+++++++++++++++++++++++ */

/*============Seattle============== */

var seattleStore = {
  name: 'seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  dailyStoreSales: [],

  calculateHourlyCookieSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++)
    {
      var randomNumber = getRandomNumberCustomer(this.minCustomers, this.maxCustomers);
      var totalHourlySales = Math.round(randomNumber * this.avgCookies);
      this.dailyStoreSales.push(totalHourlySales);
    }
  },

  renderNameToPage: function() {
    var parentList = document.getElementById(this.unorderedListTitle);
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parentList.appendChild(listItem);
  },

  renderHourTotalsToPage: function() {
    var parentLocationHourlySales = document.getElementById(this.name);
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var newLocations = document.createElement('li');
      newLocations.textContent = hoursOfOperation[i] + ' : ' + this.dailyStoreSales[i] + ' cookies';
      parentLocationHourlySales.appendChild(newLocations);
    }
  },

  dailyTotalCookieSales: function() {
    var cookieTotal = arrSum(this.dailyStoreSales);
    var totalCookieList = document.getElementById(this.name);
    var totalCookieItemList = document.createElement('li');
    totalCookieItemList.textContent = ('Total ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieItemList);
  },
};

seattleStore.calculateHourlyCookieSales();
seattleStore.renderToPage();
seattleStore.renderHourTotalsToPage();
seattleStore.dailyTotalCookieSales();

// /*==================Tokyo========================= */

// var tokyoStore = {
//   name: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookies: 1.2,
//   totalHourlySales: [],
//   paragraphId: 'tokyo-p',

//   calculateHourlyCookieSales: calculateHourlyCookieSales,
//   renderToPage: renderToPage,
//   renderHourTotalsToPage: renderHourTotalsToPage,
//   dailyTotalCookieSales: dailyTotalCookieSales,

// },

// /*==================Dubai========================= */

// var dubaiStore = {
//   name: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   totalHourlySales: [],
//   paragraphId: 'dubai-p',

//   calculateHourlyCookieSales: calculateHourlyCookieSales,
//   renderToPage: renderToPage,
//   renderHourTotalsToPage: renderHourTotalsToPage,
//   dailyTotalCookieSales: dailyTotalCookieSales,

// };

// /*==================Paris========================= */

// var parisStore = {
//   name: 'Paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookies: 2.3,
//   cookieSales: [],
//   paragraphId: 'paris-p',

//   calculateHourlyCookieSales: calculateHourlyCookieSales,
//   renderToPage: renderToPage,
//   renderHourTotalsToPage: renderHourTotalsToPage,
//   dailyTotalCookieSales: dailyTotalCookieSales,
// };

// /*==================Lima========================= */

// var limaStore = {
//   name: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookies: 4.6,
//   limaSales: [],
//   paragraphId: 'lima-p',

//   calculateHourlyCookieSales: calculateHourlyCookieSales,
//   renderToPage: renderToPage,
//   renderHourTotalsToPage: renderHourTotalsToPage,
//   dailyTotalCookieSales: dailyTotalCookieSales,

// };

/*===================Invocations=================== */



// tokyoStore.calculateHourlyCookieSales();
// tokyoStore.renderToPage();
// tokyoStore.renderHourTotalsToPage();
// tokyoStore.dailyTotalCookieSales();

// dubaiStore.calculateHourlyCookieSales();
// dubaiStore.renderToPage()
// dubaiStore.renderHourTotalsToPage();
// dubaiStore.dailyTotalCookieSales();

// parisStore.calculateHourlyCookieSales();
// parisStore.renderToPage();
// parisStore.renderHourTotalsToPage();
// parisStore.dailyTotalCookieSales();

// limaStore.calculateHourlyCookieSales();
// limaStore.renderToPage();
// limaStore.renderHourTotalsToPage();
// limaStore.dailyTotalCookieSales();



