"use strict";
exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 2850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1575);



const Cursor = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .customCursor */ ._h)();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mouse-cursor cursor-inner"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "cavani_fn_moving_box"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);


/***/ }),

/***/ 812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Preloader = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
        let preloader = document.getElementById("preloader");
        if (preloader) {
            if (!isMobile) {
                setTimeout(function() {
                    preloader.classList.add("preloaded");
                }, 800);
                setTimeout(function() {
                    preloader.remove();
                }, 2000);
            } else {
                preloader.remove();
            }
        }
        setTimeout(()=>{
            document.querySelector("body").classList.add("opened");
        }, 3000);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "preloader",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loader_line"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);


/***/ }),

/***/ 1575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CC": () => (/* binding */ dataImage),
/* harmony export */   "RZ": () => (/* binding */ imgToSvg),
/* harmony export */   "_h": () => (/* binding */ customCursor)
/* harmony export */ });
const dataImage = ()=>{
    let d = document.querySelectorAll("[data-img-url]");
    for(let i = 0; i < d.length; i++){
        const element = d[i];
        element.style.backgroundImage = `url(${element.getAttribute("data-img-url")})`;
    }
};
const imgToSvg = ()=>{
    document.querySelectorAll("img.svg").forEach((el)=>{
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");
        fetch(imgURL).then((data)=>data.text()).then((response)=>{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response, "text/html");
            let svg = xmlDoc.querySelector("svg");
            if (typeof imgID !== "undefined") {
                svg.setAttribute("id", imgID);
            }
            if (typeof imgClass !== "undefined") {
                svg.setAttribute("class", imgClass + " replaced-svg");
            }
            svg.removeAttribute("xmlns:a");
            if (el.parentNode) {
                el.parentNode.replaceChild(svg, el);
            }
        });
    });
};
const customCursor = ()=>{
    var myCursor = document.querySelectorAll(".mouse-cursor"), hamburger = document.querySelector(".hamburger"), kura_tm_topbar = document.querySelector(".kura_tm_topbar "), pointer = document.querySelector(".cursor-pointer"), e = document.querySelector(".cursor-inner"), t = document.querySelector(".cursor-outer");
    function mouseEvent(element) {
        element.addEventListener("mouseenter", function() {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        });
        element.addEventListener("mouseleave", function() {
            e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
        });
    }
    if (myCursor.length) {
        if (document.body) {
            let n, i = 0, o = !1;
            window.onmousemove = function(s) {
                // console.log(document.querySelector(this));
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
            }, document.body.addEventListener("mouseenter", // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function() {
                let a = document.querySelectorAll("a"), sliders = document.querySelectorAll(".owl-carousel, .swiper-container, .cursor-link"), slider = document.querySelectorAll(".modal_item");
                e.classList.add("cursor-inner"), t.classList.add("cursor-outer");
                for(let i = 0; i < a.length; i++){
                    const element = a[i];
                    mouseEvent(element);
                }
                for(let i = 0; i < sliders.length; i++){
                    const element = sliders[i];
                    element.addEventListener("mouseenter", function() {
                        e.classList.add("cursor-slider"), t.classList.add("cursor-slider");
                    });
                    element.addEventListener("mouseleave", function() {
                        e.classList.remove("cursor-slider"), t.classList.remove("cursor-slider");
                    });
                }
                for(let i = 0; i < slider.length; i++){
                    const element = slider[i];
                    mouseEvent(element);
                }
                hamburger && mouseEvent(hamburger);
                kura_tm_topbar && mouseEvent(kura_tm_topbar);
                pointer && mouseEvent(pointer);
            }), e.style.visibility = "visible", t.style.visibility = "visible";
        }
    }
};


/***/ })

};
;