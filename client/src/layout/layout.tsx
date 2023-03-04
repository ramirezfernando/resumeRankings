import Header from "../components/Header";
import TextBubble from "../components/TextBubble";
import Description from "../components/Description";
import SearchBar from "../components/SearchBar";
import ResumeDisplay from "../components/ResumeDisplay";
import Footer from "../components/Footer";
import React, { FC } from 'react';

const Layout: FC<{}> = () => {
  return (
    <>
        <Header />
        <TextBubble text="hi" />
        <Description title="hey" text="tea"/>
        <SearchBar />
        <ResumeDisplay />
        <Footer />
    </>
  );
};

export default Layout;