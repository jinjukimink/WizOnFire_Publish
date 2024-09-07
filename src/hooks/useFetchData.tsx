import { useState } from "react"

const useFetchData = (url, options = {}) => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false); 
}