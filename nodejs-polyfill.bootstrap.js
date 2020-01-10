// global.binding.register('events', require('@titanium/events'));
// global.binding.register('eventemitter2', require('@titanium/events'));
global.binding.register('events', require('./events'));
global.binding.register('eventemitter2', require('./events'));
global.binding.register('buffer', require('./buffer'));
global.Buffer = require('./buffer').Buffer;
global.binding.register('querystring', require('./querystring'));
global.binding.register('qs', require('./querystring'));
global.binding.register('crypto', require('./crypto'));