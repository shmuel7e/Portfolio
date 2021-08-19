import React from "react";
import Social from "./social";
import styles from "./styles.module.scss";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const socials = [
  { key: "linkedin", icon: <FiLinkedin />, className: "linkedin" },
  { key: "facebook", icon: <FiFacebook />, className: "facebook" },
  { key: "instagram", icon: <FiInstagram />, className: "instagram" },
  { key: "phone", icon: <AiOutlinePhone />, className: "phone" },
  { key: "git", icon: <FiGithub />, className: "git" },
];

const Socials = ({switchState}) => (
  <section className={styles.container}>
    {socials.map((social) => (
      <Social
        key={social.key}
        Icon={social.icon}
        className={social.className}
        switchState={switchState}
      />
    ))}
  </section>
);
export default React.memo(Socials);
