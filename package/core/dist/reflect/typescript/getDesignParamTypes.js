"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getOwnMetadata_1 = require("../getOwnMetadata");
/**
 * Get designed type of constructor or method parameters.
 * Typescript support an experimental reflection feature which
 * emit metadata with parameter types.
 *
 * @param target Object associated with metadata.
 * @param method Method for which to get designed param types.
 * @return Lexically designed param types.
 */
function getDesignParamTypes(target, method) {
    return getOwnMetadata_1.getOwnMetadata('design:paramtypes', target, method);
}
exports.getDesignParamTypes = getDesignParamTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGVzaWduUGFyYW1UeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9yZWZsZWN0L3R5cGVzY3JpcHQvZ2V0RGVzaWduUGFyYW1UeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUFtRDtBQUVuRDs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLG1CQUFtQixDQUFDLE1BQWMsRUFBRSxNQUFvQjtJQUN0RSxPQUFPLCtCQUFjLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFGRCxrREFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE93bk1ldGFkYXRhIH0gZnJvbSAnLi4vZ2V0T3duTWV0YWRhdGEnO1xuXG4vKipcbiAqIEdldCBkZXNpZ25lZCB0eXBlIG9mIGNvbnN0cnVjdG9yIG9yIG1ldGhvZCBwYXJhbWV0ZXJzLlxuICogVHlwZXNjcmlwdCBzdXBwb3J0IGFuIGV4cGVyaW1lbnRhbCByZWZsZWN0aW9uIGZlYXR1cmUgd2hpY2hcbiAqIGVtaXQgbWV0YWRhdGEgd2l0aCBwYXJhbWV0ZXIgdHlwZXMuXG4gKlxuICogQHBhcmFtIHRhcmdldCBPYmplY3QgYXNzb2NpYXRlZCB3aXRoIG1ldGFkYXRhLlxuICogQHBhcmFtIG1ldGhvZCBNZXRob2QgZm9yIHdoaWNoIHRvIGdldCBkZXNpZ25lZCBwYXJhbSB0eXBlcy5cbiAqIEByZXR1cm4gTGV4aWNhbGx5IGRlc2lnbmVkIHBhcmFtIHR5cGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzaWduUGFyYW1UeXBlcyh0YXJnZXQ6IG9iamVjdCwgbWV0aG9kPzogUHJvcGVydHlLZXkpOiBhbnlbXSB7XG4gIHJldHVybiBnZXRPd25NZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCB0YXJnZXQsIG1ldGhvZCk7XG59XG4iXX0=