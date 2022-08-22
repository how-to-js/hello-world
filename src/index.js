import { greetingMessage } from "./greeting.js";

const element = document.createElement("h1");

element.innerText = greetingMessage;

document.body.appendChild(element);
