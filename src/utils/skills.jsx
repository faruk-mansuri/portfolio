import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoFigma,
  BiLogoNodejs,
} from 'react-icons/bi';
import { AiOutlineHtml5, AiFillSetting, AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { BsCodeSlash, BsServer, BsFileCodeFill } from 'react-icons/bs';

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
        title: 'React-Query',
      },

      {
        icon: <BiLogoRedux />,
        title: 'Redux',
      },
      {
        title: 'Styled Components',
      },
      {
        icon: <BiLogoFigma />,
        title: 'Figma',
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
