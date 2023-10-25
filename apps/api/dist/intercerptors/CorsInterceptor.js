"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsInterceptor = void 0;
const common_1 = require("@nestjs/common");
let CorsInterceptor = class CorsInterceptor {
    intercept(context, handler) {
        const response = context.switchToHttp().getResponse();
        response.header('Access-Control-Allow-Origin', 'https://musicmate.vercel.app');
        response.header('Access-Control-Allow-Headers', 'Content-Type');
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        return handler.handle();
    }
};
exports.CorsInterceptor = CorsInterceptor;
exports.CorsInterceptor = CorsInterceptor = __decorate([
    (0, common_1.Injectable)()
], CorsInterceptor);
//# sourceMappingURL=CorsInterceptor.js.map