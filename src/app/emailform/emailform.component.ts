import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrl: './emailform.component.css'
})
export class EmailformComponent {
  readonly emailFormAPIUrl = "http://localhost:5000/api/subscriber-email/";

  constructor(private http: HttpClient) {}

  addEmail(event: Event) {
    event.preventDefault();

    let newContact = {
      email: (document.getElementById("subscriberEmail") as HTMLInputElement).value
    };

    this.http.post(this.emailFormAPIUrl + "addEmail", newContact).subscribe(() => {
      alert("You have been subscribed successfully!");
      this.clearForm();
    }, error => {
      console.error("Error subscribing", error);
    });
  }

  clearForm() {
    (document.getElementById("subscriberEmail") as HTMLInputElement).value = "";
  }
}
