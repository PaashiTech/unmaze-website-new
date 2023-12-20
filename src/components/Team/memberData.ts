import Palnika from "../../assets/team/palnika.jpg";
import Suman from "../../assets/team/suman.jpg";
import Amogh from "../../assets/team/amogh.jpeg";
import Harsh from "../../assets/team/harsh.jpg";
import Ketan from "../../assets/team/ketan.jpeg";
import Vartika from "../../assets/team/vartika.jpeg";
import Siddhant from "../../assets/team/siddhant.jpg";
import Urvik from "../../assets/team/urvik.jpg";

export type Member = {
  id: number;
  image: string;
  name: string;
  bio: string;
  reverse: boolean;
};

export const memberData: [Member, Member][] = [
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
    },
    {
      id: 4,
      image: Amogh,
      name: "Amogh Kulkarni",
      bio: `Sr. Software Engineer,
            MS(CS) @Vanderbilt, 
            Habitual tinkerer`,
      reverse: true,
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
    },
    {
      id: 6,
      image: Harsh,
      name: "Harsh Mohite",
      bio: `Frontend Developer, 
            ex-Schneider Electric, 
            Casual Speedcuber`,
      reverse: true,
    },
  ],
  [
    {
      id: 7,
      image: Siddhant,
      name: "Siddhant Trivedi",
      bio: `Research Intern,
            Data Analyst,
            Sports Enthusiast`,
      reverse: false,
    },
    {
      id: 8,
      image: Urvik,
      name: `Urvik 
              Jada`,
      bio: `Backend Intern,
            Tech Analyst,
            ex-Deutsche Bank`,
      reverse: true,
    },
  ],
];
