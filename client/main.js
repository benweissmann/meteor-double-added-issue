import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import './main.html';

const Foo = new Mongo.Collection('foo');

Meteor.startup(() => {
  Meteor.subscribe('test_publication');
})

Template.info.helpers({
  docJSON() {
    return JSON.stringify(Foo.find().fetch(), null, 4);
  }
})
