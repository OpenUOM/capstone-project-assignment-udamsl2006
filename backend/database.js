const dbConnection = require("./sqlite");

dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");
const testBase = require("../backend/test/testBase");

const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

// ============== Teacher Functions ==============

const readTeachers = async () => {
    const sql = `SELECT * FROM teachers`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM teachers WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

const addTeacher = async (id, name, age) => {
    const sql = `INSERT INTO teachers (id, name, age) VALUES (?, ?, ?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age])
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

const updateTeacher = async (name, age, id) => {
    const sql = `UPDATE teachers SET name = ?, age = ? WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, id])
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

const deleteTeacher = async (id) => {
    const sql = `DELETE FROM teachers WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

// ============== Student Functions ==============

const readStudents = async () => {
    const sql = `SELECT * FROM students`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM students WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

const addStudent = async (id, name, age, hometown) => {
    const sql = `INSERT INTO students (id, name, age, hometown) VALUES (?, ?, ?, ?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age, hometown])
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

const updateStudent = async (name, age, hometown, id) => {
    const sql = `UPDATE students SET name = ?, age = ?, hometown = ? WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, hometown, id])
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

const deleteStudent = async (id) => {
    const sql = `DELETE FROM students WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => { resolve(data); })
            .catch((error) => { reject(error); });
    });
}

module.exports = {
    dbinitialize,
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};
