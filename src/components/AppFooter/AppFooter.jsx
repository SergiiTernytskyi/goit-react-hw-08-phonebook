import { Content, Footer, FooterLink } from './AppFooter.styled';

export const AppFooter = () => {
  return (
    <Footer>
      <Content>
        <p> &copy; {new Date().getFullYear()}</p>
        <span>Developed with</span>
        <span role="img" aria-label="heart">
          ❤
        </span>
        by
        <FooterLink
          href="https://github.com/SergiiTernytskyi"
          target="_blank"
          rel="noopener noreferrer"
          title="Github profile"
          aria-label="Link to Github profile"
        >
          Serhii
        </FooterLink>
      </Content>
    </Footer>
  );
};
