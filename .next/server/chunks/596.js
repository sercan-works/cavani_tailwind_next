"use strict";
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 6541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2946);
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(823);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const About = ()=>{
    const circleProgressData = [
        {
            language: "English",
            progress: 95
        },
        {
            language: "Russian",
            progress: 80
        },
        {
            language: "Arabic",
            progress: 90
        }
    ];
    const progressBarData = [
        {
            bgcolor: "#7d7789",
            completed: 60,
            title: "HTML & CSS"
        },
        {
            bgcolor: "#7d7789",
            completed: 85,
            title: "Javascript"
        },
        {
            bgcolor: "#7d7789",
            completed: 90,
            title: "WordPress"
        }
    ];
    const services = [
        {
            desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
            img: "img/testimonials/1.jpg",
            info1: "Alexander Walker",
            info2: "Graphics Designer"
        },
        {
            desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
            img: "img/testimonials/2.jpg",
            info1: "Baraka Clinton",
            info2: "Construction Engineering"
        },
        {
            desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
            img: "img/testimonials/3.jpg",
            info1: "Armin Van Buuren",
            info2: "Content Manager"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        navName: "about",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "section_inner",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "cavani_tm_about w-full h-auto clear-both float-left",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "biography w-full h-auto clear-both float-left mb-[87px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                    children: "About Me"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "left w-[40%]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "mb-[15px]",
                                                children: [
                                                    "Hello there! My name is ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: "Alan Walker."
                                                    }),
                                                    " I am a graphic designer, and I'm very passionate and dedicated to my work."
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "right w-[50%]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "mb-[8px] w-full float-left",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "first inline-block min-w-[100px] font-bold",
                                                            children: "Name:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "second inline-block",
                                                            children: "Alan Walker"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "mb-[8px] w-full float-left",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "first inline-block min-w-[100px] font-bold",
                                                            children: "Address:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "second inline-block",
                                                            children: "Ave Street, New York, USA"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "mb-[8px] w-full float-left",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "first inline-block min-w-[100px] font-bold",
                                                            children: "Study:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "second inline-block",
                                                            children: "Univercity of Oxford"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "mb-[8px] w-full float-left",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "first inline-block min-w-[100px] font-bold",
                                                            children: "Degree:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "second inline-block",
                                                            children: "Master of Science"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "mb-[8px] w-full float-left",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "first inline-block min-w-[100px] font-bold",
                                                            children: "Mail:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "second inline-block",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "text-[#7d7789] transition-all duration-300 hover:text-[#333]",
                                                                href: "#",
                                                                children: "hello@cavani.com"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "w-full float-left",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "first inline-block min-w-[100px] font-bold",
                                                            children: "Phone:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "second inline-block",
                                                            children: "+77 022 444 05 05"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "services w-full h-auto clear-both float-left mb-[87px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "wrapper w-full h-auto clear-both float-left flex justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "service_list w-[40%]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                                children: "Services"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "list w-full h-auto clear-both float-left mt-[55px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-[8px] w-full float-left relative pl-[25px]",
                                                        children: "Web Development"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-[8px] w-full float-left relative pl-[25px]",
                                                        children: "Graphic Design"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-[8px] w-full float-left relative pl-[25px]",
                                                        children: "Landing Page"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-[8px] w-full float-left relative pl-[25px]",
                                                        children: "On-Page SEO"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "w-full float-left relative pl-[25px]",
                                                        children: "Web Hosting"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "service_list w-[50%]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                                children: "Interests"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "list w-full h-auto clear-both float-left mt-[55px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-[8px] w-full float-left relative pl-[25px]",
                                                        children: "Painting & Drawing"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-[8px] w-full float-left relative pl-[25px]",
                                                        children: "Reading & Writing"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-[8px] w-full float-left relative pl-[25px]",
                                                        children: "Music & Cinema"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-[8px] w-full float-left relative pl-[25px]",
                                                        children: "Travel & Picnik"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "w-full float-left relative pl-[25px]",
                                                        children: "Rain & Snow"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "skills w-full h-auto clear-both float-left mb-[65px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "wrapper w-full h-auto clear-both float-left flex justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "programming w-[40%]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                                children: "Programming"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cavani_progress w-full h-auto clear-both float-left mt-[55px]",
                                            children: progressBarData.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_progressBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    bgcolor: item.bgcolor,
                                                    completed: item.completed,
                                                    title: item.title
                                                }, idx))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "language w-[50%]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                                children: "Language"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "circular_progress_bar w-full h-auto clear-both float-left mt-[62px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                children: circleProgressData.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "list_inner",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "myCircle",
                                                                style: {
                                                                    width: 120,
                                                                    height: 120
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.CircularProgressbar, {
                                                                        width: 120,
                                                                        value: item.progress,
                                                                        strokeWidth: 3,
                                                                        styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.buildStyles)({
                                                                            pathColor: "#7d7789",
                                                                            trailColor: "rgba(0,0,0,0)"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "number",
                                                                        children: [
                                                                            item.progress,
                                                                            "%"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "title",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: item.language
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }, idx))
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "resume w-full h-auto clear-both float-left mb-[75px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "wrapper w-full h-auto clear-both float-left flex justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "education w-[40%]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                                children: "Education"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "list w-full h-auto clear-both float-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "univ w-full h-auto clear-both float-left mt-[55px]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "relative inline-block pt-[10px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "w-full float-left relative pl-[20px] pb-[45px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "list_inner w-full h-auto clear-both flex relative",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "time w-1/2 pr-[20px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap",
                                                                            children: "2014 - 2016"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "place w-1/2 pl-[20px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                className: "text-[16px] mb-[2px] font-semibold",
                                                                                children: "Oxford Univercity"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[14px]",
                                                                                children: "Master Degree"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "w-full float-left relative pl-[20px] pb-[45px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "list_inner w-full h-auto clear-both flex relative",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "time w-1/2 pr-[20px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap",
                                                                            children: "2010 - 2014"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "place w-1/2 pl-[20px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                className: "text-[16px] mb-[2px] font-semibold",
                                                                                children: "Texas Univercity"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[14px]",
                                                                                children: "Bachelor Degree"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "w-full float-left relative pl-[20px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "list_inner w-full h-auto clear-both flex relative",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "time w-1/2 pr-[20px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap",
                                                                            children: "2008 - 2010"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "place w-1/2 pl-[20px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                className: "text-[16px] mb-[2px] font-semibold",
                                                                                children: "Simone College"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[14px]",
                                                                                children: "Associate Degree"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "experience w-1/2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                                children: "Experience"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "list w-full h-auto clear-both float-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "univ w-full h-auto clear-both float-left mt-[55px]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "relative inline-block pt-[10px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "w-full float-left relative pl-[20px] pb-[45px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "list_inner w-full h-auto clear-both flex relative",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "time w-1/2 pr-[20px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap",
                                                                            children: "2018 - running"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "place w-1/2 pl-[20px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                className: "text-[16px] mb-[2px] font-semibold",
                                                                                children: "Envato Elements"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[14px]",
                                                                                children: "Exclusive Author"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "w-full float-left relative pl-[20px] pb-[45px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "list_inner w-full h-auto clear-both flex relative",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "time w-1/2 pr-[20px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap",
                                                                            children: "2015 - 2018"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "place w-1/2 pl-[20px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                className: "text-[16px] mb-[2px] font-semibold",
                                                                                children: "Avo Corporation"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[14px]",
                                                                                children: "Content Manager"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "w-full float-left relative pl-[20px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "list_inner w-full h-auto clear-both flex relative",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "time w-1/2 pr-[20px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap",
                                                                            children: "2012 - 2015"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "place w-1/2 pl-[20px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                className: "text-[16px] mb-[2px] font-semibold",
                                                                                children: "FC Barcelona"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[14px]",
                                                                                children: "Football Player"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "partners w-full h-auto clear-both float-left mb-[92px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                    children: "Partners"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "list w-full clear-both float-left overflow-hidden border-solid border-[#E5EDF4] border-2 mt-[62px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] pt-[2px] float-left pl-[2px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "inline-block max-w-[65%] max-h-[65px]",
                                                        src: "assets/img/partners/1.png",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "cavani_tm_full_link",
                                                        href: "#"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "inline-block max-w-[65%] max-h-[65px]",
                                                        src: "assets/img/partners/2.png",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "cavani_tm_full_link",
                                                        href: "#"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "inline-block max-w-[65%] max-h-[65px]",
                                                        src: "assets/img/partners/3.png",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "cavani_tm_full_link",
                                                        href: "#"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "inline-block max-w-[65%] max-h-[65px]",
                                                        src: "assets/img/partners/4.png",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "cavani_tm_full_link",
                                                        href: "#"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "inline-block max-w-[65%] max-h-[65px]",
                                                        src: "assets/img/partners/5.png",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "cavani_tm_full_link",
                                                        href: "#"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "inline-block max-w-[65%] max-h-[65px]",
                                                        src: "assets/img/partners/1.png",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "cavani_tm_full_link",
                                                        href: "#"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "inline-block max-w-[65%] max-h-[65px]",
                                                        src: "assets/img/partners/2.png",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "cavani_tm_full_link",
                                                        href: "#"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "inline-block max-w-[65%] max-h-[65px]",
                                                        src: "assets/img/partners/3.png",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "cavani_tm_full_link",
                                                        href: "#"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "testimonials w-full h-auto clear-both float-left mb-[90px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                    children: "Testimonials"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "list w-full h-auto clear-both float-left mt-[75px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                    loop: true,
                                    breakpoints: {
                                        768: {
                                            slidesPerView: 2
                                        }
                                    },
                                    className: "cursor-e-resize custom-class",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-auto clear-both float-left relative",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "details w-full h-auto clear-both float-left flex items-center pl-[20px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "image relative w-[60px] h-[60px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full",
                                                                    "data-img-url": "assets/img/testimonials/1.jpg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "info pl-[20px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        className: "text-[16px] mb-[2px] font-semibold",
                                                                        children: "Alexander Walker"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-[14px]",
                                                                        children: "Graphic Designer"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-auto clear-both float-left relative",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "These people really know what they are doing! Great customer support availability and supperb kindness."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "details w-full h-auto clear-both float-left flex items-center pl-[20px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "image relative w-[60px] h-[60px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full",
                                                                    "data-img-url": "assets/img/testimonials/2.jpg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "info pl-[20px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        className: "text-[16px] mb-[2px] font-semibold",
                                                                        children: "Armin Van Buuren"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-[14px]",
                                                                        children: "Content Manager"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-auto clear-both float-left relative",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "details w-full h-auto clear-both float-left flex items-center pl-[20px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "image relative w-[60px] h-[60px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full",
                                                                    "data-img-url": "assets/img/testimonials/3.jpg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "info pl-[20px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        className: "text-[16px] mb-[2px] font-semibold",
                                                                        children: "Baraka Clinton"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-[14px]",
                                                                        children: "English Teacher"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_SectionContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2946);


const Contact = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        navName: "contact",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "section_inner",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "cavani_tm_contact w-full h-auto clear-both float-left mb-[100px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                            children: "Get in Touch"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "short_info w-full h-auto clear-both float-left mt-[62px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "ml-[-30px] flex flex-wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mb-[30px] w-1/3 pl-[30px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "svg inline-block w-[18px] h-[18px] mb-[10px]",
                                                src: "assets/img/svg/location.svg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "block",
                                                children: "Ave Street, New York, USA"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mb-[30px] w-1/3 pl-[30px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "svg inline-block w-[18px] h-[18px] mb-[10px]",
                                                src: "assets/img/svg/mail.svg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "text-[#7d7789] transition-all duration-300 hover:text-[#333]",
                                                    href: "#",
                                                    children: "hello@cavani.com"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mb-[30px] w-1/3 pl-[30px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "svg inline-block w-[18px] h-[18px] mb-[10px]",
                                                src: "assets/img/svg/call.svg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "block",
                                                children: "+77 022 444 05 05"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form w-full h-auto clear-both flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "left w-1/2 pr-[15px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "fields w-full h-auto clear-both float-left",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        action: "/",
                                        method: "post",
                                        className: "contact_form",
                                        id: "contact_form",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "returnmessage",
                                                "data-success": "Your message has been received, We will contact you soon."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "empty_notice",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Please Fill Required Fields"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "first w-full float-left",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "w-full mb-[30px] float-left",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "name",
                                                                type: "text",
                                                                placeholder: "Name",
                                                                autoComplete: "off"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "w-full mb-[30px] float-left",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "email",
                                                                type: "text",
                                                                placeholder: "Email",
                                                                autoComplete: "off"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "last",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    id: "message",
                                                    placeholder: "Message",
                                                    defaultValue: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cavani_tm_button",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    id: "send_message",
                                                    href: "#",
                                                    children: "Send Message"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "right w-1/2 pl-[15px] relative",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "map_wrap",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mapouter",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "gmap_canvas",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                    width: "100%",
                                                    height: 355,
                                                    id: "gmap_canvas",
                                                    src: "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
                                                    frameBorder: 0,
                                                    scrolling: "no",
                                                    marginHeight: 0,
                                                    marginWidth: 0
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://fmovies-online.net",
                                                    children: "fmovies"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: ".mapouter{position:relative;text-align:right;height:355px;width:100%;}"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://www.embedgooglemap.net",
                                                    children: "embedgooglemap.net"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}"
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 2789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2946);




const News = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var lists = document.querySelectorAll(".news_list > ul > li");
        let box = document.querySelector(".cavani_fn_moving_box");
        if (!box) {
            let body = document.querySelector("body");
            let div = document.createElement("div");
            div.classList.add("cavani_fn_moving_box");
            body.appendChild(div);
        }
        lists.forEach((list)=>{
            list.addEventListener("mouseenter", (event)=>{
                box.classList.add("opened");
                var imgURL = list.getAttribute("data-img");
                box.style.backgroundImage = `url(${imgURL})`;
                box.style.top = event.clientY - 50 + "px";
                console.log(event.clientY);
                if (imgURL === "") {
                    box.classList.remove("opened");
                    return false;
                }
            });
            list.addEventListener("mouseleave", ()=>{
                box.classList.remove("opened");
            });
        });
    }, []);
    const [isOpen4, setIsOpen4] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalContent, setModalContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    function toggleModalFour(value) {
        setIsOpen4(!isOpen4);
        setModalContent(value);
    }
    const newsData = [
        {
            img: "assets/img/news/1.jpg",
            tag: "Branding",
            date: "August 9, 2021",
            comments: "3 comments",
            title: "Reasons Why People Use Discord",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/2.jpg",
            tag: "Branding",
            date: "August 9, 2021",
            comments: "3 comments",
            title: "Why We Should Read Fewer Books",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/3.jpg",
            tag: "Branding",
            date: "August 9, 2021",
            comments: "3 comments",
            title: "A Final Farewell to the iPod",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/4.jpg",
            tag: "Branding",
            date: "August 9, 2021",
            comments: "3 comments",
            title: "Dealing with Spring Allergy Symptoms",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/5.jpg",
            tag: "Branding",
            date: "August 9, 2021",
            comments: "3 comments",
            title: "How to Take a Break from Yourself",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/6.jpg",
            tag: "Branding",
            date: "August 9, 2021",
            comments: "3 comments",
            title: "The Age of Extinction Is Here",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                navName: "news",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section_inner",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "cavani_tm_news w-full h-auto clear-both float-left mb-[70px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                    children: "Latest News"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "news_list w-full h-auto clear-both float-left mt-[60px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "relative z-[2]",
                                    children: newsData.map((news, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "w-full py-[29px] px-0",
                                            "data-img": news.img,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full clear-both h-auto flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "number w-[50px] min-w-[50px] h-[50px] text-center leading-[50px] inline-block rounded-full bg-[#b9b8c3] text-[#333] text-[16px] font-semibold font-poppins",
                                                        children: `${i <= 9 ? 0 : ""}${i + 1}`
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "details relative pl-[30px] ml-[29px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "extra_metas",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                    className: "flex items-center flex-wrap mb-[2px]",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "relative mr-[10px]",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[15px] text-[#777]",
                                                                                children: news.date
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "relative mr-[10px]",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[15px] text-[#777] pl-[10px]",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    className: "text-[#777] transition-all duration-300 hover:text-[#000]",
                                                                                    href: "#",
                                                                                    onClick: ()=>toggleModalFour(news),
                                                                                    children: "Branding"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "relative mr-[10px]",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[15px] text-[#777] pl-[10px]",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    className: "text-[#777] transition-all duration-300 hover:text-[#000]",
                                                                                    href: "#",
                                                                                    children: "0 Comments"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "post_title",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "m-0 p-0 leading-[1] font-semibold",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        onClick: ()=>toggleModalFour(news),
                                                                        children: news.title
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, i))
                                })
                            })
                        ]
                    })
                })
            }),
            modalContent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                isOpen: isOpen4,
                onRequestClose: toggleModalFour,
                contentLabel: "My dialog",
                className: "mymodal",
                overlayClassName: "myoverlay",
                closeTimeoutMS: 300,
                openTimeoutMS: 300,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "cavani_tm_modalbox opened",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box_inner",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "close",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    onClick: toggleModalFour,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-cancel"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "description_wrap",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "news_popup_informations w-full h-auto clear-both float-left",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "image",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "assets/img/thumbs/4-2.jpg",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "main",
                                                    "data-img-url": modalContent.img,
                                                    style: {
                                                        backgroundImage: `url(${modalContent.img})`
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "details",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "meta",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "flex items-center flex-wrap mb-[2px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "relative mr-[10px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-[15px] text-[#777]",
                                                                    children: "July 07, 2022"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "relative mr-[10px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-[15px] text-[#777] pl-[10px]",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "text-[#777] transition-all duration-300 hover:text-[#000]",
                                                                        href: "#",
                                                                        children: "Branding"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "relative mr-[10px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-[15px] text-[#777] pl-[10px]",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "text-[#777] transition-all duration-300 hover:text-[#000]",
                                                                        href: "#",
                                                                        children: "0 Comments"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: modalContent.title
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text w-full float-left",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mb-[15px]",
                                                    children: modalContent.text1
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mb-[15px]",
                                                    children: modalContent.text2
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: modalContent.text3
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);


/***/ }),

/***/ 8205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2946);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1575);





const Service = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .imgToSvg */ .RZ)();
    }, []);
    const services = [
        {
            img: "assets/img/news/1.jpg",
            icon: "assets/img/svg/3d.svg",
            text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
            date: "August 9, 2021",
            title: "3D Animation",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/2.jpg",
            icon: "assets/img/svg/play.svg",
            text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
            date: "August 9, 2021",
            title: "Explainer Videos",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/3.jpg",
            icon: "assets/img/svg/character.svg",
            text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
            date: "August 9, 2021",
            title: "App Development",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/4.jpg",
            icon: "assets/img/svg/edu.svg",
            text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
            date: "August 9, 2021",
            title: "Educational Video",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/5.jpg",
            icon: "assets/img/svg/art.svg",
            text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
            date: "August 9, 2021",
            title: "3D Game Art",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        },
        {
            img: "assets/img/news/6.jpg",
            icon: "assets/img/svg/presentation.svg",
            text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
            date: "August 9, 2021",
            title: "Presentations",
            text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
            text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        }
    ];
    const [isOpen7, setIsOpen7] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalContent, setModalContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    function toggleModalFour() {
        setIsOpen7(!isOpen7);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "cavani_tm_section",
                navName: "service",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section_inner",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "cavani_tm_service w-full h-auto clear-both float-left mb-[70px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cavani_tm_title w-full h-auto clear-both float-left overflow-hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]",
                                    children: "Services"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "service_list w-full h-auto clear-both float-left mt-[60px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "ml-[-50px] flex flex-wrap",
                                    children: services.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "mb-[50px] w-1/2 pl-[50px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300",
                                                        src: item.icon,
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text transition-all duration-300",
                                                        children: item.text
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "cavani_tm_full_link",
                                                        href: "#",
                                                        onClick: ()=>{
                                                            setModalContent(item);
                                                            toggleModalFour();
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "popup_service_image opacity-0 invisible hidden absolute z-[-111]",
                                                        src: item.img,
                                                        alt: "image"
                                                    })
                                                ]
                                            })
                                        }, i))
                                })
                            })
                        ]
                    })
                })
            }),
            modalContent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                isOpen: isOpen7,
                onRequestClose: toggleModalFour,
                contentLabel: "My dialog",
                className: "mymodal",
                overlayClassName: "myoverlay",
                closeTimeoutMS: 300,
                openTimeoutMS: 300,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "cavani_tm_modalbox opened",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "box_inner",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "close",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    onClick: toggleModalFour,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-cancel"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "description_wrap",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "service_popup_informations w-full h-auto clear-both float-left",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "image",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "assets/img/thumbs/4-2.jpg",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "main",
                                                    "data-img-url": modalContent.img,
                                                    style: {
                                                        backgroundImage: `url(${modalContent.img})`
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "main_title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: modalContent.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "descriptions w-full float-left",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mb-[15px]",
                                                    children: modalContent.text1
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mb-[15px]",
                                                    children: modalContent.text2
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: modalContent.text3
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);


