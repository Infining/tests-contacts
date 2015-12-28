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

  $scope.contacts.push({
    "photo": "serveimage.jpg",
    "firstName": "Nathan",
    "lastName": "Gaul",
    "age": "21",
    "sex": "Male",
    "phone": "2088050468",
    "email": "nathanjgaul@gmail.com",
    "address": "1011 Deakin St Apt 5-a Moscow, ID 83843",
    "comments": "Me"
  });

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
