import ApplicationAdapter from './application';

import { get } from '@ember/object';

export default ApplicationAdapter.extend({

  buildURL(modelName, id, snapshot, requestType, query) {
    const todo = get(snapshot, 'record.todo');

    if (!todo) {
      throw new Error('No associated model for `Todo`');
    }

    let url = this._super();

    url += `/todos/${get(todo, 'id')}/items`;

    if (id) {
      url += `/${id}`;
    }

    return url;
  },
});
