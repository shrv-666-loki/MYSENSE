"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const webhook_1 = require("@slack/webhook");
let loggers = {};
let output;
let debugMode;
let URL;
const sendNotification = (url, output) => __awaiter(void 0, void 0, void 0, function* () {
    const webhook = new webhook_1.IncomingWebhook(url);
    return yield webhook.send(output);
});
loggers.setUrl = (url) => {
    URL = url;
};
loggers.setDebuggerOn = (bool) => {
    debugMode = bool || false;
};
loggers.log = (...args) => {
    switch (args[0]) {
        case 'INFO':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            process.stdout.write(output);
            break;
        case 'FATAL':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            process.stdout.write(output);
            URL && sendNotification(URL, output);
            break;
        case 'ERROR':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            process.stdout.write(output);
            URL && sendNotification(URL, output);
            break;
        case 'WARN':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            process.stdout.write(output);
            URL && sendNotification(URL, output);
            break;
        case 'DEBUG':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            debugMode && process.stdout.write(output);
            break;
    }
};
exports.default = loggers;
