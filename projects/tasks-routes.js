const express = require('express');

const Task = require('./tasks-model.js');
const Project = require('./projects-model.js');

const router = express.Router();



router.get('/:id/tasks', validateProjectId, (req, res) => {
  const id = req.params.id;
  Task.find(id)
    .then(tasks => {
      tasks.map(task => {
        if (task.completed === 0) {
          task.completed = 'false';
        } else if (task.completed === 1) {
          task.completed = 'true';
        }
      })
      res.json(tasks);
    })
    .catch(error => {
      res.status(500).json
        ({ 
            success: false, 
            errorMessage: 'Failed to get tasks from Infobase', error
        });
    });
});

router.post('/:id/tasks', validateProjectId, validateTask, (req, res) => {
    const taskInfo = req.body;
    Task.add(taskInfo)
      .then(taskInfo => {
        res.json(taskInfo);
      })
  })

//Middleware

function validateProjectId(req, res, next) {
  const id = req.params.id;
  Project.findById(id)
    .then(project => {
      if (project[0]) {
        console.log('kd:tasks-routes.validateProjectId.projectFindById, valid id');
      }
    })
    .catch(error => {
      res.status(400).json
      ({ 
        success: false, 
        errorMessage: 'no project with that id found', error
        });
    })
  next();
};

function validateTask(req, res, next) {
  const taskInfo= req.body;
  if (!taskInfo.description) {
    res.status(400).json
    ({ 
        success: false, 
        errorMessage: "description required" 
    });

  } else if (!taskInfo.project_id) {
    res.status(400).json
    ({ 
        success: false, 
        errorMessage: "project id required" 
    });

  } else if (!taskInfo.completed) {
    taskInfo.completed = false;
  }
  next();
};

module.exports = router;

