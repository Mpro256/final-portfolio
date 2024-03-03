import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "95%", value: "95" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "55%", value: "55" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "100%",
          value: "100"
        },
        { id: "Java_Skill", content: "Java", porcentage: "85%", value: "85" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "15%",
          value: "15"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "20%",
          value: "20"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hey there! My name is Ben. I made this website to tell you some more about me and my coding works."
        },
        {
          id: "second-p-about",
          content:
            "One of my biggest interests besides Web Development is Minecraft Mod Devloping. I love seeing all the funny things that I can do with just some simple lines of Java."
        },
        {
          id: "third-p-about",
          content:
            "One of my other interests is playing Piano. To me, it feels like coding just without a Computer."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
