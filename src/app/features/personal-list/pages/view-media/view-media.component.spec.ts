import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MediaListItemComponent } from 'src/app/shared/components/media-list-item/media-list-item.component';

import { ViewMediaComponent } from './view-media.component';

describe('ViewMediaComponent', () => {
  let component: ViewMediaComponent;
  let fixture: ComponentFixture<ViewMediaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [
            AppRoutingModule,
        ],
        declarations: [ 
            ViewMediaComponent,
            MediaListItemComponent 
        ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewMediaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
