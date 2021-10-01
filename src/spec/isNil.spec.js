"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isNil_1 = require("../lib/isNil");
(0, ava_1.default)('Should return true for null or undefined', (t) => {
    t.is((0, isNil_1.isNil)(null), true);
    t.is((0, isNil_1.isNil)(undefined), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isNil_1.isNil)([]), false);
    t.is((0, isNil_1.isNil)({}), false);
    t.is((0, isNil_1.isNil)(true), false);
    t.is((0, isNil_1.isNil)(false), false);
    t.is((0, isNil_1.isNil)('1'), false);
    t.is((0, isNil_1.isNil)(Symbol()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNOaWwuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlzTmlsLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsd0NBQXFDO0FBRXJDLElBQUEsYUFBSSxFQUFDLDBDQUEwQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDckQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGFBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsYUFBSyxFQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxhQUFJLEVBQUMsdUNBQXVDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsYUFBSyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxhQUFLLEVBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGFBQUssRUFBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsYUFBSyxFQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxhQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGFBQUssRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDIn0=