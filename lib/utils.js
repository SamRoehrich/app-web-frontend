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

export const getStaticResults = ({ user, athleteToTeamStartDate, athleteCLimbingStartDate }) => {

    const { age } = user
    const ageCat = calculateAgeCat(user.age)
    const yearsClimbing = calculateYearsClimbing(athleteCLimbingStartDate)
    const yearsOnTeam = calculateYearsOnTeam(athleteToTeamStartDate)

    return {
        age,
        ageCat,
        yearsClimbing,
        yearsOnTeam
    }
}