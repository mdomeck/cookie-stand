


var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomNumberCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrSum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function calculateHourlyCookieSales() {
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var randomNumber = getRandomNumberCustomer(this.minCustomers, this.maxCustomers);
    var totalHourlySales = Math.round(randomNumber * this.avgCookies);
    this.dailyTotal += totalHourlySales;
    this.hourlyStoreSales.push(totalHourlySales);
  }
  console.log(this.dailyTotal);
}

function renderNameToPage() {
  var parentList = document.getElementById(this.unorderedListTitle);
  var listItem = document.createElement('p');
  listItem.textContent = this.name;
  parentList.appendChild(listItem);
}

function renderHourTotalsToPage() {
  var parentLocationHourlySales = document.getElementById(this.unorderedListTitle);
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var newLocations = document.createElement('li');
    newLocations.textContent = hoursOfOperation[i] + ' : ' + this.hourlyStoreSales[i] + ' cookies';
    parentLocationHourlySales.appendChild(newLocations);
  }
}

function dailyTotalCookieSales() {
  var cookieTotal = arrSum(this.hourlyStoreSales);
  var totalCookieList = document.getElementById(this.unorderedListTitle);
  var totalCookieItemList = document.createElement('li');
  totalCookieItemList.textContent = ('Total ' + cookieTotal + ' cookies');
  totalCookieList.appendChild(totalCookieItemList);
}

function hourlyTotals() {
  var hourlyCookiesArr = [];
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var theTotal = 0;
    theTotal += seattleStore.hourlyStoreSales[i];
    theTotal += tokyoStore.hourlyStoreSales[i];
    theTotal += dubaiStore.hourlyStoreSales[i];
    theTotal += parisStore.hourlyStoreSales[i];
    theTotal += limaStore.hourlyStoreSales[i];
    hourlyCookiesArr.push(theTotal);
  }
  return hourlyCookiesArr;
}

// function hourlyTotals(){
//   var hourlyCookiesArr = [];
//   for (var i = 0; i < hoursOfOperation.length; i++) {
//     var theTotal = 0;
//     // document.create 
//     var tableCell = document.createElement('td');
//     for (var j = 0; j < hourlyStoreSales.length; j++){
//       theTotal+= hourlyStoreSales[j].totalHourlySales[i];
//     }
//     // theTotal += seattleStore.hourlyStoreSales[i];
//     // theTotal += tokyoStore.hourlyStoreSales[i];
//     // theTotal += dubaiStore.hourlyStoreSales[i];
//     // theTotal += parisStore.hourlyStoreSales[i];
//     // theTotal += limaStore.hourlyStoreSales[i];
//     // hourlyCookiesArr.push(theTotal);
//   }
//   return hourlyCookiesArr;
// }

var newStore = document.getElementById('newStoreForm');

newStore.addEventListener('submit', addNewStore);

function addNewStore(newStore) {
  newStore.preventDefault();

  var name = newStore.target.name.value;
  var minCustomers = newStore.target.minCustomers.value;
  var maxCustomers = newStore.target.maxCustomers.value;
  var avgCookies = newStore.target.avgCookies.value;

  var newStoreAdded = new CookieStore(name, minCustomers, maxCustomers, avgCookies);
  console.log(newStoreAdded);

  newStoreAdded.calculateHourlyCookieSales();

  var hourlyCookiesArr = [];
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var theTotal = 0;
    theTotal += seattleStore.hourlyStoreSales[i];
    theTotal += tokyoStore.hourlyStoreSales[i];
    theTotal += dubaiStore.hourlyStoreSales[i];
    theTotal += parisStore.hourlyStoreSales[i];
    theTotal += limaStore.hourlyStoreSales[i];
    // theTotal += ohioStore.hourlyCookieSales[i];
    hourlyCookiesArr.push(theTotal);
  }

  var table = document.getElementById('salesTable');
  table.innerHTML = '';

  makeHeadings();
  newStoreAdded.renderHourlySalesInTable();
  seattleStore.renderHourlySalesInTable();
  tokyoStore.renderHourlySalesInTable();
  dubaiStore.renderHourlySalesInTable();
  parisStore.renderHourlySalesInTable();
  limaStore.renderHourlySalesInTable();
  makeFooter();
}


