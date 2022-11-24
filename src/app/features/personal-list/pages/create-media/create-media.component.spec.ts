import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MediaFormComponent } from '../../components/media-form/media-form.component';

import { CreateMediaComponent } from './create-media.component';

describe('CreateMediaComponent', () => {
    let component: CreateMediaComponent;
    let fixture: ComponentFixture<CreateMediaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [ 
                CreateMediaComponent,
                MediaFormComponent 
            ]
        })
        .compileComponents();
    });

     beforeEach(() => {
        fixture = TestBed.createComponent(CreateMediaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
