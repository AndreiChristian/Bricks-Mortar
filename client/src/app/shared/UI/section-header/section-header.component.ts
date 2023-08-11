import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent {

  @Input() image: string;
  @Input() title: string = "Title"
  @Input() description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique totam neque, quia, obcaecati consequuntur laudantium sequi error, ab dolor velit atque quae explicabo nisi repellat fugit a quibusdam assumenda tempora!"

}
