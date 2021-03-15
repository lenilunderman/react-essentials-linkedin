import React, { useState, useEffect } from "react"


function FetchData({login}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(!login) return;
        setLoading(true);

        fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setData)
        .then(() =>  setLoading(false))
        .catch(setError)
    }, [login])

    if(loading) return <h1>loading</h1>
    if(error) return <pre> {JSON.stringify(error, null, 2)}</pre>
    if(!data) return null;

    if(data){
        return (
            <div>
                <h1> {data.name} </h1>
                <p> {data.location} </p>
                <img alt="login-img" src={data.avatar_url} height="200" width="200"/>
            </div>
        )
    }

    return <div>no user available</div>
}

export default FetchData