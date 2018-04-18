import Controller from '@ember/controller';

import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  store: service(),

  isAdding: false,

  actions: {
    saveItem(todo, name) {
      const item = get(this, 'store').createRecord('item', {
        name,
        done: false,
        todo,
      });

      item.save().then(() => {
        console.log('Saved');
        set(this, 'isAdding', false);
      }, reason => {
        console.error(reason);
      });
    },

    toggleAddItem() {
      set(this, 'isAdding', true);
    },
  }

});
