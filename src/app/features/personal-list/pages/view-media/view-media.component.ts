import { Component, OnInit } from '@angular/core';
import { MediaSoul } from '../../models/mediaSoul.model';
import { MediaVessel } from '../../models/mediaVessel.model';
import { MediaService } from '../../services/media.service';

@Component({
    selector: 'app-view-media',
    templateUrl: './view-media.component.html',
    styleUrls: ['./view-media.component.scss']
})
export class ViewMediaComponent implements OnInit {
    mediaSoulArray: MediaSoul[] = []

    constructor(private mediaService: MediaService) { }

    ngOnInit(): void {
        let sub = this.mediaService.staticGetMediaSouls()
        .subscribe(soul => { this.mediaSoulArray.push(soul) });

        this.mediaService.staticArrayStoreEvent
        .subscribe(() => { 
            this.mediaSoulArray = [];
            sub.unsubscribe();
            sub = this.mediaService.staticGetMediaSouls()
            .subscribe(soul => { this.mediaSoulArray.push(soul) });
        })
    }

}
