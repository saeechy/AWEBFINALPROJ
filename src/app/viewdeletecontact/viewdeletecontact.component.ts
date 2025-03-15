import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewdeletecontact',
  templateUrl: './viewdeletecontact.component.html',
  styleUrls: ['./viewdeletecontact.component.css']
})
export class ViewdeletecontactComponent implements OnInit {
  title = 'volunteersapp';
  readonly contactsAPIUrl = "http://localhost:5000/api/contacts/";
  contacts: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.refreshContacts(); // Call on initialization
  }

  refreshContacts() {
    this.http.get(this.contactsAPIUrl + 'GetContacts').subscribe(data => {
      console.log("Contacts:", data); // Debugging log
      this.contacts = data;
    }, error => {
      console.error("Error fetching contacts:", error);
    });
  }

  deleteContact(id: string) {
    this.http.delete(this.contactsAPIUrl + 'DeleteContacts?id=' + id).subscribe((data: any) => {
      alert(data.message);
      this.refreshContacts();
    }, error => {
      alert("Failed to delete the contact");
      console.error(error);
    });
  }
}
