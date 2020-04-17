import { useQuery } from '@apollo/react-hooks'

import Console from '../components/console/Console'
import Athletes from '../components/Athletes'
import { CURRENT_USER_QUERY } from '../lib/querys'

const AthletesPage = () => {
    const { data, loading } = useQuery(CURRENT_USER_QUERY)

    if(loading) return <p>Loading...</p>

    if(data && data.currentUser.userType === 'COACH'){
        return (
            <Console>
                <Athletes user={data.currentUser}/>
            </Console>
        )

    }
}

export default AthletesPage