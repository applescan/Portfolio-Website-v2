import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Elements/Title";
import Images from "../components/Elements/Images";
import Mix1 from '../assets/img/mixtape/demo1.jpg';
import Mix2 from '../assets/img/mixtape/demo2.jpg';
import Mix3 from '../assets/img/mixtape/stats.webp';
import FullButton from "../components/Buttons/FullButton";
import Body from "../components/Elements/Body";
import List from "../components/Elements/List";
import { useNavigate } from "react-router-dom";

export default function NzLocum() {

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <Title
            title={"Mixtape-me | Spotify app integration."}
            subtitle={`Throwback to the 90's with Mixtape-me! Share your top 5 songs in a mixtape form.`}
            desc1={`In today’s modern era, music is readily available online. You can play whatever you want whenever you want it. 
            In the 90s, before platforms like Spotify were invented, music enthusiasts had to make their way to a record store or a CD store. 
            They had to browse through each aisle to find their favourite songs and artists. There’s a sense of nostalgia with heading to a store 
            and flicking through rows of CD’s nostalgia and driven by post-pandemic angst, retro entertainment options are coming back on trend.`}
            desc2={`Mixtape-me aims to recreate that experience of walking through the doors of a record store looking at CD covers and store walls
            with colourful albums, memorabilia, and photos, transferring the same experience in a digital form and sharing your mixtape with your friends! 
            With Spotify's technology, it's easier than ever to find out who you listen to most all year long, last 6 months, or even right now.`}
            skills="Full Stack Web Developer"
            year="2022"
          />
        </HeaderInfo>
        <Images img1={Mix1} alt1={"project image cover"} img2={Mix2} alt2={"mobile mockup image"} />


        <h1 className='extraBold font25'>Links:</h1>
        <br></br>
        <ButtonsRow className="flexNullCenter">
          <div style={{ width: "190px" }}>
            <a href="https://mixtape-me.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <FullButton title="Try the app!" border={false} />
            </a>
          </div>
          <div style={{ width: "190px", marginLeft: "15px" }}>
            <a href="https://github.com/applescan/Mixtape-me" target="_blank" rel="noopener noreferrer">
              <FullButton title="View Code" border={false} />
            </a>
          </div>
        </ButtonsRow>

        <Body
          title={'Requirements'}
          desc={`For Mixtape-me to work, users must log in and allow the app to access their most-played track’s data. 
          Mixtape-me is an open-source app that is developed individually, by choosing to use this app, 
          the user agrees to the use of their Spotify account username and data for their top 5 tracks. 
          This application does not store or collect any data in any way. 
          Mixtape-me works only by simply displaying your top 5 tracks from Spotify.`}

        />


        <Body
          title={'Built With'}
          desc={`• Bootstrap • CSS • Figma • GitHub • Heroku • HTML • JavaScript • Spotify Web API • Visual Studio Code`}

        />

        <Body
          title={'App'}
        />
        <p>Visit <a className="purpleColor" href="https://mixtape-me.herokuapp.com/"
          target="_blank">https://mixtape-me.herokuapp.com</a> to
          access the web application.
        </p>

        <List
          title={'User Guide'}
          list1={'1. Log in to your spotify account'}
          list2={'2. Access your top 5 mixtapes'}
          list3={'3. Choose from "Last month", "Last 6 months", and "This year" top tracks'}
          list4={'4. Download mixtapes images'}
        />


        <Body
          title={'How it works?'}
        />

        <p>Mixtape-me is an open-source app that allows you to make mixtapes of your top 5 tracks. All you need to do is
          login to Spotify and mixtape-me will sort your top tracks according to your listening history on your
          Spotify account. Share your mixtapes by saving the image!
          <br /><br />
          <b> How are the top tracks determined?</b>
          <br />
          Mixtape-me uses your listening history from your Spotify account. All the data is provided by Spotify.
          <br /><br />
          <b>How to save my mixtape?</b>
          <br />
          Click the download button on top of the mixtapes, wait for a little bit and the file should be
          downloaded to your device. Sometimes it takes multiple downloads for the image to load properly, so if your
          first image download doesn't turn out right, please redownload the image, or simply take a screenshot
          📱
          <br /><br />
          <b>The app isn't working.</b>
          <br />
          If the app doesn't work, try clearing your cookies and site data for
          mixtape-me.herokuapp.com, or try a different device.
        </p>

        <Body
          title={'Spotify Developer Dashboard'}
          desc={`Spotify has very comprehensive web API documentation. 
          The first thing I do is register my app 
          to the Spotify developer's account with the Spotify Web API Console,
          which lets you explore the endpoints with an easy-to-use interface.
          `}
        />
        <br></br>

        <p>Based on simple REST principles, the Spotify Web API endpoints return JSON metadata about music artists,
          albums, and tracks, directly from the Spotify Data Catalogue.</p>

        <br></br>

        <ImagesBody>
          <img src={Mix3} style={{ width: '100%' }} />
        </ImagesBody>

        <br></br>
        <br></br>

        <p> There was a huge surge of users signing in and using Mixtape-me on the first day of its launch, and I will
          keep promoting the app to the public. The goal is to have 100 users on this project!

          <br></br>
          <br></br>
          Involving users early in projects helps you understand real-world use cases, such as how people understand
          how to use the app and emerging technologies. It broadens your perspective and can lead you to discover
          creative ways of designing your product that makes it work better.
        </p>

        <div style={{ width: "150px", paddingTop: "100px" }}>
          <FullButton title="Back" border={false} action={() => { navigate(-1) }} />
        </div>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
        padding: 10% 10% 5% 10%;
        width: 100%;
        @media (max-width: 860px) {
          padding: 25% 10% 10% 10%;
  }
        `;

const HeaderInfo = styled.div`
        @media (max-width: 860px) {
          text - align: left;
  }
        `;

const ButtonsRow = styled.div`
        @media (max-width: 860px) {
          justify - content: space-evenly;
  }
        `;

const ImagesBody = styled.div`
        width: 50%;
        display:flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 860px) {
        width: 100%; 
  }
        `;
