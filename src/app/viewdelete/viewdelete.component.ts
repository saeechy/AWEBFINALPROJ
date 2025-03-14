import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewdelete',
  templateUrl: './viewdelete.component.html',
  styleUrls: ['./viewdelete.component.css']
})
export class ViewdeleteComponent {
  title = 'volunteersapp';
  readonly volunteersAPIUrl = "http://localhost:5000/api/volunteers/";
  readonly contactsAPIUrl = "http://localhost:5000/api/contacts/";


  volunteers: any = [];
  contacts: any = [];

  constructor(private http: HttpClient) { }

  // Fetch Volunteers
  refreshVolunteers() {
    this.http.get(this.volunteersAPIUrl + 'GetVolunteers').subscribe(data => {
      this.volunteers = data;
    });
  }

  // Fetch Contacts
  refreshContacts() {
    this.http.get(this.contactsAPIUrl + 'GetContacts').subscribe(data => {
      this.contacts = data;
    });
  }

  // Lifecycle Hook - Runs on Load
  ngOnInit() {
    this.refreshVolunteers();
    this.refreshContacts();
  }

  // Delete a Volunteer
  deleteVolunteer(id: string) {
    this.http.delete(this.volunteersAPIUrl + 'DeleteVolunteers?id=' + id).subscribe((data: any) => {
      alert(data.message); // Show success message
      this.refreshVolunteers(); // Refresh list
    }, error => {
      alert("Failed to delete volunteer.");
      console.error(error);
    });
  }

  //Delete a Contact
  deleteContact(id: string) {
    this.http.delete(this.contactsAPIUrl + 'DeleteContacts?id=' + id).subscribe((data: any) => {
      alert(data.message);
      this.refreshContacts();
    }, error => {
      alert("Failed to delete the contact");
      console.error(error);
    })
  }
}