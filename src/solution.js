/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  let foundStudent = students.find(student => student.name === name);
  return foundStudent ? foundStudent : null;
}

module.exports = findStudentByName;
