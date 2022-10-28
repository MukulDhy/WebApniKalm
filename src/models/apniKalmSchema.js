const express = require("express");
const validator = require('validator');
const bcryptjs = require("bcryptjs");

const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema( {
    FirstName : {
        type : String,
        required : true
    },
    LastName : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        },
        required: true
    },
    // gender : {
    //     type : String,
    //     required : true,
    // },
    PhoneNumber : {
        type : Number,
        maxLength : [10, "Please ENter Less Number"],
        required : [true , "Please Enter Your Phone Number"]
    },
    Age : {
        type : Number,
        required : true
    },
    Password : {
        type :  String,
        required : true
    }
    
});

FormSchema.pre("save",async function(next){

    if(this.isModified("Password")){
    this.Password = await bcryptjs.hash(this.Password,4);
    next();
    }
});




const TestSchema = new mongoose.Schema( {
    Question1 : {
        type : String,
        required : true
    },
    Question2 : {
        type : String,
        required : true
    },
    Question3 : {
        type : String,
        required: true
    },
    Question4 : {
        type : String,
        required : true
    },
    Question5 : {
        type : String,
        required: true
    }
    
});

const adminPaperSchema = new mongoose.Schema( {
    PaperName : {
        type : String,
        required : true
    },
    Question1 : {
        type : String,
        required : true
    },
    Question2 : {
        type : String,
        required : true
    },
    Question3 : {
        type : String,
        required: true
    },
    Question4 : {
        type : String,
        required : true
    },
    Question5 : {
        type : String,
        required: true
    }

});


/*  making a Collection Of this schema */
const LoginFormDetails = new mongoose.model("LoginFormDetails", FormSchema );
const TestFormDetails = new mongoose.model("TestFormDetails", TestSchema );
const adminPaper = new mongoose.model("adminPaper", adminPaperSchema );

module.exports.LoginFormDetails = LoginFormDetails;
module.exports.TestFormDetails = TestFormDetails;
module.exports.adminPaper = adminPaper;
