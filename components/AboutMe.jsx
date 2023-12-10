import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>React</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>Solidity</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
                <li>C++</li>
                <li>Java OOP</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>ETH Singapore</li>
            <li>ETH KL</li>
            <li>ETH Online</li>
            <li>ETHGlobal Superhack</li>
            <li>Solana Hyperdrive</li>
            <li>APUBCC Sparkathon</li>
            <li>Encode Club</li>
            <li>Google CTF</li>
            <li>NUS Grey CTF</li>
            <li>Tune Protect Hackathon</li>
            <li>geNFesT Ideathon</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>Sheikh Khalifa Sec & Tech high school</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">Currently in my second year of studying Computer Engineering at APU, I have immersed myself in a diverse array of technologies. While I have a keen interest in frontend development and have mastered technologies like React, Next.js, HTML, and CSS, my skills extend far beyond. I take pride in crafting intuitive and visually striking interfaces using Tailwind CSS. Delving into the dynamic world of blockchain development, particularly with Solidity, I've successfully built smart contracts for decentralized applications. My passion for technology and creative problem-solving has led me to actively participate in 11 hackathons this year, where I've showcased my adaptability by serving not only as a Frontend Developer but also taking on backend responsibilities. My commitment lies in delivering innovative and comprehensive solutions that make a meaningful impact. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;