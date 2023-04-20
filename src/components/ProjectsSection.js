import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Restaurant",
    description: "Little Lemon website is a responsive platform designed using Figma and coded with React, allowing restaurant customers to easily make table reservations.",
    images: [
      require("../images/hero.png"),
    ],
    githubLink: "https://github.com/nikhilktom/Little-Lemon.git",
  },
  {
    title: "Personal Portfolio",
    description: "Ta-da! Here's the project that's responsible for all the eye-catching animations, mind-blowing designs, and unparalleled coding skills you're seeing on this very website!",
    images: [
      require("/Users/nikki/personal-portfolio/src/images/portfolio.png"),

    ],
    githubLink: "https://github.com/nikhilktom/Personal-Portfolio.git",
  },
];

const ProjectsSection = () => {

  return (
    <FullScreenSection
      backgroundColor="#1d2b4b"
      position="relative"
      borderRadius="xl"
      isDarkBackground
      p={8}
      spacing={10}
    >
     <Heading
  as="h1"
  id="projects-section"
  marginRight={{ base: "0px", md: "600px" }}
  marginBottom={{ base: "50px", md: "80px" }}
>
  Projects
</Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"

        gridGap={14}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.images}
            githubLink={project.githubLink}
            onMouseEnter={(e) => {
              e.target.style.filter = "brightness(0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "brightness(1)";
            }}
          >
          </Card>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;