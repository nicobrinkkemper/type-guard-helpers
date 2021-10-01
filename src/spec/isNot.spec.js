"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isNot_1 = require("../lib/isNot");
const isNull_1 = require("../lib/isNull");
(0, ava_1.default)('Should return true for anything but null', (t) => {
    t.is((0, isNot_1.isNot)(isNull_1.isNull)(false), true);
    t.is((0, isNot_1.isNot)(isNull_1.isNull)(...[]), true);
});
(0, ava_1.default)('Should return false because it got null', (t) => {
    t.is((0, isNot_1.isNot)(isNull_1.isNull)(null), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNOb3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlzTm90LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsd0NBQXFDO0FBQ3JDLDBDQUF1QztBQUV2QyxJQUFBLGFBQUksRUFBQywwQ0FBMEMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3JELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxhQUFLLEVBQUMsZUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGFBQUssRUFBQyxlQUFNLENBQUMsQ0FBQyxHQUFJLEVBQW9DLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUMsQ0FBQztBQUNILElBQUEsYUFBSSxFQUFDLHlDQUF5QyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGFBQUssRUFBQyxlQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQyJ9