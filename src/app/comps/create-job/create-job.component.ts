import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { DivisionService } from '../../services/division.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule , Validators  } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';

import { ButtonModule } from 'primeng/button';
import { divisionModel } from '../../models/division';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [InputTextModule, InputTextModule, MultiSelectModule, CommonModule, ReactiveFormsModule, FloatLabelModule, InputTextareaModule , 
    FormsModule , ButtonModule, CardModule, CalendarModule  ],
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})
export class CreateJobComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter<boolean>();
  jobForm!: FormGroup;
  divisions: divisionModel[] = [];
  submitted: boolean = false;
  closeModal: boolean = false;
  selectedDivisions: divisionModel[] = [];

  time24h: Date[] | undefined;
  

 
constructor(private fb: FormBuilder, private divisionService: DivisionService){
}

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm(){
    this.divisions = this.divisionService.getDivisions();
    console.log(this.divisions);
      
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      divisions: [[], Validators.required]
    });
  }

  get f() {
    return this.jobForm.controls;
  }

  onSubmit() {

    if (this.jobForm.invalid) {
      return;
    }

    this.submitted = true;
    console.log('Form submitted:', this.jobForm.value);
    this.showModal();
  }

  showModal(){
    this.closeModal = true;
    this.closeModalEvent.emit(this.closeModal);
    console.log('show modal status', this.closeModal);
  }
}
