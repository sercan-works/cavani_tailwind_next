"use strict";
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 5744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "j": () => (/* binding */ CavaniContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// Create Context
const CavaniContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// Type
const type = {
    NAV: "NAV",
    ANIMATION: "ANIMATION"
};
const { NAV , ANIMATION  } = type;
// Initial Value
const initialState = {
    nav: "home",
    animation: "fadeInDown"
};
// Reducer
const reducer = (state, action)=>{
    const { type , payload  } = action;
    switch(type){
        case NAV:
            return {
                ...state,
                nav: payload
            };
        case ANIMATION:
            return {
                ...state,
                animation: payload
            };
        default:
            return state;
    }
};
// Watson State
const CavaniState = ({ children  })=>{
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const navChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: NAV,
            payload: value
        });
    }, []);
    const animationChnage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: ANIMATION,
            payload: value
        });
    }, []);
    const { nav , animation  } = state;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CavaniContext.Provider, {
        value: {
            nav,
            navChange,
            animation,
            animationChnage
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CavaniState);



/***/ })

};
;