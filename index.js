let eastWest = [
  "1st Avenue",
  "2nd Avenue",
  "3rd Avenue",
  "Lexington Avenue",
  "Park",
  "Madison Avenue",
  "5th Avenue"
];

class Driver {
  constructor(name, dateString) {
    this.name = name;
    this.startDate = new Date(dateString);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let traveledVertical = Math.abs(
      this.beginningLocation.vertical - this.endingLocation.vertical
    );
    let traveledHorizontal = Math.abs(
      eastWest.indexOf(this.beginningLocation.horizontal) -
        eastWest.indexOf(this.endingLocation.horizontal)
    );

    return traveledVertical + traveledHorizontal;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
