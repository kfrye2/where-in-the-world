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
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1458434443" + " " + "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "POPULATION CALCULATOR"), __jsx("br", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Search by continent, country, or city"), __jsx("div", {
        className: "jsx-1458434443" + " " + 'input-holder',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1458434443",
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
        className: "jsx-1458434443" + " " + 'input-box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), this.state.display ? __jsx("div", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("br", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-1458434443" + " " + 'warning',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.state.search), " Not Found", __jsx("br", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("small", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Please try another serach"))) : null), this.state.data && this.state.display == false && this.state.search != '' ? __jsx("div", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("table", {
        id: "food-table",
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("thead", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.state.isCity === false ? __jsx("tr", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Continent"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Country"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Country Code"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Capital City"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Population"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Percent of Continent Population"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Percent of World Population")) : __jsx("tr", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Country Code"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "District"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "City"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Population"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Percent of District Population"), __jsx("th", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Percent of Country Population"))), this.state.isCity === false ? __jsx("tbody", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, this.state.data.items.info.map(function (item, key) {
        return __jsx("tr", {
          key: item.code,
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, item.continent), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, item.name), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, item.code), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, item.capital), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, item.population), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, item.continentpercent), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, item.worldpercent));
      })) : __jsx("tbody", {
        className: "jsx-1458434443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.state.data.items.info.map(function (item, key) {
        return __jsx("tr", {
          key: item.name,
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, item.countrycode), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, item.district), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, item.name), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, item.population), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, item.districtpercent), __jsx("td", {
          className: "jsx-1458434443",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, item.countrypercent));
      })))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1458434443",
        __self: this
      }, "#food-table.jsx-1458434443{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%;}#food-table.jsx-1458434443 td.jsx-1458434443,#food-table.jsx-1458434443 th.jsx-1458434443{border:1px solid #ddd;padding:8px;}#food-table.jsx-1458434443 tr.jsx-1458434443{font-family:\"Verdana\";font-size:10px;padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6;}#food-table.jsx-1458434443 tr.jsx-1458434443:nth-child(even){background-color:rgba(208,244,253,0.5);}#food-table.jsx-1458434443 tr.jsx-1458434443:nth-child(odd){background-color:white;}#food-table.jsx-1458434443 tr.jsx-1458434443:hover{background-color:rgba(208,244,253,1);}#food-table.jsx-1458434443 th.jsx-1458434443{font-family:\"Verdana\";font-size:14px;padding-top:12px;padding-bottom:12px;text-align:left;background-color:#28e0f4;color:#11334c;}.input-box.jsx-1458434443{margin:auto auto !important;display:block;padding:10px;margin:10px;border-radius:7px;text-align:center;font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;font-size:\"12px\";box-shadow:2px 2px 5px #888888;border:2px solid #B00574 !important;width:250px;}.info.jsx-1458434443{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;color:#11334c;font-size:20px;text-shadow:2px 2px 5px #929292;text-align:center;}.info-subtitle.jsx-1458434443{font-size:15px;}.link.jsx-1458434443{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;color:#28e0f4;}.warning.jsx-1458434443{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;color:white;position:relative;background:rgba(255,37,64,0.8);border-radius:12px;width:150px;margin:auto auto;text-align:center;padding:40px 20px 40px 20px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}.warning.jsx-1458434443:after{content:'';position:absolute;top:0;left:50%;width:0;height:0;border:20px solid transparent;border-bottom-color:rgba(255,37,64,0.8);border-top:0;border-left:0;margin-left:-10px;margin-top:-20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9Lcmlzc3kvRGVza3RvcC9VTVdfQ2xhc3Nlcy9GQUxMXzIwMTkvQ1BTQzM1MC93aGVyZS1pbi10aGUtd29ybGQvZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEdzQixBQUd3RSxBQUtuQyxBQUlBLEFBT2lCLEFBR2hCLEFBR2UsQUFHaEIsQUFTTSxBQWM2QixBQU8xQyxBQUcwQyxBQUlBLEFBWTlDLFdBQ08sSUFuQnBCLE9BbERjLEFBSUcsQUFnQkEsQ0FOakIsS0FlZ0IsQ0F5Q1IsS0FyRVIsQ0FzRVcsRUFsRU0sQUFZakIsQUFJbUIsRUFWbkIsR0FtQmUsRUEwQ0wsUUFsRVcsQUFtRVYsRUE5RWdCLEFBMkJMLEFBcUJOLEFBVUEsQUFJRixDQTFCQSxNQTJDa0IsS0FoQlosQ0ExQkEsQ0FZSCxBQVVqQixHQS9DK0IsR0FnQmIsS0EzQkwsSUFpRHFCLENBY0QsQ0ExQmIsS0FwQ3BCLEFBMkIyQixDQW1EZSxTQW5FMUMsR0EwQjJELFlBVDNDLEFBcUJJLEFBY0MsY0FsQ3JCLEVBa0RlLEVBN0JmLENBY2MsVUFnQkUsRUFmRyxXQTNCQSxDQTJDQyxLQWZBLFdBM0JhLEVBMkNkLEtBZlcsWUFnQjlCLFlBMUNZLElBMkJrRSxnQ0ExQmhFLFlBQ2QseUJBMEJBIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9Lcmlzc3kvRGVza3RvcC9VTVdfQ2xhc3Nlcy9GQUxMXzIwMTkvQ1BTQzM1MC93aGVyZS1pbi10aGUtd29ybGQvZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL01haW4gc2VhcmNoIHBhZ2UgKHN0b3Jlcy9tb3ZpZXMgc2VhcmNoKVxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTXlMYXlvdXQnO1xyXG5pbXBvcnQge2dldEluZm99IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XHJcbmltcG9ydCB7Z2V0SW5mb0NpdHl9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2VhcmNoOlwiXCIsIGRpc3BsYXk6IGZhbHNlLCBpc0NpdHk6IGZhbHNlIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVVcGRhdGUoZXZ0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoOiBldnQudGFyZ2V0LnZhbHVlLCBkaXNwbGF5OiBmYWxzZSB9KTtcclxuICAgIGxldCBkYXRhID0gbnVsbDtcclxuICAgIGNvbnN0IHAgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIGRhdGEgPSBhd2FpdCBnZXRJbmZvKHApO1xyXG4gICAgaWYoZGF0YS5pdGVtcy5pbmZvLmxlbmd0aD09PTApe1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCBnZXRJbmZvQ2l0eShwKTtcclxuICAgICAgICBpZihkYXRhLml0ZW1zLmluZm8ubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheTogdHJ1ZSwgaXNDaXR5OiBmYWxzZSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IGZhbHNlLCBpc0NpdHk6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IGZhbHNlLCBpc0NpdHk6IGZhbHNlIH0pO1xyXG4gICAgfSAgICAgIFxyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xyXG4gIH1cclxuICBcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+UE9QVUxBVElPTiBDQUxDVUxBVE9SPC9kaXY+PGJyLz48ZGl2PlNlYXJjaCBieSBjb250aW5lbnQsIGNvdW50cnksIG9yIGNpdHk8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWhvbGRlcic+XHJcbiAgICAgICAgICAgICAgPHA+PGlucHV0IGNsYXNzTmFtZT0naW5wdXQtYm94JyBcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnIFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzZWFyY2ggdGVybVwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVwZGF0ZS5iaW5kKHRoaXMpfS8+PC9wPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyBcclxuICAgICAgICAgICAgICAgIDxkaXY+PGJyLz48cCBjbGFzc05hbWU9J3dhcm5pbmcnPjxiPnt0aGlzLnN0YXRlLnNlYXJjaH08L2I+IE5vdCBGb3VuZFxyXG4gICAgICAgICAgICAgICAgPGJyLz48c21hbGw+UGxlYXNlIHRyeSBhbm90aGVyIHNlcmFjaDwvc21hbGw+PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGlzcGxheT09ZmFsc2UgJiYgdGhpcy5zdGF0ZS5zZWFyY2ghPScnID8gXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGlkPVwiZm9vZC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0NpdHk9PT1mYWxzZSA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db250aW5lbnQ8L3RoPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5IENvZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkNhcGl0YWwgQ2l0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UG9wdWxhdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UGVyY2VudCBvZiBDb250aW5lbnQgUG9wdWxhdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UGVyY2VudCBvZiBXb3JsZCBQb3B1bGF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPiBcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkNvdW50cnkgQ29kZTwvdGg+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkRpc3RyaWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3B1bGF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5QZXJjZW50IG9mIERpc3RyaWN0IFBvcHVsYXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlBlcmNlbnQgb2YgQ291bnRyeSBQb3B1bGF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPiB9XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNDaXR5PT09ZmFsc2UgPyBcclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuaXRlbXMuaW5mby5tYXAoKGl0ZW0sIGtleSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbS5jb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmNvbnRpbmVudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uY2FwaXRhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucG9wdWxhdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uY29udGluZW50cGVyY2VudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ud29ybGRwZXJjZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuaXRlbXMuaW5mby5tYXAoKGl0ZW0sIGtleSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmNvdW50cnljb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5kaXN0cmljdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucG9wdWxhdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZGlzdHJpY3RwZXJjZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jb3VudHJ5cGVyY2VudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PiB9XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIG51bGwgfSAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICNmb29kLXRhYmxlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICNmb29kLXRhYmxlIHRkLCAjZm9vZC10YWJsZSB0aCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Zvb2QtdGFibGUgdHIge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogLjc1cmVtO1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgI2Zvb2QtdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA4LDI0NCwyNTMsMC41KTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICNmb29kLXRhYmxlIHRyOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICNmb29kLXRhYmxlIHRyOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOCwyNDQsMjUzLCAxKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAjZm9vZC10YWJsZSB0aCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGUwZjQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMxMTMzNGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0LWJveCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogXCIxMnB4XCI7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggIzg4ODg4ODtcclxuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjQjAwNTc0XHJcbiAgICAgICAgICAgICAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMTEzMzRjO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggIzkyOTI5MjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8tc3VidGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICBjb2xvcjogIzI4ZTBmNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAud2FybmluZyB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwzNyw2NCwwLjgpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHggNDBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLndhcm5pbmc6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsMzcsNjQsMC44KTtcclxuICAgICAgICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=/mnt/c/Users/Krissy/Desktop/UMW_Classes/FALL_2019/CPSC350/where-in-the-world/frontend/pages/index.js */")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2760211af98fde02b714.hot-update.js.map