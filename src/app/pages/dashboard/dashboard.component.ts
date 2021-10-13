import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardModel } from 'src/app/models/dashboard';
import { DashboardServiceService } from '../../services/dashboard-service.service';
import { yojnaModel } from 'src/app/models/yojna.model';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  yojnaForm!: FormGroup;
  yojnaData!: any;
  showModal: boolean = false;
  editMode: boolean = false;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    this.yojnaForm = this.fb.group({
      _id: [''],
      title: [''],
      price: [''],
      units: [''],
      schemePayUrl: [''],
    });
    this.getYojna();
  }

  onYojnaSubmit() {
    if (this.yojnaForm.valid) {

      if (this.editMode) {
        this.api.updateYojna(this.yojnaForm.value)
        .subscribe(
          (res) => {
            console.log(res);
            alert("Yojna Updated  successfully");
            let ref = document.getElementById('cancel');
            this.getYojna();
          },
          (err) => {
            console.log(err);
          }
        )
      } else {
        this.api.addYojna(this.yojnaForm.value)
          .subscribe(
            (res) => {
              console.log(res);
              alert("Yojna Added successfully");
              let ref = document.getElementById('cancel');
              this.getYojna();
            },
            (err) => {
              console.log(err);
            }
          )
      }

    }
  }


  getYojna() {
    this.api.getYojnaList()
      .subscribe(res => {
        this.yojnaData = res;
      })
  }

  onDeleteYojna(id: any) {
    if (confirm('Are you sure you want to delete this employee')) {
      this.api.deleteYojna(id).subscribe(
        (res) => {
          console.log(res);
          this.getYojna();
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

  onEditYojna(yoj: yojnaModel) {
    this.yojnaForm.patchValue(yoj);
    if (this.yojnaForm.valid) {
      this.api.updateYojna(this.yojnaForm.value)
        .subscribe(
          (res) => {
            console.log(res + ' updated');
            let ref = document.getElementById('cancel');
            this.getYojna();
          },
          (err) => {
            console.log(err);
          }
        )
    }
  }

  onEdit(yoj: yojnaModel) {
    this.editMode = true;
    this.yojnaForm.patchValue(yoj);
  }
}
