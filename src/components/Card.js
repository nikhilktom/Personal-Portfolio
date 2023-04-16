import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
    borderRadius='8px'
    backgroundColor='white'
    color='black'
  >
    <Image
      src={imageSrc}
      borderRadius='8px'
      />
    <VStack
      fontSize='xs'
      align='left'
      padding='2'
    >
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <HStack>
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
  </VStack>
  );
};

export default Card;
