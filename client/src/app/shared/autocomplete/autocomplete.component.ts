import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { ItemService } from 'src/app/item/item.service';
import { Item } from 'src/app/models/models';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  myControl = new FormControl('');
  filteredOptions: Observable<string[]>;
  items$: Observable<Item[]>
  items: string[]
  itemsObjects: Item[]

  constructor(private itemsService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.itemsService.getCategoryList()
    this.itemsService.list$.subscribe(data => this.itemsObjects = data)
    this.items = this.itemsObjects.map(i => i.name)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.items.filter(option => option.toLowerCase().includes(filterValue));
  }

  selectItem(name: string) {
    const searchedItem = this.itemsObjects.find(i => i.name = name)
    this.router.navigate(["/items", searchedItem.itemID])
  }

}
