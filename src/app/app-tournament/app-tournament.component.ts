import { Component } from '@angular/core';
import { AppService } from '../app-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-tournament',
  templateUrl: './app-tournament.component.html',
  styleUrls: ['./app-tournament.component.less']
})
export class AppTournamentComponent {
  tournamentListOriginal: any;
  tournamentListfiltered: any;
  dropdownList: any = {};
  filterModels: any = {};

  // settings of Multi select  
  dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 2,
    allowSearchFilter: true
  };

  constructor(private appService: AppService) {
    this.getListOfTournaments();
  }

  getListOfTournaments() {
    this.appService.loadMyJson().subscribe((data: any) => {
      // Unable to parse date due to invalid time zone
      data.forEach(el => {
        el.date_start = el.date_start.replace('Z0000', '');
        el.date_end = el.date_end.replace('Z0000', '');
      });
      this.tournamentListOriginal = _.cloneDeep(data);
      this.tournamentListfiltered = _.cloneDeep(data);
      this.getDropDownvalues(data);
    });
  }

  onItemSelect(item: any) {
    this.tournamentListfiltered = _.cloneDeep(this.tournamentListOriginal);
    this.tournamentListfiltered = this.filterList(this.filterModels.seriesItems, 'series', 'name');
    this.tournamentListfiltered = this.filterList(this.filterModels.startDateItems, 'date_start');
    this.tournamentListfiltered = this.filterList(this.filterModels.endDateItems, 'date_end');
  }

  filterList(data: any, objname1: string, objname2?: string): any {
    return data && data.length > 0 ? this.tournamentListfiltered
      .filter(d => data.find(e => e.item_text === (objname2 ? d[objname1][objname2] : d[objname1])))
      : this.tournamentListfiltered;
  }

  getDropDownvalues(data: any) {
    data.forEach(el => {
      this.dropdownList.series = this.prepareFilterList(this.dropdownList.series, el.series.name);
      this.dropdownList.date_start = this.prepareFilterList(this.dropdownList.date_start, el.date_start);
      this.dropdownList.date_end = this.prepareFilterList(this.dropdownList.date_end, el.date_end);
    });
  }

  prepareFilterList(modelData: any, val: any) {
    modelData = modelData ? modelData : [];
    if (!modelData.find((f: any) => f.item_text === val)) {
      modelData.push({ item_id: modelData.length + 1, item_text: val });
    }
    return modelData;
  }
}
