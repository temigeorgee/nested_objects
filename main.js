// PART 1
var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }

  var primeArr = nestedData.innerData.numberData.primeNumbers;
  for (var i = 0; i < primeArr.length ; i++){
    console.log(primeArr[i]);
  }
  
var fibonnaciArr = nestedData.innerData.numberData.fibonnaci;
for (var i = 0; i < fibonnaciArr.length; i++ ){
console.log(fibonnaciArr[i]);
}
      
console.log(nestedData.innerData.order[1]);


nestedData.innerData.addSnack("chocolate");
console.log(nestedData.innerData.snacks);


// PART 2
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

function addSpeaker(speakerName) {
  nestedObject.speakers.unshift({name: speakerName})
}
console.log(addSpeaker("Joe"));
console.log(nestedObject.speakers);


function addLanguage(language, helloTranslation){
  nestedObject.data.languages[language] = {
    hello: helloTranslation
    
  }

}
console.log(addLanguage("German","GutenTag"));
console.log(nestedObject.data.languages);



function addCountry(name, capital, population){
  nestedObject.data.continents.europe.countries[name] = {
    capital: capital,
    population: population
  }
}
console.log(addCountry("Palau", "Ngerulmud", 391));
console.log(nestedObject.data.continents.europe.countries);

// PART 3

function rotate(arr,num) {
  var total = num % arr.length
  for (var i = 0; i < total; i++) {
    arr.unshift(arr.pop());
    
  }
  return arr;
}
console.log(rotate([1,2,3],1));
console.log(rotate([1,2,3],2));
console.log(rotate([1,2,3],3));


// PART 4

function makeXOGrid(rows,columns) {
  var finalArr = []
  var startX = true
  for(var i=0; i<rows; i++){
      var newRow = []
      for(var j=0; j<columns; j++){
          if(startX){
              newRow.push("X")
          }
          else {
              newRow.push("O")
          }
          startX = !startX
      }
      finalArr.push(newRow)
  }
  return finalArr;
}
console.log(makeXOGrid(1,4));
console.log(makeXOGrid(3,2))
console.log(makeXOGrid(3,3))