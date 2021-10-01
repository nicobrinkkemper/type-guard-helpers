"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isNull_1 = require("../lib/isNull");
(0, ava_1.default)('Should return true for null or undefined', (t) => {
    t.is((0, isNull_1.isNull)(null), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isNull_1.isNull)([]), false);
    t.is((0, isNull_1.isNull)({}), false);
    t.is((0, isNull_1.isNull)(undefined), false);
    t.is((0, isNull_1.isNull)(true), false);
    t.is((0, isNull_1.isNull)(false), false);
    t.is((0, isNull_1.isNull)('1'), false);
    t.is((0, isNull_1.isNull)(Symbol()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNOdWwuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlzTnVsLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsMENBQXVDO0FBRXZDLElBQUEsYUFBSSxFQUFDLDBDQUEwQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDckQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGVBQU0sRUFBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUMsQ0FBQztBQUNILElBQUEsYUFBSSxFQUFDLHVDQUF1QyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGVBQU0sRUFBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsZUFBTSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxlQUFNLEVBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGVBQU0sRUFBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsZUFBTSxFQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxlQUFNLEVBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGVBQU0sRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDIn0=