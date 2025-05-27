import { Router } from "express";
import { retrieveContact, createContact, retrieveContacts } from "../data/contacts-dao.js"

const router = Router();

// Contacts API
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const contact = await retrieveContact(id);
    return res.json(contact);
});

// Retrieve all contacts
router.get("/", async (req, res) => {
    const contacts = await retrieveContacts();
    return res.json(contacts);
});

// Delete a contact based on its ID
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    deleteContact(id);
    return res.sendStatus(201).send(`Contact {id} successfully deleted`);
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