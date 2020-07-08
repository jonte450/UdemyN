/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/


class info {
   constructor(name,year_build){
     this.name = name;
     this.year_build = year_build
   }
   get_name(){
     return this.name;
   }
   get_age(){
     return this.year_build;
   }

}
class Park extends info{
  constructor(name,year_build,area,trees) {
     super(name,year_build);
     this.trees = trees;
     this.area = area;
  }
  get_trees(){
    return this.trees;
  }
  tree_density(){
    return this.trees/this.area;
  }

}

class Street extends info{
   constructor(name,year_build,length,description= 3){
     super(name,year_build);
     this.length = length;
     this.description = description;
   }
   set_description(description){
     this.description = description;
   }
   get_description(){
     return this.description;
   }
   get_length(){
     return this.length;
   }
}

class City {

  constructor(parks,streets){
    this.parks = parks;
    this.streets = streets;
    this.city_info = new Map();

  }

  calc_average_age(ages,total_parks){
    var sum = 0;
    ages.forEach(e => sum = sum +e);
    var average_age = sum/total_parks.length;
    return average_age;
  }

  park_1000_trees(parks){
    for(var i = 0; i < parks.length; i++){
      if(parks[i].get_trees() >= 1000){
        return parks[i];
      }
    }
  }

 calc_total_average_streets(streets){
 var total = 0;
 streets.forEach(e => {total += e.get_length()});
 var average_length = total/streets.length;
 return [total,average_length];
 }

classify_streets(streets){
  var desc = [];
  for(var street of streets){
    if(street.get_description() === 1.0){
      street.set_description('Tiny');
      desc.push(street);
    }
    else if(street.get_description() === 2.0){
      street.set_description('Small');
      desc.push(street);
    }
    else if(street.get_description() === 3.0){
      street.set_description('Normal');
      desc.push(street);
    }
    else if(street.get_description() === 4.0){
      street.set_description('Big');
      desc.push(street);
    }
    else if (street.get_description() === 5.0){
      street.set_description('Huge');
      desc.push(street);
    }
  }
  this.city_info.set('Streets classified',desc);

}

initialize_info(){
  var ages = this.parks.map(e=> {return new Date().getFullYear()-e.get_age()});
  var average_age = this.calc_average_age(ages,this.parks);
  this.city_info.set('Park average_age', Math.floor(average_age));
  var trees_thou = this.park_1000_trees(this.parks);
  this.city_info.set(1000,trees_thou.get_name());

  var total_length,average;
  [total_length,average] = this.calc_total_average_streets(this.streets);
  this.city_info.set('total_length street',total_length);
  this.city_info.set('average_length street',average);

  this.classify_streets(this.streets);
}
print_info(){
  //1. Tree density of each park in the town (forumla: number of trees/park area)
  for(var park of this.parks){
    console.log(`Park name ${park.get_name()} and density ${park.tree_density()}`);
  }
  //2. Average age of each town's park (forumla: sum of all ages/number of parks)
  console.log(`The average age of all the parks is ${this.city_info.get('Park average_age')}`);

  //3. The name of the park that has more than 1000 trees
  console.log(`The name of the park that has 1000 trees is ${this.city_info.get(1000)}`);
  //4. Total and average length of the town's streets
  console.log(`Total of all the streets are ${this.city_info.get('total_length street')} and average is ${this.city_info.get('average_length street')}`);
  //5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
  var get_class = this.city_info.get('Streets classified');
  for(var street of get_class){
    console.log(`The name is ${street.get_name()} and it is classified as ${street.get_description()}`);
  }

}
}
//Stole this data from Jonas
const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];

Check_city = new City(allParks,allStreets);
Check_city.initialize_info();
Check_city.print_info();
