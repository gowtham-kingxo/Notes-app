const fs = require('fs')
const chalk = require('chalk')

const getnotes = () => {
    return  "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //Checking if title already exists
    const duplicateNote = notes.find((note) => note.title === title)
    
    debugger 
    
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Title already exists!'))
    }
   
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(newNotes.length < notes.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green(title + ' removed!'))
    } else {
        console.log(chalk.red(title + ' not found!'))
    }
   
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Your notes:'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    debugger

    if(note) {
        console.log(chalk.magenta.bold(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(error) {
        //No data in notes.json or notes.json does not exist. 
        return []
    }
}

module.exports = {
    getnotes, addNote, removeNote, listNotes, readNote
}


