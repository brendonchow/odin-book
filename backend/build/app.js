"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.get("/", (0, cors_1.default)(), (_req, res) => {
    const b = 1;
    console.log(b);
    res.send("Server is running successfully");
});
exports.default = app;
