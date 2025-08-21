//1. import area
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BASE_URL } from '../Helper/Helper'
import axios from 'axios'

export default function BusinessListing() {
    // hook variable
    const [businesslisting, setBusinesslisting] = useState([])
    const { b_listing_id } = useParams()

    useEffect(() => {
        try {
            axios.get(
                `${BASE_URL}/api/business-details?populate=*&filters[business_categories][documentId][$eq]=${b_listing_id}`
            )
            .then(function (response) {
                console.log("API Response:", response?.data?.data)
                setBusinesslisting(response?.data?.data || [])
            })
            .catch(function (error) {
                console.log("API Error:", error)
            })
        } catch (error) {
            console.log(error)
        }
    }, [b_listing_id])

    return (
        <>
            <div>BusinessListing</div>
            <p>ID : {b_listing_id}</p>

            <table className='table'>
                <thead>
                    <tr>
                        <th>BusinessId</th>
                        <th>BusinessName</th>
                   </tr>                    
                </thead>
                <tbody>
                    {businesslisting.length === 0 ? (
                        <tr>
                            <td colSpan="2">No data found</td>
                        </tr>
                    ) : (
                        businesslisting.map((cv, idx) => (
                            <tr key={idx}>
                                <td>{cv.id}</td>
                                <td>
                                    <Link to={`/business_detail/${cv.documentId}`}>
                                        {cv.attributes?.name}
                                    </Link>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    )
}
