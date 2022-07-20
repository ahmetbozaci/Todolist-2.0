"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addToStorage = (tasks) => localStorage.setItem('items', JSON.stringify(tasks));
exports.default = addToStorage;
