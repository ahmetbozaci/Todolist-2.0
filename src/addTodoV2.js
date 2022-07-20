"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addToStorageV2_1 = __importDefault(require("./addToStorageV2"));
const Utils_1 = require("./Utils");
const inputText = (0, Utils_1.getElementById)('input-text');
const addTodoTextToBox = (tasks) => {
    inputText.addEventListener('keyup', (event) => {
        const newItem = {
            index: +tasks.length,
            description: inputText.value,
            completed: false,
        };
        if (event.keyCode === 13) {
            tasks.push(newItem);
            (0, addToStorageV2_1.default)(tasks);
            inputText.value = '';
            location.reload();
        }
    });
};
exports.default = addTodoTextToBox;
