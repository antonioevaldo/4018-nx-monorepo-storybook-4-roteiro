import { Component, Input } from '@angular/core';
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
  template: `<h1>Título H1</h1>`,
})
export class H1Component {}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `<span>Texto span</span>`,
})
export class SpanComponent {}

@Component({
  selector: 'ab-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css',
})
export class TypographyComponent {
  @Input() variant: Text = 'normal';

  component: any = SpanComponent;
}
