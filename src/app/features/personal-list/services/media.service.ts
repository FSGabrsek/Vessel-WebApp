import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { EventEmitter, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Generic } from 'src/app/core/models/generic.model';
import { User } from 'src/app/core/models/user.model';
import { MediaSoul } from '../models/mediaSoul.model';
import { MediaVessel } from '../models/mediaVessel.model';

const user = new User(
    0,
    "jd",
    "johndoe@mail.com",
    new Date(0)
)

@Injectable({
    providedIn: 'root'
})
export class MediaService {
    staticMediaVesselStore: MediaVessel[];
    staticMediaSoulStore: MediaSoul[];
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
                new Date(24 * 3600 * 7 * 1000),
                user
            ),
            new MediaVessel(
                1,
                "film",
                "Kimi no Na wa.",
                `A comet appears and mysteriously affects and connects the lives of two teenagers of the same age, a boy in the big, bustling city of Tokyo and a girl in a country village where life is slow but idyllic. They find for unknown reasons, they wake up in each other's bodies for weeks at a time. At first, they both think these experiences are just vivid dreams, but when the reality of their situations sinks in, they learn to adjust and even enjoy it. Soon they start to communicate and try to leave notes about who they are and what they are doing. But as they discover more about each other and the other's life, they uncover some disturbing hints that their distance is more than just physical and tragedy haunts them.`,
                107,
                107,
                "finished",
                new Date(2016, 8, 26),
                null,
                user
            ),
            new MediaVessel(
                2,
                "series",
                "The Mandalorian Season 1",
                `After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter. `,
                8,
                8,
                "finished",
                new Date(2019, 11, 12),
                new Date(24 * 3600 * 7 * 1000),
                user
            ),
            new MediaVessel(
                3,
                "film",
                "Im Westen nichts Neues",
                `The story follows teenagers Paul Bäumer and his friends Albert and Müller, who voluntarily enlist in the German army, riding a wave of patriotic fervor that quickly dissipates once they face the brutal realities of life on the front. Paul's preconceptions about the enemy and the rights and wrongs of the conflict soon crumble. However, amid the countdown to armistice, Paul must carry on fighting until the end, with no purpose other than to satisfy the top brass' desire to end the war on a German offensive.`,
                148,
                148,
                "finished",
                new Date(2022, 10, 28),
                null,
                user
            ),
            new MediaVessel(
                4,
                "literature",
                "The Paradox Paradox",
                `Osheen Shupple has been working his entire life to resolve the paradox of a desperate audio message from years ago, one which holds a horrifying secret that will change the course of history. His plan: build a time machine and return to the source of the message. But he can’t do it alone.\n
                Fortunately, the universe has supplied a perfect team: an archaeologist serving 28 life sentences, a veterinarian with an identity crisis and no original body parts, a cheating university student, and a famous/very, very dead starship captain.\n
                Together, they will be propelled across the past, and to worlds beyond their timelines, on a temporal treasure-hunt to trace the tragic truth behind whoever Austin Lang turns out to be.\n
                But time is not to be trifled with, and every misstep unmasks another layer of chronological chaos. The past can’t be changed – but will there be a future worth saving...?`,
                0,
                0,
                "upcoming",
                new Date(2023, 4, 16),
                null,
                user
            ),
        ];

        this.staticMediaSoulStore = [
            new MediaSoul(
                0,
                24,
                new Date(),
                this.staticMediaVesselStore[0],
                user
            ),
            new MediaSoul(
                1,
                107,
                new Date(),
                this.staticMediaVesselStore[1],
                user
            ),
            new MediaSoul(
                2,
                3,
                new Date(),
                this.staticMediaVesselStore[2],
                user
            ),
            new MediaSoul(
                3,
                0,
                new Date(),
                this.staticMediaVesselStore[3],
                user
            ),
            new MediaSoul(
                4,
                0,
                new Date(),
                this.staticMediaVesselStore[4],
                user
            ),
        ];
    }

    staticPostMediaVessel(mediaVessel: MediaVessel) {
        mediaVessel.id = this.staticMediaVesselStore.length
        this.staticMediaVesselStore.push(mediaVessel);
        this.staticMediaSoulStore.push(new MediaSoul (
            this.staticMediaSoulStore.length,
            0,
            new Date(),
            mediaVessel,
            user
        ))
    }

    staticGetMediaVessels(): Observable<MediaVessel> {
        return from(this.staticMediaVesselStore);
    }

    staticGetMediaSouls(): Observable<MediaSoul> {
        return from(this.staticMediaSoulStore);
    }

    staticGetMediaVessel(id: number): Observable<MediaVessel> {
        return from(this.staticMediaVesselStore.filter(val => {
            return val.id == id;
        }));
    }

    staticGetMediaSoul(id: number): Observable<MediaSoul> {
        return from(this.staticMediaSoulStore.filter(val => {
            return val.id == id;
        }));
    }

    staticDeleteMediaVessel(id: number) {
        filterArray<MediaVessel>(this.staticMediaVesselStore, id).then(res => {
            return this.staticMediaVesselStore = res;
        }).then(() => {
            this.staticArrayStoreEvent.emit();
        })
    }

    staticDeleteMediaSoul(id: number) {
        filterArray<MediaSoul>(this.staticMediaSoulStore, id).then(res => {
            return this.staticMediaSoulStore = res;
        }).then(() => {
            this.staticDeleteMediaVessel(id);
            this.staticArrayStoreEvent.emit();
        })
    }

    staticUpdateMediaVessel(mediaVessel: MediaVessel) {
        const i = this.staticMediaVesselStore.findIndex(vessel => vessel.id == mediaVessel.id)!;
        this.staticMediaVesselStore[i] = mediaVessel;
    }

    staticUpdateMediaSoul(mediaSoul: MediaSoul) {
        const i = this.staticMediaVesselStore.findIndex(vessel => vessel.id == mediaSoul.id)!;
        this.staticMediaSoulStore[i] = mediaSoul;
    }
}

async function filterArray<T extends Generic>(array: T[], id: number): Promise<T[]> {
    return array.filter(val => {
        return val.id != id;
    })
}
