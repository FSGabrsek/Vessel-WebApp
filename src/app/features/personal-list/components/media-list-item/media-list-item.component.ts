import { Component, Input, OnInit } from '@angular/core';
import { MediaVessel } from '../../models/MediaVessel.model';

@Component({
    selector: 'app-media-list-item',
    templateUrl: './media-list-item.component.html',
    styleUrls: ['./media-list-item.component.scss']
})
export class MediaListItemComponent implements OnInit {
    @Input() mediaVessel!: MediaVessel;

    constructor() { }

    ngOnInit(): void {
    }

    progressClass() {
        return "in-progress"
    }
}
