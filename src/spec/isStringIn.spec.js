"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isStringIn_1 = require("../lib/isStringIn");
const isFooOrBar = (0, isStringIn_1.isStringIn)(['foo', 'bar']);
(0, ava_1.default)('Should return true for either foo or bar', (t) => {
    t.is(isFooOrBar('foo'), true);
    t.is(isFooOrBar('bar'), true);
});
(0, ava_1.default)("Should return false because it's neither foo or bar", (t) => {
    t.is(isFooOrBar('BAR'), false);
    t.is(isFooOrBar(1), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNTdHJpbmdJbi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXNTdHJpbmdJbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBRXZCLGtEQUErQztBQUUvQyxNQUFNLFVBQVUsR0FBRyxJQUFBLHVCQUFVLEVBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM5QyxJQUFBLGFBQUksRUFBQywwQ0FBMEMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3JELENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNoRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQyJ9