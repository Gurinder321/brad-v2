const express = require('express');
const router = express.Router();
const { getGoals, createGoals, updatedGoal, deleteGoal } = require('../controllers/goalController');

const app = express();

router.route('/').get(getGoals).post(createGoals);
router.route('/:id').put(updatedGoal).delete(deleteGoal);

module.exports = router;
