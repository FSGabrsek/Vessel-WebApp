import { Generic } from "src/app/core/models/generic.model";
import { User } from "src/app/core/models/user.model";

export class MediaVessel extends Generic {
    type: "series" | "film" | "literature";
    title: String;
    synopsis: String;
    finalLength: number;
    currentLength: number;
    status: "upcoming" | "airing" | "finished";
    releaseDate: Date;
    releaseInterval: Date | null;
    owner: User;

    constructor(
        id: number, 
        type: "series" | "film" | "literature",
        title: String, 
        synopsis: String, 
        finalLength: number, 
        currentLength: number, 
        status: "upcoming" | "airing" | "finished", 
        releaseDate: Date, 
        releaseInterval: Date | null,
        owner: User
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
        this.owner = owner;
    }
}