import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  url = 'https://atdebjoy.com/others/api/perform/basic_details.php';
  url2 = 'https://atdebjoy.com/others/api/perform/term_wise_subjects.php';
  url3= 'https://atdebjoy.com/others/api/perform/get_exam.php';
  urlSubjects="https://atdebjoy.com/others/api/perform/get_subjects.php"  
  addExamUrl="https://atdebjoy.com/others/api/perform/update_exam.php";
   deleteExamUrl="https://atdebjoy.com/others/api/perform/del_exam.php";

   marksUrl = 'https://atdebjoy.com/others/api/perform/basic_details.php';
   delMarksUrl = 'https://atdebjoy.com/others/api/perform/del_marks.php';

   updateMarksUrl = 'https://atdebjoy.com/others/api/perform/update_marks_value.php';
  constructor(private http: HttpClient) {}
  getProfileInfo(user_id: string, pwd: string) {
    return this.http.get(this.url + `?profile&stud_id=${user_id}&pass=${pwd}`);
  }


  getExamInfo(user_id: string, pwd: string){
    return this.http.get(this.url3 + `?stud_id=${user_id}&pass=${pwd}`);
  }

  getAllBasicData(user_id: string, pwd: string) {
    return this.http.get(this.url + `?stud_id=${user_id}&pass=${pwd}`);
  }

  getAllSubjectData(user_id:string, pwd:string){
    return this.http.get(this.urlSubjects + `?stud_id=${user_id}&pass=${pwd}`);
  }

  
  addExamStruct(obj){
    return this.http.post(this.addExamUrl,JSON.stringify(obj));
  }
  deleteExamStruct(obj){
    return this.http.post(this.deleteExamUrl,JSON.stringify(obj));
  }

  getAllMarksData(user_id:string, pwd:string){
    return this.http.get(this.marksUrl+`?stud_id=${user_id}&pass=${pwd}`);
  }

  delMarks(user_id: number, pwd: string, marks_id:number){​
    console.log(marks_id);
    return this.http.post(this.delMarksUrl,
      JSON.stringify({​ marks_id: marks_id, stud_id: user_id, pass: pwd }​)
    );
  }​

  editMarks( user_id: number, pwd: string, id1:number,marks:number ){​
    return this.http.post(this.updateMarksUrl,JSON.stringify({marks:marks, marks_id:id1, stud_id:user_id, pass:pwd,}​));
  }​​
}
