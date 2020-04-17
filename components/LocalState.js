import { createContext, useState, useContext } from 'react'

const LocalStateContext = createContext()

const LocalStateProvider = LocalStateContext.Provider

function LocalState({children}) {
    const [selectedAthlete, setSelectedAthlete] = useState('')
    const [activeTab, setActiveTab] = useState('HOME')
    const [selectedWorkout, setSelectedWorkout] = useState('')

    function setLocalStateActiveTab(tabName) {
        setActiveTab(tabName)
    }

    function setAthlete(athlete) {
        setSelectedAthlete(athlete)
    }

    function setLocalStateSelectedWorkout(workout) {
        setSelectedWorkout(workout)
    }

    const defaultValues = {
        selectedAthlete,
        setAthlete,
        activeTab,
        setLocalStateActiveTab,
        selectedWorkout,
        setLocalStateSelectedWorkout
    }

    return <LocalStateProvider value={defaultValues}>
                {children}
            </LocalStateProvider>
}

function useLocalState() {
    const all = useContext(LocalStateContext)
    return all
}

export { LocalState, LocalStateContext, useLocalState }