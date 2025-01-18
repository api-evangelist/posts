declare type Input = {
    enum: unknown[];
    type: string[] | string;
    [key: string]: unknown;
};
export declare const typedEnum: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Input, null>;
export default typedEnum;
