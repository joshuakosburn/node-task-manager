const express = require('express');

const router = express.Router();

router
.get('/', (req, res) => {
    res.json({ message: "hi" });
})
.post('/', (req, res) => {
    res.json(
        {
            message: "Task created"
        }
    );
});

router
.get('/:id', (req, res) => {
    res.json(
        {
            message: "Task requested",
            id: req.params.id
        }
    );
})
.patch('/:id', (req, res) => {
    res.json(
        {
            id: req.params.id,
            message: "Task updated"
        }
    );
})
.delete('/:id', (req, res) => {
    res.json(
        {
            id: req.params.id,
            message: "Task deleted"
        }
    );
});

module.exports = router;