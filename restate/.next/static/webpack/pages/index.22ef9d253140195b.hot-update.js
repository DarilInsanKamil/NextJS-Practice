"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/section1/index.js":
/*!*********************************!*\
  !*** ./pages/section1/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _logic_width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/width */ \"./logic/width.js\");\n/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile.js */ \"./pages/section1/mobile.js\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        justify-content: space-between;\\n        align-items: center;\\n        padding: 0px 10px;\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: \",\n        \";\\n        font-weight: \",\n        \";\\n        color: \",\n        \";\\n        width: \",\n        \";\\n        margin: \",\n        \";\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        background-color: white;\\n        width: 675px;\\n        padding: 10px 14px;\\n        border-radius: 15px;\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        align-items: center;\\n    \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        border: 0;\\n        padding: 13px 41px;\\n        background-color: #203239;\\n        color: white;\\n        font-weight: 700;\\n        border-radius: 10px;\\n        cursor: pointer;\\n        box-shadow: 0px 6px 8px rgba(32, 50, 57, 0.25);\\n    \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        padding: 13px 5px;\\n        border: 0px;\\n        width: 400px;\\n        margin-left: 10px;\\n        font-size: 17px;\\n        &:focus {\\n            outline: none;\\n        }\\n    \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        margin: 56px 0px 60px 0px;\\n        justify-content: space-between;\\n    \"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width: 149px;\\n    \"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        color:#FF7527;\\n        font-size: \",\n        \";\\n\\n    \"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Section1 = function() {\n    _s();\n    var ref = _slicedToArray((0,_logic_width__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), 1), width = ref[0];\n    var Section = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section(_templateObject());\n    var Text = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p(_templateObject1(), function(props) {\n        return props.sz;\n    }, function(props) {\n        return props.w;\n    }, function(props) {\n        return props.c;\n    }, function(props) {\n        return props.width;\n    }, function(props) {\n        return props.m;\n    });\n    var SeacrhBar = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n    var SectionSearch = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section(_templateObject3());\n    var Button = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button(_templateObject4());\n    var Input = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].input(_templateObject5());\n    var Journey = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject6());\n    var SectionJourney = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section(_templateObject7());\n    var Span = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].span(_templateObject8(), function(props) {\n        return props.sz || \"48px\";\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: width < 768 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mobile_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n            lineNumber: 70,\n            columnNumber: 31\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                            width: \"100%\",\n                            sz: \"28px\",\n                            w: \"600\",\n                            children: \"Temukan Hunian Keluarga Sesuai Keinginanmu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                            lineNumber: 74,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                            width: \"544px\",\n                            m: \"24px 0px 56px 0px\",\n                            c: \"rgba(0,0,0, 0.4)\",\n                            sz: \"16px\",\n                            w: \"400\",\n                            children: \"Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                            lineNumber: 75,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SeacrhBar, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionSearch, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: \"/location.png\",\n                                            width: 24,\n                                            height: 24,\n                                            alt: \"location\",\n                                            draggable: \"false\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                            type: \"text\",\n                                            placeholder: \"Search location, properties, residental group\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                            lineNumber: 76,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Journey, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionJourney, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                            sz: \"48px\",\n                                            w: \"600\",\n                                            children: [\n                                                \"200\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Span, {\n                                                    children: \"+\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 64\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                            c: \"rgba(0,0,0, 0.4)\",\n                                            sz: \"16px\",\n                                            w: \"400\",\n                                            children: \"Residental grup telah bergabung\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionJourney, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                            sz: \"48px\",\n                                            w: \"600\",\n                                            children: [\n                                                \"10\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Span, {\n                                                    sz: \"16px\",\n                                                    children: \"tahun\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 63\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                            c: \"rgba(0,0,0, 0.4)\",\n                                            sz: \"16px\",\n                                            w: \"400\",\n                                            children: \"Sudah berpengalaman\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionJourney, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                            sz: \"48px\",\n                                            w: \"600\",\n                                            children: [\n                                                \"999\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Span, {\n                                                    children: \"+\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 64\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                            c: \"rgba(0,0,0, 0.4)\",\n                                            sz: \"16px\",\n                                            w: \"400\",\n                                            children: \"Properti tersedia di berbagai Kota\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 25\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/home.png\",\n                    width: 451,\n                    height: 572,\n                    alt: \"home\",\n                    draggable: \"false\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                    lineNumber: 98,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n            lineNumber: 72,\n            columnNumber: 21\n        }, _this)\n    }, void 0, false));\n};\n_s(Section1, \"tXU6CUZVLCf4QgzhNj8yZ+gmp58=\", false, function() {\n    return [\n        _logic_width__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Section1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section1);\nvar _c;\n$RefreshReg$(_c, \"Section1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3Rpb24xL2luZGV4LmpzPzYwOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgdXNlRGV2aWNlU2l6ZSBmcm9tIFwiLi4vLi4vbG9naWMvd2lkdGhcIlxyXG5pbXBvcnQgTW9iaWxlU2VjdGlvbjEgZnJvbSAnLi9tb2JpbGUuanMnXHJcbmNvbnN0IFNlY3Rpb24xID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3dpZHRoXSA9IHVzZURldmljZVNpemUoKVxyXG5cclxuICAgIGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgYFxyXG4gICAgY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxyXG4gICAgICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5zen07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMud307XHJcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY307XHJcbiAgICAgICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gICAgICAgIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy5tfTtcclxuICAgIGBcclxuICAgIGNvbnN0IFNlYWNyaEJhciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDY3NXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBgXHJcbiAgICBjb25zdCBTZWN0aW9uU2VhcmNoID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYFxyXG4gICAgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCA0MXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDMyMzk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDZweCA4cHggcmdiYSgzMiwgNTAsIDU3LCAwLjI1KTtcclxuICAgIGBcclxuICAgIGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG4gICAgY29uc3QgSm91cm5leSA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IDU2cHggMHB4IDYwcHggMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGBcclxuICAgIGNvbnN0IFNlY3Rpb25Kb3VybmV5ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICAgICAgd2lkdGg6IDE0OXB4O1xyXG4gICAgYFxyXG4gICAgY29uc3QgU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gICAgICAgIGNvbG9yOiNGRjc1Mjc7XHJcbiAgICAgICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnN6IHx8IFwiNDhweFwifTtcclxuXHJcbiAgICBgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoIDwgNzY4ID8gPE1vYmlsZVNlY3Rpb24xLz5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgd2lkdGg9XCIxMDAlXCIgc3o9XCIyOHB4XCIgdz1cIjYwMFwiPlRlbXVrYW4gSHVuaWFuIEtlbHVhcmdhIFNlc3VhaSBLZWluZ2luYW5tdTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHdpZHRoPVwiNTQ0cHhcIiBtPVwiMjRweCAwcHggNTZweCAwcHhcIiBjPVwicmdiYSgwLDAsMCwgMC40KVwiIHN6PVwiMTZweFwiIHc9XCI0MDBcIj5NZW55ZWRpYWthbiBodW5pYW4gYmFnaSBrZWx1YXJnYSBhbmRhIGRlbmdhbiB2YXJpYW4gcGlsaWhhbiBkYW4gbG9rYXNpIHlhbmcgc3RyYXRlZ2lzIGRpIGtvdGEgYW5kYSBkZW5nYW4gY2FyYSB5YW5nIGxlYmloIG11ZGFoLjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFjcmhCYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25TZWFyY2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9jYXRpb24ucG5nXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBhbHQ9XCJsb2NhdGlvblwiIGRyYWdnYWJsZT1cImZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggbG9jYXRpb24sIHByb3BlcnRpZXMsIHJlc2lkZW50YWwgZ3JvdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvblNlYXJjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFjcmhCYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Sm91cm5leT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkpvdXJuZXk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN6PVwiNDhweFwiIHc9XCI2MDBcIj4yMDA8U3Bhbj4rPC9TcGFuPjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYz1cInJnYmEoMCwwLDAsIDAuNClcIiBzej1cIjE2cHhcIiB3PVwiNDAwXCI+UmVzaWRlbnRhbCBncnVwIHRlbGFoIGJlcmdhYnVuZzwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25Kb3VybmV5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uSm91cm5leT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3o9XCI0OHB4XCIgdz1cIjYwMFwiPjEwPFNwYW4gc3o9XCIxNnB4XCI+dGFodW48L1NwYW4+PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjPVwicmdiYSgwLDAsMCwgMC40KVwiIHN6PVwiMTZweFwiIHc9XCI0MDBcIj5TdWRhaCBiZXJwZW5nYWxhbWFuPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbkpvdXJuZXk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25Kb3VybmV5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzej1cIjQ4cHhcIiB3PVwiNjAwXCI+OTk5PFNwYW4+KzwvU3Bhbj48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGM9XCJyZ2JhKDAsMCwwLCAwLjQpXCIgc3o9XCIxNnB4XCIgdz1cIjQwMFwiPlByb3BlcnRpIHRlcnNlZGlhIGRpIGJlcmJhZ2FpIEtvdGE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uSm91cm5leT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSm91cm5leT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2hvbWUucG5nXCIgd2lkdGg9ezQ1MX0gaGVpZ2h0PXs1NzJ9IGFsdD1cImhvbWVcIiBkcmFnZ2FibGU9XCJmYWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24xIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVkIiwidXNlRGV2aWNlU2l6ZSIsIk1vYmlsZVNlY3Rpb24xIiwiU2VjdGlvbjEiLCJ3aWR0aCIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiVGV4dCIsInAiLCJwcm9wcyIsInN6IiwidyIsImMiLCJtIiwiU2VhY3JoQmFyIiwiZGl2IiwiU2VjdGlvblNlYXJjaCIsIkJ1dHRvbiIsImJ1dHRvbiIsIklucHV0IiwiaW5wdXQiLCJKb3VybmV5IiwiU2VjdGlvbkpvdXJuZXkiLCJTcGFuIiwic3BhbiIsInNyYyIsImhlaWdodCIsImFsdCIsImRyYWdnYWJsZSIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/section1/index.js\n");

/***/ })

});