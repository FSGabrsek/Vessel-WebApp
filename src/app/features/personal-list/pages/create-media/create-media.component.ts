import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaVessel } from '../../models/MediaVessel.model';
import { MediaService } from '../../services/media.service';

@Component({
    selector: 'app-create-media',
    templateUrl: './create-media.component.html',
    styleUrls: ['./create-media.component.scss'],
})
export class CreateMediaComponent implements OnInit {
    constructor(
        private router: Router,
        private mediaService: MediaService
    ) {}

    ngOnInit(): void {
    }

    postMedia(mediaVessel: MediaVessel) {
        this.mediaService.staticPostMediaVessel(mediaVessel);
        this.router.navigate([`view-media/${mediaVessel.id}`]);
    }
}
