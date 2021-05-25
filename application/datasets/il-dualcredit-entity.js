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
  resultType: {
    slim(results, config) {
      return results.map((x) => {
        return {
          RCDTS: x.RCDTS,
          Type: x.Type,
          School_Name: x.School_Name,
          District: x.District,
          City: x.City,
          County: x.County,
          N_Students_who_took_Dual_Credit_classes_912_Total:
            x.N_Students_who_took_Dual_Credit_classes_912_Total,
          Administrator: x.Administrator,
          Mailing_Address: x.Mailing_Address,
          Zip: x.Zip,
          Telephone: x.Telephone,
          school_website: x.school_website,
        };
      });
    },
    single(results, config) {
      return results.find((x) => x.RCDTS == config.RCDTS);
    },
  },
};
