import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submitTodo(newText) {
            if (newText) {
                this.sendAction('action', newText);
            }
            this.set('newText', '');
        }
    }
});
