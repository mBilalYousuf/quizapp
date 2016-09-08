import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';
import {AddQuestionsService} from "../Services/AddQuestionsService";
@Injectable()

export class firebaseInputService {
    newItems;
    firebaseKey1;

    constructor(private af: AngularFire) {
        console.log("This is firebaseInputService page..............")
        //questionsInput();

    }


    inputData(newinputData) {
        // this.newItems = this.af.database.list("/data");

        // console.log(newinputData);
        this.newItems = this.af.database.list("data/paper");
        console.log("paepr ker : " , this.newItems.value)
        return Promise.resolve(this.newItems.push({ paperName: newinputData }))
            
            
               
        //     .then(snapshot => { this.firebaseKey1 = snapshot.key() })
        //      .then(() => console.log("Paper Key", this.firebaseKey1))
        //      .catch(err => console.log(err, 'You do not have access!'))
        // );






    
        }




    
}