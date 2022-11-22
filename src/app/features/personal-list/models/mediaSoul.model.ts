import { Generic } from "src/app/core/models/generic.model";
import { User } from "src/app/core/models/user.model";
import { MediaVessel } from "./mediaVessel.model";

export class MediaSoul extends Generic {
    private _progress: number;
    lastModified: Date;
    status: "finished" | "in progress" | "not started";
    vessel: MediaVessel;
    owner: User;

    constructor(
        id: number, 
        progress: number, 
        lastModified: Date, 
        vessel: MediaVessel, 
        owner: User
    ) {
        super(id);

        this._progress = progress;
        this.lastModified = lastModified;
        this.vessel = vessel;
        this.owner = owner

        this.status = this.getStatus(progress, vessel.finalLength);
    }

    public get progress(): number {
        return this._progress;
    }
    public set progress(value: number) {
        this._progress = value;
        this.status = this.getStatus(value, this.vessel.finalLength)
    }

    private getStatus(progress: number, length: number): "finished" | "in progress" | "not started" {
        if (progress >= length) {
            return "finished";
        } else if (progress <= 0) {
            return "not started";
        } else {
            return "in progress";
        }
    }
}