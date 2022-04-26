import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useWorks() {
    const [works, setWorks] = useState([])

    useEffect(() => {
        axios.get('http://localhost/works')
            .then(res => setWorks(res))
    }, [])
    return [works, setWorks]
}
