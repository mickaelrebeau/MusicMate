"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcSuccessInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
function responsePayloadNat(values) {
    const payload = {};
    if (values?.paginate) {
        payload.paginate = values.paginate;
        delete values.paginate;
    }
    if (values?.code) {
        payload.statusCode = values.code;
        delete values.code;
    }
    if (values) {
        payload.datas = Array.isArray(values) ? values : (Object.keys(values).length === 1 ? getFirstValue(values) : { ...JSON.parse(JSON.stringify(values)) });
    }
    else {
        payload.datas = "Error ! No datas found.";
    }
    console.log("🚀 ~ file: RpcSuccessInterceptor.ts ~ line 24 ~ responsePayloadNat ~ payload.datas", payload.datas);
    return payload;
}
function getFirstValue(values) {
    if (Object.keys(values).length > 0) {
        return values[Object.keys(values)[0]];
    }
    return 'Error (getFirstValue) ! No datas found.';
}
let RpcSuccessInterceptor = class RpcSuccessInterceptor {
    intercept(_context, next) {
        return next
            .handle()
            .pipe((0, operators_1.map)(value => responsePayloadNat(value)));
    }
};
exports.RpcSuccessInterceptor = RpcSuccessInterceptor;
exports.RpcSuccessInterceptor = RpcSuccessInterceptor = __decorate([
    (0, common_1.Injectable)()
], RpcSuccessInterceptor);
//# sourceMappingURL=RpcSuccessInterceptor.js.map