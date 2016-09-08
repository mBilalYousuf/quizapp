import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';
import {firebaseInputService} from "../Services/FirebaseInputdataService";

@Injectable()

export class AddQuestionsService {
    addInputQuestions;
    firebaseKey;
    options;
    constructor(private af: AngularFire) {
                 console.log("This is AddQuestionsService page..............")

    }

    questionsInput(getInput, secParam, id) {
        console.log("geting", (getInput));

        this.addInputQuestions = this.af.database.list("data/questions/" + id) //+this.firebaseKey1);
        

        this.addInputQuestions.push({ questionsNo: getInput, options: secParam})
        
        
            .then(snapshot => this.firebaseKey = snapshot.key())
            .then(() => console.log("Questions Key :", this.firebaseKey))
            .catch(err => console.log(err, 'You do not have access!'));
    }


  




}