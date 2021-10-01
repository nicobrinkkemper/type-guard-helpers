"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isObject_1 = require("../lib/isObject");
(0, ava_1.default)('Should return true for a object, array or class', (t) => {
    t.is((0, isObject_1.isObject)({}), true);
    t.is((0, isObject_1.isObject)([]), true);
    t.is((0, isObject_1.isObject)(
    // eslint-disable-next-line functional/no-class
    new (class {
    })()), true);
});
(0, ava_1.default)('Should return false for anything else', (t) => {
    t.is((0, isObject_1.isObject)(1), false);
    t.is((0, isObject_1.isObject)(true), false);
    t.is((0, isObject_1.isObject)('1'), false);
    t.is((0, isObject_1.isObject)(Symbol()), false);
    t.is((0, isObject_1.isObject)(() => true), false);
    t.is((0, isObject_1.isObject)(function namedFunction() {
        return false;
    }), false);
    const constArrowFunc = () => false;
    t.is((0, isObject_1.isObject)(constArrowFunc), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNPYmplY3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlzT2JqZWN0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsOENBQTJDO0FBRTNDLElBQUEsYUFBSSxFQUFDLGlEQUFpRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDNUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLG1CQUFRLEVBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLG1CQUFRLEVBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FDRixJQUFBLG1CQUFRO0lBQ04sK0NBQStDO0lBQy9DLElBQUksQ0FBQztLQUFRLENBQUMsRUFBRSxDQUNqQixFQUNELElBQUksQ0FDTCxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGFBQUksRUFBQyx1Q0FBdUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBUSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLEVBQUUsQ0FDRixJQUFBLG1CQUFRLEVBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQ3BCLEtBQUssQ0FDTixDQUFDO0lBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FDRixJQUFBLG1CQUFRLEVBQUMsU0FBUyxhQUFhO1FBQzdCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLEVBQ0YsS0FBSyxDQUNOLENBQUM7SUFDRixNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLG1CQUFRLEVBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQUMifQ==