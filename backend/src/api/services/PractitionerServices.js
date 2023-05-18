const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const moment = require('moment');

module.exports = {
  getPractitioners: () => {
    try {
      const data = prisma.practitioner.findMany({
        orderBy: [
          {
            id: 'asc',
          },
        ],
        include: {
          working_days: true,
        },
      });
      return data;
    } catch (err) {
      throw new Error('Error retrieving practitioners');
    }
  },

  createPractitioner: async (data) => {
    const {
      first_name,
      last_name,
      email,
      contact,
      dob,
      start_time,
      end_time,
      working_days,
      is_ICU_Specialist,
    } = data;
    console.log(data);
    const practitioners = {
      first_name,
      last_name,
      email,
      contact,
      dob,
      start_time,
      end_time,
      is_ICU_Specialist,
    };

    try {
      const practitioner = await prisma.practitioner.findUnique({
        where: {
          email,
        },
      });

      if (practitioner) {
        throw new Error('Email already exists');
      }
      const createPractitioners = await prisma.practitioner.create({
        data: practitioners,
        include: {
          working_days: true,
        },
      });
      await prisma.workingDay.createMany({
        data: working_days.map((day) => ({
          day,
          practitioner_id: createPractitioners.id,
        })),
      });
      return createPractitioners;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  getPractitionersById: async (id) => {
    if (id !== null) {
      try {
        const data = await prisma.practitioner.findUnique({
          where: {
            id: parseInt(id),
          },
          include: {
            working_days: true,
          },
        });
        if (!data) {
          throw new Error('Practitioner not found');
        }
        return data;
      } catch (err) {
        throw err;
      }
    } else {
      throw new Error('Missing ID');
    }
  },

  updatePractitionerById: async (id, data) => {
    try {
      const findPractitioner = await module.exports.getPractitionersById(id); // Call getPractitionersById function
      if (!findPractitioner) {
        throw new Error('Practitioner not found');
      }

      const { working_days, ...payload } = data;

      const updatedPractitioner = await prisma.practitioner.update({
        where: {
          id,
        },
        data: {
          working_days: {
            deleteMany: {},
            create: working_days.map((day) => ({ day })),
          },
          ...payload,
        },
        include: {
          working_days: true,
        },
      });

      return updatedPractitioner;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  deletePractitionerById: async (id) => {
    try {
      const findPractitioner = await module.exports.getPractitionersById(id); // Call getPractitionersById function
      if (!findPractitioner) {
        throw new Error('Practitioner not found'); // Throw an error with a specific message
      }

      const deleteWorkingDay = prisma.workingDay.deleteMany({
        where: {
          practitioner_id: id,
        },
      });
      const deletePractitioners = prisma.practitioner.deleteMany({
        where: {
          id,
        },
      });
      await prisma.$transaction([deleteWorkingDay, deletePractitioners]);
      return true;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
