import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

    intervalValue! : Number;
    intervalUnit!: String;

    types = ["series", "film", "literature"];
    statuses = ["upcoming", "airing", "finished"];

    lengthFlavourTextOptions = ["episode", "minute", "chapter"];
    lengthFlavourText = this.lengthFlavourTextOptions[0];
    intervalPlural = 's';

    currentLengthVisible = false;
    releaseIntervalVisible = false;

    constructor(private fb: FormBuilder) {
    }

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

        this.form.get("currentLength")?.addValidators(Validators.min(this.form.get("finalLength")?.value));
    }

    onIntervalChange(event: any) {
        if (event.target.value > 1) {
            this.intervalPlural = 's';
        } else {
            this.intervalPlural = '';
        }
    }

    onSubmit() {
    }
}
