"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let allowedOrigins;
if (process.env.NODE_ENV === 'development') {
    allowedOrigins = ['http://localhost:5173', 'http://localhost:3000/', 'http://stitch-sense.vercel.app'];
}
else {
    allowedOrigins = [];
}
exports.default = allowedOrigins;
//# sourceMappingURL=cors-config.js.map