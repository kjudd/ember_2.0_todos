import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        return this.store.findAll('todo');
    },
    actions: {
        createTodo(newText) {
            this.store.createRecord('todo', {
               text: newText,
               complete: false
            }).save();
        },
        updateTodo(todo) {
            todo.save();
        },
        deleteTodo(todo) {
            todo.destroyRecord();
        }
    }
});
