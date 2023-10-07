"use strict";
exports.id = 7891;
exports.ids = [7891];
exports.modules = {

/***/ 17891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47022);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39945);




// export interface ModalSurveyProps {
//   show: boolean;
//   onClose: () => void;
//   name: string;
// }
const ModalSurvey = ({ show, onClose, name })=>{
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        kritik_saran: "",
        praktis: false,
        cepat: false,
        informasi: false,
        modern: false,
        pelayanan: false,
        rating: 0,
        nama: ""
    });
    const handleChange = (event)=>{
        const { name, type, value } = event.target;
        if (type === "checkbox") {
            const checkboxValue = event.target.checked;
            setFormData({
                ...formData,
                [name]: checkboxValue
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    async function submitForm(e) {
        e.preventDefault();
        try {
            const form = new FormData(e.currentTarget);
            const data = {
                kritik_saran: formData.kritik_saran,
                praktis: formData.praktis,
                cepat: formData.cepat,
                informasi: formData.informasi,
                modern: formData.modern,
                pelayanan: formData.modern,
                rating: formData.rating,
                nama: form.get("nama")
            };
            const survey = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .postAPI */ .l)("survey/buat", data);
            if (survey.data.status) {
                setOpen(true);
                onClose();
            }
        } catch (err) {}
    }
    const handleClose = (event, reason)=>{
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    if (!show) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: submitForm,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "nama",
                        value: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-auto my-6 mx-auto max-w-3xl",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-2xl font-semibold",
                                                children: "Survey"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                                onClick: ()=>{
                                                    onClose(); // Call the callback to notify the parent
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                                    children: "\xd7"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "px-12",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                                        children: "Beri Rating untuk Website SIPAKAMASETA"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Rating__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        name: "simple-controlled",
                                                        value: value,
                                                        onChange: (event, newValue)=>{
                                                            const newRating = typeof newValue === "number" ? newValue : 0;
                                                            setValue(newValue);
                                                            setFormData({
                                                                ...formData,
                                                                rating: newRating
                                                            });
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                                                            className: "text-sm font-semibold leading-6 text-gray-900",
                                                            children: "Apa yang menurut anda oke?"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-2 space-y-2",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex flex-col md:flex-row md:space-x-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "relative flex gap-x-3 md:w-1/2",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "flex h-6 items-center",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    name: "praktis",
                                                                                    checked: formData.praktis,
                                                                                    type: "checkbox",
                                                                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                                                                    onChange: handleChange
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "text-sm leading-6",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    htmlFor: "praktis",
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: "Praktis"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "relative flex gap-x-3 md:w-1/2",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "flex h-6 items-center",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    name: "cepat",
                                                                                    checked: formData.cepat,
                                                                                    type: "checkbox",
                                                                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                                                                    onChange: handleChange
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "text-sm leading-6",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    htmlFor: "cepat",
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: "Cepat"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "relative flex gap-x-3 md:w-1/2",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "flex h-6 items-center",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    name: "informasi",
                                                                                    checked: formData.informasi,
                                                                                    type: "checkbox",
                                                                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                                                                    onChange: handleChange
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "text-sm leading-6",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    htmlFor: "informasi",
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: "Informasi Berkualitas"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "relative flex gap-x-3 md:w-1/2",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "flex h-6 items-center",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    name: "modern",
                                                                                    checked: formData.modern,
                                                                                    type: "checkbox",
                                                                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                                                                    onChange: handleChange
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "text-sm leading-6",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    htmlFor: "modern",
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: "Modern"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "relative flex gap-x-3 md:w-1/2",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "flex h-6 items-center",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    name: "pelayanan",
                                                                                    type: "checkbox",
                                                                                    checked: formData.pelayanan,
                                                                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                                                                    onChange: handleChange
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "text-sm leading-6",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    htmlFor: "pelayanan",
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: "Pelayanan Berkualitas"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "border-b border-gray-900/10 pb-6 mt-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "col-span-full",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mt-3 text-sm leading-6 text-black-600",
                                                            children: "Ada kritik/saran untuk pengembangan Website SIPAKAMASETA?"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "kritik",
                                                            className: "block text-sm font-medium leading-6 text-gray-900",
                                                            children: "Kritik dan Saran"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                name: "kritik_saran",
                                                                rows: 3,
                                                                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                                defaultValue: "",
                                                                onChange: handleChange
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                                type: "button",
                                                onClick: ()=>{
                                                    onClose(); // Call the callback to notify the parent
                                                },
                                                children: "Close"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                                type: "submit",
                                                children: "Save Changes"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "opacity-25 fixed inset-0 z-40 bg-black"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalSurvey);


/***/ }),

/***/ 39945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ postAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40248);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32015);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);


dotenv__WEBPACK_IMPORTED_MODULE_0___default().config();
function get_base_url() {
    if (true) {
        return process.env.API_URL_PROD;
    } else {}
}
const postAPI = async (endpoint, data)=>{
    try {
        let api = get_base_url() + endpoint;
        const resp = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(api, data);
        return resp;
    } catch (error) {
        throw error;
    }
};


/***/ })

};
;