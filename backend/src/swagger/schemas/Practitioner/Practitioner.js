module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'Primary key',
      example: 1,
    },
    first_name: {
      type: 'string',
      description: 'First name of practitioner',
      example: 'John',
    },
    last_name: {
      type: 'string',
      description: 'Last name of practitioner',
      example: 'Doe',
    },
    email: {
      type: 'string',
      description: 'Email address of practitioner',
      example: 'john@gmail.com',
    },
    contact: {
      type: 'string',
      description: 'Contact number of practitioner',
      example: '9849123456',
    },
    dob: {
      type: 'string',
      description: 'DOB of practitioner',
      example: '2000-01-01',
    },
    start_time: {
      type: 'string',
      description: 'Working start time of practitioner',
      example: '09:00',
    },
    end_time: {
      type: 'string',
      description: 'Working end time of practitioner',
      example: '06:00',
    },
    working_days: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'Primary Key',
            example: 1,
          },
          day: {
            type: 'integer',
            description: 'Representative number of days starting from 1',
            example: 1,
          },
          practitioner_id: {
            type: 'integer',
            description: 'Id of the practioner',
            example: 1,
          },
        },
      },
    },
    allergies: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'Primary Key',
            example: 1,
          },
          allergy_id: {
            type: 'integer',
            description: 'Id of allergy',
            example: 1,
          },
          practitioner_id: {
            type: 'integer',
            description: 'Id of the practioner',
            example: 1,
          },
        },
      },
    },
    is_ICU_Specialist: {
      type: 'boolean',
      description: 'True or False',
    },
  },
};
