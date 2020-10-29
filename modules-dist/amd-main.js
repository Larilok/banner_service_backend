define(["require", "exports", "./greet"], function (require, exports, greet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const msg = greet_1.greet();
    console.log(msg);
});
