import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return (
        <div className="book-create">
            <h3>Add New Book to List:</h3>
                <form onSubmit={handleSubmit}>
                    <label>Title Name:</label>
                        <input className="input" value={title} onChange={handleChange} />
                            <button className="button">
                                Add
                            </button>
                </form>
        </div>
    )
}

export default BookCreate;