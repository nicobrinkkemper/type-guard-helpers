"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isStringLike_1 = require("../lib/isStringLike");
const isBar = (0, isStringLike_1.isStringLike)('bar');
const isFoo = (0, isStringLike_1.isStringLike)('foo');
const isFooOrBar = (0, isStringLike_1.isStringLike)('foo', 'bar');
(0, ava_1.default)('Should return true for bar', (t) => {
    t.is(isBar('bar'), true);
    t.is(isBar('foo'), false);
});
(0, ava_1.default)('Should return true for foo', (t) => {
    t.is(isFoo('bar'), false);
    t.is(isFoo('foo'), true);
});
(0, ava_1.default)('Should return true for foo or bar', (t) => {
    t.is(isFooOrBar('bar'), true);
    t.is(isFooOrBar('foo'), true);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNTdHJpbmdMaWtlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpc1N0cmluZ0xpa2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QixzREFBbUQ7QUFFbkQsTUFBTSxLQUFLLEdBQUcsSUFBQSwyQkFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sS0FBSyxHQUFHLElBQUEsMkJBQVksRUFBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxNQUFNLFVBQVUsR0FBRyxJQUFBLDJCQUFZLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTlDLElBQUEsYUFBSSxFQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGFBQUksRUFBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsbUNBQW1DLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUM5QyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQyJ9