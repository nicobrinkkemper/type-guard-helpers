"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isFalse_1 = require("../lib/isFalse");
(0, ava_1.default)('Should return true for false', (t) => {
    t.is((0, isFalse_1.isFalse)(false), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isFalse_1.isFalse)(true), false);
    t.is((0, isFalse_1.isFalse)([]), false);
    t.is((0, isFalse_1.isFalse)({}), false);
    t.is((0, isFalse_1.isFalse)('1'), false);
    t.is((0, isFalse_1.isFalse)('true'), false);
    t.is((0, isFalse_1.isFalse)('false'), false);
    t.is((0, isFalse_1.isFalse)(Symbol(1)), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNGYWxzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXNGYWxzZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBRXZCLDRDQUF5QztBQUV6QyxJQUFBLGFBQUksRUFBQyw4QkFBOEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxhQUFJLEVBQUMsdUNBQXVDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsQ0FBQyJ9