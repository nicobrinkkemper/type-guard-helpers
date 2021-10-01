"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isString_1 = require("../lib/isString");
const maybeUndefined_1 = require("../lib/maybeUndefined");
const isStringOrUndefined = (0, maybeUndefined_1.maybeUndefined)(isString_1.isString);
(0, ava_1.default)('Should return true for a string or undefined', (t) => {
    t.is(isStringOrUndefined(''), true);
    t.is(isStringOrUndefined(undefined), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is(isStringOrUndefined([]), false);
    t.is(isStringOrUndefined(1), false);
    t.is(isStringOrUndefined(true), false);
    t.is(isStringOrUndefined({}), false);
    t.is(isStringOrUndefined(Symbol()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF5YmVVbmRlZmluZWQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1heWJlVW5kZWZpbmVkLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsOENBQTJDO0FBQzNDLDBEQUF1RDtBQUV2RCxNQUFNLG1CQUFtQixHQUFHLElBQUEsK0JBQWMsRUFBQyxtQkFBUSxDQUFDLENBQUM7QUFDckQsSUFBQSxhQUFJLEVBQUMsOENBQThDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUN6RCxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGFBQUksRUFBQyx1Q0FBdUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDIn0=