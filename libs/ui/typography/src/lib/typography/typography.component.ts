import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
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
  template: `
    <h1 class="typography">
      <ng-content />
    </h1>
  `,
})
export class H1Component {}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <span class="typography">
      <ng-content />
    </span>
  `,
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

  @ViewChild('template', { static: true }) template!: TemplateRef<unknown>;

  component: any = SpanComponent;

  dynamicComponentContent!: any[][];

  private componentsMap = {
    title1: H1Component,
    title2: SpanComponent,
    title3: SpanComponent,
    subtitle1: SpanComponent,
    subtitle2: SpanComponent,
    normal: SpanComponent,
  } satisfies { [key in Text]: any };

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.component = this.componentsMap[this.variant];

    const templateContent = this.viewContainerRef.createEmbeddedView(
      this.template
    ).rootNodes;

    this.dynamicComponentContent = [templateContent];
  }
}
