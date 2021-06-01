export default {
  inserted(el, binding) {
    let directions = binding.value.split(" ");

    for (let i = 0; i < directions.length; i++) setOffset(directions[i]);

    function setOffset(direction) {
      let xOffset = -el.offsetWidth / 16;
      let yOffset = -el.offsetHeight / 16;

      switch (direction) {
        case "left": {
          el.style.marginLeft = `${xOffset}rem`;
          break;
        }
        case "right": {
          el.style.marginRight = `${xOffset}rem`;
          break;
        }
        case "top": {
          el.style.marginTop = `${yOffset}rem`;
          break;
        }
        case "bottom": {
          el.style.marginBottom = `${yOffset}rem`;
          break;
        }
      }
    }
  },
};
