var studentApp = angular.module("studentApp", []);

studentApp.controller("StudentFormController", function($scope) {
  $scope.studentForm = {
    studentList: [], name: '', email: '', fatherName: '', motherName: '', dob: '',
    fatherMobile: '', motherMobile: '', fatherOccupation: '', motherOccupation: '',
    address: '', showError: false, showSuccess: false,

    submitDetails: function() {
      var stdObj = $scope.studentForm;
      var insObj = {};
      if (!stdObj.name || !stdObj.email || !stdObj.fatherName || !stdObj.motherName || !stdObj.dob || !stdObj.fatherMobile) {
        stdObj.showError = true;
        stdObj.showSuccess = false;
      } else {
        stdObj.showError = false;
        stdObj.showSuccess = true;

        insObj.name = stdObj.name;
        insObj.email = stdObj.email;
        insObj.fatherName = stdObj.fatherName;
        insObj.motherName = stdObj.motherName;
        insObj.dob = stdObj.dob;
        insObj.fatherMobile = stdObj.fatherMobile;
        insObj.motherMobile = stdObj.motherMobile;
        insObj.fatherOccupation = stdObj.fatherOccupation;
        insObj.motherOccupation = stdObj.motherOccupation;
        insObj.address = stdObj.address;

        stdObj.studentList.push(insObj);
        stdObj.resetForm();
      }
    },
    resetForm: function() {
      var stdObj = $scope.studentForm;
      stdObj.stdFrm.$setPristine();
      stdObj.stdFrm.$setUntouched();
      stdObj.name = '';
      stdObj.email = '';
      stdObj.fatherName = '';
      stdObj.motherName = '';
      stdObj.dob = '';
      stdObj.fatherMobile = '';
      stdObj.motherMobile = '';
      stdObj.fatherOccupation = '';
      stdObj.motherOccupation = '';
      stdObj.address = '';
    },
    hideMessage: function() {
      var stdObj = $scope.studentForm;
      stdObj.showError = false;
      stdObj.showSuccess = false;
    },
    showRowMessage: function() {
      var stdObj = $scope.studentForm;
      if (stdObj.studentList.length > 0)
        return false;
      else
        return true;
    }
  };
});
