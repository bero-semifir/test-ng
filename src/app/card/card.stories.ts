import { Meta, Story } from '@storybook/angular';

import { CardComponent } from './card.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Card',
  component: CardComponent,
} as Meta;

export const Default: Story = () => ({
  props: {
    cardTitle: "Titre de la carte",
    cardBody: "Corp de la carte",
    cardFooter: "Pied de la carte",
    cardImg: {alt:"Image d'exemple", src: "https://via.placeholder.com/200/92c952"}
},
});

export const NoFooter: Story = () => ({
    props: {
        cardTitle: "Titre de la carte",
        cardBody: "Corp de la carte",
        cardImg: {alt:"Image d'exemple", src: "https://via.placeholder.com/200/92c952"}
    }
})

export const NoImage: Story = () => ({
    props: {
        cardTitle: "Titre de la carte",
        cardBody: "Corp de la carte",
        cardFooter: "Pied de la carte"
    }
})

export const Minimum: Story = () => ({
    props: {
        cardTitle: "Titre de la carte",
        cardBody: "Corp de la carte"
    }
})

NoFooter.storyName = "Carte sans footer";
Minimum.storyName = "Carte de base";
NoImage.storyName = "Carte sans image";
Default.storyName = "Carte compléte";
