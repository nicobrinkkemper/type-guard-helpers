"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isTrue_1 = require("../lib/isTrue");
(0, ava_1.default)('Should return true for true', (t) => {
    t.is((0, isTrue_1.isTrue)(true), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isTrue_1.isTrue)(false), false);
    t.is((0, isTrue_1.isTrue)([]), false);
    t.is((0, isTrue_1.isTrue)({}), false);
    t.is((0, isTrue_1.isTrue)('1'), false);
    t.is((0, isTrue_1.isTrue)('true'), false);
    t.is((0, isTrue_1.isTrue)('false'), false);
    t.is((0, isTrue_1.isTrue)(Symbol(1)), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNUcnVlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpc1RydWUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QiwwQ0FBdUM7QUFFdkMsSUFBQSxhQUFJLEVBQUMsNkJBQTZCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsZUFBTSxFQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxhQUFJLEVBQUMsdUNBQXVDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsZUFBTSxFQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxlQUFNLEVBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGVBQU0sRUFBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsZUFBTSxFQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxlQUFNLEVBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLGVBQU0sRUFBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUEsZUFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDIn0=