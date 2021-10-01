"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isKey_1 = require("../lib/isKey");
const hasStatus = (0, isKey_1.isKey)('status');
const functionObject = Object.assign(() => true, {
    status: 200,
});
(0, ava_1.default)('Should return true because key is present', (t) => {
    t.is(hasStatus({ status: 200 }), true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.is(hasStatus(functionObject), true);
});
(0, ava_1.default)('Should return false because key is not present', (t) => {
    t.is(hasStatus({ StATuS: 200 }), false);
    t.is(hasStatus({}), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNLZXkuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlzS2V5LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsd0NBQXFDO0FBRXJDLE1BQU0sU0FBUyxHQUFHLElBQUEsYUFBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFO0lBQy9DLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQyxDQUFDO0FBRUgsSUFBQSxhQUFJLEVBQUMsMkNBQTJDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUN0RCxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLDhEQUE4RDtJQUM5RCxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFDSCxJQUFBLGFBQUksRUFBQyxnREFBZ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQzNELENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUMifQ==