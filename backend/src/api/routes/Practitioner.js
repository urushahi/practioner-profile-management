const express = require('express');

const router = express.Router();
const controller = require('../controllers/PractitionerController');
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');

// create practitioner
/**
 * @swagger
 * '/practitioners':
 *   post:
 *     summary: API to create practitioners list
 *     description: API to create practitioners list
 *     tags:
 *       - Practitioners
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/CreatePractitionerRequests'
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
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/Practitioner'
 *       '500':
 *         description: Internal Server error
 */
router.post('/', uploadImageMiddleware, controller.createPractitioner);

// get all practitioners
/**
 * @swagger
 * '/practitioners':
 *   get:
 *     summary: API to retreive practitioners list
 *     description: API to retreive practitioners list
 *     tags:
 *       - Practitioners
 *     security:
 *       - bearerAuth: []
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
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: '#/components/schemas/Practitioner'
 *
 *       '500':
 *         description: Internal Server error
 */
router.get('/', controller.getPractitioners);

// get user by id

/**
 * @swagger
 * '/practitioners/{$id}':
 *   get:
 *     summary: API to retreive practitioners list by id
 *     description: API to retreive practitioners list by id
 *     tags:
 *       - Practitioners
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the practitioner
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
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/Practitioner'
 *
 *       '500':
 *         description: Internal Server error
 */
router.get('/:id', controller.getPractitionerById);

// update user by id

/**
 * @swagger
 * '/practitioners/{$id}':
 *   put:
 *     summary: API to update practitioners list by id
 *     description: API to update practitioners list by id
 *     tags:
 *       - Practitioners
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the practitioner
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePractitionerRequests'
 *
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
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/Practitioner'
 *
 *       '500':
 *         description: Internal Server error
 */

router.put('/:id', controller.updatePractitionerById);

// delete a user

/**
 * @swagger
 * '/practitioners/{$id}':
 *   delete:
 *     summary: API to delete practitioners by id
 *     description: API to delete practitioners by id
 *     tags:
 *       - Practitioners
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the practitioner
 *
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
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data: Success
 *
 *       '500':
 *         description: Internal Server error
 */
router.delete('/:id', controller.deletePractitionerById);

module.exports = router;
