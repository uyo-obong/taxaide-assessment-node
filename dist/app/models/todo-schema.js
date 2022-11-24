"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TodoRefersSchema = new mongoose_1.Schema({
    posted_by: String,
    email: String,
    title: String,
    description: String,
}, {
    timestamps: true,
});
const TodoSchema = (0, mongoose_1.model)('TodoRefers', TodoRefersSchema);
exports.default = TodoSchema;
