"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oasOpFormDataConsumeCheck = void 0;
const isObject_1 = require("./utils/isObject");
const validConsumeValue = /(application\/x-www-form-urlencoded|multipart\/form-data)/;
const oasOpFormDataConsumeCheck = targetVal => {
    if (!(0, isObject_1.isObject)(targetVal))
        return;
    const parameters = targetVal.parameters;
    const consumes = targetVal.consumes;
    if (!Array.isArray(parameters) || !Array.isArray(consumes)) {
        return;
    }
    if (parameters.some(p => (0, isObject_1.isObject)(p) && p.in === 'formData') && !validConsumeValue.test(consumes === null || consumes === void 0 ? void 0 : consumes.join(','))) {
        return [
            {
                message: 'Consumes must include urlencoded, multipart, or form-data media type when using formData parameter.',
            },
        ];
    }
    return;
};
exports.oasOpFormDataConsumeCheck = oasOpFormDataConsumeCheck;
exports.default = exports.oasOpFormDataConsumeCheck;
//# sourceMappingURL=oasOpFormDataConsumeCheck.js.map