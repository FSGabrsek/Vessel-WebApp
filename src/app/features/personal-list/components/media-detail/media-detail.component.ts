import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaSoul } from '../../models/mediaSoul.model';
import { MediaVessel } from '../../models/mediaVessel.model';
import { MediaService } from '../../services/media.service';

@Component({
    selector: 'app-media-detail',
    templateUrl: './media-detail.component.html',
    styleUrls: ['./media-detail.component.scss']
    })
export class MediaDetailComponent implements OnInit {
    id!: number;
    mediaSoul!: MediaSoul;
    mediaVessel!: MediaVessel;
    lengthFlavourText!: String;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private mediaService: MediaService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = parseInt(params.get("id")!);            
            this.mediaService.staticGetMediaSoul(this.id).subscribe(soul => {
                
                const vessel = soul.vessel;
                this.mediaSoul = soul;
                
                this.mediaVessel = soul.vessel;
                switch (vessel.type) {
                    case "series":
                        if (vessel.status == "finished") {
                            this.lengthFlavourText = `${vessel.currentLength} episodes`;
                        } else {
                            this.lengthFlavourText = `${vessel.currentLength} episodes out of ${vessel.finalLength} released`;
                        }
                        break;
                    case "film":
                        this.lengthFlavourText = `${vessel.currentLength} minutes`;
                        break;
                    case "literature":
                        if (vessel.status == "finished") {
                            this.lengthFlavourText = `${vessel.currentLength} chapters`;
                        } else {
                            this.lengthFlavourText = `${vessel.currentLength} chapters out of ${vessel.finalLength} released`;
                        }
                        break;
                    default:
                        break;
                }
            });
        });
    }

    onDelete() {
        this.mediaService.staticDeleteMediaSoul(this.id);
        this.router.navigate([".."], { relativeTo: this.route });
    }

    onUpdate(progress: number) {
        this.mediaSoul.progress = progress;
        this.mediaService.staticUpdateMediaSoul(this.mediaSoul)
    }
}
