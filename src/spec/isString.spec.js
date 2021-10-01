"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isString_1 = require("../lib/isString");
(0, ava_1.default)('Should return true for a string', (t) => {
    t.is((0, isString_1.isString)(''), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isString_1.isString)([]), false);
    t.is((0, isString_1.isString)(1), false);
    t.is((0, isString_1.isString)(true), false);
    t.is((0, isString_1.isString)({}), false);
    t.is((0, isString_1.isString)(Symbol()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNTdHJpbmcuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlzU3RyaW5nLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsOENBQTJDO0FBRTNDLElBQUEsYUFBSSxFQUFDLGlDQUFpQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDNUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLG1CQUFRLEVBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGFBQUksRUFBQyx1Q0FBdUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUMifQ==