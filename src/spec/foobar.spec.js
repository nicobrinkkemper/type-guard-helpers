"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isArrayLike_1 = require("../lib/isArrayLike");
const isObjectLike_1 = require("../lib/isObjectLike");
const isStringLike_1 = require("../lib/isStringLike");
const isBar = (0, isStringLike_1.isStringLike)('bar');
const isFoo = (0, isStringLike_1.isStringLike)('foo');
const isFooBar = (0, isObjectLike_1.isObjectLike)({
    foo: isFoo,
    bar: isBar,
});
const isFooBarArray = (0, isArrayLike_1.isArrayLike)(isFooBar);
const isFooNested = (0, isObjectLike_1.isObjectLike)({
    foobar: isFooBar,
});
(0, ava_1.default)('Should return true because this is a correct foo bar object', (t) => {
    t.is(isFooBar({ foo: 'foo', bar: 'bar' }), true);
});
(0, ava_1.default)('Should return false because the strings do not match', (t) => {
    t.is(isFooBar({ foo: 'bar', bar: 'foo' }), false);
});
(0, ava_1.default)("Should return false because it's not a correct nested foo bar 1", (t) => {
    t.is(isFooNested({ foobar: { foo: 'foo' } }), false);
});
(0, ava_1.default)("Should return false because it's not a correct nested foo bar 2", (t) => {
    t.is(isFooNested({ foo: 'foo', foobar: { foo: 'foo', bar: 'bar' } }), false);
});
(0, ava_1.default)("Should return false because it's not a correct nested foo bar 3", (t) => {
    t.is(isFooNested({
        foobar: { foo: 'foo', bar: 'BAD' },
    }), false);
});
(0, ava_1.default)("Should return true because it's a correct nested foo bar", (t) => {
    t.is(isFooNested({ foobar: { foo: 'foo', bar: 'bar' } }), true);
});
(0, ava_1.default)("Should return false because it's a nested foo bar that contains a additional unknown value", (t) => {
    t.is(isFooNested({
        foo: 'foo',
        bar: 'bar',
        foobar: {
            foo: 'foo',
            bar: 'bar',
            someUnknownValue: 69,
        },
    }), false);
});
(0, ava_1.default)("Should return false because it's not a foo bar array", (t) => {
    t.is(isFooBarArray([
        { foo: 'foo', bar: 'bar' },
        { foo: 'foo', BAD: 'BAD' },
    ]), false);
});
(0, ava_1.default)("Should return true because it's a correct foo bar array", (t) => {
    t.is(isFooBarArray([{ foo: 'foo', bar: 'bar' }]), true);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vYmFyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb29iYXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QixvREFBaUQ7QUFDakQsc0RBQW1EO0FBQ25ELHNEQUFtRDtBQUVuRCxNQUFNLEtBQUssR0FBRyxJQUFBLDJCQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBQSwyQkFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sUUFBUSxHQUFHLElBQUEsMkJBQVksRUFBQztJQUM1QixHQUFHLEVBQUUsS0FBSztJQUNWLEdBQUcsRUFBRSxLQUFLO0NBQ1gsQ0FBQyxDQUFDO0FBRUgsTUFBTSxhQUFhLEdBQUcsSUFBQSx5QkFBVyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sV0FBVyxHQUFHLElBQUEsMkJBQVksRUFBQztJQUMvQixNQUFNLEVBQUUsUUFBUTtDQUNqQixDQUFDLENBQUM7QUFFSCxJQUFBLGFBQUksRUFBQyw2REFBNkQsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3hFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUEsYUFBSSxFQUFDLHNEQUFzRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsaUVBQWlFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUM1RSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGFBQUksRUFBQyxpRUFBaUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQzVFLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0UsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGFBQUksRUFBQyxpRUFBaUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQzVFLENBQUMsQ0FBQyxFQUFFLENBQ0YsV0FBVyxDQUFDO1FBQ1YsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0tBQ25DLENBQUMsRUFDRixLQUFLLENBQ04sQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsMERBQTBELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNyRSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUMsQ0FBQztBQUVILElBQUEsYUFBSSxFQUFDLDRGQUE0RixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDdkcsQ0FBQyxDQUFDLEVBQUUsQ0FDRixXQUFXLENBQUM7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxLQUFLO1FBQ1YsTUFBTSxFQUFFO1lBQ04sR0FBRyxFQUFFLEtBQUs7WUFDVixHQUFHLEVBQUUsS0FBSztZQUNWLGdCQUFnQixFQUFFLEVBQUU7U0FDckI7S0FDRixDQUFDLEVBQ0YsS0FBSyxDQUNOLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILElBQUEsYUFBSSxFQUFDLHNEQUFzRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FDRixhQUFhLENBQUM7UUFDWixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtRQUMxQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtLQUMzQixDQUFDLEVBQ0YsS0FBSyxDQUNOLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILElBQUEsYUFBSSxFQUFDLHlEQUF5RCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUMsQ0FBQyJ9