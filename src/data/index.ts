import { HomeIcon, AcademicCapIcon, Cog6ToothIcon, DocumentDuplicateIcon, UserIcon, BookOpenIcon } from "@heroicons/vue/24/outline";

import mySchedules from "../assets/svg/mySchedules.svg";
import CascadedDenoising from "../assets/svg/CascadedDenoising.svg";
import codeTracker from "../assets/svg/codeTracker.svg";
import CropPrediction from "../assets/svg/CropPrediction.svg";
import FolderOrganising from "../assets/svg/FolderOrganising.svg";
import SentimentCNN from "../assets/svg/SentimentCNN.svg";
import clustering3d from "../assets/svg/clustering3d.svg";
import Logo1 from "../assets/img/logo1.png";
import Logo2 from "../assets/img/logo2.png";
import Logo3 from "../assets/img/logo3.png";

import Java from "../assets/svg/java.svg"
import Angular from "../assets/svg/angular.svg"
import Vue from "../assets/svg/vue-9.svg";
import C from "../assets/svg/c.svg"
import PostgreSQL from "../assets/svg/postgresql.svg"
import mongodb from "../assets/svg/mongodb.svg"
import Python from "../assets/svg/python.svg";


export const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: HomeIcon,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: AcademicCapIcon,
  },
  {
    name: "Services",
    href: "#services",
    icon: Cog6ToothIcon,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: UserIcon,
  },
];

export const projectsItems = [
  {
    title: "mySchedules",
    image: mySchedules,
    link: "https://github.com/mmanav02/mySchedules",
  },
  {
    title: "Multispectral Crop Prediction Data Pipeline",
    image: CropPrediction,
    link: "https://github.com/mmanav02/Unsupervised-Segmentation-of-Temporal-Sentinel-2-Data-for-Potato-Crop-Mapping",
  },
  {
    title: "HyperSpectral 3-Dimensional Clustering",
    image: clustering3d,
    link: "https://github.com/mmanav02/Unsupervised-3-Dimensional-Clustering-Methodology",
  },
  {
    title: "Folder Organising Task Scheduler",
    image: FolderOrganising,
    link: "https://github.com/mmanav02/Folder-Organiser-Automated-Task-Scheduler",
  },
  {
    title: "codeTracker",
    image: codeTracker,
    link: "https://github.com/mmanav02/codeTracker",
  },
  {
    title: "Cascaded Denoising of Hyperspectral Image",
    image: CascadedDenoising,
    link: "https://github.com/mmanav02/Implementation-of-Cascading-Total-Variational-Denoising-on-IIRS-Hx-Data",
  },
  {
    title: "Sentiment Detection using CNN",
    image: SentimentCNN,
    link: "https://github.com/mmanav02/Sentiment-Detection-Using-CNN",
  }
];

export const skillsItems = [
  {
    name: "Python",
    description:
      "Frameworks: Django, Tensorflow\nLibraries: Pandas, Numpy, Scikit-learn",
    logo: Python,
  },
  {
    name: "Java",
    description:
      "Frameworks: Springboot\nUI: JavaFx",
    logo: Java,
  },
  {
    name: "Angular",
    description:
      "",
    logo: Angular,
  },
  {
    name: "C/C++",
    description:
      "",
    logo: C,
  },
  {
    name: "PostgreSQL",
    description:
      "",
    logo: PostgreSQL,
  },
  {
    name: "Mongodb",
    description:
      "",
    logo: mongodb,
  },
  {
    name:"Vue",
    description:
      "",
    logo: Vue,
  },
];

export const servicesItems = [
  {
    title: "Python Full Stack Development",
    description:
      "",
    logo: Logo1,
  },
  {
    title: "AI/ML Data Pipelining",
    description:
      "",
    logo: Logo2,
  },
  {
    title: "Web Development",
    description:
      "",
    logo: Logo3,
  },
];

export const testimonialsItems = [
  
];
