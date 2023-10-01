import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

  ngOnInit(): void {}

  registrationForm: FormGroup;
  currentStep = 1; // Declare the currentStep property here
  totalSteps = 4; // Adjust based on the number of steps

  constructor(public authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      // Define form controls for each step here
    });
  }

 
   // Define a variable to store selected academic history options
   selectedAcademicHistory: string[] = [];

   // ...
 

   revealCareer() {
     this.router.navigateByUrl("reveal-career")
   }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  academicOptions = [
    { id: 1, label: 'Select 1', selected: false },
    { id: 2, label: 'Select 2', selected: false },
    { id: 3, label: 'Select 3', selected: false },
    { id: 4, label: 'Select 4', selected: false }
  ];

  // Function to toggle the selection of academic history
  toggleSelection(academicOption: any) {
    academicOption.selected = !academicOption.selected;
  }

  passions = [
    'Business ',
    'Engineering',
    'Computer Science',
    'Art and Design',
    'Science',
    'Music',
    'Sports',
    'Languages',
    'History',
    'Literature',
    'Tourism',
    'Other'

    // Add more passions as needed
  ];

  selectedPassions: string[] = [];

  // Function to toggle the selection of passions
  togglePassionSelection(event: any) {
    const selectedPassion = event.target.value;
    if (event.target.checked) {
      // If checkbox is checked, add to selected list
      this.selectedPassions.push(selectedPassion);
    } else {
      // If checkbox is unchecked, remove from the list
      const index = this.selectedPassions.indexOf(selectedPassion);
      if (index !== -1) {
        this.selectedPassions.splice(index, 1);
      }
    }
  }



}

