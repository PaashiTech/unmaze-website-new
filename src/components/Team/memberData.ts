import Palnika from "../../assets/team/palnika.jpg";
import Suman from "../../assets/team/suman.jpg";
import Amogh from "../../assets/team/amogh.jpeg";
import Harsh from "../../assets/team/harsh.jpg";
import Ketan from "../../assets/team/ketan.jpeg";
import Vartika from "../../assets/team/vartika.jpeg";
import Urvik from "../../assets/team/urvik.jpg";
import Archisha from "../../assets/team/archisha.jpg";

export type Member = {
  id: number;
  image: string;
  name: string;
  bio: string;
  reverse: boolean;
  linkedInURL: string;
};

export const memberData: [Member, Member?][] = [
  [
    {
      id: 1,
      image: Palnika,
      name: "Palnika Hemnani",
      bio: `Investment Banker,
            Corp Finance &
            Expansion Advisor,
            ex-Nomura`,
      reverse: false,
      linkedInURL: "https://www.linkedin.com/in/palnikahemnani/",
    },
    {
      id: 2,
      image: Suman,
      name: "Suman Tiwari",
      bio: `Tech Wizard,
            SEBI-certified RIA,
            Strategy & Operations,
            ex-Nomura, ex-OYO`,
      reverse: true,
      linkedInURL: "https://www.linkedin.com/in/suman~tiwari/",
    },
  ],
  [
    {
      id: 3,
      image: Vartika,
      name: "Vartika Goel",
      bio: `Head of Marketing, 
            Jill of all Trades, 
            ex-PlayShifu, ex-KTM`,
      reverse: false,
      linkedInURL: "https://www.linkedin.com/in/vartikagoel/",
    },
    {
      id: 4,
      image: Amogh,
      name: "Amogh Kulkarni",
      bio: `Sr. Software Engineer,
            MS(CS) @Vanderbilt, 
            Habitual tinkerer`,
      reverse: true,
      linkedInURL: "https://www.linkedin.com/in/amoghskulkarni/",
    },
  ],
  [
    {
      id: 5,
      image: Ketan,
      name: "Ketan Damle",
      bio: `Product Designer
            UX Research, 
            Origami Artist`,
      reverse: false,
      linkedInURL: "https://www.linkedin.com/in/ketan-damle-607247128/",
    },
    {
      id: 6,
      image: Harsh,
      name: "Harsh Mohite",
      bio: `Frontend Developer, 
            ex-Schneider Electric, 
            Casual Speedcuber`,
      reverse: true,
      linkedInURL: "https://www.linkedin.com/in/harshmohite0996/",
    },
  ],
  [
    {
      id: 7,
      image: Urvik,
      name: `Urvik 
              Jada`,
      bio: `Backend Intern,
            Tech Analyst,
            ex-Deutsche Bank`,
      reverse: false,
      linkedInURL: "https://www.linkedin.com/in/urvik-jada-807023210/",
    },
    {
      id: 8,
      image: Archisha,
      name: `Archisha Pandey`,
      bio: `Data & Research Intern, 
      Tier-1 SAS Visual Analyst, 
      Wildlife enthusiast`,
      reverse: true,
      linkedInURL: "https://www.linkedin.com/in/archisha-pandey-2b5b71222/",
    },
  ],
];
