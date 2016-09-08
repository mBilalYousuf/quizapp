import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';
import {HomePage} from "../home/home"


@Page({
  templateUrl: 'build/pages/OutCome/outcome.html'
})
export class OutCome {
  results
  percentages;
  pass;
  fail;
  showResult;
  paperName;
  displayName; fbName
  constructor(public af: AngularFire, public navController: NavController, public navParams: NavParams) {

          console.log("This is outcome page..............")
    
    
    this.navController = navController;
    this.navParams = navParams;

 
      this.paperName = this.navParams.get("userPaper");
      console.log("pppppppppppprrrrrr", this.paperName)
     
    this.results = this.navParams.get("result")
    console.log("I.d is :", this.results);
    console.log("Result type is L:",typeof this.results)

    this.percentages = this.navParams.get("perc")
    console.log("percentages are :", this.percentages);



   
    if (this.percentages >= 60) {
      console.log("You are passed");
      this.pass = "Congratulations! You passed the Exam "
    }
    else {
      console.log("You are failed");
      this.fail = "Sorry! Your are Failed"
    }
    let user = localStorage.getItem("firebase:session::letsquizzes");
    user = JSON.parse(user);
    console.log(user);
    this.showResult = this.af.database.list("data/result/"+  user.uid);
  
    this.fbName= this.af.auth
      .subscribe(abc => {console.log("auth", abc.facebook.displayName)
          this.displayName = abc.facebook.displayName
      } );

    console.log("fb name :" , this.displayName)
  
    this.showResult.push({ result: this.percentages, userName : this.displayName, userPaper:this.paperName });
      
       


  }





  goHome() {
    this.navController.push(HomePage);
  }




}