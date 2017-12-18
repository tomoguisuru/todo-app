import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

import { later } from '@ember/runloop';

export default Route.extend({
  socket: service('socket-io'),

  activate() {
    const channel = parseInt((Math.random() * 2 + 1).toFixed(0));

    console.log('Connected to ', channel);

    const socket = get(this, 'socket').socketFor('http://localhost:5001/manage');

    socket.emit('join', `company_${channel}`);

    socket.on('rt-change', function(message) {
      console.log(message);
    });
  },

  deactivate() {
    const socket = get(this, 'socket').socketFor('http://localhost:5001/manage');

    socket.off('rt-change');
  },
});
