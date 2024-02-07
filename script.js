"use strict";

const DomElement = function (selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;

  this.makeElem = function () {
    let element;
    if (this.selector[0] === ".") {
      element = document.createElement("div");
      element.className = this.selector.slice(1);
    }

    if (this.selector[0] === "#") {
      element = document.createElement("p");
      element.id = this.selector.slice(1);
    }
    element.innerHTML = this.text;
    element.style.cssText = `height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: ${this.fontSize}px`;

    return element;
  };
};

const block1 = new DomElement(".block", 150, 300, "gray", 24, "Hello!!");
const block2 = new DomElement("#best", 180, 500, "blue", 32, "Java Script!!");

console.log(block1);
document.body.append(block1.makeElem());
document.body.append(block2.makeElem());
