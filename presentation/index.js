// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  Image,
  Appear,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from 'spectacle-theme-nova';

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  ken: require('../assets/kenwheeler.jpg'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="secondary" transition={["fade"]}>
          <Heading size={6} fit caps lineHeight={1} textColor="primary">
            React Europe
          </Heading>
          <Text margin="10px 0 0" lineHeight={2} italic textColor="primary" size={4} fit>
            Mathieu Le Bihan & Kevin Le Scouarnec
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={images.ken} width="25%"/>
          <Heading size={6} fit caps lineHeight={1} textColor="primary">
            Ken Wheeler
          </Heading>
          <Text size={6} textColor="secondary">Director of Open Source at Formidable, creator of libraries such as Spectacle, urql, react-music, react-game-kit and Webpack Dashboard.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} fit textColor="primary">
            Quoi de neuf chez ReactJs ?
          </Heading>
          <Text size={6} textColor="secondary">V16.3</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="secondary" fit caps>Strict Mode</Heading>
          <List>
            <Appear>
              <ListItem>Uniquement en mode developpement</ListItem>
            </Appear>
            <Appear>
              <ListItem>Prévient de l’utilisation par l’API d’une ancienne chaîne de référence</ListItem>
            </Appear>
            <Appear>
              <ListItem>détecte les effets secondaires inattendus</ListItem>
            </Appear>
            <Appear>
              <ListItem>La suite?</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} margin="0 0 3rem" textColor="secondary" fit caps>Nouvelle gestion des lifecycle</Heading>
          <Appear>
            <Heading textColor="primary" size={4}>
              Les méthodes bientôt dépréciées :
            </Heading>
          </Appear>
          <List>
            <Appear>
              <ListItem>componentWillMount</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentWillReceiveProps</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentWillUpdate</ListItem>
            </Appear>
          </List>
          <Appear>
            <Heading textColor="primary" size={4}>
              Les nouvelles méthodes :
            </Heading>
          </Appear>
          <List>
            <Appear>
              <ListItem>getDerivedStateFromProps</ListItem>
            </Appear>
            <Appear>
              <ListItem>getSnapshotBeforeUpdate</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" fit caps>
            Context API : Nouvelle gestion du state global ?
          </Heading>
          <List>
            <Appear>
              <ListItem>Gestion des transferts de props entre enfant/parent sans intermediaire.</ListItem>
            </Appear>
            <Appear>
              <ListItem>Creation du context ⇒ provider => consumer</ListItem>
            </Appear>
            <Appear>
              <ListItem>Context vs Redux ?</ListItem>
            </Appear>
            <Appear>
            <ListItem>DEMO</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" fit caps>
            Suspense
          </Heading>
          <List>
            <Appear>
              <ListItem>Nouvelle gestion du rendu asynchrone</ListItem>
            </Appear>
            <Appear>
              <ListItem>DEMO</ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
