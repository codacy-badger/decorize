"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineProperty = void 0;
var tslib_1 = require("tslib");
var isObject_1 = tslib_1.__importDefault(require("lodash/isObject"));
/* istanbul ignore next */
var ReflectBuiltIn = Reflect === null || Reflect === void 0 ? void 0 : Reflect.defineProperty;
/**
 * Reflect and Object built-in functions differs in the return value of the
 * operation. The built-in function of the Object returns the `target` when
 * its successful, otherwise it throws a TypeError. Reflect returns operation
 * status. The fallback implementation is aligned to return the Boolean, which
 * determines the success of the operation.
 */
var _defineProperty = ReflectBuiltIn !== null && ReflectBuiltIn !== void 0 ? ReflectBuiltIn : function definePropertyFk(target, property, descriptor) {
    if (isObject_1.default(target))
        try {
            Object.defineProperty(target, property, descriptor);
            return true;
        }
        catch (_a) {
            return false;
        }
    else
        throw new TypeError('Property can be defined only on the object');
};
/**
 * Add `property` to the `target` or change the attributes of an existing `property`.
 *
 * @param target The object in which to add or modify the property.
 * @param property The name of the property to be added or modified.
 * @param descriptor The descriptor which determine the property.
 * @return True in case operation is successful; false otherwise.
 * @throws TypeError in case of target type violation.
 */
function defineProperty(target, property, descriptor) {
    return _defineProperty(target, property, descriptor);
}
exports.defineProperty = defineProperty;
//# sourceMappingURL=defineProperty.js.map