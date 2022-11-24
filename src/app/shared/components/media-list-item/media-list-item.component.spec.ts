import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/core/models/user.model';
import { MediaSoul } from 'src/app/features/personal-list/models/mediaSoul.model';
import { MediaVessel } from 'src/app/features/personal-list/models/mediaVessel.model';

import { MediaListItemComponent } from './media-list-item.component';

const user = new User(
    0,
    "jd",
    "johndoe@email.com",
    new Date(0)
);

const soul = new MediaSoul(
    0,
    0,
    new Date(),
    new MediaVessel(
        0,
        "series",
        "title",
        `synopsis`,
        10,
        10,
        "finished",
        new Date(1970, 1, 1),
        new Date(24 * 3600 * 7 * 1000),
        user
    ),
    user
);

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
        template: `<app-media-list-item [mediaSoul]="testModel"></app-media-list-item>`
    })
    class TestHostComponent {
        testModel = soul
    }
});