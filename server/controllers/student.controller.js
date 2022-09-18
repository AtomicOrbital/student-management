import studentService from "../services/student.service.js";

export default {
  getAllStudent: studentService.getAllStudent,
  updateStudent: studentService.updateStudent,
  createStudent: studentService.createStudent,
  createClass: studentService.createClass,
  getClass: studentService.getClass,
  deleteStudent: studentService.deleteStudent,
  importFromExcel: studentService.importFromExcel,
  getStudentDetail: studentService.getStudentDetail,
};
