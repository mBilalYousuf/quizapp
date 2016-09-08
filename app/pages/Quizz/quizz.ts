
import {Page, NavController , NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable,AuthMethods, AuthProviders, firebaseAuthConfig, FirebaseAuth} from 'angularfire2';
import {InQuizz} from "../InQuizz/inQuizz";
import {Paper} from "../Papers/papers";
import {ShowResult} from "../ShowResult/showResult";
import {OutCome} from "../OutCome/outcome";
import {Profile} from "../Profile/profile";
@Page({
  templateUrl: 'build/pages/Quizz/quizz.html'
})
export class Quizz {
    img
    name;   
    userName;
    userdata;
    uid;
    isAdmin: boolean;
    show:boolean = true
  constructor(public af : AngularFire, public navController : NavController , public navParam : NavParams) {
//  setInterval(function(){ this.auth.refreshToken(); }, 1000 * 60 * 10);
     this.userdata = this.navParam.data;
     console.log("user data is : ", this.userdata);
     this.uid = this.navParam.data.uid;
     console.log("uid is  :" , this.uid);
      this.img = this.navParam.data.facebook.profileImageURL
      this.name = this.navParam.data.facebook.displayName
       console.log("This is Quizz page..............");

       if(this.uid === 'facebook:497741227085270'){
         this.show = this.show;
          this.isAdmin = true;
       }
       else{
         this.isAdmin = false;         
         this.show =!this.show;
       }
      //  this.navController.push(OutCome,{userName:this.name})

      // this.userName = this.af.database.list("data/result")
      // this.userName.push({username : this.userName})        
  }
  
  createQuizz(){
      this.navController.push(InQuizz)  
  }
  
  takeQuiz(){
    this.navController.push(Paper);
    console.log("Function is working");
  }
  

  showResult(){
    this.navController.push(ShowResult);
  }
   
 onProfile(){
   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",this.userdata);
   this.userdata["isAdmin"] = this.isAdmin;
        this.navController.push(Profile,this.userdata);
  }

  
}
