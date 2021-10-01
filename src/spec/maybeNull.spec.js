"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isUndefined_1 = require("../lib/isUndefined");
const maybeNull_1 = require("../lib/maybeNull");
const isUndefinedOrNull = (0, maybeNull_1.maybeNull)(isUndefined_1.isUndefined);
(0, ava_1.default)('Should return true for a undefined or null', (t) => {
    t.is(isUndefinedOrNull(undefined), true);
    t.is(isUndefinedOrNull(null), true);
    t.is(isUndefinedOrNull(...[]), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is(isUndefinedOrNull([]), false);
    t.is(isUndefinedOrNull(1), false);
    t.is(isUndefinedOrNull(''), false);
    t.is(isUndefinedOrNull(true), false);
    t.is(isUndefinedOrNull({}), false);
    t.is(isUndefinedOrNull(Symbol()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF5YmVOdWxsLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXliZU51bGwuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QixvREFBaUQ7QUFDakQsZ0RBQTZDO0FBRTdDLE1BQU0saUJBQWlCLEdBQUcsSUFBQSxxQkFBUyxFQUFDLHlCQUFXLENBQUMsQ0FBQztBQUNqRCxJQUFBLGFBQUksRUFBQyw0Q0FBNEMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3ZELENBQUMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUksRUFBbUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pFLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsdUNBQXVDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDIn0=