"use client";

import Image from "next/image";
import Board from "@/components/ui/Board";
import Builder from "@/components/ui/Builder";
import {
  Wrapper,
  Inner,
  ContentContainer,
  TeamHeader,
  GroupPhotoContainer,
  TeamDescription,
  SectionTitle,
  BoardSection,
  ClassSection,
  MembersGrid,
  BlurCircle,
  BoardCard
} from "./styles";

// Sample board members data
const boardMembers = [
  { id: 1, firstName: "Kyle", lastName: "Jeong", role: "President", imageSrc: "/images/Headshots/Kyle-Jeong.jpg" },
  { id: 2, firstName: "Shloak", lastName: "Rathod", role: "Vice President", imageSrc: "/images/Headshots/Shloak-Rathod.jpg" },
  { id: 3, firstName: "Colin", lastName: "Zhao", role: "Tech Lead", imageSrc: "/images/Headshots/Colin-Zhao.png" },
  { id: 4, firstName: "Jake", lastName: "Padilla", role: "Director of Legal", imageSrc: "" },
  { id: 5, firstName: "Seif", lastName: "Abdelaziz", role: "Head of Internal", imageSrc: "/images/Headshots/Seif-Abdelaziz.png" },
  { id: 6, firstName: "Angelina", lastName: "Lue", role: "Head of External", imageSrc: "" },
  { id: 7, firstName: "Kyle", lastName: "Kan", role: "Director of Finance", imageSrc: "/images/Headshots/Kyle-Kan.png" },
  { id: 8, firstName: "George", lastName: "Zhou", role: "Head of Recruiting", imageSrc: "/images/Headshots/George-Zhou.png" },
  { id: 9, firstName: "Kiersten", lastName: "Roth", role: "Head of Content", imageSrc: "" },
  { id: 10, firstName: "Angelina", lastName: "Wu", role: "Head of Design", imageSrc: "/images/Headshots/Angelina-Wu.PNG" },
  { id: 11, firstName: "Neo", lastName: "Puchane", role: "Head of Social Events", imageSrc: "" },
  { id: 12, firstName: "Theo", lastName: "Luu", role: "Head of Industry Events", imageSrc: "/images/Headshots/Theo-Luu.jpg" }
];

// Sample class members data
const classMembers = [
  { id: 1, firstName: "First", lastName: "Last", imageSrc: "" },
  { id: 2, firstName: "First", lastName: "Last", imageSrc: "" },
  { id: 3, firstName: "First", lastName: "Last", imageSrc: "" },
  { id: 4, firstName: "First", lastName: "Last", imageSrc: "" },
  { id: 5, firstName: "First", lastName: "Last", imageSrc: "" },
  { id: 6, firstName: "First", lastName: "Last", imageSrc: "" },
  { id: 7, firstName: "First", lastName: "Last", imageSrc: "" },
  { id: 8, firstName: "First", lastName: "Last", imageSrc: "" }
];

const Team = () => {
  return (
    <Wrapper>
      <Inner>
        <ContentContainer>
          <TeamHeader>
            <h1>Meet the Team</h1>
          </TeamHeader>
       
          <GroupPhotoContainer>
            {/* Placeholder for group photo */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              <Image 
                src="/images/Board-headshot.jpg" 
                alt="VEST Board" 
                width={1200}
                height={800}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '12px'
                }}
                priority
              />
            </div>
          </GroupPhotoContainer>

          <TeamDescription>
            <h2>
              Talent that drives impact.
            </h2>
            <p>
              VEST brings together 40 of UCLA's most talented students, carefully
              selected through a competitive process where fewer than 1 in 10
              applicants are accepted into our club.
            </p>
            <p>
              Our members have worked at industry leaders such as Google, Snap,
              Paramount, Amazon, Jane Street, Cursor, Etched, Northrop, Deloitte,
              Mercor, Anduril, Stripe, CAT, and Leidos.
            </p>
          </TeamDescription>
          
          <BoardSection>
            <SectionTitle className="text-left">Board</SectionTitle>
            <MembersGrid>
              {boardMembers.map((member) => (
                <BoardCard key={member.id}>
                  <Board
                    firstName={member.firstName}
                    lastName={member.lastName}
                    role={member.role}
                    imageSrc={member.imageSrc}
                  />
                </BoardCard>
              ))}
            </MembersGrid>
          </BoardSection>
          
          {/* <ClassSection>
            <SectionTitle className="text-left">2024-2025 Class</SectionTitle>
            <MembersGrid>
              {classMembers.map((member) => (
                <BoardCard key={member.id}>
                  <Builder
                    firstName={member.firstName}
                    lastName={member.lastName}
                    imageSrc={member.imageSrc}
                  />
                </BoardCard>
              ))}
            </MembersGrid>
          </ClassSection> */}
        </ContentContainer>
      </Inner>
      <BlurCircle />
    </Wrapper>
  );
};

export default Team;
