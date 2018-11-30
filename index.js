class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
  blocksTravelled() {
    function avenueConverter(arg) {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    eastWest.forEach(element => {
        if (arg.horizontal === element){
          arg.horizontal = eastWest.indexOf(element) + 1;
        }
      });
      return arg;
    }
    let hor = avenueConverter(this.beginningLocation).horizontal - avenueConverter(this.endingLocation).horizontal;
    let ver = this.beginningLocation.vertical - this.endingLocation.vertical
    return (Math.abs(hor) + Math.abs(ver));
  }
  
  estimatedTime(peak) {
    if (peak) {
     return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}