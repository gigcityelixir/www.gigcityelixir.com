import React from "react";
import SectionWrapper from "../SectionWrapper";
import { colors } from "../../utils/constants";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { buttonCss } from "../Button";
import { typography } from "../../utils/typography";
import { breakpoint } from "../../utils/breakpoints";
import Link from "next/link";

const platinumSponsors = css`
  text-align: center;

  h2 {
    color: ${colors.plum};
    border-top: 3px solid ${colors.plum};
    border-bottom: 3px solid ${colors.plum};
    padding-top: 26px;
    padding-bottom: 26px;
  }

  h3 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

const flexGrid = css`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${typography.rhythm(1)};
  margin-bottom: ${typography.rhythm(1)};
`;

const flexGridItem = css`
  margin-left: ${typography.rhythm(1)};
  ${breakpoint("large")} {
    width: calc(50% - ${typography.rhythm(1)});
  }
`;

const flexGridItemChampion = css`
  margin-left: ${typography.rhythm(1)};
  width: calc(25% - ${typography.rhythm(1)});
`;

const sponsorLink = css`
  border: ${typography.rhythm(1 / 32)} solid ${colors.peachy_plum};
  padding: ${typography.rhythm(1 - 1 / 32)};
  text-decoration: none;

  &:focus,
  &:hover {
    border-width: ${typography.rhythm(1 / 8)};
    padding: ${typography.rhythm(1 - 1 / 8)};
    border-color: ${colors.plum};
  }
`;

const SubscriptionSection = () => (
  <SectionWrapper
    header="Our Sponsors"
    subhead="This conference brought to you in part by these fine folks"
  >
    <div className={platinumSponsors}>
      <h3>Platinum</h3>
      <div css={flexGrid}>
        <Platinum
          img="/static/sponsor-logos/tract-manager.png"
          name="TractManager"
          url="https://tractmanager.com"
        >
          <p>
            TractManager is the healthcare industry’s leading provider of
            Strategic Sourcing and Contract Lifecycle Management solutions which
            support 3 out of 5 hospitals nationwide.
          </p>
        </Platinum>
        <Platinum
          img="/static/sponsor-logos/groxio.png"
          name="groxio"
          url="https://grox.io"
        >
          <p>
            Groxio is a small company of educators, language geeks and authors
            who want to change the way people teach and learn languages.
          </p>
        </Platinum>
      </div>
      <h3>Community</h3>
      <div css={flexGrid}>
        <Lanyard url="https://www.carbonfive.com/">
          <div>
            <p>
              Carbon Five is a strategic digital product development firm. We
              partner with clients to create exceptional products and grow
              effective teams.
            </p>
          </div>
          <figure>
            <img src="/static/sponsor-logos/c5.png" alt="Carbon Five" />
          </figure>
        </Lanyard>
      </div>
      <h3>Lanyard</h3>
      <div css={flexGrid}>
        <Lanyard url="https://bleacherreport.com/">
          <figure>
            <img
              src="/static/sponsor-logos/bleacher.svg"
              alt="Bleacher Report"
            />
          </figure>
          <div>
            <p>
              There’s an ever-present energy that surrounds the world of sports.
              Through creative expression, B/R adds fuel to the fire. We capture
              and unleash the untapped power to deliver visceral, authentic
              moments at the intersection of sports and culture.
            </p>
          </div>
        </Lanyard>
      </div>
      <h3>Elixir Champion</h3>
      <div css={flexGrid}>
        <Champion
          img="/static/sponsor-logos/tito.svg"
          name="Tito"
          url="https://ti.to/"
        />
      </div>
      <Link href="/contact">
        <a href="/contact" css={buttonCss}>
          Contact Us About Sponsoring
        </a>
      </Link>
    </div>
  </SectionWrapper>
);

export default SubscriptionSection;

function Platinum({ img, name, url, children }) {
  return (
    <a
      href={url}
      css={css`
        ${flexGridItem}
        ${sponsorLink}
        margin-bottom: ${typography.rhythm(1)};
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p:last-child {
          margin-bottom: ${typography.rhythm(1 / 4)};
        }
        p {
          padding-left: ${typography.rhythm(1 / 4)};
          padding-right: ${typography.rhythm(1 / 4)};
        }

        font-size: ${typography.rhythm(5 / 8)};
        color: ${colors.plum};
        text-align: center;

        img {
          flex-shrink: 0;
        }
      `}
    >
      <img src={img} alt={name} />
      {children}
    </a>
  );
}

function Lanyard({ img, name, url, children }) {
  return (
    <a
      href={url}
      css={css`
        margin-left: ${typography.rhythm(1)};
        ${sponsorLink}
        margin-bottom: ${typography.rhythm(1)};
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        figure {
          width: calc(50% - ${typography.rhythm(1 / 2)});
          margin: 0;
        }

        img {
          /* width: 100%; */
          height: 10em;
          margin: 0;
        }

        div {
          width: calc(50% - ${typography.rhythm(1 / 2)});
        }

        p:last-child {
          margin-bottom: ${typography.rhythm(1 / 4)};
        }
        p {
          padding-left: ${typography.rhythm(1 / 4)};
          padding-right: ${typography.rhythm(1 / 4)};
        }

        font-size: ${typography.rhythm(5 / 8)};
        color: ${colors.plum};
        text-align: center;
      `}
    >
      {children}
    </a>
  );
}

function Champion({ img, name, url }) {
  return (
    <a
      href={url}
      css={css`
        ${flexGridItemChampion}
        ${sponsorLink}
        border-color: ${colors.blush};
        margin-bottom: ${typography.rhythm(1)};
      `}
    >
      <img
        src={img}
        alt={name}
        css={css`
          display: block;
          margin-bottom: 0;
        `}
      />
    </a>
  );
}