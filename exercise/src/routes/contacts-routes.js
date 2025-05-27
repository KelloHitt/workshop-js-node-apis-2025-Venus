import { Router } from "express";
import { retrieveContact, createContact, retrieveContacts, updateContact } from "../data/contacts-dao.js"

const router = Router();

// Contacts API

// Retrieve a contact based on its ID
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

// Updating a contact based on its id
router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const contact = await retrieveContact(id);
    const result = await updateContact(id, contact);
    return res.json(result);
})

// Create a contact based on what is sent in the body from client
router.post('/', async (req, res) => {
    // no validation so a crash may occur
    const contactWithID = await createContact(req.body);
    return res.status(201).json(contactWithID);
});

export default router;


/* Notes
As database is slow, put async inside the fucnction and await for calling the database function

*/