import React from "react";
import get from "lodash/get";

import SectionWrapper from "../components/SectionWrapper";
import JoseSection from "../components/sections/JoseSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import ProgramSection from "../components/sections/ProgramSection";
import SpeakerSection from "../components/sections/SpeakerSection";
import SubscriptionSection from "../components/sections/SubscriptionSection";
import ScholarshipSection from "../components/sections/ScholarshipSection";
import TicketSection from "../components/sections/TicketSection";
import SponsorSection from "../components/sections/SponsorSection";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <div>
        <JoseSection />
        <AboutUsSection />
        <SpeakerSection />
        <ProgramSection />
        <SponsorSection />
        <SubscriptionSection />
        <ScholarshipSection />
        <TicketSection />
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
