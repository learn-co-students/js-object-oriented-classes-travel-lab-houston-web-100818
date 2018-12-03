class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const vertBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    const horizBlocks = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))

    return vertBlocks + horizBlocks
  }

  estimatedTime(isPeak = false) {
    return (isPeak) ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3
  }
}
