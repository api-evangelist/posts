"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oasDiscriminator = void 0;
const isObject_1 = require("./utils/isObject");
const oasDiscriminator = (schema, _opts, { path }) => {
    if (!(0, isObject_1.isObject)(schema))
        return;
    if (typeof schema.discriminator !== 'string')
        return;
    const discriminatorName = schema.discriminator;
    const results = [];
    if (!(0, isObject_1.isObject)(schema.properties) || !Object.keys(schema.properties).some(k => k === discriminatorName)) {
        results.push({
            message: `The discriminator property must be defined in this schema.`,
            path: [...path, 'properties'],
        });
    }
    if (!Array.isArray(schema.required) || !schema.required.some(n => n === discriminatorName)) {
        results.push({
            message: `The discriminator property must be in the required property list.`,
            path: [...path, 'required'],
        });
    }
    return results;
};
exports.oasDiscriminator = oasDiscriminator;
exports.default = exports.oasDiscriminator;
//# sourceMappingURL=oasDiscriminator.js.map