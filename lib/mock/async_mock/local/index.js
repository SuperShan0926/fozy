
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _data = require('../../data');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalMock = function () {
    function LocalMock() {
        _classCallCheck(this, LocalMock);
    }

    _createClass(LocalMock, [{
        key: 'getMocker',
        value: function getMocker() {
            var _this = this;

            var mock = function () {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;

                                    ctx.body = new _data.AsyncData(ctx).getData();
                                    ctx.type = 'json';
                                    _context.next = 8;
                                    break;

                                case 5:
                                    _context.prev = 5;
                                    _context.t0 = _context['catch'](0);
                                    return _context.abrupt('return', next());

                                case 8:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this, [[0, 5]]);
                }));

                return function mock(_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }();
            return mock;
        }
    }]);

    return LocalMock;
}();

exports.default = LocalMock;