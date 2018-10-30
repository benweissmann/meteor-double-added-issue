import { Meteor } from 'meteor/meteor';

Meteor.publish('test_publication', function() {
  // We call added twice for `defective`
  this.added('foo', 'defective', {
    a: 'this should get updated',
    b: 'this should go away',
  });

  this.added('foo', 'defective', {
    a: 'this should get updated',
    b: 'this should go away',
  });

  Meteor.setTimeout(() => {
    this.changed('foo', 'defective', {
      a: 'updated A',
      b: undefined,
    });
  }, 3000);

  // We call added once for `correct`
  this.added('foo', 'correct', {
    a: 'this should get updated',
    b: 'this should go away',
  });

  Meteor.setTimeout(() => {
    this.changed('foo', 'correct', {
      a: 'updated A',
      b: undefined,
    });
  }, 3000);

  this.ready();
})
