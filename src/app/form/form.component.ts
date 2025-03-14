import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  readonly APIUrl = "http://localhost:5000/api/volunteers/";

  constructor(private http: HttpClient) {}

  addVolunteer(event: Event) {
    event.preventDefault();

    let newVolunteer = {
      name: (document.getElementById("volName") as HTMLInputElement).value,
      phone: (document.getElementById("volPhone") as HTMLInputElement).value,
      email: (document.getElementById("volEmail") as HTMLInputElement).value,
      message: (document.getElementById("volMessage") as HTMLInputElement).value
    };

    this.http.post(this.APIUrl + "AddVolunteer", newVolunteer).subscribe(() => {
      alert("You have been added successfully!");
      this.clearForm();
    }, error => {
      console.error("Error adding the volunteer", error);
    });
  }

  clearForm() {
    (document.getElementById("volName") as HTMLInputElement).value = "";
    (document.getElementById("volPhone") as HTMLInputElement).value = "";
    (document.getElementById("volEmail") as HTMLInputElement).value = "";
    (document.getElementById("volMessage") as HTMLInputElement).value = "";
  }
}
