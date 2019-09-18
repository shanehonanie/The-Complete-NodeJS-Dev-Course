const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
	const notes = loadNotes();

	const duplicateNote = notes.find(n => title === n.title);

	if (!duplicateNote) {
		notes.push({
			title,
			body
		});
		saveNotes(notes);
		console.log(chalk.green.inverse('New note added!'));
	} else {
		console.log(chalk.red.inverse('Note title taken!'));
	}
};

const removeNote = title => {
	const notes = loadNotes();

	const filteredNotes = notes.filter(n => title !== n.title);

	if (notes.length === filteredNotes.length) {
		console.log(chalk.red.inverse('Note not found/removed'));
	} else {
		console.log(chalk.green.inverse('Note removed'));
		saveNotes(filteredNotes);
	}
};

const listNotes = () => {
	const notes = loadNotes();

	console.log(chalk.green('Your Notes'));
	notes.forEach(n => console.log('title : ' + n.title + ' - body: ' + n.body));
};

const readNote = title => {
	const notes = loadNotes();
	const noteToFind = notes.find(n => title === n.title);

	if (noteToFind) {
		console.log(chalk.green(noteToFind.title));
		console.log(noteToFind.body);
	} else console.log(chalk.red('Note title not found!'));
};

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (err) {
		return [];
	}
};

module.exports = {
	getNotes,
	addNote,
	removeNote,
	listNotes,
	readNote
};
