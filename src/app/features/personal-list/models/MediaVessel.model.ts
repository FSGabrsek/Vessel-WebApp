import { Generic } from "src/app/core/models/generic.model";

export class MediaVessel extends Generic {
    type: ["series", "film", "literature"];
    title: String;
    synopsis: String;
    finalLength: number;
    currentLength: number;
    status: ["upcoming", "airing", "finished"];
    releaseDate: Date;
    releaseInterval: Date | null;

    constructor(
        id: number, 
        type: ["series", "film", "literature"], 
        title: String, 
        synopsis: String, 
        finalLength: number, 
        currentLength: number, 
        status: ["upcoming", "airing", "finished"], 
        releaseDate: Date, 
        releaseInterval: Date | null
        ) {
        super(id);
        
        this.type = type;
        this.title = title;
        this.synopsis = synopsis;
        this.finalLength = finalLength;
        this.currentLength = currentLength;
        this.status = status;
        this.releaseDate = releaseDate;
        this.releaseInterval = releaseInterval;
    }
}