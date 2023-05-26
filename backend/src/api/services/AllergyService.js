const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  getAllergies: async () => {
    try {
      const data = await prisma.allergy.findMany({
        orderBy: [
          {
            allergy: 'asc',
          },
        ],
      });
      return data;
    } catch (err) {
      throw new Error('Error retreiving allergy list');
    }
  },

  createAllergy: async (payload) => {
    try {
      const allergy = await prisma.allergy.create({ data: payload });
      return allergy;
    } catch (error) {
      throw new Error('Error in creating allergy');
    }
  },

  getAllergyById: async (allergyId) => {
    try {
      const allergy = await prisma.allergy.findUnique({
        where: {
          id: parseInt(allergyId),
        },
      });
      if (!allergy) {
        throw new Error('Data not found');
      }
      return allergy;
    } catch (error) {
      throw error;
    }
  },

  updateAllergyById: async (allergyId, payload) => {
    try {
      const allergy = await prisma.allergy.findUnique({
        where: {
          id: parseInt(allergyId),
        },
      });
      if (!allergy) {
        throw new Error('Data not found');
      }
      const updatedAllergy = await prisma.allergy.update({
        where: {
          id: parseInt(allergyId),
        },
        data: payload,
      });
      return updatedAllergy;
    } catch (error) {
      throw error;
    }
  },

  deleteAllergyByID: async (allergyId) => {
    try {
      const allergy = await prisma.allergy.findUnique({
        where: {
          id: parseInt(allergyId),
        },
      });
      if (!allergy) {
        throw new Error('Data not found');
      }
      await prisma.practitionerAllergy.deleteMany({
        where: {
          allergy_id: allergyId,
        },
      });

      await prisma.allergy.delete({
        where: {
          id: parseInt(allergyId),
        },
      });
      return true;
    } catch (error) {
      throw error;
    }
  },
};
