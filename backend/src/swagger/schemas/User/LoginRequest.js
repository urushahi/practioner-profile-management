module.exports = {
    type: "object",
    properties: {
        email: {
            type: "string",
            description: "Email of the user"
        },
        password: {
            type: "string",
            description: "Password of the user"
        },
    },
    required: ["email", "password"]
}