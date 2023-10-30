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
    icon: <BsCodeSlash />,
    languages: [
      {
        icon: <AiOutlineHtml5 />,
        title: 'HTML',
      },
      {
        icon: <DiCss3 />,
        title: 'CSS',
      },
      {
        icon: <BiLogoJavascript />,
        title: 'JavaScript',
      },
      {
        icon: <BiLogoReact />,
        title: 'React 18',
      },
      {
        icon: <TbBrandNextjs />,
        title: 'Next JS',
      },
      {
        title: 'React-Query',
      },
      {
        icon: <BiLogoRedux />,
        title: 'Redux toolkit',
      },
      {
        icon: <BiLogoTailwindCss />,
        title: 'Tailwind css',
      },
      {
        title: 'Styled Components',
      },
    ],
  },
  {
    title: 'back end',
    icon: <BsServer />,
    languages: [
      {
        icon: <BiLogoNodejs />,
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
    icon: <AiFillSetting />,
    languages: [
      {
        icon: <BsFileCodeFill />,
        title: 'VS Code',
      },
      {
        icon: <AiFillGithub />,
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
