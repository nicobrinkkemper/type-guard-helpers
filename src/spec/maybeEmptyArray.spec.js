"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isString_1 = require("../lib/isString");
const maybeEmptyArray_1 = require("../lib/maybeEmptyArray");
const isEmptyArrayOrString = (0, maybeEmptyArray_1.maybeEmptyArray)(isString_1.isString);
(0, ava_1.default)('Should return true for a undefined or null', (t) => {
    t.is(isEmptyArrayOrString([]), true);
    t.is(isEmptyArrayOrString(''), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is(isEmptyArrayOrString(['fe']), false);
    t.is(isEmptyArrayOrString(1), false);
    t.is(isEmptyArrayOrString([null]), false);
    t.is(isEmptyArrayOrString([undefined]), false);
    t.is(isEmptyArrayOrString(true), false);
    t.is(isEmptyArrayOrString({}), false);
    t.is(isEmptyArrayOrString(Symbol()), false);
    t.is(isEmptyArrayOrString(...[]), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF5YmVFbXB0eUFycmF5LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXliZUVtcHR5QXJyYXkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2Qiw4Q0FBMkM7QUFDM0MsNERBQXlEO0FBRXpELE1BQU0sb0JBQW9CLEdBQUcsSUFBQSxpQ0FBZSxFQUFDLG1CQUFRLENBQUMsQ0FBQztBQUN2RCxJQUFBLGFBQUksRUFBQyw0Q0FBNEMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3ZELENBQUMsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUEsYUFBSSxFQUFDLHVDQUF1QyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBSSxFQUFtQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0UsQ0FBQyxDQUFDLENBQUMifQ==