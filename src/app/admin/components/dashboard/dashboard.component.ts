import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'; 
import { Test } from 'src/app/Test';
import { AdminService } from '../../services/admin.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  title: string = 'Admin';
  faCirclePlus = faCirclePlus;
  tests: Test[] = [];
  faTimes = faTimes;

  @Output() onDescribeTest: EventEmitter<Test> = new EventEmitter();

  constructor(private adminService: AdminService){}

  ngOnInit(): void {
    this.adminService.getTests().subscribe(test => {
      this.tests = test;
      console.warn(test);
    });
  }

  onDelete(test: Test){
    if(confirm('voulez vous vraiment supprimer ?')){
      this.adminService.deleteTest(test).subscribe(() => {
        this.tests = this.tests.filter(t => t.id !== test.id);
      });
    }
  }

  onDescribe(test: Test){
    this.onDescribeTest.emit(test);
  }
  onUpdate(test: Test){

  }
}
