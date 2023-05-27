"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 5000;
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    res.send("Hello world");
});
app.post("/", (req, res, next) => {
    res.send("Got a post request");
});
app.listen(PORT, () => {
    console.log(`Todoist server listening at PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map