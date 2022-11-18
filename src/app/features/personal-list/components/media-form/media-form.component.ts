import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaVessel } from '../../models/MediaVessel.model';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.scss']
})
export class MediaFormComponent implements OnInit {
    @Input() inputMediaVessel!: MediaVessel;
    @Output() submitEvent = new EventEmitter<MediaVessel>();
    @Output() cancelEvent = new EventEmitter<void>();

    mediaForm = this.formBuilder.group({
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
        private formBuilder: FormBuilder,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.mediaForm.get("type")?.valueChanges.subscribe( () => {
            if (this.mediaForm.get("type")?.value == this.types[0]) {
                this.lengthFlavourText = this.lengthFlavourTextOptions[0];
                this.mediaForm.get("releaseInterval")?.enable(); 
                if (this.mediaForm.get("status")?.value == this.statuses[1]) {
                    this.mediaForm.get("currentLength")?.enable();
                }
            } else if (this.mediaForm.get("type")?.value == this.types[1]) {
                this.lengthFlavourText = this.lengthFlavourTextOptions[1];
                this.mediaForm.get("currentLength")?.setValue('');
                this.mediaForm.get("currentLength")?.disable();
                this.mediaForm.get("releaseInterval")?.disable();
            } else {
                this.lengthFlavourText = this.lengthFlavourTextOptions[2];
                this.mediaForm.get("releaseInterval")?.enable();
                if (this.mediaForm.get("status")?.value == this.statuses[1]) {
                    this.mediaForm.get("currentLength")?.enable();
                }
            }
        })

        this.mediaForm.get("status")?.valueChanges.subscribe( () => {
            if (this.mediaForm.get("status")?.value == this.statuses[0]) {
                this.mediaForm.get("currentLength")?.setValue('');
                this.mediaForm.get("currentLength")?.disable();
                if (this.mediaForm.get("type")?.value != this.types[1]) {
                    this.mediaForm.get("releaseInterval")?.enable(); 
                }
            } else if (this.mediaForm.get("status")?.value == this.statuses[2]) {
                this.mediaForm.get("currentLength")?.setValue('');
                this.mediaForm.get("currentLength")?.disable();
                this.mediaForm.get("releaseInterval")?.disable();

            } else {
                if (this.mediaForm.get("type")?.value != this.types[1]) {
                    this.mediaForm.get("currentLength")?.enable();
                    this.mediaForm.get("releaseInterval")?.enable();
                }
            }
        })

        this.mediaForm.get("currentLength")?.valueChanges.subscribe( () => {
            this.currentLengthVisible = this.mediaForm.get("currentLength")?.enabled ? true : false;
        })

        this.mediaForm.get("releaseInterval")?.valueChanges.subscribe( () => {
            this.releaseIntervalVisible = this.mediaForm.get("releaseInterval")?.enabled ? true : false;
        })

        this.mediaForm.get("currentLength")?.addValidators(Validators.max(0));
        this.mediaForm.get("finalLength")?.valueChanges.subscribe(val => { 
            this.mediaForm.get("currentLength")?.clearValidators();
            this.mediaForm.get("currentLength")?.addValidators(Validators.min(0));
            this.mediaForm.get("currentLength")?.addValidators(Validators.max(val));
            this.mediaForm.get("currentLength")?.updateValueAndValidity();
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
        const type = this.mediaForm.get("type")?.value;
        const title = this.mediaForm.get("title")?.value;
        const synopsis = this.mediaForm.get("synopsis")?.value;
        const finalLength = this.mediaForm.get("finalLength")?.value;
        const status =  this.mediaForm.get("status")?.value;
        let currentLength = 0;
        const releaseDate = this.mediaForm.get("releaseDate")?.value;
        let releaseInterval = null

        if (type == this.types[0] || type == this.types[2]) {
            if (status == this.statuses[0]) {
                currentLength = 0;
            } else if (status == this.statuses[1]) {
                currentLength = this.mediaForm.get("currentLength")?.value;
            } else {
                currentLength = finalLength;
            }
        } else {
            currentLength = finalLength;
        }

        if ((this.intervalUnit == 'd' || this.intervalUnit == 'w') && this.intervalValue != null && this.mediaForm.get("releaseInterval")?.enabled) {
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
        
        this.submitEvent.emit(mediaVessel);
    }
}
