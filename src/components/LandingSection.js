import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myPhoto from '../images/photome.jpeg';


const greeting = "Hello, I am Nikhil!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#0f1626"
  >
    <VStack>
      <Avatar src={myPhoto}/>
      <p>{greeting}</p>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;