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
  BlurCircle
} from "./styles";

// Sample board members data
const boardMembers = [
  { id: 1, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 2, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 3, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 4, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 5, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 6, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 7, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 8, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 9, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 10, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 11, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" },
  { id: 12, firstName: "First", lastName: "Last", role: "Role", imageSrc: "" }
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
      <BlurCircle />
      <Inner>
        <ContentContainer>
          <TeamHeader>
            <h1>Meet the Team</h1>
          </TeamHeader>
       
          <GroupPhotoContainer>
            {/* Placeholder for group photo */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              group photo
            </div>
          </GroupPhotoContainer>

          <TeamDescription>
            <p>
              <strong className="text-blue-400 text-xl block mb-4">Talent that drives impact.</strong>
              VEST brings together 40 of UCLA's most talented students, carefully
              selected through a competitive process where fewer than 1 in 10
              applicants are accepted into our club.
            </p>
            <p className="mt-4">
              Our members have worked at industry leaders such as Google, Snap,
              Paramount, Amazon, Jane Street, Cursor, Etched, Northrop, Deloitte,
              Mercor, Anduril, Stripe, CAT, and Leidos.
            </p>
          </TeamDescription>
          
          <BoardSection>
            <SectionTitle className="text-left">Board</SectionTitle>
            <MembersGrid>
              {boardMembers.map((member) => (
                <Board
                  key={member.id}
                  firstName={member.firstName}
                  lastName={member.lastName}
                  role={member.role}
                  imageSrc={member.imageSrc}
                />
              ))}
            </MembersGrid>
          </BoardSection>
          
          <ClassSection>
            <SectionTitle className="text-left">2024-2025 Class</SectionTitle>
            <MembersGrid>
              {classMembers.map((member) => (
                <Builder
                  key={member.id}
                  firstName={member.firstName}
                  lastName={member.lastName}
                  imageSrc={member.imageSrc}
                />
              ))}
            </MembersGrid>
          </ClassSection>
        </ContentContainer>
      </Inner>
    </Wrapper>
  );
};

export default Team;
