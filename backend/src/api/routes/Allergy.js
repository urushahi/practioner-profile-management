const express = require('express');
const router = express.Router();
const AllergyController = require('./../controllers/AllergyController');

/**
 * @swagger
 * '/allergies':
 *   get:
 *     summary: API to retreive allergy list
 *     description: API to retreive allergy list
 *     tags:
 *       - Allergy
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
 *                      $ref: '#/components/schemas/Allergy'
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data:
 *                 - id: 1
 *                   allergy: Allergy Name 1
 *                 - id: 2
 *                   allergy: Allergy Name 2
 *
 *       '500':
 *         description: Internal Server error
 */

router.get('/', AllergyController.getAllergies);

/**
 * @swagger
 * '/allergies':
 *   post:
 *     summary: API to create new allergy
 *     description: API to create new allergy
 *     tags:
 *       - Allergy
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  allergy:
 *                    type: string
 *                    description: Allergy Name
 *               required:
 *                    - allergy
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
 *                   type: Object
 *                   $ref: '#/components/schemas/Allergy'
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data:
 *                 id: 1
 *                 allergy: Allergy Name
 *       '500':
 *         description: Internal Server error
 */

router.post('/', AllergyController.createAllergy);

/**
 * @swagger
 * '/allergies/{id}':
 *   get:
 *     summary: API to retreive allergy by particular id
 *     description: API to retreive allergy by particular id
 *     tags:
 *       - Allergy
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the allergy
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
 *                   $ref: '#/components/schemas/Allergy'
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data:
 *                 id: 1
 *                 allergy: Allergy Name
 *       '500':
 *         description: Internal Server error
 */

router.get('/:id', AllergyController.getAllergyById);

/**
 * @swagger
 * '/allergies/{id}':
 *   put:
 *     summary: API to update allergy by particular id
 *     description: API to update allergy by particular id
 *     tags:
 *       - Allergy
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the allergy
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  allergy:
 *                    type: string
 *                    description: Allergy Name
 *               required:
 *                    - allergy
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
 *                   $ref: '#/components/schemas/Allergy'
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data:
 *                 id: 1
 *                 allergy: Allergy Name
 *       '500':
 *         description: Internal Server error
 */

router.put('/:id', AllergyController.updateAllergyById);

/**
 * @swagger
 * '/allergies/{id}':
 *   delete:
 *     summary: API to delete allergy by particular id
 *     description: API to delete allergy by particular id
 *     tags:
 *       - Allergy
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the allergy
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
 *                   $ref: '#/components/schemas/Allergy'
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data: Success
 *       '500':
 *         description: Internal Server error
 */

router.delete('/:id', AllergyController.deleteAllergyById);

module.exports = router;
