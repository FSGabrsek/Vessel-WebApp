import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MediaFormComponent } from '../media-form/media-form.component';

import { MediaEditComponent } from './media-edit.component';

describe('MediaEditComponent', () => {
    let component: MediaEditComponent;
    let fixture: ComponentFixture<MediaEditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                MediaEditComponent,
                MediaFormComponent 
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MediaEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
