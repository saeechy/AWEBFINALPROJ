import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewdelete',
  templateUrl: './viewdelete.component.html',
  styleUrls: ['./viewdelete.component.css']
})
export class ViewdeleteComponent {
  title = 'volunteersapp';
  readonly APIUrl = "http://localhost:5000/api/volunteers/";

  volunteers: any = [];

  constructor(private http: HttpClient) { }

  // Fetch Volunteers
  refreshVolunteers() {
    this.http.get(this.APIUrl + 'GetVolunteers').subscribe(data => {
      this.volunteers = data;
    });
  }

  // Lifecycle Hook - Runs on Load
  ngOnInit() {
    this.refreshVolunteers();
  }

  // Delete a Volunteer
  deleteVolunteer(id: string) {
    this.http.delete(this.APIUrl + 'DeleteVolunteers?id=' + id).subscribe((data: any) => {
      alert(data.message); // Show success message
      this.refreshVolunteers(); // Refresh list
    }, error => {
      alert("Failed to delete volunteer.");
      console.error(error);
    });
  }
}
