"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deserializeWorkout = _interopRequireDefault(require("./deserializeWorkout"));
var _getPreferredUnitsTyped = _interopRequireDefault(require("./getPreferredUnitsTyped"));
var _prepareOptions = _interopRequireDefault(require("./prepareOptions"));
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function queryWorkoutsWitAnchor(options) {
  const {
    energyUnit,
    distanceUnit
  } = await (0, _getPreferredUnitsTyped.default)(options);
  const opts = (0, _prepareOptions.default)(options);
  const {
    samples,
    deletedSamples,
    newAnchor
  } = await _nativeTypes.default.queryWorkoutSamplesWithAnchor(energyUnit, distanceUnit, opts.from, opts.to, opts.limit, opts.anchor);
  return {
    samples: samples.map(_deserializeWorkout.default),
    deletedSamples,
    newAnchor
  };
}
var _default = queryWorkoutsWitAnchor;
exports.default = _default;
//# sourceMappingURL=queryWorkoutsWithAnchor.js.map