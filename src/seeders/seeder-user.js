"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456",
        firstName: "khang",
        lastName: "vo",
        address: "VN",
        gender: 1,
        // typeRole: "ROLE",
        // keyRole: "R1",
        roleId: "R1",
        phoneNumber: "123456789",
        positionId: "123",
        image: "http://123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
