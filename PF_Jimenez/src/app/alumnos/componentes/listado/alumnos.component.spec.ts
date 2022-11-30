import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared/shared.service';
import { AlumnoService } from '../../services/alumno.service';
import { AlumnosComponent } from './alumnos.component';
let matDialogService: jasmine.SpyObj<MatDialog>;
matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

// let alumnosService: jasmine.SpyObj<AlumnoService>;
// alumnosService = jasmine.createSpyObj<AlumnoService>('MatDialog', ['open']);

describe('AlumnosComponent', () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [
        {  provide: MatDialog, useValue: matDialogService},        
         AlumnoService,
         SharedService
        
      ],
      declarations: [ AlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('Se crea el componente', () => {
    expect(component).toBeTruthy(); // undefined -> falsy, null -> falsy, truthy
  });
});
