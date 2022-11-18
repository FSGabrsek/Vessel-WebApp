import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaVessel } from '../../models/MediaVessel.model';
import { MediaService } from '../../services/media.service';

@Component({
    selector: 'app-media-edit',
    templateUrl: './media-edit.component.html',
    styleUrls: ['./media-edit.component.scss']
})
export class MediaEditComponent implements OnInit {
    id!: number;
    mediaVessel!: MediaVessel;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private mediaService: MediaService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = parseInt(params.get("id")!);
            this.mediaService.staticGetMediaVessel(this.id)
            .subscribe(vessel => {
                this.mediaVessel = vessel;
            })
        });
    }

    updateMedia(mediaVessel: MediaVessel) {
        this.mediaService.staticUpdateMediaVessel(mediaVessel);
        this.router.navigate([".."], { relativeTo: this.route });
    }
}
