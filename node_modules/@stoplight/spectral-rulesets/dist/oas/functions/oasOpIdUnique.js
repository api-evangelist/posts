"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oasOpIdUnique = void 0;
const getAllOperations_1 = require("./utils/getAllOperations");
const isObject_1 = require("./utils/isObject");
const oasOpIdUnique = targetVal => {
    if (!(0, isObject_1.isObject)(targetVal) || !(0, isObject_1.isObject)(targetVal.paths))
        return;
    const results = [];
    const { paths } = targetVal;
    const seenIds = [];
    for (const { path, operation } of (0, getAllOperations_1.getAllOperations)(paths)) {
        const pathValue = paths[path];
        if (!(0, isObject_1.isObject)(pathValue))
            continue;
        const operationValue = pathValue[operation];
        if (!(0, isObject_1.isObject)(operationValue) || !('operationId' in operationValue)) {
            continue;
        }
        const { operationId } = operationValue;
        if (seenIds.includes(operationId)) {
            results.push({
                message: 'operationId must be unique.',
                path: ['paths', path, operation, 'operationId'],
            });
        }
        else {
            seenIds.push(operationId);
        }
    }
    return results;
};
exports.oasOpIdUnique = oasOpIdUnique;
exports.default = exports.oasOpIdUnique;
//# sourceMappingURL=oasOpIdUnique.js.map