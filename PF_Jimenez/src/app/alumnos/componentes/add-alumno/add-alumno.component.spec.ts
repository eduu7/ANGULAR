import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/Modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedService } from 'src/app/shared/shared.service';
import { AlumnoService } from '../../services/alumno.service';
import { AddAlumnoComponent } from './add-alumno.component';

let matDialogService: jasmine.SpyObj<MatDialog>;
matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

describe('AddAlumnoComponent', () => {
  let component: AddAlumnoComponent;
  let fixture: ComponentFixture<AddAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        BrowserAnimationsModule
      ],
      providers: [
        {  provide: MatDialog, useValue: matDialogService},        
         AlumnoService,
         SharedService
        
      ],
      declarations: [ AddAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
