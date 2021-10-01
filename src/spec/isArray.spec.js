"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isArray_1 = require("../lib/isArray");
(0, ava_1.default)('Should return true for a array', (t) => {
    t.is((0, isArray_1.isArray)([]), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isArray_1.isArray)(''), false);
    t.is((0, isArray_1.isArray)(1), false);
    t.is((0, isArray_1.isArray)(true), false);
    t.is((0, isArray_1.isArray)({}), false);
    t.is((0, isArray_1.isArray)(Symbol()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNBcnJheS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXNBcnJheS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBRXZCLDRDQUF5QztBQUV6QyxJQUFBLGFBQUksRUFBQyxnQ0FBZ0MsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQzNDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxpQkFBTyxFQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsdUNBQXVDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsaUJBQU8sRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDIn0=