/***/ }),

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ProgressBar = (props)=>{
    const { bgcolor , completed , title  } = props;
    const containerStyles = {
        height: 3,
        width: "100%",
        minWidth: "100%",
        backgroundColor: "#00000012",
        borderRadius: 50,
        marginBottom: 55
    };
    const fillerStyles = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: "inherit"
    };
    const labelWraper = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        position: "relative",
        top: "-35px"
    };
    const labelStyles = {
        paddingTop: 5,
        paddingBottom: 5,
        color: "#7d7789"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: containerStyles,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: fillerStyles,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: labelWraper,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        style: labelStyles,
                        children: `${title}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        style: labelStyles,
                        children: `${completed}%`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);


/***/ }),

/***/ 4913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(8722);
// EXTERNAL MODULE: ./node_modules/swiper/modules/navigation/navigation.min.css
var navigation_min = __webpack_require__(9176);
// EXTERNAL MODULE: ./node_modules/swiper/modules/pagination/pagination.min.css
var pagination_min = __webpack_require__(2996);
// EXTERNAL MODULE: ./node_modules/swiper/modules/scrollbar/scrollbar.min.css
var scrollbar_min = __webpack_require__(5198);
// EXTERNAL MODULE: ./src/Context.js
var Context = __webpack_require__(5744);
;// CONCATENATED MODULE: ./src/layout/Header.js







const navs = [
    {
        id: 1,
        name: "Anasayfa",
        href: "home"
    },
    {
        id: 2,
        name: "Hakkımızda",
        href: "about"
    },
    {
        id: 3,
        name: "Eserlerimiz",
        href: "portfolio"
    },
    // { id: 4, name: "Hizmetlerimiz", href: "service" },
    {
        id: 5,
        name: "Kronoloji",
        href: "news"
    },
    {
        id: 6,
        name: "İletişim",
        href: "contact"
    }
];
const Header = ()=>{
    const { navChange , nav: activeNav  } = (0,external_react_.useContext)(Context/* CavaniContext */.j);
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cavani_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] hidden middle:block",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "logo",
                            "data-type": "text",
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text",
                                    href: "#"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text text-black uppercase font-poppins text-[22px] font-extrabold tracking-[2px] leading-[50px]",
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "G\xe2r\xeeb\xee"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "trigger relative top-[5px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `hamburger hamburger--slider ${toggle ? "is-active" : ""}`,
                                onClick: ()=>setToggle(!toggle),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hamburger-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hamburger-inner"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `cavani_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 ${toggle ? "opened" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "avatar w-[70px] h-[70px] relative float-right mb-[60px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image absolute inset-0 bg-no-repeat bg-cover bg-center",
                                    "data-img-url": "assets/img/about/1.jpg"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menu_list w-full h-auto clear-both float-left mb-[50px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "transition_link",
                                    children: navs.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: `${activeNav == nav.href ? "active" : ""} mb-[7px]`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                onClick: ()=>{
                                                    navChange(nav.href);
                                                    setToggle(false);
                                                },
                                                className: "text-[#333] font-poppins",
                                                href: `#${nav.href}`,
                                                children: nav.name
                                            })
                                        }, nav.id))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "social w-full float-left mb-[5px]",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mr-[8px] inline-block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-[#333]",
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "svg",
                                                    src: "assets/img/svg/social/facebook.svg",
                                                    alt: "image"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mr-[8px] inline-block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-[#333]",
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "svg",
                                                    src: "assets/img/svg/social/twitter.svg",
                                                    alt: "image"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mr-[8px] inline-block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-[#333]",
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "svg",
                                                    src: "assets/img/svg/social/instagram.svg",
                                                    alt: "image"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mr-[8px] inline-block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-[#333]",
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "svg",
                                                    src: "assets/img/svg/social/dribbble.svg",
                                                    alt: "image"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "inline-block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-[#333]",
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "svg",
                                                    src: "assets/img/svg/social/tik-tok.svg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "copyright w-full float-left",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-[#333] font-poppins",
                                    children: "Copyright \xa9 2025"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "cavani_tm_header fixed top-0 left-0 right-0 h-[70px] leading-[70px] bg-white z-[10] flex items-center justify-between py-0 px-[70px] middle:hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "logo",
                        "data-type": "text",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text",
                                href: "#"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text no-underline text-black uppercase font-poppins text-[25px] font-extrabold tracking-[2px] leading-[70px]",
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "relative top-[2px]",
                                    children: "G\xe2r\xeeb\xee"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "menu relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "transition_link",
                                children: navs.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: `${activeNav == nav.href ? "active" : ""} float-left`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: ()=>navChange(nav.href),
                                            className: "text-[#333] font-poppins font-medium py-0 px-[30px] inline-block transition-all duration-300",
                                            href: `#${nav.href}`,
                                            children: nav.name
                                        })
                                    }, nav.id))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ccc absolute block top-[15px] bottom-[15px] bg-[#333] z-[-1] transition-all duration-500"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Header = (Header);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(1575);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./src/layout/Cursor.js
var Cursor = __webpack_require__(2850);
;// CONCATENATED MODULE: ./src/data/musicData.ts
const musicTracks = [
    {
        id: 1,
        title: "",
        artist: "",
        file: "/music/track1.mp3",
        duration: "3:45"
    }
];

// EXTERNAL MODULE: external "react-h5-audio-player"
var external_react_h5_audio_player_ = __webpack_require__(4842);
var external_react_h5_audio_player_default = /*#__PURE__*/__webpack_require__.n(external_react_h5_audio_player_);
// EXTERNAL MODULE: ./node_modules/react-h5-audio-player/lib/styles.css
var styles = __webpack_require__(9372);
;// CONCATENATED MODULE: ./src/components/MusicPlayer.js





const MusicPlayer = ()=>{
    const [isPlaying, setIsPlaying] = (0,external_react_.useState)(false);
    const [currentTrack, setCurrentTrack] = (0,external_react_.useState)(musicTracks[0]);
    const audioRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        // Initialize audio element
        audioRef.current = new Audio(currentTrack.file);
        // Clean up on component unmount
        return ()=>{
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [
        currentTrack.file
    ]);
    const togglePlayPause = ()=>{
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "music-player p-4 bg-slate-800 rounded-lg shadow-lg max-w-md mx-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_h5_audio_player_default()), {
            autoPlay: true,
            src: currentTrack.file,
            onPlay: (e)=>console.log("onPlay"),
            showSkipControls: false,
            showJumpControls: false,
            showFilledVolume: false,
            customProgressBarSection: [
                "progress-bar",
                "progress-bar-value"
            ]
        })
    });
};
/* harmony default export */ const components_MusicPlayer = (MusicPlayer);

