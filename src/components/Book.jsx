import React, {useState} from 'react'
import Button from '@mui/material/Button';


function Book({title, author, year}) {

    let [details, setDetails] = useState(false)

  return (
    <div>
        <p>{title}</p>
        {details &&
        <>
        <p>{author}</p>
        <p>{year}</p>
        </>}
        <Button variant="outlined" onClick={(() => setDetails(!details))}>{details ? "Hide" : "Show more"}</Button>
        {/* <button onClick={(() => setDetails(!details))}>{details ? "Hide" : "Show more"}</button> */}
    </div>
  )
}

export default Book