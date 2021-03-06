/*
 * typeahead.js
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

var EventBus = (function() {
  var namespace = 'typeahead:';

  function EventBus(o) {
    if (!o || !o.el) {
      $.error('EventBus initialized without el');
    }

    this.$el = $(o.el);
  }

  utils.mixin(EventBus.prototype, {
    // public methods
    // --------------

    trigger: function(type) {
      var args = [].slice.call(arguments, 1);
      return this.$el.trigger(namespace + type, args);
    },

    // Added triggerHandler to use $.triggerHandler()- to avoid bubble up and support return defined value from handler instead of jQ obj
    triggerHandler: function (type) {
      var args = [].slice.call(arguments, 1);
      return this.$el.triggerHandler(namespace + type, args);
    }
  });

  return EventBus;
})();
