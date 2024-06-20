import "./styles.css";


const listSkills = [
  {
    name: "HTML",
    level: "intermediate",
    color: "red",
  },
  {
    name: "CSS",
    level: "intermediate",
    color: "yellow",
  },

  {
    name: "Javascript",
    level: "advance",
    color: "orange",
  },

  {
    name: "React",
    level: "intermediate",
    color: "green",
  },
  {
    name: "Express",
    level: "beginner",
    color: "gray",
  },
  {
    name: "Node",
    level: "beginner",
    color: "blue",
  },
  {
    name: "AWS",
    level: "beginner",
    color: "lightblue",
  },
];

function Image() {
  return (
    <img
      className="avatar"
      src= "foto.png" 
      alt="avatar"
      //src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
    />
  );
}

function Context() {
  return (
    <div className="data">
      <h1>Mariana Becerril</h1>
      <p>
        Full-stack Web Developer. Recently completed an intensive web
        development bootcamp and an internship focused on front-end development
        with React. I'm currently looking for opportunities in the web
        development sector to continue growing professionally in the fascinating
        world of technology.
      </p>
    </div>
  );
}

function SkilList() {
  return (
    <div className="skill-list">
      {listSkills.map((skill) => (
        <Skill
          skillobj={skill}
          key={skill.name}
          // skill={skill.name}
          // emoji={skill.level === "advance" ? "🔥" : "⚡️"}
          // color={skill.color}
        />
      ))}
      {/* <Skill skill="HTML" emoji="📄" color="red" />
      <Skill skill="CSS" emoji="🎨" color="blue" />
      <Skill skill="Javascript" emoji="⚡️" color="yellow" />
      <Skill skill="Typescript" emoji="🔥" color="orange" /> */}
    </div>
  );
}

function Skill({ skillobj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillobj.color }}>
      <span>{skillobj.name}</span>
      <span>
        {skillobj.level === "advance" && "💪"}
        {skillobj.level === "beginner" && "🤏"}
        {skillobj.level === "intermediate" && "👍"}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="card">
      <Image />
      <Context />
      <SkilList />
    </div>
  );
}
