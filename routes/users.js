import express from 'express'
import {
    createUser
} from '../Controllers/users.js'

const router = express.Router();

router.post('/',createUser);

export default router;