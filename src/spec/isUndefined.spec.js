"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isUndefined_1 = require("../lib/isUndefined");
(0, ava_1.default)('Should return true for undefined', (t) => {
    t.is((0, isUndefined_1.isUndefined)(undefined), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isUndefined_1.isUndefined)([]), false);
    t.is((0, isUndefined_1.isUndefined)(1), false);
    t.is((0, isUndefined_1.isUndefined)(false), false);
    t.is((0, isUndefined_1.isUndefined)('undefined'), false);
    t.is((0, isUndefined_1.isUndefined)(null), false);
    t.is((0, isUndefined_1.isUndefined)({}), false);
    t.is((0, isUndefined_1.isUndefined)(Symbol()), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNVbmRlZmluZWQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlzVW5kZWZpbmVkLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsb0RBQWlEO0FBRWpELElBQUEsYUFBSSxFQUFDLGtDQUFrQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDN0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLHlCQUFXLEVBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGFBQUksRUFBQyx1Q0FBdUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx5QkFBVyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx5QkFBVyxFQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx5QkFBVyxFQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx5QkFBVyxFQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx5QkFBVyxFQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx5QkFBVyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSx5QkFBVyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUMifQ==