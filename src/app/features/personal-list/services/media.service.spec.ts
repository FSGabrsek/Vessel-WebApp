import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/core/models/user.model';
import { MediaSoul } from '../models/mediaSoul.model';
import { MediaVessel } from '../models/mediaVessel.model';

import { MediaService } from './media.service';

    describe('MediaService', () => {
        let service: MediaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MediaService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should create a new soul and vessel', (done: DoneFn) => {
        const user = new User(
            0,
            "jd",
            "johndoe@email.com",
            new Date(0)
        );
        
        const vessel = new MediaVessel(
                0,
                "series",
                "title",
                `synopsis`,
                10,
                10,
                "finished",
                new Date(1970, 1, 1),
                new Date(24 * 3600 * 7 * 1000),
                user
            );

        expect(service.staticPostMediaVessel(vessel)).toBeUndefined();
        done();
    });

    it('should retrieve all souls', (done: DoneFn) => {
        service.staticGetMediaSouls().subscribe({
            next: (soul) => {
                expect(soul).toBeInstanceOf(MediaSoul);
                done();
            },
            error: () => {
                done.fail()
            }
        });
    })

    it('should retieve 1 soul with a given id', (done: DoneFn) => {
        const id = 0;
        service.staticGetMediaSoul(0).subscribe({
            next: (soul) => {
                expect(soul.id).toEqual(id);
                done();
            },
            error: () => {
                done.fail()
            }
        });
    });
});
