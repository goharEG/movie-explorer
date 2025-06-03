
import { useEffect, useState } from "react";
import axios from "axios";

function Notes({ movieId }) {
    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");

    const fetchNotes = async () => {
        const res = await axios.get(`/api/notes/${movieId}`);
        setNotes(res.data);
    };

    const addNote = async () => {
        await axios.post(`/api/notes/${movieId}`, { note: text });
        setText("");
        fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, [movieId]);

    return (
        <div className="notes">
            <h3>My Notes</h3>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addNote}>Add Note</button>
            <ul>
                {notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
        </div>
    );
}

export default Notes;