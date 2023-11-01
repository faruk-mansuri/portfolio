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
        Icon: TbBrandNextjs,
        title: 'Next JS',
      },
      {
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
        title: 'Express',
      },
      {
        title: 'MongoDB',
      },
      {
        title: 'mongoose',
      },
      {
        title: 'Restful API',
      },
    ],
  },
  {
    title: 'other',
    Icon: AiFillSetting,
    languages: [
      {
        Icon: BsFileCodeFill,
        title: 'VS Code',
      },
      {
        Icon: AiFillGithub,
        title: 'Github',
      },
      {
        title: 'Netlify',
      },
      {
        title: 'Render',
      },
    ],
  },
];
