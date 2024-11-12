import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type Text =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle1'
  | 'subtitle2'
  | 'normal';

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: ` <h1 class="typography">Título H1</h1> `,
})
export class H1Component {}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: ` <span class="typography"> Texto span </span> `,
})
export class SpanComponent {}

@Component({
  selector: 'ab-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css',
})
export class TypographyComponent implements OnInit {
  @Input() variant: Text = 'normal';

  component: any = SpanComponent;

  private componentsMap = {
    title1: H1Component,
    title2: SpanComponent,
    title3: SpanComponent,
    subtitle1: SpanComponent,
    subtitle2: SpanComponent,
    normal: SpanComponent,
  } satisfies { [key in Text]: any };

  ngOnInit(): void {
    this.component = this.componentsMap[this.variant];
  }
}
