
import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';
import {firebaseInputService} from "../Services/FirebaseInputdataService"
import {AddQuestionsService} from "../Services/AddQuestionsService";

//import {SelectPaper} from "../SelectPaper/selectPaper";
import {Quizz} from "../Quizz/quizz";
@Page({
    templateUrl: 'build/pages/Questions/questions.html'
})
export class CreateQuestions {

    items;
    uid;
    paperKey;
    sendPaperkey;
    constructor(private af: AngularFire, public navController: NavController, private param: NavParams, private sdngDta: AddQuestionsService) {
        console.log("This is questions page..............")
        console.log("Bilal Yousuf");
        console.log("this is working", 'amammmmmm')

        this.uid = this.param.get('uid')

        console.log("paperKey", this.uid);
        //   this.param.data.uid.push(SelectPaper);

    }


    obj = {}
    sendingData(sdnobj, bam) {

        this.sdngDta.questionsInput(sdnobj, bam, this.uid);

        sdnobj = " ";

        this.obj = {
            getInput: ""
        }
        this.objcts = {
            A: "",
            B: "",
            C: "",
            D: ""

        }


    }
    finishPaper() {
        this.navController.pop(Quizz);
        console.log("Finish Paper is working");
    }



    objcts = {}


    RightAnswer = {}



}
