const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsBefore1500s = inventors.filter(
  (inventor) => {
    return inventor.year >= 1500 && inventor.year < 1600;
  }
);
console.log(inventorsBefore1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsFirstAndLastNames = inventors.map(
  (inventor) => {
    return [{ firstname: inventor.first }, { lastname: inventor.last} ];
  }
);
console.log(inventorsFirstAndLastNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedByBirthdateInventors = [...inventors];
sortedByBirthdateInventors.sort(
  (prev, next) => {
    return next.year > prev.year ? -1 : 1;
  }
);
console.log(sortedByBirthdateInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYearsLived = inventors.reduce(
  (accumulator, current) => {
    return accumulator + (current.passed - current.year);
  },
  0
);
console.log(totalYearsLived);

// 5. Sort the inventors by years lived
const sortedByLivedInventors = [...inventors];
sortedByLivedInventors.sort(
  (prev, next) => {
    return (next.passed - next.year) > (prev.passed - prev.year) ? -1 : 1;
  }
);
console.log(sortedByLivedInventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
let boulevards = [];
const request = new XMLHttpRequest();

/**
 * Outputs a list of Boulevards containing 'de' anywhere in the name
 * from the AJAX request response.
 */
const processWikiResults = (request) => {
    // Make an array of boulevards to manipulate from our response
    const boulRegExp = new RegExp(/Boulevard*/i);
    const data = JSON.parse(request.response).query.categorymembers;
    const titles = data.map(res => res.title);
    boulevards = titles.filter((title) => {
      return title.match(boulRegExp);
    });

    const deRegExp = new RegExp(/de/g);
    const list = document.createElement('ul');
    document.body.appendChild(list);
    const boulevardsToList = boulevards.filter((boulevard) => {
      return boulevard.match(deRegExp);
    });

    for (boulevard of boulevardsToList) {
      const listItem = document.createElement('li');
      const text = document.createTextNode(boulevard);
      listItem.appendChild(text);
      list.appendChild(listItem);
    }
};

request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    processWikiResults(request);
  }
};
request.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=categorymembers&cmtitle=Category:Boulevards_in_Paris&cmlimit=100');
request.send();

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedByLastNameInventors = [...inventors];
sortedByLastNameInventors.sort(
  (prev, next) => {
    return next.last > prev.last ? -1 : 1;
  }
);
console.log(sortedByLastNameInventors);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
