import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaVessel } from 'src/app/features/personal-list/models/MediaVessel.model';

import { MediaListItemComponent } from './media-list-item.component';

describe('MediaListItemComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ 
            TestHostComponent,
            MediaListItemComponent 
        ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    @Component({
        selector: `test-host-component`,
        template: `<app-media-list-item [mediaVessel]="testInput"></app-media-list-item>`
    })
    class TestHostComponent {
        testInput =  new MediaVessel(
            0,
            "series",
            "title",
            `synopsis`,
            10,
            10,
            "finished",
            new Date(1970, 1, 1),
            new Date(24 * 3600 * 7 * 1000)
        )
    }
});
