
import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';


export type FoooterProps = {
  footerHtml: string;
};


export const Footer = ({ footerHtml }: FoooterProps) => {
  return (
    <Styled.Container>
      <HtmlContent html={footerHtml} />
    </Styled.Container>
  );
}

