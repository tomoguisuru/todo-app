import DS from 'ember-data';

const {
  attr,
  hasMany,
} = DS;

const TodoModel = DS.Model.extend({
  title:      attr('string'),
  created_by: attr('string'),

  items: hasMany('item'),
});

export default TodoModel;
