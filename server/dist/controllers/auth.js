"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = exports.loginController = void 0;
const loginController = (req, res) => {
    res.json({ message: "Logged in" });
};
exports.loginController = loginController;
const signupController = (req, res) => {
    res.status(201).json({ message: "Signed up" });
};
exports.signupController = signupController;
