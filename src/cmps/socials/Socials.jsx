import React from "react";
import Social from "./social";
import styles from "./styles.module.scss";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const socials = [
  { key: "linkedin", icon: <FiLinkedin />, className: "linkedin",onClick: () => (window.location = "https://www.linkedin.com/in/shmuel-elkis/")},
  { key: "facebook", icon: <FiFacebook />, className: "facebook",onClick: () => (window.location = "https://www.facebook.com/shmuel.elkis.3") },
  { key: "instagram", icon: <FiInstagram />, className: "instagram",onClick: () => (window.location = "https://www.instagram.com/shmuel7e/")  },
  { key: "git", icon: <FiGithub />, className: "git",onClick: () => (window.location = "https://github.com/shmuel7e") },
  { key: "phone", icon: <a href={"tel:‎+972525785401"}><AiOutlinePhone /></a>, className: "phone" },
];

const Socials = ({switchState}) => (
  <section className={styles.container}>
    {socials.map((social) => (
      <Social
        key={social.key}
        Icon={social.icon}
        className={social.className}
        switchState={switchState}
        onClick={social.onClick}
      />
    ))}
  </section>
);
export default React.memo(Socials);
