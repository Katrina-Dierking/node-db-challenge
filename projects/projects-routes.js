const express = require('express');

const Project = require('./projects-model.js');

const router = express.Router();


router.get('/', (req, res) => {
  Project.find()
    .then(projects => {
      projects.map(project => {
        if (project.completed === 0) {
          project.completed = 'false';
        } else if (project.completed === 1) {
          project.completed = 'true';
        }
      })
      res.json(projects);
    })
    .catch(error => {
      res.status(500).json
        ({ 
            success:false,
            errorMessage: 'Failed to get projects', error
        });
    });
});

router.get('/:id', validateProjectId, (req, res) => {
  const id  = req.params.id;
  Project.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      }
    })
    .catch(error => {
      res.status(500).json
        ({ 
            success: false, 
            errorMessage: 'Could not get project', error
        });
    });
});

router.post('/', validateProject, (req, res) => {
    const project = req.body;
    Project.add(project)
      .then(project => {
        res.json(project);
      })
  })

//Middleware

function validateProjectId(req, res, next) {
  const id = req.params.id;
  Project.findById(id)
    .then(project => {
      if (project[0]) {
        console.log('kd:project_routes, validateProjectId, findById');
      }
    })
    .catch(error => {
      res.status(400).json
         ({ 
             success:false,
            errorMessage: 'cannot locate project with that Id', error 
        });
    })
  next();
};

function validateProject(req, res, next) {
  const projectInfo = req.body;
  if (!projectInfo.name) {
    res.status(400).json
        ({ 
            success: false, 
            errorMessage: "name of project is required" 
        });
  } else if (!projectInfo.completed) {
    projectInfo.completed = false;
  }
  next();
};

module.exports = router;

