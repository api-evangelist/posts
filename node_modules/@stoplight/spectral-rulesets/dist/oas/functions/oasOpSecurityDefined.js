"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spectral_core_1 = require("@stoplight/spectral-core");
const getAllOperations_1 = require("./utils/getAllOperations");
const isObject_1 = require("./utils/isObject");
function _get(value, path) {
    for (const segment of path) {
        if (!(0, isObject_1.isObject)(value)) {
            break;
        }
        value = value[segment];
    }
    return value;
}
exports.default = (0, spectral_core_1.createRulesetFunction)({
    input: {
        type: 'object',
        properties: {
            paths: {
                type: 'object',
            },
            security: {
                type: 'array',
            },
        },
    },
    options: {
        type: 'object',
        properties: {
            schemesPath: {
                type: 'array',
                items: {
                    type: ['string', 'number'],
                },
            },
        },
    },
}, function oasOpSecurityDefined(targetVal, { schemesPath }) {
    const { paths } = targetVal;
    const results = [];
    const schemes = _get(targetVal, schemesPath);
    const allDefs = (0, isObject_1.isObject)(schemes) ? Object.keys(schemes) : [];
    const { security } = targetVal;
    if (Array.isArray(security)) {
        for (const [index, value] of security.entries()) {
            if (!(0, isObject_1.isObject)(value)) {
                continue;
            }
            const securityKeys = Object.keys(value);
            for (const securityKey of securityKeys) {
                if (!allDefs.includes(securityKey)) {
                    results.push({
                        message: `API "security" values must match a scheme defined in the "${schemesPath.join('.')}" object.`,
                        path: ['security', index, securityKey],
                    });
                }
            }
        }
    }
    for (const { path, operation, value } of (0, getAllOperations_1.getAllOperations)(paths)) {
        if (!(0, isObject_1.isObject)(value))
            continue;
        const { security } = value;
        if (!Array.isArray(security)) {
            continue;
        }
        for (const [index, value] of security.entries()) {
            if (!(0, isObject_1.isObject)(value)) {
                continue;
            }
            const securityKeys = Object.keys(value);
            for (const securityKey of securityKeys) {
                if (!allDefs.includes(securityKey)) {
                    results.push({
                        message: `Operation "security" values must match a scheme defined in the "${schemesPath.join('.')}" object.`,
                        path: ['paths', path, operation, 'security', index, securityKey],
                    });
                }
            }
        }
    }
    return results;
});
//# sourceMappingURL=oasOpSecurityDefined.js.map