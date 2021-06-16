import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  value: any;
  employeeForm!: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras.state;
    this.initForm();
  }

  ngOnInit(): void { }

  onSave(): void {
    console.log('Saved', this.employeeForm)

  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      name: [],
      lastName: [],
      email: [],
      startDate: [],
    })
  }

}
