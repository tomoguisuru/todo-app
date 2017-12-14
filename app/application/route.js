import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  socket: service('socket-io'),

  activate() {
    const socket = get(this, 'socket').socketFor('http://localhost:5001/');

    socket.on('rt-change', function(message) {
      console.log(message);
    });
  },

  deactivate() {
    const socket = get(this, 'socket').socketFor('http://localhost:5001/');

    socket.off('rt-change');
  },
});
