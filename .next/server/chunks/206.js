exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 26443:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 10966))

/***/ }),

/***/ 34914:
/***/ (() => {



/***/ }),

/***/ 10966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashboardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19722);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16775);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function DashboardLayout({ children }) {
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const surat = [
        {
            name: "Surat Izin Membangun Sementara",
            to: "/admin/imbS"
        },
        {
            name: "Surat Pengantar dari Kantor Desa",
            to: "/admin/spDariDesa"
        },
        {
            name: "Surat Pengantar ke Kantor Desa",
            to: "/admin/spkedesa"
        },
        {
            name: "Surat Keterangan Aktif Perusahaan",
            to: "/admin/suketaktifperusahaan"
        },
        {
            name: "Surat Keterangan Belum Memiliki Rumah",
            to: "/admin/suketbelumpunyarumah"
        },
        {
            name: "Surat Keterangan Belum Terbit E-KTP",
            to: "/admin/suketblmktp"
        },
        {
            name: "Surat Keterangan Domisili",
            to: "/admin/suketdomisili"
        },
        {
            name: "Surat Keterangan Ghoib",
            to: "/admin/suketghoib"
        },
        {
            name: "Surat Keterangan Jabatan",
            to: "/admin/suketjabatan"
        },
        {
            name: "Surat Keterangan Kehilangan Kartu Keluarga",
            to: "/admin/suketkehilangankk"
        },
        {
            name: "Surat Keterangan Kehilangan STPD",
            to: "/admin/suketkehilanganstpd"
        },
        {
            name: "Surat Keterangan Kekerabatan Anak Kandung",
            to: "/admin/suketkekerabatan"
        },
        {
            name: "Surat Keterangan Lahir Desa",
            to: "/admin/suketlahirdesa"
        },
        {
            name: "Surat Keterangan Lokasi Tanah",
            to: "/admin/suketlokasitanah"
        },
        {
            name: "Surat Keterangan Menantu",
            to: "/admin/suketmenantu"
        },
        {
            name: "Surat Keterangan Penduduk Liar",
            to: "/admin/suketpendudukliar"
        },
        {
            name: "Surat Keterangan Penegasan Wilayah",
            to: "/admin/suketpenegasanwil"
        },
        {
            name: "Surat Keterangan Pengurusan PBB",
            to: "/admin/suketpengurusanpbb"
        },
        {
            name: "Surat Keterangan Pernyataan Waris",
            to: "/admin/suketpernyataanwaris"
        },
        {
            name: "Surat Keterangan Pisah Rumah",
            to: "/admin/suketpisahrumah"
        },
        {
            name: "Surat Keterangan Taksiran Tanah",
            to: "/admin/sukettaksirantanah"
        },
        {
            name: "Surat Keterangan Tanah",
            to: "/admin/sukettanah"
        },
        {
            name: "Surat Keterangan Tanah Belum Pernah Diperjualbelikan",
            to: "/admin/sukettbpd"
        },
        {
            name: "Surat Keterangan Telah Menikah",
            to: "/admin/suketTelahMenikah"
        },
        {
            name: "Surat Keterangan Untuk Nikah",
            to: "/admin/suketuntuknikah"
        },
        {
            name: "Surat Keterangan Pengurusan Kartu Keluarga",
            to: "/admin/suketuruskk"
        },
        {
            name: "Surat Keterangan Wali Orang Tua",
            to: "/admin/suketWaliOrtu"
        },
        {
            name: "Surat Pengantar Imunisasi",
            to: "/admin/superimunisasi"
        },
        {
            name: "Surat Perjanjian Utang Piutang",
            to: "/admin/superutangpiutang"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                id: "default-sidebar",
                className: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
                "aria-label": "Sidebar",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "space-y-2 font-medium",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "/",
                                    className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiFillHome */ .V9Z, {
                                            className: "w-5 h-5"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "ml-3",
                                            children: "Home"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>setOpen(!isOpen),
                                        className: "flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                                        "aria-controls": "dropdown-example",
                                        "data-collapse-toggle": "dropdown-example",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiFillMail */ .Uh$, {
                                                className: "w-5 h-5"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "flex-1 ml-3 text-left whitespace-nowrap",
                                                children: "Surat"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "w-3 h-3",
                                                "aria-hidden": "true",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 10 6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    stroke: "currentColor",
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "m1 1 4 4 4-4"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        id: "dropdown-example",
                                        className: `py-2 space-y-2 ${isOpen ? "block" : "hidden"}`,
                                        children: surat.map((suratItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: suratItem.to,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                                                        children: suratItem.name
                                                    })
                                                })
                                            }))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                                        href: "/admin/store",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__/* .FaStore */ .KSn, {
                                                className: "w-5 h-5"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "flex-1 ml-3 whitespace-nowrap",
                                                children: "Ga'de"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "#",
                                    className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 18 16",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                stroke: "currentColor",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "flex-1 ml-3 whitespace-nowrap",
                                            children: "Sign In"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "#",
                                    className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            className: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "flex-1 ml-3 whitespace-nowrap",
                                            children: "Sign Up"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            children
        ]
    });
}


/***/ }),

/***/ 62505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}


/***/ }),

/***/ 24642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/andialifikhlasulamal/Documents/project/sipakamaseta/src/app/admin/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 86680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: " min-h-screen ml-64 text-black text-lg font-bold",
        children: "Loading..."
    });
}


/***/ })

};
;