const Skills = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}


function index(req, res) {
    res.render('../views/skills/index', {
        skills: Skills.getAll()
    });
  };

function show(req, res) {
    res.render('../views/skills/show', {
        skill: Skills.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('../views/skills/new');
}

function create(req, res) {
    // console.log(req.body);
    req.body.passedAssessment = !!req.body.passedAssessment;
    Skills.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skills.deleteOne(req.params.id);
    console.log(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = Skills.getOne(req.params.id);
    res.render('skills/edit', {skill});
}

function update(req, res) {
    req.body.passedAssessment = !!req.body.passedAssessment;
    Skills.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}