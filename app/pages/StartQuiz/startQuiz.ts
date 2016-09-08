import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';

import {OutCome} from "../OutCome/outcome";


@Page({
    templateUrl: 'build/pages/StartQuiz/startQuiz.html'
})

export class StartQuiz {
    getQuestions; saveData; rightanswer; Options;
    totalQuestions; indexNumber = 0; result = 0; countdown
    totalQuestion; outcome; percentage; min= 20;hour; 
    paper;
     count: number;
     
    timer: number;

    constructor(private af: AngularFire, public navParam: NavParams, public navController: NavController) {
         
        console.log("This is startQuiz page..............")
        this.count = 59;
      
        var dataIs = this.navParam.data
       // console.log("paper Nme",getKey);
        console.log("Your data get it here...!",dataIs);
        this.paper = dataIs.paperName;
        console.log("Paper Name is :", this.paper)
        var getKey = dataIs.$key; 
           

        
        this.getQuestions = this.af.database.list("data/questions/" +  getKey)
            .subscribe((data) => {
                
                this.saveData = data;
                console.log("Data is :",this.saveData)
                console.log("The paper key is",getKey.paperName);
                this.rightanswer = this.saveData[0].options.answer[0];
                              
                this.totalQuestions = this.saveData.length;
                console.log("Total Questions are :", this.totalQuestions);

                this.totalQuestion = this.saveData[this.indexNumber];

                console.log("Total Questions are :", this.totalQuestion.options);


            this.timer = setInterval(()=>{this.counter()}, 1000);
               


            })
    }
            


    counter() {
        
        this.count--;  
    
        if (this.count <= 0) {
            
            
            if(this.min != 0){
                 this.count = 59;
                 this.min--;     
            }
            else{
                clearInterval(this.timer)
                this.percentage = this.result / this.totalQuestions * 100;
                 this.navController.push(OutCome, { result: this.result, perc: this.percentage, userPaper : this.paper });
            }
            

        }
    }
    next() {
        console.log("User selected ans: ", this.totalQuestion);
        console.log(this.Options, this.totalQuestion);
           console.log("ans is .........", this.totalQuestion.options.answer);
        if (this.Options == this.totalQuestion.options.answer) {
            this.result += 1;
            console.log("Right answer", this.result);
            console.log(this.indexNumber)
            console.log(this.totalQuestion);
            this.Options = null;
            this.indexNumber++;
            this.totalQuestion = this.saveData[this.indexNumber];
        }

        else {
            this.indexNumber++;
            this.totalQuestion = this.saveData[this.indexNumber];
            this.Options = null;
            console.log("Wrong answer");
        }


        if (this.indexNumber == this.totalQuestions) {
            this.percentage = this.result / this.totalQuestions * 100;
            this.navController.push(OutCome, { result: this.result, perc: this.percentage, userPaper : this.paper });
            console.log(typeof this.result, this.result, "Number");


            console.log("percentage is :", this.percentage);
        }
        else {
            console.log("Not showing the result");

        }


        console.log("Questions lengths", this.totalQuestions);

      
    }
    


}




