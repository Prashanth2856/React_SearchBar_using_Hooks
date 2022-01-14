import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import styles from './Countries.module.css'

export const Countries = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")
    const [resultCountry, setResultCountry] = useState([])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    useEffect(async () => {
        let res = await axios.get(' http://localhost:3001/Country')
        let list = res.data
        // console.log(list);
        setCountries(list)
        setSearch('')
    }, [])

    useEffect(() => {
        setResultCountry(countries.filter((country) => {
            // return search.toLowerCase() == country.country.toLowerCase()
            return country.country.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, countries])


    return (
        <div>
            <h1>Countries List</h1>
            <input className={styles.input} type="text" value={search} placeholder="Search for a Country..." onChange={handleChange} />
            <div>
                {
                    resultCountry.map((e) => (
                        <div className={styles.country}>
                            <p>{e.country}</p>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

