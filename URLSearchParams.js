/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */

(function (self) {
	'use strict';

	const nativeURLSearchParams = (function () {
		// #41 Fix issue in RN
		try {
			if (self.URLSearchParams && (new self.URLSearchParams('foo=bar')).get('foo') === 'bar') {
				return self.URLSearchParams;
			}
		} catch (e) {}
		return null;
	}());
	const isSupportObjectConstructor = nativeURLSearchParams && (new nativeURLSearchParams({ a: 1 })).toString() === 'a=1';
	// There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
	const decodesPlusesCorrectly = nativeURLSearchParams && (new nativeURLSearchParams('s=%2B').get('s') === '+');
	const __URLSearchParams__ = '__URLSearchParams__';
	// Fix bug in Edge which cannot encode ' &' correctly
	const encodesAmpersandsCorrectly = nativeURLSearchParams ? (function () {
		const ampersandTest = new nativeURLSearchParams();
		ampersandTest.append('s', ' &');
		return ampersandTest.toString() === 's=+%26';
	}()) : true;
	const { prototype } = URLSearchParamsPolyfill;
	const iterable = !!(self.Symbol && self.Symbol.iterator);

	if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) {
		return;
	}


	/**
    * Make a URLSearchParams instance.
    *
    * @param {object|string|URLSearchParams} search
    * @class
    */
	function URLSearchParamsPolyfill(search) {
		search = search || '';

		// support construct object with another URLSearchParams instance
		if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
			search = search.toString();
		}
		this[__URLSearchParams__] = parseToDict(search);
	}


	/**
    * Appends a specified key/value pair as a new search parameter.
    *
    * @param {string} name
    * @param {string} value
    */
	prototype.append = function (name, value) {
		appendTo(this[__URLSearchParams__], name, value);
	};

	/**
    * Deletes the given search parameter, and its associated value,
    * from the list of all search parameters.
    *
    * @param {string} name
    */
	prototype['delete'] = function (name) {
		delete this[__URLSearchParams__][name];
	};

	/**
    * Returns the first value associated to the given search parameter.
    *
    * @param {string} name
    * @returns {string|null}
    */
	prototype.get = function (name) {
		const dict = this[__URLSearchParams__];
		return this.has(name) ? dict[name][0] : null;
	};

	/**
    * Returns all the values association with a given search parameter.
    *
    * @param {string} name
    * @returns {Array}
    */
	prototype.getAll = function (name) {
		const dict = this[__URLSearchParams__];
		return this.has(name) ? dict[name].slice(0) : [];
	};

	/**
    * Returns a Boolean indicating if such a search parameter exists.
    *
    * @param {string} name
    * @returns {boolean}
    */
	prototype.has = function (name) {
		return hasOwnProperty(this[__URLSearchParams__], name);
	};

	/**
    * Sets the value associated to a given search parameter to
    * the given value. If there were several values, delete the
    * others.
    *
    * @param {string} name
    * @param {string} value
    */
	prototype.set = function set(name, value) {
		this[__URLSearchParams__][name] = [ `${value}` ];
	};

	/**
    * Returns a string containg a query string suitable for use in a URL.
    *
    * @returns {string}
    */
	prototype.toString = function () {
		const dict = this[__URLSearchParams__]; const query = []; let i; let key; let name; let value;
		for (key in dict) {
			name = encode(key);
			for (i = 0, value = dict[key]; i < value.length; i++) {
				query.push(`${name}=${encode(value[i])}`);
			}
		}
		return query.join('&');
	};

	// There is a bug in Safari 10.1 and `Proxy`ing it is not enough.
	const forSureUsePolyfill = !decodesPlusesCorrectly;
	const useProxy = (!forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy);
	/*
    * Apply polifill to global object and append other prototype into it
    */
	Object.defineProperty(self, 'URLSearchParams', {
		value: (useProxy
		// Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
			? new Proxy(nativeURLSearchParams, {
				construct: function (target, args) {
					return new target((new URLSearchParamsPolyfill(args[0]).toString()));
				},
			})
			: URLSearchParamsPolyfill),
	});

	const USPProto = self.URLSearchParams.prototype;

	USPProto.polyfill = true;

	/**
    *
    * @param {Function} callback
    * @param {object} thisArg
    */
	USPProto.forEach = USPProto.forEach || function (callback, thisArg) {
		const dict = parseToDict(this.toString());
		Object.getOwnPropertyNames(dict).forEach(function (name) {
			dict[name].forEach(function (value) {
				callback.call(thisArg, value, name, this);
			}, this);
		}, this);
	};

	/**
    * Sort all name-value pairs.
    */
	USPProto.sort = USPProto.sort || function () {
		const dict = parseToDict(this.toString()); const keys = []; let k; let i; let j;
		for (k in dict) {
			keys.push(k);
		}
		keys.sort();

		for (i = 0; i < keys.length; i++) {
			this['delete'](keys[i]);
		}
		for (i = 0; i < keys.length; i++) {
			const key = keys[i]; const
				values = dict[key];
			for (j = 0; j < values.length; j++) {
				this.append(key, values[j]);
			}
		}
	};

	/**
    * Returns an iterator allowing to go through all keys of
    * the key/value pairs contained in this object.
    *
    * @returns {Function}
    */
	USPProto.keys = USPProto.keys || function () {
		const items = [];
		this.forEach((item, name) => {
			items.push(name);
		});
		return makeIterator(items);
	};

	/**
    * Returns an iterator allowing to go through all values of
    * the key/value pairs contained in this object.
    *
    * @returns {Function}
    */
	USPProto.values = USPProto.values || function () {
		const items = [];
		this.forEach(item => {
			items.push(item);
		});
		return makeIterator(items);
	};

	/**
    * Returns an iterator allowing to go through all key/value
    * pairs contained in this object.
    *
    * @returns {Function}
    */
	USPProto.entries = USPProto.entries || function () {
		const items = [];
		this.forEach((item, name) => {
			items.push([ name, item ]);
		});
		return makeIterator(items);
	};


	if (iterable) {
		USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
	}


	function encode(str) {
		const replace = {
			'!':   '%21',
			"'":   '%27',
			'(':   '%28',
			')':   '%29',
			'~':   '%7E',
			'%20': '+',
			'%00': '\x00',
		};
		return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, match => {
			return replace[match];
		});
	}

	function decode(str) {
		return str
			.replace(/[ +]/g, '%20')
			.replace(/(%[a-f0-9]{2})+/ig, match => {
				return decodeURIComponent(match);
			});
	}

	function makeIterator(arr) {
		const iterator = {
			next: function () {
				const value = arr.shift();
				return { done: value === undefined, value: value };
			},
		};

		if (iterable) {
			iterator[self.Symbol.iterator] = function () {
				return iterator;
			};
		}

		return iterator;
	}

	function parseToDict(search) {
		const dict = {};

		if (typeof search === 'object') {
			// if `search` is an array, treat it as a sequence
			if (isArray(search)) {
				for (let i = 0; i < search.length; i++) {
					const item = search[i];
					if (isArray(item) && item.length === 2) {
						appendTo(dict, item[0], item[1]);
					} else {
						throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
					}
				}

			} else {
				for (const key in search) {
					if (search.hasOwnProperty(key)) {
						appendTo(dict, key, search[key]);
					}
				}
			}

		} else {
			// remove first '?'
			if (search.indexOf('?') === 0) {
				search = search.slice(1);
			}

			const pairs = search.split('&');
			for (let j = 0; j < pairs.length; j++) {
				const value = pairs[j];
				const index = value.indexOf('=');

				if (index > -1) {
					appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));

				} else if (value) {
					appendTo(dict, decode(value), '');
				}
			}
		}

		return dict;
	}

	function appendTo(dict, name, value) {
		const val = typeof value === 'string' ? value : (
			value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value)
		);

		// #47 Prevent using `hasOwnProperty` as a property name
		if (hasOwnProperty(dict, name)) {
			dict[name].push(val);
		} else {
			dict[name] = [ val ];
		}
	}

	function isArray(val) {
		return !!val && Object.prototype.toString.call(val) === '[object Array]';
	}

	function hasOwnProperty(obj, prop) {
		return Object.prototype.hasOwnProperty.call(obj, prop);
	}

}(this));


module.exports = this.URLSearchParams;
