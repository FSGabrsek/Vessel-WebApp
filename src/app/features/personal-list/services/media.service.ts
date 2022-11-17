import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { MediaVessel } from '../models/MediaVessel.model';

@Injectable({
    providedIn: 'root'
})
export class MediaService {
    staticMediaVesselStore: MediaVessel[];

    constructor() {
        this.staticMediaVesselStore = []
    }

    staticPostMediaVessel(MediaVessel: MediaVessel) {
        this.staticMediaVesselStore.push(MediaVessel);
    }

    staticGetMediaVessels() {
        return from(this.staticMediaVesselStore);
    }

    staticGetMediaVessel(id: Number) {
        return from(this.staticMediaVesselStore.filter(vessel => {
            vessel.id = id;
        }));
    }
}
