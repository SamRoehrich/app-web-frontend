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

    const { age } = athlete.user
    const ageCat = calculateAgeCat(athlete.user.age)
    const yearsClimbing = calculateYearsClimbing(athlete.athleteCLimbingStartDate)
    const yearsOnTeam = calculateYearsOnTeam(athlete.athleteToTeamStartDate)

    return {
        age,
        ageCat,
        yearsClimbing,
        yearsOnTeam
    }
}