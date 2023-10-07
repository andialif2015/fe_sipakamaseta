"use strict";
exports.id = 7597;
exports.ids = [7597];
exports.modules = {

/***/ 27597:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return createActionProxy;
    }
}));
function createActionProxy(id, bound, action, originalAction) {
    function bindImpl(_, ...boundArgs) {
        const currentAction = this;
        const newAction = async function(...args) {
            if (originalAction) {
                return originalAction(newAction.$$bound.concat(args));
            } else {
                // In this case we're calling the user-defined action directly.
                return currentAction(...newAction.$$bound, ...args);
            }
        };
        for (const key of [
            "$$typeof",
            "$$id",
            "$$FORM_ACTION"
        ]){
            // @ts-ignore
            newAction[key] = currentAction[key];
        }
        // Rebind args
        newAction.$$bound = (currentAction.$$bound || []).concat(boundArgs);
        // Assign bind method
        newAction.bind = bindImpl.bind(newAction);
        return newAction;
    }
    action.$$typeof = Symbol.for("react.server.reference");
    action.$$id = id;
    action.$$bound = bound;
    action.bind = bindImpl.bind(action);
} //# sourceMappingURL=action-proxy.js.map


/***/ })

};
;