import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  socket: service('socket-io'),

  activate() {
    const channel = parseInt((Math.random() * 2 + 1).toFixed(0));
    const room_id = `company_${channel}`;

    console.log('Connected to ', room_id);

    const socket = get(this, 'socket').socketFor('http://localhost:5001');

    // socket.emit('join', room_id);
    socket.emit('knock', room_id);

    socket.on('model-change', function(message) {
      console.log(message);
    });
  },

  deactivate() {
    const socket = get(this, 'socket').socketFor('http://localhost:5001');

    socket.off('model-change');
  },
});
