const express = require("express");
const bcryptjs  = require("bcryptjs")
const router = express.Router();

const { LoginFormDetails , TestFormDetails , adminPaper }= require("../models/apniKalmSchema");
// const TestFormDetails = require("../models/apniKalmSchema");


router.post("/register" , async(req,res) => {

    try{
        if((req.body.Password) === (req.body.pswrepeat)){

            const createUser = new LoginFormDetails( {
            FirstName : req.body.FirstName,
            LastName : req.body.LastName,
            Email : req.body.Email,
            PhoneNumber : req.body.PhoneNumber,
            Age : req.body.Age,
            Password : req.body.Password
        });
                
        console.log(createUser);
        const saveUser = await createUser.save();
        console.log(saveUser);
        res.status(201).render("index", {
            UserName : createUser.FirstName
        });
    }
    else{
        res.send("Password Must be Same");
    }
    }catch(err){
        res.status(400).send(err);
    }
});

router.post("/loginPage" , async(req,res) => {
    
    try{
        let userName = req.body.UserName;
        let userPassword = req.body.userPassword;
        const UserDetails = await LoginFormDetails.find({Email : userName});
        // console.log(userPassword);
        // console.log(UserDetails[0].Password);
        let hashPasswordCheck = await bcryptjs.compare( userPassword , UserDetails[0].Password)
        // console.log(hashPasswordCheck);
        /* With Hashing */

        if(hashPasswordCheck){

                res.status(201).render("index");
        }
        else{
                res.send("Password is not Matched");

        }


        /* Without Hasing */
        // if(userPassword === hashPasswordCheck){
            
        //     res.status(201).render("index");
        // }
        // else{
        //     res.send("Password is not Matched");
        // }
    }catch(err){
        res.status(400).send("Wrong Invalid Details");
    }
});

router.post("/testPage" , async(req,res) => {
    // console.log(req.body.answer1);
    try{
        const TestDetails = new TestFormDetails({
        Question1 : req.body.answer1,
        Question2 : req.body.answer2,
        Question3 : req.body.answer3,
        Question4 : req.body.answer4,
        Question5 : req.body.answer5
        });
        
        // console.log(TestDetails);
        const saveData = await TestDetails.save();
        // console.log(saveData);
        res.status(201).render("index");
    }catch(err){
        res.status(400).send(err);
    }
});


router.post("/addPaperDetails" , async(req , res) => {

    try{
        const AddPaperDetailsAdmin = new adminPaper({
            PaperName : req.body.PaperName, 
        Question1 : req.body.adminQuestion1,
        Question2 : req.body.adminQuestion2,
        Question3 : req.body.adminQuestion3,
        Question4 : req.body.adminQuestion4,
        Question5 : req.body.adminQuestion5
        });


        const SavePaperDetails = await AddPaperDetailsAdmin.save();


    }catch(err){
        res.status(400).send(err);
    }



}); 






module.exports = router;