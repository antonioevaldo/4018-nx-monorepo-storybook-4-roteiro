import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@alfabit-alura/typography';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
  render: (args) => ({
    props: args,
    /* 
      class ComponenteExternoTitle1 {
        @Input() variant = 'title2'
      }
    */
    template: `
      <ab-typography ${argsToTemplate(args)}>
        Novo conteúdo
      </ab-typography>
    `,
  }),
};

export default meta;

type Story = StoryObj<TypographyComponent>;

export const Primary: Story = {
  args: {
    variant: 'title1',
    size: 'xs',
  },
};
