let mongoose = require("mongoose");
let Schema = new mongoose.Schema({
  email: String,
  requestDoctors: [String],
});
let PatientRequestDoctor = mongoose.model("PatientRequestDoctor", Schema);
module.exports = PatientRequestDoctor;
