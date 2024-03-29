import React from "react";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { breakpoint } from "../../utils/breakpoints";
import { colors } from "../../utils/constants";

const linkCss = css`
  border-radius: 3px;
  cursor: pointer;
  font-family: "OdudoMono-Regular", "Menlo", sans-serif;
  font-size: ${typography.rhythm(1)};
  padding: ${typography.rhythm(3 / 4)};
  margin-bottom: ${typography.rhythm(1)};
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  border: 2px solid currentColor;
  color: currentColor;

  color: white;
  :link,
  :visited {
    color: white;
  }
  :hover,
  :focus {
    background-color: ${colors.peachy_plum};
  }
  :active {
    background-color: ${colors.dusk};
    transform: translate(0, 1px);
  }
`;

const CancellationNote = () => (
  <section
    css={css`
      padding: ${typography.rhythm(2)};
      font-size: ${typography.rhythm(1)};
      @supports (display: grid) {
        ${breakpoint("medium")} {
          padding: ${typography.rhythm(2)};
        }
      }
    `}
  >
    <p>GigCityElixir is coming back!</p>
    <p>
      When we reflect on what makes GCE special, we know it's the community
      connections we make and strengthen while we are together. We are delighted
      to plan an in person conference in Chattanooga in 2023!
    </p>
    <p>
      May 19-20, 2023
      <br />
      The Edney
      <br />
      Chattanooga, TN
    </p>
    <p>Tickets will go on sale in late January.</p>
    <p>
      Right now we are looking for sponsors (all levels) and speakers! If you
      are interested in partnering with us, <br />
      <br />
      <a href="mailto:info@grox.io" css={linkCss}>
        contact info@grox.io
      </a>
    </p>
  </section>
);

export default CancellationNote;
a;
