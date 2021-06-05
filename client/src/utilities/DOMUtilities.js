export function transitionDuration(target, mode = "ms") {
  let styles = window.getComputedStyle(target);
  let delay =
    durationInMS(styles.getPropertyValue("transition-duration")) +
    durationInMS(styles.getPropertyValue("transition-delay"));

  return mode == "ms" ? delay : delay / 1000;

  function durationInMS(duration) {
    var ms = 0;
    duration = duration.split(",")[0];
    if (duration.endsWith("ms") || !duration.endsWith("s")) {
      duration = duration.replace("ms", "");
      ms = +duration;
    }

    if (duration.endsWith("s")) {
      duration = duration.replace("s", "");
      ms = +duration * 1000;
    }

    return ms;
  }
}

export function getHighestZIndex(selector) {
  if (!selector) selector = "*";
  var elements = Array.from(document.querySelectorAll(selector));

  var highest = 0;
  for (var i = 0; i < elements.length; i++) {
    var zIndex = document.defaultView
      .getComputedStyle(elements[i], null)
      .getPropertyValue("z-index");
    if (zIndex != "auto" && Number(zIndex) > highest) {
      highest = Number(zIndex);
    }
  }
  return highest;
}

/**
 * Search the starting element and its parentNode tree. The first qualifying element is returned, if none are found 'null'.
 * ```
 * // Create Sample DOM elements
 * var el = document.CreateElement('div');
 * el.setAttribute('target-attribute', 'some value');
 * el.insertAdjacentHTML('beforeend', '<button class="btn btn-danger"></button>');
 * var btn = el.querySelector('button');
 * // Run Samples
 * SeekElementInBranch(btn, 'hasClass', 'btn-danger'); //btn
 * SeekElementInBranch(btn, 'hasClass', 'btn-primary'); //null
 * SeekElementInBranch(btn, 'hasAttribute', 'target-attribute'); //el
 * SeekElementInBranch(btn, 'hasAttribute', 'missing-attribute'); //null
 * ```
 */
export function SeekElementInBranch(
  startingElement,
  searchMethod,
  searchTerm,
  dataSetValue
) {
  let target = startingElement;

  switch (searchMethod) {
    case "hasId": {
      while (target) {
        if (target.id == searchTerm) break;
        target = target.parentElement;
      }
      break;
    }
    case "hasClass": {
      while (target) {
        if (target.classList && target.classList.contains(searchTerm)) break;
        target = target.parentElement;
      }
      break;
    }
    case "hasAttribute": {
      while (target) {
        if (target.hasAttribute && target.hasAttribute(searchTerm)) break;
        target = target.parentElement;
      }
      break;
    }
    case "hasNodeName": {
      while (target) {
        if (target.nodeName && target.nodeName == searchTerm.toUpperCase())
          break;
        target = target.parentElement;
      }
      break;
    }
    case "hasDataSet": {
      while (target) {
        if (target.dataset && target.dataset[searchTerm]) break;
        target = target.parentElement;
      }
      break;
    }
    case "hasDataSetValue": {
      while (target) {
        if (target.dataset && target.dataset[searchTerm]) {
          if (target.dataset[searchTerm] == dataSetValue) break;
          if (!dataSetValue) break;
        }
        target = target.parentElement;
      }
      break;
    }
    default:
      throw "Invalid searchMethod";
  }

  return target ? target : null;
}

export const Colors = {
  rgb: RGB,

  /**
   * Get an RGB colors brightness using the calculation ([Source](https://www.w3.org/TR/AERT/#color-contrast)):
   * ```
   * ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
   * ```
   */
  brightness: Brightness,

  /**
   * Create a RGB Object from a 3/6 digit hex string
   */
  hexToRgb: HexToRgb,

  rgbFromString: RGBFromString,
};

function Brightness(rgb) {
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

/**
 * Create a RGB Object from a 3/6 digit hex string
 */
function HexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? new RGB(
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      )
    : null;
}

/**
 * Create a RGB Object from a 3/6 digit hex or rbg/rgba string
 */
function RGBFromString(color) {
  color = color.toLowerCase();
  if (color.startsWith("#")) return HexToRgb(color);
  if (color.startsWith("rgb")) {
    color = color.replace("rgb", "");
    color = color.replace("a", "");
    color = color.replace("(", "");
    color = color.replace(")", "");
    color = color.replace(" ", "");
    let colorParts = color.split(",").map((x) => Number(x));
    return RGB(colorParts[0], colorParts[1], colorParts[2]);
  }

  return null;
}

function RGB(r, b, g) {
  let rgb = {
    r,
    b,
    g,
    /**
     * Minimum brightness value for light colors
     */
    get brightnessThreshold() {
      return 170;
    },

    /**
     * Get the rgb value's brightness
     */
    get brightness() {
      return Brightness(this);
    },

    /**
     * Check if the rgb value is a dark color
     */
    get isDark() {
      return this.brightness <= this.brightnessThreshold;
    },

    /**
     * Check if the rgb value is a light color
     */
    get isLight() {
      return this.brightness > this.brightnessThreshold;
    },
  };

  return rgb;
}
