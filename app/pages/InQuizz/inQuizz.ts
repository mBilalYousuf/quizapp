
import {Page, NavController} from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';
import {firebaseInputService} from "../Services/FirebaseInputdataService"
import {CreateQuestions} from "../Questions/questions";

@Page({
    templateUrl: 'build/pages/InQuizz/inQuizz.html'
})
export class InQuizz {
    firebaseKey;
    

    constructor(public af: AngularFire, public navController: NavController, private foo: firebaseInputService) {
        console.log("This is inQuiz page..............")

       
    }
    
    bar(abc) {
        console.log('function is running')
        this.foo.inputData(abc)
        
            .then(xam => this.navController.push(CreateQuestions, { uid: xam.path.u[2] }))
            
        console.log("promise is running")

       
    }


    


}








