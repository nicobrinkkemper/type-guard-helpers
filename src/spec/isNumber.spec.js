"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isNumber_1 = require("../lib/isNumber");
(0, ava_1.default)('Should return true for a number', (t) => {
    t.is((0, isNumber_1.isNumber)(1), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isNumber_1.isNumber)([]), false);
    t.is((0, isNumber_1.isNumber)({}), false);
    t.is((0, isNumber_1.isNumber)(true), false);
    t.is((0, isNumber_1.isNumber)('1'), false);
    t.is((0, isNumber_1.isNumber)(Symbol()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNOdW1iZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlzTnVtYmVyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsOENBQTJDO0FBRTNDLElBQUEsYUFBSSxFQUFDLGlDQUFpQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDNUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLG1CQUFRLEVBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDSCxJQUFBLGFBQUksRUFBQyx1Q0FBdUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUMifQ==