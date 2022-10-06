import React, { useState, useEffect } from 'react'
import './todo.css'

function RemoteData() {
    const [data, setData] = useState([])

    //fdata = filter data which we are gonna use for searching
    const [fdata, setfData] = useState([])


    //for fetching
    const FetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setData(data))
    }

    //used for running
    useEffect(() => {
        FetchData();

    }, [])

    //For searching
    const search = (e) => {
        let temp = data

        var ft = temp.filter((el) => {
            return String(el.id).includes(e.target.value) || el.title.includes(e.target.value)
        })
        setfData(ft)
    }


    return (
        <>

            <h1>This is remote data</h1>


            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" onChange={search} placeholder="Search" aria-label="Search" />

            </form>


            {Array.isArray(fdata) && fdata.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">id </th>
                            <th scope="col">Title</th>
                            {/* <th scope="col">url</th>
                <th scope="col">thumbnailUrl</th> */}

                        </tr>
                    </thead>

                    {fdata.map((row, index) => (
                        <>
                            <tbody>
                                <tr>
                                    <th scope="row">{row.albumId}</th>
                                    <td>{row.id}</td>
                                    <td>{row.title}</td>
                                    {/* <td><img src={row.url} style={{ height: 100 }}></img> </td>
                        <td><img src={row.thumbnailUrl} style={{ height: 100 }}></img> </td> */}
                                </tr>

                            </tbody>
                        </>
                    )
                    )}
                </table> :
                <>
                    {Array.isArray(data) && data.length > 0 ?
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">id </th>
                                    <th scope="col">Title</th>
                                    {/* <th scope="col">url</th>
                            <th scope="col">thumbnailUrl</th> */}

                                </tr>
                            </thead>

                            {data.map((row, index) => (
                                <>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{row.albumId}</th>
                                            <td>{row.id}</td>
                                            <td>{row.title}</td>
                                            {/* <td><img src={row.url} style={{ height: 100 }}></img> </td>
                                    <td><img src={row.thumbnailUrl} style={{ height: 100 }}></img> </td> */}
                                        </tr>

                                    </tbody>
                                </>
                            )
                            )}
                        </table>
                        : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
                </>
            }
        </>
    )
}
export default RemoteData;