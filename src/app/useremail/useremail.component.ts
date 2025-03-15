import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-useremail',
  templateUrl: './useremail.component.html',
  styleUrl: './useremail.component.css'
})
export class UseremailComponent {
  title = 'useremailapp';
  readonly useremailAPIUrl = "http://localhost:5000/api/subscriber-email/";
  useremail: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.refreshUseremail();
  }

  refreshUseremail() {
    this.http.get(this.useremailAPIUrl + 'GetEmail').subscribe(data => {
      console.log("Subscriber Email: ", data);
      this.useremail = data;
    }, error => {
      console.error("Error fetching subscriber's email: ", error);
    });
  }

  deleteUseremail(id: string) {
    this.http.delete(this.useremailAPIUrl + 'DeleteEmail?id=' + id).subscribe((data: any) => {
      alert(data.message);
      this.refreshUseremail();
    }, error => {
      alert("Failed to delete subscriber's email.");
      console.error(error);
    });
  }
}
