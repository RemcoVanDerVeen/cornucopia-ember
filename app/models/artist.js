import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model } = DS;

export default Model.extend({
  firstName: DS.attr('string'),
  lastName:  DS.attr('string'),
  birthDay:  DS.attr('date'),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
});
