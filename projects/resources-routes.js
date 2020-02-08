const express = require('express');

const Resource = require('./resources-model.js');
const Project = require('./projects-model.js');

const router = express.Router();


router.get('/:id/resources', validateProjectId, (req, res) => {
    const id = req.params.id;
    Resource.find(id)
        .then(resources => {
            res.json(resources);
        })
        .catch(error => {
            res.status(500).json
            ({ 
                success: false, 
                errorMessage: 'Cannot find resources', error
            });
        });
});

router.post('/:id/resources', validateProjectId, validateResource, (req, res) => {
    const resourceInfo = req.body;
    Resource.add(resourceInfo)
        .then(resourceInfo => {
            res.json(resourceInfo);
        })
})

//Middleware

function validateProjectId(req, res, next) {
    const id = req.params.id;
    Project.findById(id)
        .then(project => {
            if (project[0]) {
                console.log('id validated');
            }
        })
        .catch(error => {
            res.status(400).json
            ({ 
                success: false,
                errorMessage: 'project id is invalid', error
            });
        })
    next();
};

function validateResource(req, res, next) {
    const resourceInfo = req.body;
    const id = req.params.id;
    if (!resourceInfo.name) {
        res.status(400).json
        ({ 
            success: false,
            errorMessage: "missing required name field" 
        });
    } else if (!resourceInfo.project_id) {
        resourceInfo.project_id = id;
    }
    next();
};

module.exports = router;

