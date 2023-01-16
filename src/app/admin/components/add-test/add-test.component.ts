import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Test } from 'src/app/Test';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit{
  isLinear = true;
  tests: any;

  Empregister = this.fb.group({
    generalInformations: this.fb.group({
      status: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    }),
    channelSettings: this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      duration: ['', Validators.required]
    }),
    sniffSetup: this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
    })
  });

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router){}
  
  ngOnInit(): void {
    
  }

  get generalInformationsForm(){
    return this.Empregister.get('generalInformations') as FormGroup;
  }
  get channelSettingsForm(){
    return this.Empregister.get('channelSettings') as FormGroup;
  }
  get sniffSetupForm(){
    return this.Empregister.get('sniffSetup') as FormGroup;
  }
  onSubmit(){
    if(this.Empregister.valid){
      const newTest: Test = {
      generalInformations: {
        status: this.Empregister.value.generalInformations?.status as string,
        name: this.Empregister.value.generalInformations?.name as string,
        image: this.Empregister.value.generalInformations as string,
        description: this.Empregister.value.generalInformations?.description as string
      },
      channelSettings: {
          name: this.Empregister.value.channelSettings?.name as string,
          description: this.Empregister.value.channelSettings?.description as string,
          type: this.Empregister.value.channelSettings?.type as string,
          duration: this.Empregister.value.channelSettings?.duration as string
      },
      sniffSetup: {
        name: this.Empregister.value.sniffSetup?.name as string,
        code: this.Empregister.value.sniffSetup?.code as string,
      }
      };
      this.adminService.addTest(newTest).subscribe(res => {
        alert('Test add success');
        this.router.navigate(['dashboard']);
      });
      console.warn(this.Empregister.value);

      console.log("==>", newTest);
    }

  }

}
