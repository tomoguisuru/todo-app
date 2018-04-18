import DS from 'ember-data';

const {
  attr,
} = DS;

const ItemModel = DS.Model.extend({
  name: attr('string'),

  done: attr('boolean'),
});

export default ItemModel;
