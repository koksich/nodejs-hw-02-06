const express = require('express')

const router = express.Router();

const {getContacts, getContactById, addContact, deleteContact, updateContact,  updateStatusContact} = require('../../controllers/contacts')

router.get('/', getContacts);

router.get('/:contactId', getContactById);

router.post('/', addContact);

router.delete('/:contactId', deleteContact);

router.put('/:contactId', updateContact);

// router.patch('/:contactId/favorite', updateStatusContact)

module.exports = router
