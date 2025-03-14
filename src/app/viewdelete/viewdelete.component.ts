import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewdelete',
  templateUrl: './viewdelete.component.html',
  styleUrls: ['./viewdelete.component.css']
})
export class ViewdeleteComponent implements OnInit {
  title = 'volunteersapp';
  readonly volunteersAPIUrl = "http://localhost:5000/api/volunteers/";
  volunteers: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.refreshVolunteers(); // Call on initialization
  }

  refreshVolunteers() {
    this.http.get(this.volunteersAPIUrl + 'GetVolunteers').subscribe(data => {
      console.log("Volunteers:", data); // Debugging log
      this.volunteers = data;
    }, error => {
      console.error("Error fetching volunteers:", error);
    });
  }

  deleteVolunteer(id: string) {
    this.http.delete(this.volunteersAPIUrl + 'DeleteVolunteers?id=' + id).subscribe((data: any) => {
      alert(data.message);
      this.refreshVolunteers();
    }, error => {
      alert("Failed to delete volunteer.");
      console.error(error);
    });
  }
}
