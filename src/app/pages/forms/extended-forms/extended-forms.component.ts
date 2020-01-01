import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import noUiSlider from "nouislider";

@Component({
  selector: "app-extended-forms",
  templateUrl: "./extended-forms.component.html",
  styleUrls: ["./extended-forms.component.css"]
})
export class ExtendedFormsComponent implements OnInit {
  public tagItems = ["Minimal", "Light", "New", "Friends"];

  public simpleSlider = 40;
  public doubleSlider = [20, 60];

  public state: boolean = true;
  public state1: boolean = true;
  public state2: boolean = true;

  public dropdownList = [];
  public selectedItems = [];
  public dropdownSettings = {};

  public dropdownList1 = [];
  public selectedItems1 = [];
  public dropdownSettings1 = {};

  public model: NgbDateStruct;
  public model1: NgbDateStruct;
  public model2: NgbDateStruct;

  public today = this.calendar.getToday();

  // @Input() footerTemplate: TemplateRef<any>;

  constructor(private calendar: NgbCalendar) {}

  ngOnInit() {
    this.dropdownList = [
      { id: 1, itemName: "Roman" },
      { id: 2, itemName: "Paris" },
      { id: 3, itemName: "Bucharest" },
      { id: 4, itemName: "Rome" },
      { id: 5, itemName: "New York" },
      { id: 6, itemName: "Miami" },
      { id: 7, itemName: "Piatra Neamt" },
      { id: 8, itemName: "Paris" },
      { id: 9, itemName: "Bucharest" },
      { id: 10, itemName: "Rome" },
      { id: 11, itemName: "New York" },
      { id: 12, itemName: "Miami" },
      { id: 13, itemName: "Piatra Neamt" }
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Multiple Select",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: ""
    };

    this.dropdownList1 = [
      { id: 1, itemName: "Roman" },
      { id: 2, itemName: "Paris" },
      { id: 3, itemName: "Bucharest" },
      { id: 4, itemName: "Rome" },
      { id: 5, itemName: "New York" },
      { id: 6, itemName: "Miami" },
      { id: 7, itemName: "Piatra Neamt" },
      { id: 8, itemName: "Paris" },
      { id: 9, itemName: "Bucharest" },
      { id: 10, itemName: "Rome" },
      { id: 11, itemName: "New York" },
      { id: 12, itemName: "Miami" },
      { id: 13, itemName: "Piatra Neamt" }
    ];
    this.selectedItems1 = [];
    this.dropdownSettings1 = {
      singleSelection: true,
      text: "Single Select",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: ""
    };

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}
