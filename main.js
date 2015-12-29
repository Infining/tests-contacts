"use strict";

var app = angular.module("contacts", []);
app.controller("contactsController", function($scope) {

  $scope.contacts = [];
  $scope.photo = "";
  $scope.firstName = "";
  $scope.lastName = "";
  $scope.age = "";
  $scope.sex = "";
  $scope.phone = "";
  $scope.email = "";
  $scope.address = "";
  $scope.comments = "";

  $scope.headings = ["Photo","First","Last","Age","Sex","Phone","Email","Address","Comments"];

  $scope.modelContact = {
    "photo": $scope.photo,
    "firstName": $scope.firstName,
    "lastName": $scope.lastName,
    "age": $scope.age,
    "sex": $scope.sex,
    "phone": $scope.phone,
    "email": $scope.email,
    "address": $scope.address,
    "comments": $scope.comments
  };

  $scope.addContact = function() {
    $scope.contacts.push({
      "photo": $scope.photo,
      "firstName": $scope.firstName,
      "lastName": $scope.lastName,
      "age": $scope.age,
      "sex": $scope.sex,
      "phone": $scope.phone,
      "email": $scope.email,
      "address": $scope.address,
      "comments": $scope.comments
    });

    $scope.clearForm();
  };

  $scope.clearForm = function() {
    $scope.photo = "";
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.age = "";
    $scope.sex = "";
    $scope.phone = "";
    $scope.email = "";
    $scope.address = "";
    $scope.comments = "";
  };
});
