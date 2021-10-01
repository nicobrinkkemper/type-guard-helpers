"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isObjectWith_1 = require("../lib/isObjectWith");
(0, ava_1.default)('Should return false when specified values are not present', (t) => {
    t.is((0, isObjectWith_1.isObjectWith)({
        foo: (value) => value === 'foo',
    })({
        bar: 'not checked',
    }), false);
});
(0, ava_1.default)('Should return false when specified values are not correct', (t) => {
    t.is((0, isObjectWith_1.isObjectWith)({
        foo: (value) => value === 'foo',
    })({
        foo: 'bad',
    }), false);
});
(0, ava_1.default)('Should return true with additional unspecified values', (t) => {
    t.is((0, isObjectWith_1.isObjectWith)({
        foo: (value) => value === 'foo',
    })({
        foo: 'foo',
        bar: 'not checked, but ok',
    }), true);
});
(0, ava_1.default)('Should work with Array.isArray', (t) => {
    t.is((0, isObjectWith_1.isObjectWith)({ foo: Array.isArray })({ foo: [], bar: {} }), true);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNPYmplY3RXaXRoLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpc09iamVjdFdpdGguc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QixzREFBbUQ7QUFFbkQsSUFBQSxhQUFJLEVBQUMsMkRBQTJELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUN0RSxDQUFDLENBQUMsRUFBRSxDQUNGLElBQUEsMkJBQVksRUFBQztRQUNYLEdBQUcsRUFBRSxDQUFDLEtBQWMsRUFBa0IsRUFBRSxDQUFDLEtBQUssS0FBSyxLQUFLO0tBQ3pELENBQUMsQ0FBQztRQUNELEdBQUcsRUFBRSxhQUFhO0tBQ25CLENBQUMsRUFDRixLQUFLLENBQ04sQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsMkRBQTJELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUN0RSxDQUFDLENBQUMsRUFBRSxDQUNGLElBQUEsMkJBQVksRUFBQztRQUNYLEdBQUcsRUFBRSxDQUFDLEtBQWMsRUFBa0IsRUFBRSxDQUFDLEtBQUssS0FBSyxLQUFLO0tBQ3pELENBQUMsQ0FBQztRQUNELEdBQUcsRUFBRSxLQUFLO0tBQ1gsQ0FBQyxFQUNGLEtBQUssQ0FDTixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGFBQUksRUFBQyx1REFBdUQsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2xFLENBQUMsQ0FBQyxFQUFFLENBQ0YsSUFBQSwyQkFBWSxFQUFDO1FBQ1gsR0FBRyxFQUFFLENBQUMsS0FBYyxFQUFrQixFQUFFLENBQUMsS0FBSyxLQUFLLEtBQUs7S0FDekQsQ0FBQyxDQUFDO1FBQ0QsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUscUJBQXFCO0tBQzNCLENBQUMsRUFDRixJQUFJLENBQ0wsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUMzQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsMkJBQVksRUFBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFDLENBQUMifQ==