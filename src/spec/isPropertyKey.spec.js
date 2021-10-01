"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isPropertyKey_1 = require("../lib/isPropertyKey");
(0, ava_1.default)('Should return true for number, string or symbol', (t) => {
    t.is((0, isPropertyKey_1.isPropertyKey)(1), true);
    t.is((0, isPropertyKey_1.isPropertyKey)('string'), true);
    t.is((0, isPropertyKey_1.isPropertyKey)(Symbol('a')), true);
    t.is((0, isPropertyKey_1.isPropertyKey)([]), false);
    t.is((0, isPropertyKey_1.isPropertyKey)({}), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNQcm9wZXJ0eUtleS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXNQcm9wZXJ0eUtleS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBRXZCLHdEQUFxRDtBQUVyRCxJQUFBLGFBQUksRUFBQyxpREFBaUQsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQzVELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSw2QkFBYSxFQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSw2QkFBYSxFQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSw2QkFBYSxFQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSw2QkFBYSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSw2QkFBYSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDIn0=