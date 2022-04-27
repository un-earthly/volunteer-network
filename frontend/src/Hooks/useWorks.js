import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useWorks() {
    const [works, setWorks] = useState([])

    useEffect(() => {
        axios.get('https://glacial-waters-98342.herokuapp.com/works')
            .then(res => setWorks(res))
    }, [])
    return [works, setWorks]
}