;// CONCATENATED MODULE: ./src/layout/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cavani_tm_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0 px-[70px] middle:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "copyright",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-[#333] font-poppins",
                    children: "Copyright \xa9 2025"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center h-[70px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_MusicPlayer, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "social",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-[15px] inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-[#333]",
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "svg inline-block",
                                    src: "assets/img/svg/social/facebook.svg",
                                    alt: "image"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-[15px] inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-[#333]",
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "svg inline-block",
                                    src: "assets/img/svg/social/twitter.svg",
                                    alt: "image"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-[15px] inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-[#333]",
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "svg inline-block",
                                    src: "assets/img/svg/social/instagram.svg",
                                    alt: "image"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-[15px] inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-[#333]",
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "svg inline-block",
                                    src: "assets/img/svg/social/dribbble.svg",
                                    alt: "image"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-[#333]",
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "svg inline-block",
                                    src: "assets/img/svg/social/tik-tok.svg",
                                    alt: "image"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: ./src/layout/Preloader.js
var Preloader = __webpack_require__(812);
;// CONCATENATED MODULE: ./src/layout/Layout.js








const Portfolio = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\src\\layout\\Layout.js -> " + "@/src/components/Portfolio"
        ]
    },
    ssr: false
});
const Layout = ({ children  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* dataImage */.CC)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Preloader/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "cavani_tm_all_wrap w-full min-h-[100vh] clear-both float-left relative",
                "data-magic-cursor": "show",
                "data-enter": "fadeInUp",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cavani_tm_left_border fixed inset-y-0 left-0 w-[70px] bg-white z-[10]"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cavani_tm_right_border fixed inset-y-0 right-0 w-[70px] bg-white z-[10]"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Cursor/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 2946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5744);



const SectionContainer = ({ navName , children  })=>{
    const { nav , animation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_2__/* .CavaniContext */ .j);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `cavani_tm_section ${nav == navName ? `animated active ${animation}` : "hidden"}`,
        id: navName,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionContainer);


/***/ })

};
;