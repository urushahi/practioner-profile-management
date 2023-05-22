const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  getPractitioners: () => {
    try {
      const data = prisma.practitioner.findMany({
        orderBy: [
          {
            is_ICU_Specialist: 'desc',
          },
          {
            first_name: 'asc',
          },
        ],
        include: {
          working_days: true,
          allergies: {
            include: {
              allergy: true,
            },
          },
        },
      });
      return data;
    } catch (err) {
      throw new Error('Error retrieving practitioners');
    }
  },

  createPractitioner: async (data) => {
    const { working_days, allergies, ...payload } = data;
    const { originalname, buffer } = data.file;
    try {
      const practitioner = await prisma.practitioner.findUnique({
        where: {
          email: payload.email,
        },
      });

      if (practitioner) {
        throw new Error('Email already exists');
      }

      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload_stream(
        {
          folder: 'test', // Optional: specify a folder in Cloudinary
          public_id: originalname, // Optional: use the original filename as the public ID
        },
        async (error, result) => {
          if (error) {
            console.log('Upload to Cloudinary failed:', error);
            throw error;
          }

          // Save image details to the database
          // const image = await prisma.image.create({
          //   data: {
          //     filename: originalname,
          //     url: result.secure_url,
          //   },
          // });
          const createPractitioners = await prisma.practitioner.create({
            data: {
              // filename: originalname,
              image: result.secure_url,
              ...payload,
            },
            include: {
              working_days: true,
              allergies: true,
            },
          });

          return createPractitioners;
        }
      );

      // const createPractitioners = await prisma.practitioner.create({
      //   data: payload,
      //   include: {
      //     working_days: true,
      //     allergies: true,
      //   },
      // });
      await prisma.workingDay.createMany({
        data: working_days.map((day) => ({
          day,
          practitioner_id: createPractitioners.id,
        })),
      });

      // data: [{allergy_id: 1, practitioner_id: 1}, {allerg_id: 2, practitioner_id 2}]
      if (allergies && allergies.length > 0) {
        await prisma.practitionerAllergy.createMany({
          data: allergies.map((allergy) => ({
            allergy_id: allergy,
            practitioner_id: createPractitioners.id,
          })),
        });
      }
      // return createPractitioners;
      return result;
    } catch (err) {
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
            allergies: {
              include: {
                allergy: true,
              },
            },
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

      const { working_days, allergies, ...payload } = data;

      const updatedPractitioner = await prisma.practitioner.update({
        where: {
          id,
        },
        data: {
          working_days: {
            deleteMany: {},
            create: working_days.map((day) => ({ day })),
          },
          allergies: {
            deleteMany: {},
            create: allergies.map((allergy) => ({ allergy_id: allergy })),
          },
          ...payload,
        },
        include: {
          working_days: true,
          allergies: true,
        },
      });

      return updatedPractitioner;
    } catch (err) {
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
      const deleteAllergy = prisma.practitionerAllergy.deleteMany({
        where: {
          practitioner_id: id,
        },
      });
      const deletePractitioners = prisma.practitioner.deleteMany({
        where: {
          id,
        },
      });
      await prisma.$transaction([
        deleteWorkingDay,
        deleteAllergy,
        deletePractitioners,
      ]);
      return true;
    } catch (err) {
      throw err;
    }
  },
};
