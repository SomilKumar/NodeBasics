console.log('Starting notes.js');


const addNote = (title, body) => {
    console.log('Adding Note: ', title, body);
}

const getAll = () => {
    console.log('Getting all notes');
}

const getNote = (title) => {
    console.log('Reading note: ', title);
}

const removeNote = (title) => {
    console.log('Removing note: ', title);
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};