export type Person = {
  name: string;
  role: string;
  school: string;
  committeeSlug?: string;
};

export const SECRETARY_GENERAL: Person = {
  name: "Vishrut Mishra",
  role: "Secretary-General",
  school: "RIS Noida",
};

export const EXECUTIVE_BOARD: Person[] = [
  {
    name: "Ruhani Beri",
    role: "Chairperson, ICJ",
    school: "RIS Rohini",
    committeeSlug: "icj",
  },
  {
    name: "Abhiraj Mehsempuri",
    role: "Chairperson, DISEC",
    school: "RIS Patiala",
    committeeSlug: "disec",
  },
  {
    name: "Sara Sharma",
    role: "Chairperson, CD",
    school: "RIS Vasant Kunj",
    committeeSlug: "cd",
  },
  {
    name: "Vansh Nagpal",
    role: "Chairperson, AI IS",
    school: "RIS Mayur Vihar",
    committeeSlug: "ai-impact-summit",
  },
  {
    name: "Pradyun Pandey",
    role: "Chairperson, INC-5",
    school: "RIS Noida",
    committeeSlug: "inc-5",
  },
  {
    name: "Daksh Gupta",
    role: "Chairperson, WEF",
    school: "RIS Mayur Vihar",
    committeeSlug: "wef",
  },
];
