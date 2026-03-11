export interface Milestone {
  id: string;
  year: string;
  title: string;
  body: string;
  photo?: string;
}

export const milestones: Milestone[] = [
  {
    id: "first-code",
    year: "The Start",
    title: "A calculator with if statements",
    body: "My first coding project was a Python script that was just a calculator held together with if statements. It barely worked, but it was the first time I made a computer do exactly what I wanted, and that stuck",
    photo: "/pycalc.jpg",
  },
  {
    id: "sitelift-launch",
    year: "Age 16",
    title: "SiteLift launches",
    body: "My mom needed a website, and I wanted to help so I figured it out. Then a family friend asked me to do theirs. Then someone they knew. Before I knew it, I had a real business - SiteLift.",
    photo: "/pietermom.jpg",
  },
  {
    id: "sitelift-grows",
    year: "20+ Clients",
    title: "Turns out people need websites",
    body: "SiteLift kept growing. Every project taught me something new; how to scope projects, how to say no to clients bad ideas, how to ship on a deadline. Running a one-person agency at 17 is a quick way to learn a lot.",
    photo: "/otherpplwantwebsites.jpeg",
  },
  {
    id: "the-log",
    year: "The Log",
    title: "Shipping an iOS app",
    body: "Every fitness app I tried was doing too much - social feeds, AI coaches, way too muchgamification. I just wanted to log my workouts in something other than Google Sheets. So I built The Log. Designed it, coded it, shipped it to the App Store.",
  },
  {
    id: "now",
    year: "Now",
    title: "Building in public",
    body: "I'm still working on SiteLift and the Log, but in public. I'm sharing the wins and the failures. If you're building something too, come along for the ride.",
  },
];
