module.exports = {
  type: 'object',
  properties: {
    first_name: {
      type: 'string',
      description: 'First name of practitioner',
    },
    last_name: {
      type: 'string',
      description: 'Last name of practitioner',
    },
    email: {
      type: 'string',
      description: 'Email address of practitioner',
    },
    contact: {
      type: 'string',
      description: 'Contact number of practitioner',
    },
    dob: {
      type: 'string',
      description: 'DOB of practitioner',
    },
    image: {
      type: 'string',
      format: 'binary',
      description: 'Image of practitioner',
    },
    start_time: {
      type: 'string',
      description: 'Working start time of practitioner',
    },
    end_time: {
      type: 'string',
      description: 'Working end time of practitioner',
    },
    working_days: {
      type: 'array',
      $ref: '#/components/schemas/WorkingDays',
    },
    allergies: {
      type: 'array',
      items: {
        type: 'integer',
        description: 'ID of allergy',
      },
    },
    is_ICU_Specialist: {
      type: 'boolean',
      description: 'True or False',
    },
  },
  required: [
    'first_name',
    'last_name',
    'email',
    'contact',
    'dob',
    'start_time',
    'end_time',
    'working_days',
  ],
};
