
import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthMethods, AuthProviders, firebaseAuthConfig, FirebaseAuth, FirebaseObjectObservable} from 'angularfire2';
import {OnInit} from "@angular/core";
//import {ShowResult} from "../ShowResult/showResult"
// import {InQuizz} from "../InQuizz/inQuizz";
// import {Paper} from "../Papers/papers";
// import {ShowResult} from "../ShowResult/showResult";
// import {OutCome} from "../OutCome/outcome";
@Page({
  templateUrl: 'build/pages/Profile/profile.html'
})
export class Profile implements OnInit {
  userdata;
  users;
  datas;
  uid;
  name;
  img; rr;
  rsltId; ids
  sendUserId; idsValue = []
  studentResult; usrReslt; rslt = []
  constructor(public af: AngularFire, public navController: NavController, public navParam: NavParams) {

  }

  ngOnInit() {
    this.datas = this.navParam.data;
    this.uid = this.datas.uid;
    this.name = this.datas.facebook.displayName;

    this.img = this.datas.facebook.profileImageURL;

    this.sendUserId = this.navParam.get("userKey");

    let user = localStorage.getItem("firebase:session::letsquizzes");
    user = JSON.parse(user);
    if (!this.datas["isAdmin"]) {
      this.usrReslt = this.af.database.list("data/result/" + user.uid).subscribe((userResult) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", userResult);
        this.idsValue = userResult;

        // this.rslt = [];

        // this.studentResult.forEach((user) => {
        //   console.log("/////////////////////////////////////////////",user);
        //   this.rslt.push(user.$key)
        // })

        this.userdata = this.af.database.object("data/users/" + this.uid).set({ userName: this.name, image: this.img, userResult: this.rslt })
        console.log("this,. is profile pge")
      })
    }
    else {
      this.rsltId = this.af.database.list("data/users").subscribe((id) => {
        this.ids = id;
        id.forEach((val) => {
          console.log("---------------------------------------------------------", val.userResult)
          val.userResult.forEach((keys) => {
            this.af.database.object("data/result/" + keys).subscribe((result) => {
              console.log("userResult", result);
              this.idsValue.push(result);

              console.log("--------------", this.idsValue)
            })

          })

        })
        console.log("idssssssssss", this.ids)
      })
    }




  }





}









