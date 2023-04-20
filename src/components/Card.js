import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc, githubLink, onMouseEnter, onMouseLeave, children }) => {
  return (
    <Box
      position="relative"
      borderRadius="xl"
      boxShadow="lg"
      transition="transform 0.3s"
      overflow="hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      _hover={{ transform: "scale(1.05)" }}
      bg="#1d2b4b"
      borderWidth="1px"
      borderColor="#1d2b4"
    >
      <Box
        position="relative"
        pb="48%"
        backgroundSize="cover"
        backgroundImage={`url(${imageSrc})`}
        borderRadius="xl"
      />
      <Box p={6}>
        <Heading size="md" mb={6} color="white">
          {title}
        </Heading>
        <Text color="white" mb={6}>
          {description}
        </Text>
        <Button
          as="a"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="blue"
        >
          See Code
        </Button>
      </Box>
    </Box>
  );
};

export default Card;