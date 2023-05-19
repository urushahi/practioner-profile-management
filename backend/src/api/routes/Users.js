const express = require('express');

const router = express.Router();
const controller = require('../controllers/UserControlller');

//signup
/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: API to signup
 *     description: API to signup
 *     tags:
 *       - User
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserRequest'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 code:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/User'
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data:
 *                 example: Additional data
 *       '500':
 *         description: Internal Server error
 */
router.post('/signup', controller.signUp);

//login

/**
 * @swagger
 * /users/signin:
 *   post:
 *     summary: API to sigin
 *     description: API to signin
 *     tags:
 *       - User
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 code:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/AuthenticationResponse'
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data:
 *                 example: Additional data
 *       '500':
 *         description: Internal Server error
 */
router.post('/signin', controller.signIn);

module.exports = router;
