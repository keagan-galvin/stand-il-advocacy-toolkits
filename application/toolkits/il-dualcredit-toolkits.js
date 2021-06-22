module.exports = {
  name: "IL Dual Credit Toolkits",
  key: "il-dualcredit-toolkit",
  model: "DualCreditToolkit",
  toEntity(data) {
    let escapedAllies = [];
    if (Array.isArray(data.allies)) {
      for (let i = 0; i < data.allies.length; i++) {
        escapedAllies.push(`${data.allies[i].type} - ${data.allies[i].name}`);
      }
    }
    data.allies = escapedAllies.join("|");
    return data;
  },
  toDto(data) {
    let allies = [];
    if (data.allies.length > 0) {
      let temp = data.allies.split("|");

      for (let i = 0; i < temp.length; i++) {
        let parts = temp[i].split(" - ");
        allies.push({
          type: parts[0],
          name: parts[1],
        });
      }
    }
    data.allies = allies;

    return data;
  },
};
