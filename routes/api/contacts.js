const express = require('express')

const router = express.Router();
const isValidId  = require("../../middelware/isValidId");

const {
  getContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers/contacts");


router.get('/', getContacts);

router.get('/:contactId', isValidId, getContactById);

router.post('/', addContact);

router.delete('/:contactId', isValidId, deleteContact);

router.put('/:contactId', isValidId,  updateContact);
// викор метод PATCH у випалку, коли знаємо яке саме поле буде оновлено
router.patch('/:contactId/favorite', isValidId,  updateStatusContact)

module.exports = router
