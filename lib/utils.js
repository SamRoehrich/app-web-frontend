const calculateAge = (DOB) => {
    //dob format mm/dd/yyyy
    const year = DOB.split('/')[2]

    return new Date().getFullYear() - year
}

const calculateAgeCat = (age) => {
    if(age < 11) { return 'D'}
    if(age < 13) { return 'C'}
    if(age < 15) { return 'B'}
    if(age < 17) { return 'A'}
    if(age < 19) { return 'JR'}
    if(age > 19) { return 'Aged out'}
}

const calculateYearsClimbing = (climbingStartYear) => {
    return new Date().getFullYear() - parseInt(climbingStartYear)
}

const calculateYearsOnTeam = (teamStartYear) => {
    return new Date().getFullYear() - parseInt(teamStartYear)
}

export const getStaticResults = (athlete) => {

    const age = calculateAge(athlete.user.DOB)
    const ageCat = calculateAgeCat(age)
    const yearsClimbing = calculateYearsClimbing(athlete.athleteCLimbingStartDate)
    const yearsOnTeam = calculateYearsOnTeam(athlete.athleteToTeamStartDate)

    return {
        age,
        ageCat,
        yearsClimbing,
        yearsOnTeam
    }
}

export const prepareStats = (stats) => {
    if(stats.length > 1) return stats[0]
    else return stats
}

export const calculateHeight = (value, unit) => {
    if (unit === 'inches') {
        const feet = value * .083
        const sFeet = feet.toString()
        const inches = Math.round((parseFloat(sFeet.split('')[2]) / 10) * 12)
        console.log(inches)
        return (
            `${sFeet[0]} feet ${inches} inches`
        )
    } else {
        return `${value} ${unit}`
    }
}

const workoutsObject = {
    name: 'workouts',
    children: new Array()
}

export const arrToObj = (arr) => (
    //acc(umulator) accumulates the callbacks return value
    //item is the current value
    arr.reduce((acc, item) => {
      //check if this is the first time the code runs
      if(acc.children.length == 0) {
          acc.children.push({
              name: item.catagory,
              children: [{
                  name: item.title,
                  value: 1
              }]
          })
      }
      if(acc.children.length > 0) {
          //check if item catagory exists in array
          const index = acc.children.findIndex(el => el.name == item.catagory)
          //if catagory exists, check if the workout is already in the children array
          if(index >= 0) {
              const workoutIndex = acc.children[index].children.findIndex(el => el.name == item.title)
              //if workout is in children array increase the value by one
              if(workoutIndex >= 0) {
                  acc.children[index].children[workoutIndex].value += 1
              }
              //add new workout if it doesnt exist in the children array
              if(workoutIndex < 0) {
                  acc.children[index].children.push({ name: item.title, value: 1 })
              }
          }
          //add new catagory if it doesnt exist
          if(index < 0) {
              acc.children.push({
                  name: item.catagory,
                  children: [{
                      name: item.title,
                      value: 1
                  }]
              })
          }
      }
      return acc
    }, workoutsObject)
)
