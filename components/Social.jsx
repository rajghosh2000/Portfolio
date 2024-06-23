import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaInstagram, FaTwitter} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/rajghosh2000"},
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rajdeep-ghosh-301082175/"},
    { icon: <FaInstagram />, path: "https://www.instagram.com/rik.0725_/"},
    { icon: <FaTwitter />, path: "https://x.com/RAJDEEP93026376"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
};

export default Social;