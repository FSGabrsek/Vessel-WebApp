import { Component, Input, OnInit } from '@angular/core';
import { MediaSoul } from 'src/app/features/personal-list/models/mediaSoul.model';
import { MediaVessel } from 'src/app/features/personal-list/models/mediaVessel.model';

@Component({
    selector: 'app-media-list-item',
    templateUrl: './media-list-item.component.html',
    styleUrls: ['./media-list-item.component.scss']
})
export class MediaListItemComponent implements OnInit {
    @Input() mediaSoul!: MediaSoul;
    mediaVessel!: MediaVessel

    constructor() { }

    ngOnInit(): void {
        this.mediaVessel = this.mediaSoul.vessel;
    }

    progressClass() {
        return this.mediaSoul.status;
    }
}
