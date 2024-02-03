"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_js_1 = __importDefault(require("morgan/index.js"));
const router_js_1 = __importDefault(require("./router/router.js"));
const cors_1 = __importDefault(require("cors"));
const cors_config_js_1 = __importDefault(require("./config/cors-config.js"));
const env = __importStar(require("dotenv"));
env.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname + '/public')));
if (process.env.NODE_ENV === 'development') {
    app.use((0, index_js_1.default)('dev'));
}
console.log(process.env.NODE_ENV);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: cors_config_js_1.default,
    methods: 'GET'
}));
app.use("/api", router_js_1.default);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname + '/public/index.html'));
});
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}/ `));
//# sourceMappingURL=server.js.map