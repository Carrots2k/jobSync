import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { DivisionService } from '../../services/division.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule , Validators  } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { divisionModels } from '../../models/divisions';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [InputTextModule, InputTextModule, MultiSelectModule, CommonModule, ReactiveFormsModule, FloatLabelModule, InputTextareaModule , 
    FormsModule , ButtonModule  ],
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})
export class CreateJobComponent implements OnInit {

  jobForm!: FormGroup;
  divisions: string[] = [];
  submitted: boolean = false;
  selectedDivisions: divisionModels[] = [];

 
constructor(private fb: FormBuilder, private divisionService: DivisionService){
}

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm(){
    this.divisions = this.divisionService.getDivisions().divisions;
    console.log(this.divisions);
      
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      selectedDivisions: [[], Validators.required]
    });
  }

  get f() {
    return this.jobForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.jobForm.invalid) {
      return;
    }

    console.log('Form submitted:', this.jobForm.value);
  }
}
