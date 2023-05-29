"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
exports.app = app;
app.get("/", (req, res, next) => {
    res.json({ hello: "Welcome to Todoist's API" });
});
app.use("/auth", auth_1.default);
