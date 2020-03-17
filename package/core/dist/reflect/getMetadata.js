"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="reflect-metadata" />
var isObject_1 = __importDefault(require("lodash/isObject"));
var hasOwnMetadata_1 = require("./hasOwnMetadata");
var proto_1 = require("./fallback/proto");
var get_1 = require("./fallback/get");
/* istanbul ignore next */
var builtInReflect = Reflect === null || Reflect === void 0 ? void 0 : Reflect.getMetadata;
/**
 * Reflect retrieves metadata by key from map related to the object or property
 * with additional checking on prototype chain. Fallback get the metadata from
 * private storage defined directly on the object or its prototype chain. Reflect
 * and Fallback is aligned to get prototype chain in same way. Fallback approach
 * have limitation to check metadata existence on non-object target.
 */
var _getMetadata = builtInReflect !== null && builtInReflect !== void 0 ? builtInReflect : function getMetadataFk(key, target, property) {
    return isObject_1.default(target)
        ? hasOwnMetadata_1.hasOwnMetadata(key, target, property)
            ? get_1.getFromStorage(key, target, property)
            : _getMetadata(key, proto_1.getProtoOf(target), property)
        : undefined;
};
function getMetadata(key, target, property) {
    return _getMetadata(key, target, property);
}
exports.getMetadata = getMetadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcmVmbGVjdC9nZXRNZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBDQUEwQztBQUMxQyw2REFBdUM7QUFDdkMsbURBQWtEO0FBQ2xELDBDQUE4QztBQUM5QyxzQ0FBZ0Q7QUFFaEQsMEJBQTBCO0FBQzFCLElBQU0sY0FBYyxHQUFRLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxXQUFXLENBQUM7QUFFakQ7Ozs7OztHQU1HO0FBQ0gsSUFBTSxZQUFZLEdBQ2hCLGNBQWMsYUFBZCxjQUFjLGNBQWQsY0FBYyxHQUNkLFNBQVMsYUFBYSxDQUFDLEdBQVEsRUFBRSxNQUFjLEVBQUUsUUFBc0I7SUFDckUsT0FBTyxrQkFBUSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDLENBQUMsK0JBQWMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUNyQyxDQUFDLENBQUMsb0JBQWMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUN2QyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxrQkFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQztRQUNuRCxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQW9CSixTQUFnQixXQUFXLENBQUMsR0FBUSxFQUFFLE1BQWMsRUFBRSxRQUFzQjtJQUMxRSxPQUFPLFlBQVksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCxrQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwicmVmbGVjdC1tZXRhZGF0YVwiIC8+XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnbG9kYXNoL2lzT2JqZWN0JztcbmltcG9ydCB7IGhhc093bk1ldGFkYXRhIH0gZnJvbSAnLi9oYXNPd25NZXRhZGF0YSc7XG5pbXBvcnQgeyBnZXRQcm90b09mIH0gZnJvbSAnLi9mYWxsYmFjay9wcm90byc7XG5pbXBvcnQgeyBnZXRGcm9tU3RvcmFnZSB9IGZyb20gJy4vZmFsbGJhY2svZ2V0JztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IGJ1aWx0SW5SZWZsZWN0OiBhbnkgPSBSZWZsZWN0Py5nZXRNZXRhZGF0YTtcblxuLyoqXG4gKiBSZWZsZWN0IHJldHJpZXZlcyBtZXRhZGF0YSBieSBrZXkgZnJvbSBtYXAgcmVsYXRlZCB0byB0aGUgb2JqZWN0IG9yIHByb3BlcnR5XG4gKiB3aXRoIGFkZGl0aW9uYWwgY2hlY2tpbmcgb24gcHJvdG90eXBlIGNoYWluLiBGYWxsYmFjayBnZXQgdGhlIG1ldGFkYXRhIGZyb21cbiAqIHByaXZhdGUgc3RvcmFnZSBkZWZpbmVkIGRpcmVjdGx5IG9uIHRoZSBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi4gUmVmbGVjdFxuICogYW5kIEZhbGxiYWNrIGlzIGFsaWduZWQgdG8gZ2V0IHByb3RvdHlwZSBjaGFpbiBpbiBzYW1lIHdheS4gRmFsbGJhY2sgYXBwcm9hY2hcbiAqIGhhdmUgbGltaXRhdGlvbiB0byBjaGVjayBtZXRhZGF0YSBleGlzdGVuY2Ugb24gbm9uLW9iamVjdCB0YXJnZXQuXG4gKi9cbmNvbnN0IF9nZXRNZXRhZGF0YTogKGtleTogYW55LCB0YXJnZXQ6IG9iamVjdCwgcHJvcGVydHk/OiBQcm9wZXJ0eUtleSkgPT4gYW55IHwgdW5kZWZpbmVkID1cbiAgYnVpbHRJblJlZmxlY3QgPz9cbiAgZnVuY3Rpb24gZ2V0TWV0YWRhdGFGayhrZXk6IGFueSwgdGFyZ2V0OiBvYmplY3QsIHByb3BlcnR5PzogUHJvcGVydHlLZXkpOiBhbnkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBpc09iamVjdCh0YXJnZXQpXG4gICAgICA/IGhhc093bk1ldGFkYXRhKGtleSwgdGFyZ2V0LCBwcm9wZXJ0eSlcbiAgICAgICAgPyBnZXRGcm9tU3RvcmFnZShrZXksIHRhcmdldCwgcHJvcGVydHkpXG4gICAgICAgIDogX2dldE1ldGFkYXRhKGtleSwgZ2V0UHJvdG9PZih0YXJnZXQpLCBwcm9wZXJ0eSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9O1xuXG4vKipcbiAqIEdldCB0aGUgbWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxuICpcbiAqIEBwYXJhbSBrZXkgS2V5IHVzZWQgdG8gcmV0cmlldmUgbWV0YWRhdGEuXG4gKiBAcGFyYW0gdGFyZ2V0IE9iamVjdCBhc3NvY2lhdGVkIHdpdGggbWV0YWRhdGEuXG4gKiBAcmV0dXJuIE1ldGFkYXRhIGZvciB0aGUga2V5IHdoZW4gZm91bmQ7IHVuZGVmaW5lZCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhZGF0YShrZXk6IGFueSwgdGFyZ2V0OiBvYmplY3QpOiBhbnk7XG5cbi8qKlxuICogR2V0IHRoZSBtZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggcHJvcGVydHkgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cbiAqXG4gKiBAcGFyYW0ga2V5IEtleSB1c2VkIHRvIHJldHJpZXZlIG1ldGFkYXRhLlxuICogQHBhcmFtIHRhcmdldCBPYmplY3Qgd2hpY2ggY29udGFpbnMgcHJvcGVydHkuXG4gKiBAcGFyYW0gcHJvcGVydHkgUHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIG1ldGFkYXRhLlxuICogQHJldHVybiBNZXRhZGF0YSBmb3IgdGhlIGtleSB3aGVuIGZvdW5kOyB1bmRlZmluZWQgb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0YWRhdGEoa2V5OiBhbnksIHRhcmdldDogb2JqZWN0LCBwcm9wZXJ0eTogUHJvcGVydHlLZXkpOiBhbnk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0YWRhdGEoa2V5OiBhbnksIHRhcmdldDogb2JqZWN0LCBwcm9wZXJ0eT86IFByb3BlcnR5S2V5KTogYW55IHtcbiAgcmV0dXJuIF9nZXRNZXRhZGF0YShrZXksIHRhcmdldCwgcHJvcGVydHkpO1xufVxuIl19