var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo2 = new Todo({
//     text: 'Something to do'
// });

// newTodo2.save().then((doc) => {
//     console.log('Saved todo2', doc);
// }, (e) => {
//     console.log('Unable to save todo2');
// });

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    }
});

var newUser = new User({
    email: 'test@aol.com'
})

newUser.save().then((doc) => {
    console.log('Saved newUser', doc);
}, (e) => {
    console.log('Unable to save newUser');
});
