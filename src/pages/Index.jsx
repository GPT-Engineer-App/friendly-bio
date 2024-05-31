import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">I'm a Full Stack Developer specializing in building exceptional digital experiences.</Text>
        </Box>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://via.placeholder.com/150"
          alt="Profile Image"
          mb={4}
        />
        <Flex justifyContent="center" width="100%" mb={4}>
          <Button as="a" href="https://github.com" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="outline" mx={2}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline" mx={2}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:email@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline" mx={2}>
            Email
          </Button>
        </Flex>
        <Box textAlign="center">
          <Text fontSize="md">Feel free to explore my work and get in touch if you'd like to collaborate on a project or just want to say hi!</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;