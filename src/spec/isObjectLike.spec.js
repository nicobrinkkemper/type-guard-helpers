"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isObjectLike_1 = require("../lib/isObjectLike");
(0, ava_1.default)('Should work with anonymous type-guard functions', (t) => {
    t.is((0, isObjectLike_1.isObjectLike)({
        foo: (value) => value === 'foo',
    })({
        foo: 'foo',
    }), true);
});
(0, ava_1.default)('Should return false when given additional unspecified values', (t) => {
    t.is((0, isObjectLike_1.isObjectLike)({
        foo: (value) => value === 'foo',
    })({
        foo: 'foo',
        extra: 'bar',
    }), false);
});
(0, ava_1.default)('Should work with Array.isArray', (t) => {
    t.is((0, isObjectLike_1.isObjectLike)({ foo: Array.isArray })({ foo: [] }), true);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNPYmplY3RMaWtlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpc09iamVjdExpa2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QixzREFBbUQ7QUFFbkQsSUFBQSxhQUFJLEVBQUMsaURBQWlELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUM1RCxDQUFDLENBQUMsRUFBRSxDQUNGLElBQUEsMkJBQVksRUFBQztRQUNYLEdBQUcsRUFBRSxDQUFDLEtBQWMsRUFBa0IsRUFBRSxDQUFDLEtBQUssS0FBSyxLQUFLO0tBQ3pELENBQUMsQ0FBQztRQUNELEdBQUcsRUFBRSxLQUFLO0tBQ1gsQ0FBQyxFQUNGLElBQUksQ0FDTCxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSCxJQUFBLGFBQUksRUFBQyw4REFBOEQsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3pFLENBQUMsQ0FBQyxFQUFFLENBQ0YsSUFBQSwyQkFBWSxFQUFDO1FBQ1gsR0FBRyxFQUFFLENBQUMsS0FBYyxFQUFrQixFQUFFLENBQUMsS0FBSyxLQUFLLEtBQUs7S0FDekQsQ0FBQyxDQUFDO1FBQ0QsR0FBRyxFQUFFLEtBQUs7UUFDVixLQUFLLEVBQUUsS0FBSztLQUNiLENBQUMsRUFDRixLQUFLLENBQ04sQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUMzQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsMkJBQVksRUFBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQyxDQUFDIn0=