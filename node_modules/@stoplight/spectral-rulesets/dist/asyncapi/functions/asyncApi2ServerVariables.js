"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spectral_core_1 = require("@stoplight/spectral-core");
const parseUrlVariables_1 = require("./utils/parseUrlVariables");
const getMissingProps_1 = require("./utils/getMissingProps");
const getRedundantProps_1 = require("./utils/getRedundantProps");
exports.default = (0, spectral_core_1.createRulesetFunction)({
    input: {
        type: 'object',
        properties: {
            url: {
                type: 'string',
            },
            variables: {
                type: 'object',
            },
        },
        required: ['url', 'variables'],
    },
    options: null,
}, function asyncApi2ServerVariables(targetVal, _, ctx) {
    const results = [];
    const variables = (0, parseUrlVariables_1.parseUrlVariables)(targetVal.url);
    if (variables.length === 0)
        return results;
    const missingVariables = (0, getMissingProps_1.getMissingProps)(variables, targetVal.variables);
    if (missingVariables.length) {
        results.push({
            message: `Not all server's variables are described with "variables" object. Missed: ${missingVariables.join(', ')}.`,
            path: [...ctx.path, 'variables'],
        });
    }
    const redundantVariables = (0, getRedundantProps_1.getRedundantProps)(variables, targetVal.variables);
    if (redundantVariables.length) {
        redundantVariables.forEach(variable => {
            results.push({
                message: `Server's "variables" object has redundant defined "${variable}" url variable.`,
                path: [...ctx.path, 'variables', variable],
            });
        });
    }
    return results;
});
//# sourceMappingURL=asyncApi2ServerVariables.js.map