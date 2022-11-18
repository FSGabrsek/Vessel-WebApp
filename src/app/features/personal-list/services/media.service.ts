import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { EventEmitter, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { MediaVessel } from '../models/MediaVessel.model';

@Injectable({
    providedIn: 'root'
})
export class MediaService {
    staticMediaVesselStore: MediaVessel[];
    staticArrayStoreEvent = new EventEmitter<void>();

    constructor() {
        this.staticMediaVesselStore = [
            new MediaVessel(
                0,
                "series",
                "Steins;Gate",
                `Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.\n
                However, when Rintarou decides to attend neuroscientist Kurisu Makise's conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN.\n
                Due to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.`,
                24,
                24,
                "finished",
                new Date(2011, 4, 11),
                new Date(24 * 3600 * 7)
            ),
            new MediaVessel(
                1,
                "film",
                "Kimi no Na wa.",
                `Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.\n
                One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.\n
                Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.`,
                107,
                107,
                "finished",
                new Date(2016, 8, 26),
                null
            ),
        ]
    }

    staticPostMediaVessel(mediaVessel: MediaVessel) {
        mediaVessel.id = this.staticMediaVesselStore.length
        this.staticMediaVesselStore.push(mediaVessel);
    }

    staticGetMediaVessels(): Observable<MediaVessel> {
        return from(this.staticMediaVesselStore);
    }

    staticGetMediaVessel(id: number): Observable<MediaVessel> {
        return from(this.staticMediaVesselStore.filter(vessel => {
            return vessel.id == id;
        }));
    }

    staticDeleteMediaVessel(id: number) {
        filterArray(this.staticMediaVesselStore, id).then(res => {
            return this.staticMediaVesselStore = res;
        }).then(() => {
            this.staticArrayStoreEvent.emit();
        })
    }

    staticUpdateMediaVessel(mediaVessel: MediaVessel) {
        const i = this.staticMediaVesselStore.findIndex(vessel => vessel.id == mediaVessel.id)!;
        this.staticMediaVesselStore[i] = mediaVessel;
    }
}

async function filterArray(array: MediaVessel[], id: number): Promise<MediaVessel[]> {
    return array.filter(val => {
        return val.id != id;
    })
}
