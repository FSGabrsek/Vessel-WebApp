import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-media-progress',
    templateUrl: './media-progress.component.html',
    styleUrls: ['./media-progress.component.scss']
})
export class MediaProgressComponent implements OnInit {
    @Input() progress!: number;
    @Input() length!: number;
    @Output() progressEvent = new EventEmitter<number>();

    progressControl! : FormControl;

    constructor() { }

    ngOnInit(): void {
        this.progressControl = new FormControl(this.progress, [Validators.required, Validators.min(0), Validators.max(this.length)]);
        this.progressControl.valueChanges
        .subscribe(val => {
            if (this.progressControl.valid) {
                this.progressEvent.emit(this.progressControl.value);
            }
        });
    }

    increaseProgress() {
        if (this.progress < this.length) {
            this.progressEvent.emit(this.progress + 1);
        }
    }

    decreaseProgress() {
        if (this.progress > 0) {
            this.progressEvent.emit(this.progress - 1);
        }
    }

    progressStyle() {
        return `width: ${( this.progress / this.length ) * 100}%`;
    }

    progressClass() {
        return this.progress == this.length ? "progress-finished" : "progress-in-progress";
    }
}
