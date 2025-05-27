import { Router } from "express";
import { retrieveContact, createContact } from "../data/contacts-dao.js"

const router = Router();

// Contacts API
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const contact = await retrieveContact(id);
    return res.json(contact);
});


router.post('/', async (req, res) => {
    // no validation so a crash may occur
    const contactWithID = await createContact(req.body);
    return res.status(201).json(contactWithID);
});

export default router;


/* Notes
As database is slow, put async inside the fucnction and await for calling the database function

*/