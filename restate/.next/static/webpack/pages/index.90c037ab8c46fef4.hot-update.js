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

/***/ "./pages/section5/index.js":
/*!*********************************!*\
  !*** ./pages/section5/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logic_width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/width */ \"./logic/width.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    padding: 68px 100px;\\n    display: flex;\\n    justify-content: space-between;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-size: \",\n        \";\\n    font-weight: \",\n        \";\\n    color: \",\n        \";\\n    width: \",\n        \";\\n    margin: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        justify-content: space-between;\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        align-items: center;\\n    \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        align-items: center;\\n    \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        align-items: center;\\n    \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        margin: 20px 0px 0px 0px;\\n        border: 0px;\\n        background-color: \",\n        \";\\n        display: flex;\\n        justify-content: center;\\n        color: \",\n        \";\\n        font-size: 17px;\\n        font-weight: 600px;\\n        padding: 13px;\\n        width: 100%;\\n        border-radius: 10px;\\n    \"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        margin: 0px 10px 0px 0px;\\n    \"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        border: 1px solid orange;\\n        border-radius: 10px;\\n        margin: 0px 20px 0px 0px;\\n        padding: 24px;\\n    \"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Section5 = function() {\n    _s();\n    var ref = _slicedToArray((0,_logic_width__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), 1), width = ref[0];\n    var Section = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject());\n    var Text = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject1(), function(props) {\n        return props.sz;\n    }, function(props) {\n        return props.w;\n    }, function(props) {\n        return props.c;\n    }, function(props) {\n        return props.width;\n    }, function(props) {\n        return props.m;\n    });\n    var SectionContact = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n    var SectionAward = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n    var Telephone = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n    var Email = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n    var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject6(), function(props) {\n        return props.bg || \"transparent\";\n    }, function(props) {\n        return props.c || \"white\";\n    });\n    var Figure = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figure(_templateObject7());\n    var SectionBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject8());\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: width < 768 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"this mobile version\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n            lineNumber: 60,\n            columnNumber: 31\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                            w: \"700\",\n                            sz: \"28px\",\n                            children: \"Hubungi Kami\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionContact, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionBox, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Telephone, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Figure, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: \"/telephone.png\",\n                                                        width: 32,\n                                                        height: 32,\n                                                        alt: \"icons-telephone\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 45\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 41\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                                            children: \"Call\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 45\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                                            children: \"+6281232936733\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 45\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 41\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                            bg: \"rgba(255, 117, 39, 0.2)\",\n                                            children: \"Call Now\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionBox, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Email, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Figure, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: \"/email.png\",\n                                                        width: 32,\n                                                        height: 32,\n                                                        alt: \"icons-email\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 45\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 41\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                                            children: \"email\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 45\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                                            children: \"omahindev@gmail.com\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 45\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 41\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                            bg: \"orange\",\n                                            children: \"Email Now\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                            lineNumber: 65,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                    lineNumber: 63,\n                    columnNumber: 25\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                            w: \"700\",\n                            sz: \"28px\",\n                            children: \"Penghargaan\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                            lineNumber: 97,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionAward, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/award2.png\",\n                                        width: 156,\n                                        height: 104,\n                                        alt: \"award1\",\n                                        draggable: \"false\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 37\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/award1.png\",\n                                        width: 211,\n                                        height: 152,\n                                        alt: \"award1\",\n                                        draggable: \"false\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 37\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                            lineNumber: 98,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n                    lineNumber: 96,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section5\\\\index.js\",\n            lineNumber: 62,\n            columnNumber: 21\n        }, _this)\n    }, void 0, false));\n};\n_s(Section5, \"tXU6CUZVLCf4QgzhNj8yZ+gmp58=\", false, function() {\n    return [\n        _logic_width__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Section5;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section5);\nvar _c;\n$RefreshReg$(_c, \"Section5\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFFLEVBQUU7d0RBQUVzQixNQUFNLEVBQUUsRUFBRTt3REFBRUMsR0FBRyxFQUFDLENBQWE7Ozs7Ozs7Ozs7OzRIQUVuRVosQ0FBRzs7b0lBQ0NhLENBQVU7c0VBQUMsQ0FBSzs7Ozs7O29JQUNoQkEsQ0FBVTtzRUFBQyxDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29IQUd0Q1QsTUFBTTs0Q0FBQ0UsRUFBRSxFQUFDLENBQVE7c0RBQUMsQ0FFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFJWE4sQ0FBRzs7b0dBQ0NSLElBQUk7NEJBQUNJLENBQUMsRUFBQyxDQUFLOzRCQUFDRCxFQUFFLEVBQUMsQ0FBTTtzQ0FBQyxDQUFXOzs7Ozs7b0dBQ2xDTSxZQUFZOzs0R0FDUk8sQ0FBTTswSEFDRnRCLG1EQUFLO3dDQUFDd0IsR0FBRyxFQUFDLENBQWE7d0NBQUNyQixLQUFLLEVBQUUsR0FBRzt3Q0FBRXNCLE1BQU0sRUFBRSxHQUFHO3dDQUFFQyxHQUFHLEVBQUMsQ0FBUTt3Q0FBQ0UsU0FBUyxFQUFDLENBQU87Ozs7Ozs7Ozs7OzRHQUVuRk4sQ0FBTTswSEFDRnRCLG1EQUFLO3dDQUFDd0IsR0FBRyxFQUFDLENBQWE7d0NBQUNyQixLQUFLLEVBQUUsR0FBRzt3Q0FBRXNCLE1BQU0sRUFBRSxHQUFHO3dDQUFFQyxHQUFHLEVBQUMsQ0FBUTt3Q0FBQ0UsU0FBUyxFQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNwSCxDQUFDO0dBNUdLMUIsUUFBUTs7UUFDTUQsb0RBQWE7OztLQUQzQkMsUUFBUTtBQTZHZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWN0aW9uNS9pbmRleC5qcz84NTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgdXNlRGV2aWNlU2l6ZSBmcm9tIFwiLi4vLi4vbG9naWMvd2lkdGhcIjtcclxuY29uc3QgU2VjdGlvbjUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbd2lkdGhdID0gdXNlRGV2aWNlU2l6ZSgpXHJcblxyXG4gICAgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZzogNjhweCAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuICAgIGNvbnN0IFRleHQgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5zen07XHJcbiAgICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy53fTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmN9O1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gICAgbWFyZ2luOiAke3Byb3BzID0+IHByb3BzLm19O1xyXG5gXHJcbiAgICBjb25zdCBTZWN0aW9uQ29udGFjdCA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBgXHJcbiAgICBjb25zdCBTZWN0aW9uQXdhcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGBcclxuICAgIGNvbnN0IFRlbGVwaG9uZSA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYFxyXG4gICAgY29uc3QgRW1haWwgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGBcclxuICAgIGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmcgfHwgXCJ0cmFuc3BhcmVudFwifTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmMgfHwgXCJ3aGl0ZVwifTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGBcclxuICAgIGNvbnN0IEZpZ3VyZSA9IHN0eWxlZC5maWd1cmVgXHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xyXG4gICAgYFxyXG4gICAgY29uc3QgU2VjdGlvbkJveCA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA8IDc2OCA/IDxwPnRoaXMgbW9iaWxlIHZlcnNpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdz1cIjcwMFwiIHN6PVwiMjhweFwiPkh1YnVuZ2kgS2FtaTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uQ29udGFjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRlbGVwaG9uZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi90ZWxlcGhvbmUucG5nXCIgd2lkdGg9ezMyfSBoZWlnaHQ9ezMyfSBhbHQ9XCJpY29ucy10ZWxlcGhvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPkNhbGw8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+KzYyODEyMzI5MzY3MzM8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZWxlcGhvbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYmc9XCJyZ2JhKDI1NSwgMTE3LCAzOSwgMC4yKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FsbCBOb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1haWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZW1haWwucG5nXCIgd2lkdGg9ezMyfSBoZWlnaHQ9ezMyfSBhbHQ9XCJpY29ucy1lbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+ZW1haWw8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+b21haGluZGV2QGdtYWlsLmNvbTwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0VtYWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJnPVwib3JhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBOb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uQ29udGFjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB3PVwiNzAwXCIgc3o9XCIyOHB4XCI+UGVuZ2hhcmdhYW48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkF3YXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXdhcmQyLnBuZ1wiIHdpZHRoPXsxNTZ9IGhlaWdodD17MTA0fSBhbHQ9XCJhd2FyZDFcIiBkcmFnZ2FibGU9XCJmYWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hd2FyZDEucG5nXCIgd2lkdGg9ezIxMX0gaGVpZ2h0PXsxNTJ9IGFsdD1cImF3YXJkMVwiIGRyYWdnYWJsZT1cImZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbkF3YXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjUiXSwibmFtZXMiOlsic3R5bGVkIiwiSW1hZ2UiLCJ1c2VEZXZpY2VTaXplIiwiU2VjdGlvbjUiLCJ3aWR0aCIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiVGV4dCIsInAiLCJwcm9wcyIsInN6IiwidyIsImMiLCJtIiwiU2VjdGlvbkNvbnRhY3QiLCJkaXYiLCJTZWN0aW9uQXdhcmQiLCJUZWxlcGhvbmUiLCJFbWFpbCIsIkJ1dHRvbiIsImJ1dHRvbiIsImJnIiwiRmlndXJlIiwiZmlndXJlIiwiU2VjdGlvbkJveCIsInNyYyIsImhlaWdodCIsImFsdCIsImZpZ2NhcHRpb24iLCJkcmFnZ2FibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/section5/index.js\n");

/***/ })

});