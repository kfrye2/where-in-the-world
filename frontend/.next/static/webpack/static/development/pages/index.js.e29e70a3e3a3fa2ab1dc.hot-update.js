webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _comps_MyLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comps/MyLayout */ "./comps/MyLayout.js");
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_utils_js__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/mnt/c/Users/Krissy/Desktop/UMW_Classes/FALL_2019/CPSC350/where-in-the-world/frontend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;
//Main search page (stores/movies search)





var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home).call(this, props));
    _this.state = {
      search: "",
      display: false,
      isCity: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "handleUpdate",
    value: function () {
      var _handleUpdate = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
        var data, p;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  search: evt.target.value,
                  display: false
                });
                data = null;
                p = evt.target.value;
                _context.next = 5;
                return Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_10__["getInfo"])(p);

              case 5:
                data = _context.sent;

                if (!(data.items.info.length === 0)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 9;
                return Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_10__["getInfoCity"])(p);

              case 9:
                data = _context.sent;

                if (data.items.info.length === 0) {
                  this.setState({
                    display: true,
                    isCity: false
                  });
                } else {
                  this.setState({
                    display: false,
                    isCity: true
                  });
                }

                _context.next = 14;
                break;

              case 13:
                this.setState({
                  display: false,
                  isCity: false
                });

              case 14:
                return _context.abrupt("return", this.setState({
                  data: data
                }));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleUpdate(_x) {
        return _handleUpdate.apply(this, arguments);
      }

      return handleUpdate;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx(_comps_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3579251305" + " " + "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "POPULATION CALCULATOR"), __jsx("div", {
        className: "jsx-3579251305" + " " + "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Search by continent, country, or city"), __jsx("div", {
        className: "jsx-3579251305" + " " + 'input-holder',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        placeholder: "Enter search term",
        value: this.state.search,
        onChange: this.handleUpdate.bind(this),
        className: "jsx-3579251305" + " " + 'input-box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), this.state.display ? __jsx("div", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("br", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-3579251305" + " " + 'warning',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.state.search), " Not Found", __jsx("br", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("small", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Please try another serach"))) : null), this.state.data && this.state.display == false && this.state.search != '' ? __jsx("div", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("table", {
        id: "food-table",
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("thead", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.state.isCity === false ? __jsx("tr", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Continent"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Country"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Country Code"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Capital City"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Population"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Percent of Continent Population"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Percent of World Population")) : __jsx("tr", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Country Code"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "District"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "City"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Population"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Percent of District Population"), __jsx("th", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Percent of Country Population"))), this.state.isCity === false ? __jsx("tbody", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, this.state.data.items.info.map(function (item, key) {
        return __jsx("tr", {
          key: item.code,
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, item.continent), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, item.name), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, item.code), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, item.capital), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, item.population), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, item.continentpercent), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, item.worldpercent));
      })) : __jsx("tbody", {
        className: "jsx-3579251305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.state.data.items.info.map(function (item, key) {
        return __jsx("tr", {
          key: item.name,
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, item.countrycode), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, item.district), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, item.name), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, item.population), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, item.districtpercent), __jsx("td", {
          className: "jsx-3579251305",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, item.countrypercent));
      })))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3579251305",
        __self: this
      }, "#food-table.jsx-3579251305{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%;}#food-table.jsx-3579251305 td.jsx-3579251305,#food-table.jsx-3579251305 th.jsx-3579251305{border:1px solid #ddd;padding:8px;}#food-table.jsx-3579251305 tr.jsx-3579251305{font-family:\"Verdana\";font-size:10px;padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6;}#food-table.jsx-3579251305 tr.jsx-3579251305:nth-child(even){background-color:rgba(208,244,253,0.5);}#food-table.jsx-3579251305 tr.jsx-3579251305:nth-child(odd){background-color:white;}#food-table.jsx-3579251305 tr.jsx-3579251305:hover{background-color:rgba(208,244,253,1);}#food-table.jsx-3579251305 th.jsx-3579251305{font-family:\"Verdana\";font-size:14px;padding-top:12px;padding-bottom:12px;text-align:left;background-color:#B00574;color:white;text-align:center;}.input-box.jsx-3579251305{margin:auto auto !important;display:block;padding:10px;margin:10px;border-radius:7px;text-align:center;font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;font-size:\"12px\";box-shadow:2px 2px 5px #888888;border:2px solid #005CBB !important;width:250px;}.info.jsx-3579251305{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;color:#005CBB;font-size:20px;text-shadow:0px 0px 3px #000000;text-align:center;}.info-subtitle.jsx-3579251305{font-size:15px;}.link.jsx-3579251305{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;color:#28e0f4;}.warning.jsx-3579251305{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;color:white;position:relative;background:rgba(255,37,64,0.8);border-radius:12px;width:150px;margin:auto auto;text-align:center;padding:40px 20px 40px 20px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}.warning.jsx-3579251305:after{content:'';position:absolute;top:0;left:50%;width:0;height:0;border:20px solid transparent;border-bottom-color:rgba(255,37,64,0.8);border-top:0;border-left:0;margin-left:-10px;margin-top:-20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9Lcmlzc3kvRGVza3RvcC9VTVdfQ2xhc3Nlcy9GQUxMXzIwMTkvQ1BTQzM1MC93aGVyZS1pbi10aGUtd29ybGQvZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEdzQixBQUd3RSxBQUtuQyxBQUlBLEFBT2lCLEFBR2hCLEFBR2UsQUFHaEIsQUFVTSxBQWM2QixBQU8xQyxBQUcwQyxBQUlBLEFBWTlDLFdBQ08sSUFuQnBCLE9BbkRjLEFBSUcsQUFnQkEsQ0FOakIsS0FnQmdCLENBeUNSLEtBdEVSLENBdUVXLEVBbkVNLEFBWWpCLEFBSW1CLEVBVm5CLEdBb0JlLEVBMENMLFFBbkVXLEFBb0VWLEVBL0VnQixBQTJCTCxBQXNCTixBQVVBLEFBSUYsQ0ExQkEsTUEyQ2tCLEtBaEJaLENBMUJBLENBWUgsQUFVakIsR0FoRCtCLEdBZ0JiLEtBM0JMLElBa0RxQixDQWNELENBMUJiLEtBckNwQixBQTJCMkIsQ0FvRGUsU0FwRTFDLEdBMkIyRCxZQVY3QyxBQXNCTSxBQWNDLFlBbkNELElBbURMLEVBN0JmLENBY2MsVUFnQkUsQ0FuRGhCLENBb0NtQixXQTNCQSxDQTJDQyxLQWZBLFdBM0JhLEVBMkNkLEtBZlcsWUFnQjlCLFlBMUNZLElBMkJrRSxnQ0ExQmhFLFlBQ2QseUJBMEJBIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9Lcmlzc3kvRGVza3RvcC9VTVdfQ2xhc3Nlcy9GQUxMXzIwMTkvQ1BTQzM1MC93aGVyZS1pbi10aGUtd29ybGQvZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL01haW4gc2VhcmNoIHBhZ2UgKHN0b3Jlcy9tb3ZpZXMgc2VhcmNoKVxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTXlMYXlvdXQnO1xyXG5pbXBvcnQge2dldEluZm99IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XHJcbmltcG9ydCB7Z2V0SW5mb0NpdHl9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2VhcmNoOlwiXCIsIGRpc3BsYXk6IGZhbHNlLCBpc0NpdHk6IGZhbHNlIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVVcGRhdGUoZXZ0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoOiBldnQudGFyZ2V0LnZhbHVlLCBkaXNwbGF5OiBmYWxzZSB9KTtcclxuICAgIGxldCBkYXRhID0gbnVsbDtcclxuICAgIGNvbnN0IHAgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIGRhdGEgPSBhd2FpdCBnZXRJbmZvKHApO1xyXG4gICAgaWYoZGF0YS5pdGVtcy5pbmZvLmxlbmd0aD09PTApe1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCBnZXRJbmZvQ2l0eShwKTtcclxuICAgICAgICBpZihkYXRhLml0ZW1zLmluZm8ubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheTogdHJ1ZSwgaXNDaXR5OiBmYWxzZSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IGZhbHNlLCBpc0NpdHk6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IGZhbHNlLCBpc0NpdHk6IGZhbHNlIH0pO1xyXG4gICAgfSAgICAgIFxyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xyXG4gIH1cclxuICBcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+UE9QVUxBVElPTiBDQUxDVUxBVE9SPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+U2VhcmNoIGJ5IGNvbnRpbmVudCwgY291bnRyeSwgb3IgY2l0eTwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtaG9sZGVyJz5cclxuICAgICAgICAgICAgICA8cD48aW5wdXQgY2xhc3NOYW1lPSdpbnB1dC1ib3gnIFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHNlYXJjaCB0ZXJtXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXBkYXRlLmJpbmQodGhpcyl9Lz48L3A+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IFxyXG4gICAgICAgICAgICAgICAgPGRpdj48YnIvPjxwIGNsYXNzTmFtZT0nd2FybmluZyc+PGI+e3RoaXMuc3RhdGUuc2VhcmNofTwvYj4gTm90IEZvdW5kXHJcbiAgICAgICAgICAgICAgICA8YnIvPjxzbWFsbD5QbGVhc2UgdHJ5IGFub3RoZXIgc2VyYWNoPC9zbWFsbD48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEgJiYgdGhpcy5zdGF0ZS5kaXNwbGF5PT1mYWxzZSAmJiB0aGlzLnN0YXRlLnNlYXJjaCE9JycgPyBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJmb29kLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzQ2l0eT09PWZhbHNlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbnRpbmVudDwvdGg+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkNvdW50cnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkNvdW50cnkgQ29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2FwaXRhbCBDaXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3B1bGF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5QZXJjZW50IG9mIENvbnRpbmVudCBQb3B1bGF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5QZXJjZW50IG9mIFdvcmxkIFBvcHVsYXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+Q291bnRyeSBDb2RlPC90aD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzdHJpY3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkNpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlBvcHVsYXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlBlcmNlbnQgb2YgRGlzdHJpY3QgUG9wdWxhdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UGVyY2VudCBvZiBDb3VudHJ5IFBvcHVsYXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+IH1cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0NpdHk9PT1mYWxzZSA/IFxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5pdGVtcy5pbmZvLm1hcCgoaXRlbSwga2V5KT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLmNvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uY29udGluZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jYXBpdGFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5wb3B1bGF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jb250aW5lbnRwZXJjZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS53b3JsZHBlcmNlbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5pdGVtcy5pbmZvLm1hcCgoaXRlbSwga2V5KT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uY291bnRyeWNvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmRpc3RyaWN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5wb3B1bGF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5kaXN0cmljdHBlcmNlbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmNvdW50cnlwZXJjZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+IH1cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgbnVsbCB9ICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgI2Zvb2QtdGFibGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgI2Zvb2QtdGFibGUgdGQsICNmb29kLXRhYmxlIHRoIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZm9vZC10YWJsZSB0ciB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAjZm9vZC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsMjQ0LDI1MywwLjUpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgI2Zvb2QtdGFibGUgdHI6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgI2Zvb2QtdGFibGUgdHI6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA4LDI0NCwyNTMsIDEpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICNmb29kLXRhYmxlIHRoIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0IwMDU3NDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dC1ib3gge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IFwiMTJweFwiO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICM4ODg4ODg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwNUNCQlxyXG4gICAgICAgICAgICAgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwNUNCQjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbmZvLXN1YnRpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMyOGUwZjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLndhcm5pbmcge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMzcsNjQsMC44KTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweCAyMHB4IDQwcHggMjBweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53YXJuaW5nOmFmdGVyIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LDM3LDY0LDAuOCk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=/mnt/c/Users/Krissy/Desktop/UMW_Classes/FALL_2019/CPSC350/where-in-the-world/frontend/pages/index.js */")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.e29e70a3e3a3fa2ab1dc.hot-update.js.map