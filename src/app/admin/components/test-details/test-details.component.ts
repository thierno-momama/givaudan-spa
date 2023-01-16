import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from 'src/app/Test';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit{

  test!: Test | undefined;
  tests: Test[] = [];

  constructor(private router: ActivatedRoute, private adminService: AdminService){

  }

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const routeId = Number(routeParams.get('testId'));
    console.log(routeParams);
    console.warn(routeId);
    this.adminService.getTests().subscribe(test => {
      this.test = test.find(test => test.id === routeId);
    });
  }

}
