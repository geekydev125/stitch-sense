"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactFormController_js_1 = __importDefault(require("../controllers/contactFormController.js"));
const router = (0, express_1.Router)();
router.use('/contact', contactFormController_js_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map