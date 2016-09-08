
import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable,AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';
import {InQuizz} from "../InQuizz/inQuizz";
import {StartQuiz} from "../StartQuiz/startQuiz"
import {OutCome} from "../OutCome/outcome";

@Page({
  templateUrl: 'build/pages/Papers/papers.html'
})
export class Paper {
    
 
   papers;
    Key;
    papername;
  
  
  constructor(public af : AngularFire, public navController : NavController, private navParams: NavParams) {
 
         console.log("This is paper page..............")
       
            this.papers = this.af.database.list("data/paper").subscribe((data)=>{
            console.log("datas",data);
            // this.paperkey = this.param.get('uid');
            // console.log(this.paperkey,"paper key");
          
             
            // for (let i of data) {
            //   console.log(data[0].paperName);
            //  }
            this.papername = data;
            console.log(this.papername)


            // console.log("paper name :",this.papername[0].paperName)
            // data.forEach((i)=>{
            //   this.papername = i.paperName
            //   console.log(this.papername);
             
              
            // }) 
                    
              }
            
            )}
       


         selctpaper(paper){

           var id;
           id = paper.$key
            console.log("id",id);
           console.log("paperrrrrrrrrrrrrr : " );
           
           var paperIs = paper.paperName;
           console.log("paperIs", paperIs);
             this.navController.push(StartQuiz,paper);
             console.log("selctpaper working");
             

            //  this.navController.push(OutCome,{paper:paperIs});
            // console.log("the paper is :", this.papername);
            
           }
           
           
           
  
}
