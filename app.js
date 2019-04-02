const yargs = require('yargs')
const notes = require('./notes')

//Create add command
yargs.command({
    command: 'add',
    describe:   'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('in add notes')
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe:   'Remove a note',
    handler: () => {
        console.log('Removing note')
    }
})


//Create list command
yargs.command({
    command: 'list',
    describe:   'List all the notes',
    handler: () => {
        console.log('Listing all notes')
    }
})


//Create read command
yargs.command({
    command: 'read',
    describe:   'Display note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Displaying the note', argv)
    }
})

yargs.parse()
// console.log(yargs.argv)

