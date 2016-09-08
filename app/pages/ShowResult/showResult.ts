
import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';
import {firebaseInputService} from "../Services/FirebaseInputdataService"
import {CreateQuestions} from "../Questions/questions";
import {Profile} from "../Profile/profile";

@Page({
    templateUrl: 'build/pages/ShowResult/showResult.html'
})
export class ShowResult {
    resultIs;
    showResult;
    studentResult = [];
    theResult;
    img;
    name;
    resultId;
    sendIdtoUser; datas;
    fbId;
    uuid; rslt = [];
    constructor(public af: AngularFire, public navController: NavController, private foo: firebaseInputService, public navParam: NavParams) {

        this.resultIs = this.af.database.list("data/result").subscribe((userResult) => {
            // this.studentResult
            userResult.forEach((user) => {
                console.log(user.$key);
                for (let key in user) {
                    console.log("result is:", user[key]);
                    if (user.$key != user[key]) {
                        this.studentResult.push(user[key])

                    }
                }

            })



            //     this.uuid = this.studentResult.forEach((user) => {
            //          console.log("loop :", user.$key);
            //                      this.rslt.push(user.$key)

            //         this.af.database.list("data/users/facebook:497741227085270/").update("",{userResult:this.rslt});
            //     //     this.af.database.object("data/users/facebook:497741227085270").set({result : user.$key});
            //     //     this.af.auth.subscribe(uuid => this.uuid = uuid.uid);
            //     // let nod = this.af.database.object("data/users/facebook:497741227085270")

            // }) 
            //     this.fbId = this.navParam.get("userfbId");
            //   console.log("fb id is : ",this.fbId)
            console.log("student result In array :", this.uuid)
            console.log("This is showResult page..............")



            //  this.theResult=this.studentResult.forEach((i) => {
            //       console.log("the result is",i.result);
            //     this.showResult = i.result
            //  });


            // this.img = this.navParam.data.facebook.profileImageURL
            // this.name = this.navParam.data.facebook.displayName



        })

    }








}








