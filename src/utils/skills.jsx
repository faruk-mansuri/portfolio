import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoNodejs,
  BiLogoTailwindCss,
} from 'react-icons/bi';
import { AiOutlineHtml5, AiFillSetting, AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { BsCodeSlash, BsServer, BsFileCodeFill } from 'react-icons/bs';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiReactquery,
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFastapi,
  SiNetlify,
  SiRender,
  SiJsonwebtokens,
  SiExpo,
  SiSocketdotio,
  SiChakraui,
} from 'react-icons/si';

export const skills = [
  {
    title: 'front end',
    Icon: BsCodeSlash,
    languages: [
      {
        Icon: AiOutlineHtml5,
        title: 'HTML',
      },
      {
        Icon: DiCss3,
        title: 'CSS',
      },
      {
        Icon: BiLogoJavascript,
        title: 'JavaScript',
      },
      {
        Icon: BiLogoReact,
        title: 'React 18',
      },
      {
        Icon: SiReactquery,
        title: 'React-Query',
      },
      {
        Icon: BiLogoRedux,
        title: 'Redux toolkit',
      },
      {
        Icon: BiLogoTailwindCss,
        title: 'Tailwind css',
      },
      {
        Icon: SiChakraui,
        title: 'Chakra UI',
      },
      {
        Icon: SiStyledcomponents,
        title: 'Styled Components',
      },
    ],
  },
  {
    title: 'back end',
    Icon: BsServer,
    languages: [
      {
        Icon: BiLogoNodejs,
        title: 'nodeJS',
      },
      {
        Icon: SiExpress,
        title: 'Express',
      },
      {
        Icon: SiMongodb,
        title: 'MongoDB',
      },
      {
        Icon: SiMysql,
        title: 'Mysql',
      },
      {
        Icon: SiJsonwebtokens,
        title: 'jsonwebtoken',
      },

      {
        Icon: SiFastapi,
        title: 'Restful API',
      },
    ],
  },
  {
    title: 'other',
    Icon: AiFillSetting,
    languages: [
      {
        Icon: TbBrandNextjs,
        title: 'Next JS',
      },
      {
        Icon: BiLogoReact,
        title: 'React Native',
      },
      {
        Icon: SiExpo,
        title: 'Expo',
      },
      {
        Icon: SiSocketdotio,
        title: 'ScoketIO',
      },
      {
        Icon: SiExpo,
        title: 'Expo',
      },
      {
        Icon: BsFileCodeFill,
        title: 'VS Code',
      },
      {
        Icon: AiFillGithub,
        title: 'Github',
      },
      {
        Icon: SiNetlify,
        title: 'Netlify',
      },
      {
        Icon: SiRender,
        title: 'Render',
      },
    ],
  },
];
