import {useState, useEffect} from 'react';
import LoadingMask from './components/LoadingMask'
import Book from './components/Book'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {

let [loading, setLoading] = useState(false);
let [books, setBooks] = useState([]);
let [input, setInput] = useState('');
let [sort, setSort] = useState("desc");

const fetchBooks = async() => {
    const res = await fetch('http://www.fakeapi.com/v1/api/books');
    const resJson = await res.json();
    setBooks(resJson)
    setLoading(false)
}

const sortBooks = () => {
    setBooks([...books.sort((a, b) => sort === "desc" ? b.year - a.year : a.year - b.year)])
    setSort(sort === "desc" ? "asc" : "desc")
}

useEffect(() => {
    setLoading(true)
    fetchBooks()
}, [])

return (
    <>
    <div className='App'>
    {loading ? <LoadingMask/> :
    <>
    <Button variant="contained" onClick={sortBooks}>SORT BY YEAR</Button>
    {/* <button onClick={sortBooks}>SORT BY YEAR</button> */}
    <TextField id="outlined-basic" label="Search..." variant="outlined" value={input} onChange={({target}) => {setInput(target.value)}}/>
    {/* <input placeholder='Search...' value={input} onChange={({target}) => {setInput(target.value)}}/> */}
    {books.map((book,i) => (book.title.toLowerCase().includes(input.toLowerCase())) && <Book key={i} title={book.title} author={book.author} year={book.year}/>)}
    </>}
    </div>
    
    </>
);
}

export default App;
