module.exports = {
  name: "IL Dual Credit Entities",
  key: "il-dualcredit-entity",
  model: "IL_DualCredit_Entity",
  skipOnError: true,
  transform(data) {
    if (data.School === "0") data.School === null;
    if (data.Type === "0") data.Type === null;
    if (data.School_Name === "0") data.School_Name = null;
    if (data.City === "0") data.City = null;
    if (data.County === "0") data.County = null;
    if (data.School_Type === "0") data;
    if (data.Administrator === "0") data.Administrator = null;
    if (data.Mailing_Address === "0") data.Mailing_Address = null;
    if (data.Zip === "0") data.Zip = null;
    if (data.Telephone === "0") data.Telephone = null;
    if (data.school_website === "0") data.school_website = null;

    for (let key in data) {
      if (data[key] === "") data[key] = null;
    }

    return data;
  },
  validate(data) {
    let result = {
      valid: true,
      errors: [],
    };

    if (!data.RCDTS || data.RCDTS == "") {
      result.valid = false;
      result.errors.push("RCDTS is required.");
    }

    return result;
  },
};
