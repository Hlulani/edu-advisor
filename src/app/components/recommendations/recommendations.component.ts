import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  constructor(private router: Router) {}

  navigateToRecommendation() {
    this.router.navigate(['/recommendation']);
  }

  ngOnInit(): void {
  }

}
