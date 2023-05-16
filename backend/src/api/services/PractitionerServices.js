const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  getPractitioners: () => {
    try {
      const data = prisma.practitioners.findMany({
        orderBy: [
          {
            practitioner_id: 'asc',
          },
        ],
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  createPractitioner: (data) => {
    const {
      first_name,
      last_name,
      email,
      contact,
      dob,
      working_days,
      start_time,
      end_time,
    } = data;
    const practitioners = {
      first_name,
      last_name,
      email,
      contact,
      dob,
      working_days,
      start_time,
      end_time,
    };

    try {
      const createPractitioners = prisma.practitioners.create({
        data: practitioners,
      });
      return createPractitioners;
    } catch (err) {
      console.log(err);
    }
  },
  getPractitionersById: (id) => {
    if (id !== null) {
      try {
        const data = prisma.practitioners.findUnique({
          where: {
            practitioner_id: parseInt(id),
          },
        });
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  },

  updatePractitionerById: (id, data) => {
    try {
      // const {name,email} = data;
      const practitioners = prisma.practitioners.update({
        where: {
          practitioner_id: parseInt(id),
        },
        data,
      });
      return practitioners;
    } catch (err) {
      console.log(err);
    }
  },
  deletePractitionerById: (id) => {
    try {
      // const {name,email} = data;
      const deletePractitioners = prisma.practitioners.delete({
        where: {
          practitioner_id: parseInt(id),
        },
      });
      return deletePractitioners;
    } catch (err) {
      console.log(err);
    }
  },
};
