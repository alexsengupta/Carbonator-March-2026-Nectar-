import {Component, ElementRef, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-highcharts-chart',
    template: '',
    styleUrls: ['./highcharts-chart.component.css']
})
export class HighchartsChartComponent implements OnInit {

    constructor(private el: ElementRef) {}


    @Input() Highcharts: any;
    @Input() constructorType: string;
    @Input() callbackFunction: any;

    @Input()
    set options(val) {
        this.optionsValue = val;
        this.updateOrCreateChart();
    }

    @Input() set update(val) {
        if (val) {
            this.updateOrCreateChart();
            this.updateChange.emit(false); // clear the flag after update
        }
    }

    @Output() updateChange: EventEmitter<{}> = new EventEmitter(true);

    optionsValue: any;
    chart: any;


    updateValue: boolean = false;


    @Input() flagOneToOne: boolean; //#20
    ngOnInit() {
    }

    updateOrCreateChart = function () {
        if (this.chart && this.chart.update) {
            this.chart.update(this.optionsValue, true, this.flagOneToOne || false);
        } else {
            this.chart = this.Highcharts[this.constructorType || 'chart'](
                this.el.nativeElement,
                this.optionsValue,
                this.callbackFunction || null
            );
            this.optionsValue.series = this.chart.userOptions.series;
        }
    };
}
