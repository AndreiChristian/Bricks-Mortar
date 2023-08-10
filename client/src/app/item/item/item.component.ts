import { Component, OnInit } from '@angular/core';
import { ItemService } from "../item.service"
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/models';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: string;
  item$: Observable<Item>

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.itemService.getCategoryItem(this.id)
    this.item$ = this.itemService.item$
  }

}
