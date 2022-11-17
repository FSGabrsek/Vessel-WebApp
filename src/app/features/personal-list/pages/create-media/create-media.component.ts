import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MediaVessel } from '../../models/MediaVessel.model';
import { MediaService } from '../../services/media.service';

@Component({
    selector: 'app-create-media',
    templateUrl: './create-media.component.html',
    styleUrls: ['./create-media.component.scss'],
})
export class CreateMediaComponent implements OnInit {
    form = this.fb.group({
        type: ['', Validators.required],
        title: ['', Validators.required],
        synopsis: ['', Validators.required],
        finalLength: ['', [ Validators.required, Validators.min(1) ]],
        currentLength: ['', Validators.min(0)],
        status: ['', Validators.required],
        releaseDate: ['', Validators.required],
        releaseInterval: [''],
    });

    intervalValue! : number;
    intervalUnit!: String;

    types = ["series", "film", "literature"];
    statuses = ["upcoming", "airing", "finished"];

    lengthFlavourTextOptions = ["episode", "minute", "chapter"];
    lengthFlavourText = this.lengthFlavourTextOptions[0];
    intervalPlural = 's';

    currentLengthVisible = false;
    releaseIntervalVisible = false;

    constructor(
        private fb: FormBuilder,
        private mediaService: MediaService
    ) {}

    ngOnInit(): void {
        this.form.get("type")?.valueChanges.subscribe( () => {
            if (this.form.get("type")?.value == this.types[0]) {
                this.lengthFlavourText = this.lengthFlavourTextOptions[0];
                this.form.get("releaseInterval")?.enable(); 
                if (this.form.get("status")?.value == this.statuses[1]) {
                    this.form.get("currentLength")?.enable();
                }
            } else if (this.form.get("type")?.value == this.types[1]) {
                this.lengthFlavourText = this.lengthFlavourTextOptions[1];
                this.form.get("currentLength")?.setValue('');
                this.form.get("currentLength")?.disable();
                this.form.get("releaseInterval")?.disable();
            } else {
                this.lengthFlavourText = this.lengthFlavourTextOptions[2];
                this.form.get("releaseInterval")?.enable();
                if (this.form.get("status")?.value == this.statuses[1]) {
                    this.form.get("currentLength")?.enable();
                }
            }
        })

        this.form.get("status")?.valueChanges.subscribe( () => {
            if (this.form.get("status")?.value == this.statuses[0]) {
                this.form.get("currentLength")?.setValue('');
                this.form.get("currentLength")?.disable();
                if (this.form.get("type")?.value != this.types[1]) {
                    this.form.get("releaseInterval")?.enable(); 
                }
            } else if (this.form.get("status")?.value == this.statuses[2]) {
                this.form.get("currentLength")?.setValue('');
                this.form.get("currentLength")?.disable();
                this.form.get("releaseInterval")?.disable();

            } else {
                if (this.form.get("type")?.value != this.types[1]) {
                    this.form.get("currentLength")?.enable();
                    this.form.get("releaseInterval")?.enable();
                }
            }
        })

        this.form.get("currentLength")?.valueChanges.subscribe( () => {
            this.currentLengthVisible = this.form.get("currentLength")?.enabled ? true : false;
        })

        this.form.get("releaseInterval")?.valueChanges.subscribe( () => {
            this.releaseIntervalVisible = this.form.get("releaseInterval")?.enabled ? true : false;
        })

        this.form.get("currentLength")?.addValidators(Validators.max(0));
        this.form.get("finalLength")?.valueChanges.subscribe(val => { 
            this.form.get("currentLength")?.clearValidators();
            this.form.get("currentLength")?.addValidators(Validators.min(0));
            this.form.get("currentLength")?.addValidators(Validators.max(val));
            this.form.get("currentLength")?.updateValueAndValidity();
        });
    }

    onIntervalChange(event: any) {
        if (event.target.value > 1) {
            this.intervalPlural = 's';
        } else {
            this.intervalPlural = '';
        }
    }

    onSubmit() {
        const type = this.form.get("type")?.value;
        const title = this.form.get("title")?.value;
        const synopsis = this.form.get("synopsis")?.value;
        const finalLength = this.form.get("finalLength")?.value;
        const status =  this.form.get("status")?.value;
        let currentLength = 0;
        const releaseDate = this.form.get("releaseDate")?.value;
        let releaseInterval = null

        if (type == this.types[0] || type == this.types[2]) {
            if (status == this.statuses[0]) {
                currentLength = 0;
            } else if (status == this.statuses[1]) {
                currentLength = this.form.get("currentLength")?.value;
            } else {
                currentLength = finalLength;
            }
        } else {
            currentLength = finalLength;
        }

        if ((this.intervalUnit == 'd' || this.intervalUnit == 'w') && this.intervalValue != null && this.form.get("releaseInterval")?.enabled) {
            let weekMult = 1;
            if (this.intervalUnit == 'w') {
                weekMult = 7;
            }
            releaseInterval = new Date(24 * 3600 * 1000 * this.intervalValue * weekMult);
        } else {
            releaseInterval = null;
        }

        const mediaVessel = new MediaVessel(
            -1, 
            type, 
            title, 
            synopsis, 
            finalLength, 
            currentLength, 
            status, 
            releaseDate, 
            releaseInterval
        );
        console.log(mediaVessel);
        
        this.mediaService.staticPostMediaVessel(mediaVessel);
    }
}
