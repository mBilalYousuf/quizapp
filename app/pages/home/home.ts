
import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';
import {Quizz} from "../Quizz/quizz";
import {Paper} from "../Papers/papers";

@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    items: FirebaseListObservable<any[]>;
    displayName;
    name;

    constructor(public af: AngularFire, private navController: NavController, public navParams: NavParams) {

        this.items = af.database.list('/data');
        console.log("My first hardcoded data :", this.items);
        this.af.auth.subscribe(auth =>{console.log("Firebase Token", auth);

        // this.displayName = auth.facebook.displayName;
        // console.log("Facebook name is : ", this.displayName);
        // this.name = this.af.database.list("data/result");
        // this.name.push({name : this.displayName})
    
        // if(auth !== null){
        //     this.navController.push(Quizz);
        // }
        // else{
        //     this.navController.push(HomePage);
        // }

})

    
        
    }


    login() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup,
        }
        )

            .then(() => {
                this.af.auth.subscribe((auth) => {

                       var a = 'facebook:497741227085270'
                    if (auth.uid === a) {
                        this.navController.push(Quizz,auth)
                        console.log("This is home page..............")
                    }
                    else if (auth.uid !== a) {

                        
                        this.navController.push(Quizz,auth);
                       
                                            }
                });
            });


    }



}


