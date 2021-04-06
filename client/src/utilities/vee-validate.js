import Vue from "vue";
import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from "vee-validate";

import * as rules from "vee-validate/dist/rules";

for (var key in rules) extend(key, rules[key]);

extend("url", (value) => {
  var urlRegex =
    "^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$";
  var url = new RegExp(urlRegex, "i");
  return value.length < 2083 && url.test(value);
});

extend("phone", {
  message: "Must be a valid phone",
  validate(value) {
    var pattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    return pattern.test(value);
  },
});

extend("zip", {
  message: "Must be a valid zip code",
  validate(value) {
    var pattern = /^\d{5}(?:[-\s]\d{4})?$/;
    return pattern.test(value);
  },
});

extend("fileRequired", {
  message: "{_field_} is required",
  validate(value) {
    return value.length > 0;
  },
});

localize("en", {
  code: "en",
  messages: {
    alpha: "Must contain only alphabetic characters",
    alpha_num: "Must contain only alpha-numeric characters",
    alpha_dash:
      "Must contain alpha-numeric characters as well as dashes and underscores",
    alpha_spaces: "Must contain only alphabetic characters as well as spaces",
    between: "Must be between {min} and {max}",
    confirmed: "The field confirmation does not match",
    digits: "Must be numeric and exactly contain {length} digits",
    dimensions: "Must be {width} pixels by {height} pixels",
    email: "Must be a valid email",
    excluded: "Invalid value",
    ext: "Invalid file",
    image: "Must be an image",
    integer: "Must be an integer",
    length: "Must be {length} long",
    max_value: "Must be {max} or less",
    max: "Cannot be greater than {length} characters",
    mimes: "Must have a valid file type",
    min_value: "Must be {min} or more",
    min: "Must be at least {length} characters",
    numeric: "Must contain only numeric characters",
    oneOf: "Invalid value",
    regex: "Invalid format",
    required_if: "The field is required",
    required: "The field is required",
    size: "Size must be less than {size}KB",
  },
});

let LOCALE = "en";

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, "locale", {
  get() {
    return LOCALE;
  },
  set(val) {
    LOCALE = val;
    localize(val);
  },
});

// Register the component globally.
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
