// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Creating experiences through technology
            </Text>
            <Text type="body1" color="grey6">
              Hi, I'm Kefren! I love challenges and im always searching for more
              logical and effective ways to solve problems. I believe that a
              constant quest for learning and growth is an essential trait for
              any developer. Furthermore, technology has a significant impact on
              all aspects of life, which inspires me to seek solutions that can
              make the world a better place.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projects
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Technologies
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Main Tools
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Let's exchange some ideas?{" "}
              </Text>
              <Text as="p" type="body1" color="grey2">
                On LinkedIn, I am willing to share my daily processes for
                developing these projects and to exchange some ideas there.
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acess my LinkedIn profile
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projects
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originality_and  
                <Text as="span" color="brand1" type="heading2">
                     _Dedication_   
                </Text>
                  in_every_detail
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
