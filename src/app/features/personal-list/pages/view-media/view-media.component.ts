import { Component, OnInit } from '@angular/core';
import { MediaVessel } from '../../models/MediaVessel.model';
import { MediaService } from '../../services/media.service';

@Component({
    selector: 'app-view-media',
    templateUrl: './view-media.component.html',
    styleUrls: ['./view-media.component.scss']
})
export class ViewMediaComponent implements OnInit {
    mediaVesselArray: MediaVessel[] = []

    constructor(private mediaService: MediaService) { }

    ngOnInit(): void {
        let sub = this.mediaService.staticGetMediaVessels()
        .subscribe(mediaVessel => { this.mediaVesselArray.push(mediaVessel) });

        this.mediaService.staticArrayStroreEvent
        .subscribe(() => { 
            this.mediaVesselArray = [];
            sub.unsubscribe();
            sub = this.mediaService.staticGetMediaVessels()
            .subscribe(mediaVessel => { this.mediaVesselArray.push(mediaVessel) });
        })
    }

}
