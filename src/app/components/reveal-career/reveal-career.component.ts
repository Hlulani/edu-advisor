import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'reveal-career',
  templateUrl: './reveal-career.component.html',
  styleUrls: ['./reveal-career.component.scss']
})
export class RevealCareerComponent implements OnInit {

  constructor(private router: Router) {}

  navigateToRecommendation() {
    this.router.navigate(['/recommendations']);
  }


  ngOnInit(): void {
  }

}
