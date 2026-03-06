const knex_db = require("./db-config");

// Uses knex migrate + seed to reset to clean state
const dbinitialize = async () => {
  await knex_db.migrate.rollback();
  await knex_db.migrate.latest();
  await knex_db.seed.run();
  return { status: "Database initialized successfully" };
};

// ============== Teacher ==============

const addTeacher = async (id, name, age) => {
  await knex_db("teacher").insert({ id, name, age });
  return { status: "Successfully inserted Teacher" };
};

const readTeachers = async () => {
  return await knex_db("teacher").select("*");
};

const readTeacherInfo = async (id) => {
  return await knex_db("teacher").where({ id }).select("*");
};

const updateTeacher = async (name, age, id) => {
  await knex_db("teacher").where({ id }).update({ name, age });
  return { status: "Successfully updated Teacher" };
};

const deleteTeacher = async (id) => {
  await knex_db("teacher").where({ id }).delete();
  return { status: "Successfully deleted Teacher" };
};

// ============== Student ==============

const addStudent = async (id, name, age, hometown) => {
  await knex_db("student").insert({ id, name, age, hometown });
  return { status: "Successfully inserted Student" };
};

const readStudents = async () => {
  return await knex_db("student").select("*");
};

const readStudentInfo = async (id) => {
  return await knex_db("student").where({ id }).select("*");
};

const updateStudent = async (name, age, hometown, id) => {
  await knex_db("student").where({ id }).update({ name, age, hometown });
  return { status: "Successfully updated Student" };
};

const deleteStudent = async (id) => {
  await knex_db("student").where({ id }).delete();
  return { status: "Successfully deleted Student" };
};

module.exports = {
  dbinitialize,
  addTeacher,
  readTeachers,
  readTeacherInfo,
  updateTeacher,
  deleteTeacher,
  addStudent,
  readStudents,
  readStudentInfo,
  updateStudent,
  deleteStudent,
};
