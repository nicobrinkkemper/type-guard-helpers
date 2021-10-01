"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isFunction_1 = require("../lib/isFunction");
(0, ava_1.default)('Should return true for a function', (t) => {
    t.is((0, isFunction_1.isFunction)(() => true), true);
    t.is((0, isFunction_1.isFunction)(function namedFunction() {
        return false;
    }), true);
    const constArrowFunc = () => false;
    t.is((0, isFunction_1.isFunction)(constArrowFunc), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isFunction_1.isFunction)(1), false);
    t.is((0, isFunction_1.isFunction)(true), false);
    t.is((0, isFunction_1.isFunction)('1'), false);
    t.is((0, isFunction_1.isFunction)(Symbol()), false);
    t.is((0, isFunction_1.isFunction)({}), false);
    t.is((0, isFunction_1.isFunction)([]), false);
    t.is((0, isFunction_1.isFunction)(
    // eslint-disable-next-line functional/no-class
    new (class {
    })()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNGdW5jdGlvbi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXNGdW5jdGlvbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBRXZCLGtEQUErQztBQUUvQyxJQUFBLGFBQUksRUFBQyxtQ0FBbUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQzlDLENBQUMsQ0FBQyxFQUFFLENBQ0YsSUFBQSx1QkFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUN0QixJQUFJLENBQ0wsQ0FBQztJQUNGLENBQUMsQ0FBQyxFQUFFLENBQ0YsSUFBQSx1QkFBVSxFQUFDLFNBQVMsYUFBYTtRQUMvQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQyxFQUNGLElBQUksQ0FDTCxDQUFDO0lBQ0YsTUFBTSxjQUFjLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx1QkFBVSxFQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsdUNBQXVDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsdUJBQVUsRUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsdUJBQVUsRUFBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsdUJBQVUsRUFBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsdUJBQVUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRWxDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx1QkFBVSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx1QkFBVSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxFQUFFLENBQ0YsSUFBQSx1QkFBVTtJQUNSLCtDQUErQztJQUMvQyxJQUFJLENBQUM7S0FBUSxDQUFDLEVBQUUsQ0FDakIsRUFDRCxLQUFLLENBQ04sQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=