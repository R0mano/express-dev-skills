// const { create } = require("../controllers/skills");

const skills = [
  { id: 100, name: "HTML", level: "expert", validatedAssessment: true },
  { id: 101, name: "CSS", level: "beginner", validatedAssessment: false },
  {
    id: 102,
    name: "JavaScript",
    level: "intermediate",
    validatedAssessment: true,
  },
  {
    id: 103,
    name: "Express",
    level: "intermediate",
    validatedAssessment: true,
  },
  { id: 104, name: "jQuery", level: "advanced", validatedAssessment: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function create(skill) {
  const newSkill = {
    id: skills[skills.length - 1].id + 1,
    name: skill.skillName,
    level: skill.skillLevel,
    validatedAssessment: skill.passedAssessment,
  };
  skills.push(newSkill);
}

function deleteOne(skillId) {
  const i = skills.findIndex((skill) => skill.id === parseInt(skillId));
  skills.splice(i, 1);
  // console.log(skill, 'req.param.id');
}

function update(id, updatedSkill) {
  const skill = skills.find((skill) => skill.id === parseInt(id));
  //Object.assign(targetObj, mergeObj1, mergeObj2, etc...)
  Object.assign(skill, updatedSkill);
  console.log(skills);
}
