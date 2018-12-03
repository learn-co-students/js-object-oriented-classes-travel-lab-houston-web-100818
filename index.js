class Driver {
    constructor(name, joinDay) {
        this.name = name
        this.startDate = new Date(joinDay)
    }

    yearsExperienceFromBeginningOf(year){
        return year - this.startDate.getFullYear()
    }
}

eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }
    
    blocksTravelled() {
    let vertDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    let horizDistance = Math.abs(this.horizStreetNum(this.beginningLocation.horizontal)-this.horizStreetNum(this.endingLocation.horizontal))

    return vertDistance + horizDistance

    }

    horizStreetNum(street) {
        return eastWest.findIndex((arrayStreet) => arrayStreet == street)
    }

    estimatedTime(isPeak) {
        let speed = 3
        if (isPeak) {
            speed = 2;
        }

        return this.blocksTravelled() / speed
    }

}