/*============New Constructor=================== */
function CookieStore(name, minCustomers, maxCustomers, avgCookies, unorderedListTitle) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyStoreSales = [];
  this.dailyTotal = 0;
  this.unorderedListTitle = unorderedListTitle;
  // array.push(this);
  // this.render();
}

CookieStore.prototype.calculateHourlyCookieSales = calculateHourlyCookieSales;
CookieStore.prototype.renderNameToPage = renderNameToPage;
CookieStore.prototype.renderHourTotalsToPage = renderHourTotalsToPage;
CookieStore.prototype.dailyTotalCookieSales = dailyTotalCookieSales;
CookieStore.prototype.renderHourlySalesInTable = renderHourlySalesInTable;

var seattleStore = new CookieStore('Seattle', 23, 65, 6.3, 'SeattleTitle');
var tokyoStore = new CookieStore('Tokyo', 3, 24, 1.2, 'TokyoTitle');
var dubaiStore = new CookieStore('Dubai', 11, 38, 3.7, 'DubaiTitle');
var parisStore = new CookieStore('Paris', 20, 38, 2.3, 'ParisTitle');
var limaStore = new CookieStore('Lima', 2, 16, 4.6, 'LimaTitle');

// allStores.push(seattleStore;)



function makeHeadings() {
  var table = document.getElementById('salesTable');
  var headerRow = document.createElement('tr');
  var headerCell = document.createElement('th');
  headerCell.textContent = 'Store';
  headerRow.appendChild(headerCell);
  for (var i = 0; i < hoursOfOperation.length; i++) {
    headerCell = document.createElement('th');
    headerCell.textContent = hoursOfOperation[i];
    headerRow.appendChild(headerCell);
  }
  headerCell = document.createElement('th');
  headerCell.textContent = 'Daily Total';
  headerRow.appendChild(headerCell);
  table.appendChild(headerRow);
}

function renderHourlySalesInTable() {
  var table = document.getElementById('salesTable');
  var tableRow = document.createElement('tr');
  var tableCell = document.createElement('td');
  tableCell.textContent = this.name;
  tableRow.appendChild(tableCell);
  for (var i = 0; i < this.hourlyStoreSales.length; i++) {
    tableCell = document.createElement('td');
    tableCell.textContent = this.hourlyStoreSales[i];
    tableRow.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = this.dailyTotal;
  table.appendChild(tableRow);
}

function makeFooter() {
  var table = document.getElementById('salesTable');
  var footerRow = document.createElement('tr');
  var footerCell = document.createElement('th');
  footerCell.textContent = 'Hourly Totals';
  footerRow.appendChild(footerCell);
  var array = hourlyTotals();
  for (var i = 0; i < array.length; i++) {
    var index = array[i];
    console.log(index);
    footerCell = document.createElement('th');
    footerCell.textContent = array[i];
    footerRow.appendChild(footerCell);
  }
  table.appendChild(footerRow);
}

// function dailyStoreTotalinTable() {
//   var table = document.getElementById('salesTable');
//   var totalRow = document.createElement('tr');
//   var tableCell = document.createElement('td');
//   tableRow.appendChild(tableCell);
//   tableCell.textContent = this.name;
//   for (var i = 0; i < cookieTotal.length; i++) {
//     tableCell = document.createElement('td');
//     tableCell.textContent = this.cookieTotal[i];
//     tableRow.appendChild(tableCell);
//   }
//   table.appendChild(tableRow);
// }

makeHeadings();
seattleStore.calculateHourlyCookieSales();
seattleStore.renderHourlySalesInTable();
tokyoStore.calculateHourlyCookieSales();
tokyoStore.renderHourlySalesInTable();
dubaiStore.calculateHourlyCookieSales();
dubaiStore.renderHourlySalesInTable();
parisStore.calculateHourlyCookieSales();
parisStore.renderHourlySalesInTable();
limaStore.calculateHourlyCookieSales();
limaStore.renderHourlySalesInTable();
makeFooter();

