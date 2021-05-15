"use strict";

const TABLE_NAME = "IL_DualCredit_Entitys";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      RCDTS: { type: Sequelize.STRING(500) },
      Type: { type: Sequelize.STRING(500) },
      School_Name: { type: Sequelize.STRING(500) },
      District: { type: Sequelize.STRING(500) },
      City: { type: Sequelize.STRING(500) },
      County: { type: Sequelize.STRING(500) },
      School_Type: { type: Sequelize.STRING(500) },
      State_Senate_District: { type: Sequelize.STRING(500) },
      State_Representative_District: { type: Sequelize.STRING(500) },
      N_Student_Enrollment: { type: Sequelize.BIGINT },
      P_Student_Enrollment_White: { type: Sequelize.DECIMAL(3, 2) },
      N_White: { type: Sequelize.BIGINT },
      P_Student_Enrollment_B_or_AA: {
        type: Sequelize.DECIMAL(3, 2),
      },
      N_Black: { type: Sequelize.BIGINT },
      P_Student_Enrollment_H_or_L: {
        type: Sequelize.DECIMAL(3, 2),
      },
      N_Latino: { type: Sequelize.BIGINT },
      P_Student_Enrollment_Asian: { type: Sequelize.DECIMAL(3, 2) },
      N_Asian: { type: Sequelize.BIGINT },
      P_Student_Enrollment_NH_or_Other_PI: {
        type: Sequelize.DECIMAL(3, 2),
      },
      N_Native: { type: Sequelize.BIGINT },
      P_Student_Enrollment_AI_or_AN: {
        type: Sequelize.DECIMAL(3, 2),
      },
      N_American_Indian: { type: Sequelize.BIGINT },
      P_Student_Enrollment_Two_or_More_Races: {
        type: Sequelize.DECIMAL(3, 2),
      },
      N_Two_or_More: { type: Sequelize.BIGINT },
      P_Student_Enrollment_Children_with_Disabilities: {
        type: Sequelize.DECIMAL(3, 2),
      },
      N_Disabilities: { type: Sequelize.BIGINT },
      P_Student_Enrollment_EL: { type: Sequelize.DECIMAL(3, 2) },
      N_EL: { type: Sequelize.BIGINT },
      P_Student_Enrollment_IEP: { type: Sequelize.DECIMAL(3, 2) },
      N_IEP: { type: Sequelize.BIGINT },
      P_Student_Enrollment_Low_Income: { type: Sequelize.DECIMAL(3, 2) },
      N_LI: { type: Sequelize.BIGINT },
      P_Student_Enrollment_Homeless: { type: Sequelize.DECIMAL(3, 2) },
      N_Homeless: { type: Sequelize.BIGINT },
      P_Postsecondary_Institution_within_12_months:
        { type: Sequelize.DECIMAL(3, 2) },
      P_Community_College_Remediation: { type: Sequelize.DECIMAL(3, 2) },
      N_Students_who_took_Dual_Credit_classes_912_Total: {
        type: Sequelize.BIGINT,
      },
      N_Dual_Credit_Students_White: {
        type: Sequelize.BIGINT,
      },
      P_DC: { type: Sequelize.DECIMAL(3, 2) },
      P_TOTAL_White: { type: Sequelize.DECIMAL(3, 2) },
      N_Dual_Credit_Students_B_or_AA:
        { type: Sequelize.BIGINT },
      N_Dual_Credit_Students_H_or_L: {
        type: Sequelize.BIGINT,
      },
      N_Dual_Credit_Students_Asian: {
        type: Sequelize.BIGINT,
      },
      N_Dual_Credit_Students_NH_or_Other_PI:
        { type: Sequelize.BIGINT },
      N_Dual_Credit_Students_AI_or_AN:
        { type: Sequelize.BIGINT },
      N_Dual_Credit_Students_Two_or_More_Races: {
        type: Sequelize.BIGINT,
      },
      N_Dual_Credit_Students_Children_with_Disabilities:
        { type: Sequelize.BIGINT },
      N_Dual_Credit_Students_EL: {
        type: Sequelize.BIGINT,
      },
      N_Dual_Credit_Students_NonEL: {
        type: Sequelize.BIGINT,
      },
      N_Dual_Credit_Students_IEP: {
        type: Sequelize.BIGINT,
      },
      N_Dual_Credit_Students_NonIEP: {
        type: Sequelize.BIGINT,
      },
      N_Dual_Credit_Students_Low_Income: {
        type: Sequelize.BIGINT,
      },
      N_Dual_Credit_Students_NonLow_Income: {
        type: Sequelize.BIGINT,
      },
      N_Students_who_took_Dual_Credit_classes_Grade_9_Total: {
        type: Sequelize.BIGINT,
      },
      N_Students_who_took_Dual_Credit_classes_Grade_10_Total: {
        type: Sequelize.BIGINT,
      },
      N_Students_who_took_Dual_Credit_classes_Grade_11_Total: {
        type: Sequelize.BIGINT,
      },
      N_Students_who_took_Dual_Credit_classes_Grade_12_Total: {
        type: Sequelize.BIGINT,
      },
      N_of_Students_who_passed_one_or_more_AP_exam_ALL_GRADES: {
        type: Sequelize.BIGINT,
      },
      AP_pass_rate: { type: Sequelize.DECIMAL(0, 11) },
      EBF_P_of_adequacy: { type: Sequelize.DECIMAL(3, 2) },
      Administrator: { type: Sequelize.STRING(500) },
      Mailing_Address: { type: Sequelize.STRING(500) },
      City: { type: Sequelize.STRING(500) },
      Zip: { type: Sequelize.STRING(500) },
      Telephone: { type: Sequelize.STRING(500) },
      school_website: { type: Sequelize.STRING(500) },
      SAT_Reading_Total_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_White_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_White_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_White_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_White_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_White_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_White_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_White_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_White_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_B_or_AA_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_B_or_AA_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_B_or_AA_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_B_or_AA_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_B_or_AA_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_B_or_AA_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_B_or_AA_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_B_or_AA_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_H_or_L_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_H_or_L_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_H_or_L_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_H_or_L_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_H_or_L_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_H_or_L_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_H_or_L_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_H_or_L_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Asian_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Asian_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Asian_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Asian_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Asian_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Asian_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Asian_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Asian_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_NH_or_Other_PI_Students_Level_1_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Reading_Total_NH_or_Other_PI_Students_Level_2_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Reading_Total_NH_or_Other_PI_Students_Level_3_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Reading_Total_NH_or_Other_PI_Students_Level_4_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Math_Total_NH_or_Other_PI_Students_Level_1_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Math_Total_NH_or_Other_PI_Students_Level_2_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Math_Total_NH_or_Other_PI_Students_Level_3_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Math_Total_NH_or_Other_PI_Students_Level_4_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Reading_Total_AI_or_AN_Students_Level_1_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Reading_Total_AI_or_AN_Students_Level_2_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Reading_Total_AI_or_AN_Students_Level_3_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Reading_Total_AI_or_AN_Students_Level_4_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Math_Total_AI_or_AN_Students_Level_1_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Math_Total_AI_or_AN_Students_Level_2_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Math_Total_AI_or_AN_Students_Level_3_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Math_Total_AI_or_AN_Students_Level_4_P:
        { type: Sequelize.DECIMAL(3, 2) },
      SAT_Reading_Total_Two_or_More_Race_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Two_or_More_Race_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Two_or_More_Race_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Two_or_More_Race_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Two_or_More_Race_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Two_or_More_Race_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Two_or_More_Race_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Two_or_More_Race_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Low_Income_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Low_Income_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Low_Income_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Reading_Total_Low_Income_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Low_Income_Students_Level_1_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Low_Income_Students_Level_2_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Low_Income_Students_Level_3_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      SAT_Math_Total_Low_Income_Students_Level_4_P: {
        type: Sequelize.DECIMAL(3, 2),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
