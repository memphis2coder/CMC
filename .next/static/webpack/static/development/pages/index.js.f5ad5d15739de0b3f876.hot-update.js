webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_dropdowns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/dropdowns */ "./components/dropdowns.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_dataChart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/dataChart */ "./components/dataChart.js");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dates/initialize */ "./node_modules/react-dates/initialize.js");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../public/cmcdata_subset.json */ "./public/cmcdata_subset.json");
var _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/cmcdata_subset.json */ "./public/cmcdata_subset.json", 1);
/* harmony import */ var _public_wqp_stations_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../public/wqp_stations.json */ "./public/wqp_stations.json");
var _public_wqp_stations_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/wqp_stations.json */ "./public/wqp_stations.json", 1);







var _jsxFileName = "/home/dan/github/CMC/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















var Home = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _PureComponent);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      filtered_data: [],
      wqp_station_data: [],
      show_wqp: true,
      chart_data: [],
      GroupNames: null,
      variables: null,
      selectedGroupNames: null,
      selectedVariables: null,
      selected: {
        index: null,
        StationName: null
      },
      /// individual row selected
      startDate: moment__WEBPACK_IMPORTED_MODULE_17___default()().subtract(2, "year"),
      endDate: moment__WEBPACK_IMPORTED_MODULE_17___default()(),
      availableVariablesAtLocation: null,
      selectedVariableAtLocation: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "Map", next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/map */ "./components/map.js"));
    }, {
      ssr: false,
      loadableGenerated: {
        webpack: function webpack() {
          return [/*require.resolve*/(/*! ../components/map */ "./components/map.js")];
        },
        modules: ['../components/map']
      }
    }));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "changeLocation", function (e) {
      console.log(e.index);

      _this.setState({
        selected: _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19__.filter(function (item) {
          return item['index'] == e.index;
        })[0]
      }, function () {
        _this.updateChartData();
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getUnique", function (e, d) {
      var result = [];
      var map = new Map();

      var _iterator = _createForOfIteratorHelper(d),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (!map.has(item[e])) {
            map.set(item[e], true); // set any value to Map

            var obj = {};
            obj[e] = item[e];
            result.push(obj);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setGroupName", function (e) {
      console.log(e);

      _this.setState({
        selectedGroupNames: e[0].GroupName
      }, function () {
        _this.setFilteredData();
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setVariable", function (e) {
      _this.setState({
        selectedVariables: e[0].variable
      }, function () {
        _this.setFilteredData();
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setDates", function (startDate, endDate) {
      _this.setState({
        startDate: startDate,
        endDate: endDate
      }, function () {
        _this.setFilteredData();
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "resetLocation", function () {
      _this.setState({
        selected: {
          index: null,
          StationName: null
        },
        chart_data: null,
        selectedVariableAtLocation: null
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setVariableAtLocation", function (e) {
      console.log(e);

      _this.setState({
        selectedVariableAtLocation: e[0].variable
      }, function () {
        _this.updateChartData();
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "filterData", function () {
      var new_data = _this.state.selectedGroupNames ? _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19__.filter(function (item) {
        return item['GroupName'] == _this.state.selectedGroupNames;
      }) : _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19__;
      var filtered_data = _this.state.selectedVariables ? new_data.filter(function (item) {
        return item['variable'] == _this.state.selectedVariables;
      }) : new_data;
      var final_data = _this.state.startDate ? filtered_data.filter(function (a) {
        return new Date(a.Date) - _this.state.startDate > 0;
      }) : filtered_data;
      var ultimate_data = _this.state.endDate ? final_data.filter(function (a) {
        return new Date(a.Date) - _this.state.endDate < 0;
      }) : final_data;
      return ultimate_data;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setFilteredData", function () {
      _this.resetLocation();

      var new_data = _this.filterData();

      _this.setState({
        filtered_data: new_data
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "formatVals", function (item, objs) {
      var a = item.Date;
      var b = parseFloat(item.value);
      objs[a] = b;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "updateChartData", function () {
      console.log(_this.state.selected.GroupName);
      var chart_data_by_group = _this.state.selected.StationName ? _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19__.filter(function (item) {
        return item['StationName'] == _this.state.selected.StationName;
      }) : _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19__;

      var newVariables = _this.getUnique('variable', chart_data_by_group);

      _this.setState({
        availableVariablesAtLocation: newVariables
      }, function () {
        var new_chart_data = _this.state.selectedVariableAtLocation ? chart_data_by_group.filter(function (item) {
          return item['variable'] == _this.state.selectedVariableAtLocation;
        }) : chart_data_by_group.filter(function (item) {
          return item['variable'] == _this.state.availableVariablesAtLocation[0];
        });
        var chart_data = {};
        new_chart_data.map(function (item) {
          _this.formatVals(item, chart_data);
        });

        _this.setState({
          chart_data: chart_data
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "componentDidMount", function () {
      _this.setState({
        filtered_data: _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19__,
        GroupNames: _this.getUnique('GroupName', _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19__),
        variables: _this.getUnique('variable', _public_cmcdata_subset_json__WEBPACK_IMPORTED_MODULE_19__),
        wqp_station_data: _public_wqp_stations_json__WEBPACK_IMPORTED_MODULE_20__
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selected = this.state.selected;
      console.log(selected);
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        xs: 10,
        style: {
          position: 'fixed'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }
      }, __jsx(this.Map, {
        style: {
          height: '700px',
          width: '100%',
          zIndex: 1
        },
        data: this.state.filtered_data,
        wqpdata: this.state.wqp_station_data,
        selected: this.state.selected,
        callBack: this.changeLocation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        style: {
          zIndex: 1001,
          position: 'relative',
          height: '400px',
          opacity: 1,
          margin: '10px'
        },
        xs: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        className: "justify-content-md-center",
        style: {
          border: "solid 1px #b1b5b5",
          backgroundColor: 'white',
          borderRadius: '25px',
          padding: '20px',
          margin: '5px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        style: {
          width: '500px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 25
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 29
        }
      }, " Filter the stations on the map by group name, parameter, or date collected. ")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        style: {
          padding: '5px'
        },
        className: "justify-content-md-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 25
        }
      }, __jsx(_components_dropdowns__WEBPACK_IMPORTED_MODULE_11__["default"], {
        placeholder: "Select a local group...",
        options: this.state.GroupNames,
        label: 'GroupName',
        callBack: this.setGroupName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 29
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        style: {
          padding: '5px'
        },
        className: "justify-content-md-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 25
        }
      }, __jsx(_components_dropdowns__WEBPACK_IMPORTED_MODULE_11__["default"], {
        placeholder: "Select a parameter...",
        options: this.state.variables,
        label: 'variable',
        callBack: this.setVariable,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 29
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        style: {
          paddingtop: '10px'
        },
        className: "justify-content-md-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }
      }, __jsx(react_dates__WEBPACK_IMPORTED_MODULE_16__["DateRangePicker"], {
        startDate: this.state.startDate // momentPropTypes.momentObj or null,
        ,
        startDateId: "your_unique_start_date_id" // PropTypes.string.isRequired,
        ,
        endDate: this.state.endDate // momentPropTypes.momentObj or null,
        ,
        endDateId: "your_unique_end_date_id" // PropTypes.string.isRequired,
        ,
        onDatesChange: function onDatesChange(_ref) {
          var startDate = _ref.startDate,
              endDate = _ref.endDate;
          return _this2.setDates(startDate, endDate);
        } // PropTypes.func.isRequired,
        ,
        focusedInput: this.state.focusedInput // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        ,
        onFocusChange: function onFocusChange(focusedInput) {
          return _this2.setState({
            focusedInput: focusedInput
          });
        } // PropTypes.func.isRequired,
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 29
        }
      })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        className: "justify-content-md-center",
        style: {
          border: "solid 1px #b1b5b5",
          backgroundColor: 'white',
          borderRadius: '25px',
          padding: '10px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 18
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }
      }, selected.StationName !== null ? __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 27
        }
      }, " Selected station: ", selected.StationName, " ") : __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 27
        }
      }, " Click a station on the map and select an available parameter to see data. "), __jsx(_components_dropdowns__WEBPACK_IMPORTED_MODULE_11__["default"], {
        placeholder: "available parameters...",
        options: this.state.availableVariablesAtLocation,
        label: 'variable',
        callBack: this.setVariableAtLocation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 25
        }
      }), __jsx(_components_dataChart__WEBPACK_IMPORTED_MODULE_14__["default"], {
        data: this.state.chart_data,
        unit: this.state.selected.unit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 25
        }
      }))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f5ad5d15739de0b3f876.hot-update.js.map