"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class with methods to help your life... LOL
 */
class Helpers {
}
exports.default = Helpers;
/**
 * Checks if an object data is empty and returns.
 * @param  {object} obj - The object to check.
 * @return {boolean} - The result.
 */
Helpers.isEmptyObject = (obj) => {
    return (obj &&
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype);
};
