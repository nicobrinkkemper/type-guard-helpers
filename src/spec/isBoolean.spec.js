"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isBoolean_1 = require("../lib/isBoolean");
(0, ava_1.default)('Should return true for true or false', (t) => {
    t.is((0, isBoolean_1.isBoolean)(true), true);
    t.is((0, isBoolean_1.isBoolean)(false), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isBoolean_1.isBoolean)([]), false);
    t.is((0, isBoolean_1.isBoolean)({}), false);
    t.is((0, isBoolean_1.isBoolean)('1'), false);
    t.is((0, isBoolean_1.isBoolean)('true'), false);
    t.is((0, isBoolean_1.isBoolean)('false'), false);
    t.is((0, isBoolean_1.isBoolean)(Symbol()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNCb29sZWFuLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpc0Jvb2xlYW4uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QixnREFBNkM7QUFFN0MsSUFBQSxhQUFJLEVBQUMsc0NBQXNDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNqRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEscUJBQVMsRUFBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEscUJBQVMsRUFBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUNILElBQUEsYUFBSSxFQUFDLHVDQUF1QyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLHFCQUFTLEVBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLHFCQUFTLEVBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLHFCQUFTLEVBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLHFCQUFTLEVBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLHFCQUFTLEVBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLHFCQUFTLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQyJ9