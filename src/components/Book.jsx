import React, {useState} from 'react';
import Button from '@mui/material/Button';

function Book({title, author, year}) {

    let [details, setDetails] = useState(false);

    return (
        <div>
            <p>{title}</p>
            {details &&
                <>
                <p>{author}</p>
                <p>{year}</p>
                </>
            }
            <Button variant="outlined" onClick={(() => setDetails(!details))}>{details ? "Hide" : "Show more"}</Button>
        </div>
    )
};

export default Book;