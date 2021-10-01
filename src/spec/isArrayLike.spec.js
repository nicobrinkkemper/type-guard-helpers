"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isArrayLike_1 = require("../lib/isArrayLike");
(0, ava_1.default)("Should return true because it's a list of tuple", (t) => {
    const isTuple = (0, isArrayLike_1.isArrayLike)(Array.isArray);
    t.is(isTuple([[]]), true);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNBcnJheUxpa2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlzQXJyYXlMaWtlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsb0RBQWlEO0FBRWpELElBQUEsYUFBSSxFQUFDLGlEQUFpRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDNUQsTUFBTSxPQUFPLEdBQUcsSUFBQSx5QkFBVyxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUMifQ==