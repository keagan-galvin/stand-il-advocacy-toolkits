"use strict";

const TABLE_NAME = "IL_DualCredit_Entities";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      RCDTS: { type: Sequelize.STRING(500), primaryKey: true },
      Type: { type: Sequelize.STRING(500) },
      School_Name: { type: Sequelize.STRING(500) },
      District: { type: Sequelize.STRING(500) },
      City: { type: Sequelize.STRING(500) },
      County: { type: Sequelize.STRING(500) },
      School_Type: { type: Sequelize.STRING(500) },
      State_Senate_District: { type: Sequelize.STRING(500) },
      State_Representative_District: { type: Sequelize.STRING(500) },
      N_Student_Enrollment: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_White: { type: Sequelize.STRING(20) },
      N_White: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_B_or_AA: {
        type: Sequelize.STRING(20),
      },
      N_Black: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_H_or_L: {
        type: Sequelize.STRING(20),
      },
      N_Latino: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_Asian: { type: Sequelize.STRING(20) },
      N_Asian: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_NH_or_Other_PI: {
        type: Sequelize.STRING(20),
      },
      N_Native: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_AI_or_AN: {
        type: Sequelize.STRING(20),
      },
      N_American_Indian: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_Two_or_More_Races: {
        type: Sequelize.STRING(20),
      },
      N_Two_or_More: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_Children_with_Disabilities: {
        type: Sequelize.STRING(20),
      },
      N_Disabilities: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_EL: { type: Sequelize.STRING(20) },
      N_EL: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_IEP: { type: Sequelize.STRING(20) },
      N_IEP: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_Low_Income: { type: Sequelize.STRING(20) },
      N_LI: { type: Sequelize.STRING(20) },
      P_Student_Enrollment_Homeless: { type: Sequelize.STRING(20) },
      N_Homeless: { type: Sequelize.STRING(20) },
      P_Postsecondary_Institution_within_12_months: {
        type: Sequelize.STRING(20),
      },
      P_Community_College_Remediation: { type: Sequelize.STRING(20) },
      N_Students_who_took_Dual_Credit_classes_912_Total: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_White: {
        type: Sequelize.STRING(20),
      },
      P_DC: { type: Sequelize.STRING(20) },
      P_TOTAL_White: { type: Sequelize.STRING(20) },
      N_Dual_Credit_Students_B_or_AA: { type: Sequelize.STRING(20) },
      N_Dual_Credit_Students_H_or_L: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_Asian: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_NH_or_Other_PI: { type: Sequelize.STRING(20) },
      N_Dual_Credit_Students_AI_or_AN: { type: Sequelize.STRING(20) },
      N_Dual_Credit_Students_Two_or_More_Races: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_Children_with_Disabilities: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_EL: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_NonEL: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_IEP: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_NonIEP: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_Low_Income: {
        type: Sequelize.STRING(20),
      },
      N_Dual_Credit_Students_NonLow_Income: {
        type: Sequelize.STRING(20),
      },
      N_Students_who_took_Dual_Credit_classes_Grade_9_Total: {
        type: Sequelize.STRING(20),
      },
      N_Students_who_took_Dual_Credit_classes_Grade_10_Total: {
        type: Sequelize.STRING(20),
      },
      N_Students_who_took_Dual_Credit_classes_Grade_11_Total: {
        type: Sequelize.STRING(20),
      },
      N_Students_who_took_Dual_Credit_classes_Grade_12_Total: {
        type: Sequelize.STRING(20),
      },
      N_of_Students_who_passed_one_or_more_AP_exam_ALL_GRADES: {
        type: Sequelize.STRING(20),
      },
      AP_pass_rate: { type: Sequelize.STRING(20) },
      EBF_P_of_adequacy: { type: Sequelize.STRING(20) },
      Administrator: { type: Sequelize.STRING(500) },
      Mailing_Address: { type: Sequelize.STRING(500) },
      City: { type: Sequelize.STRING(500) },
      Zip: { type: Sequelize.STRING(500) },
      Telephone: { type: Sequelize.STRING(500) },
      school_website: { type: Sequelize.STRING(500) },
      SAT_Reading_Total_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_White_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_White_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_White_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_White_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_White_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_White_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_White_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_White_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_B_or_AA_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_B_or_AA_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_B_or_AA_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_B_or_AA_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_B_or_AA_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_B_or_AA_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_B_or_AA_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_B_or_AA_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_H_or_L_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_H_or_L_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_H_or_L_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_H_or_L_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_H_or_L_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_H_or_L_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_H_or_L_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_H_or_L_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Asian_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Asian_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Asian_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Asian_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Asian_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Asian_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Asian_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Asian_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_NH_or_Other_PI_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_NH_or_Other_PI_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_NH_or_Other_PI_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_NH_or_Other_PI_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_NH_or_Other_PI_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_NH_or_Other_PI_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_NH_or_Other_PI_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_NH_or_Other_PI_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_AI_or_AN_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_AI_or_AN_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_AI_or_AN_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_AI_or_AN_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_AI_or_AN_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_AI_or_AN_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_AI_or_AN_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_AI_or_AN_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Two_or_More_Race_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Two_or_More_Race_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Two_or_More_Race_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Two_or_More_Race_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Two_or_More_Race_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Two_or_More_Race_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Two_or_More_Race_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Two_or_More_Race_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Low_Income_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Low_Income_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Low_Income_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Reading_Total_Low_Income_Students_Level_4_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Low_Income_Students_Level_1_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Low_Income_Students_Level_2_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Low_Income_Students_Level_3_P: {
        type: Sequelize.STRING(20),
      },
      SAT_Math_Total_Low_Income_Students_Level_4_P: {
        type: Sequelize.STRING(20),
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
