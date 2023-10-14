import  {FiCode} from 'react-icons/fi';
import {AiOutlineMobile} from 'react-icons/ai'
import {BsSpeedometer2} from 'react-icons/bs'
import {VscSymbolColor} from 'react-icons/vsc'
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb, DiNodejsSmall } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';

const translations = {
  // Navbar
  en: {
    home: 'Home',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    switchLanguage: 'Switch Language',
  },
  ar: {
    home: 'الصفحة الرئيسية',
    experience: 'الخبرة',
    skills: 'المهارات',
    projects: 'المشاريع',
    contact: 'تواصل',
    switchLanguage: 'تغيير اللغة',
  },

  // About section
  about: {
    en: {
      hi: 'Hello, I\'m 👋',
      name: 'Ali Ahmed',
      role: ['Front-end Web Developer 💻', 'Software Engineer 📈🚀'], 
      description:
      "I'm a self-taught Developer from Yemen \nspecializing in web development",
      getInTouch: 'Get in touch',
    },
    ar: {
      hi: 'مرحبًا، أنا 👋',
      name: 'علي أحمد',
      role: ['  مطور واجهات أمامية'   
       , ' مطور برامج'],
      description:
        'مطور ويب من اليمن، متخصص في تطوير الويب بشكل عام وتطوير واجهات المستخدم الأمامية بشكل خاص',
      getInTouch: 'تواصل معي',
    },
  },

  // Experience section
  experience: {
    en: {
      sectionTitle: 'What Can I do?',
      cards: [
        {
          icon: <AiOutlineMobile className="w-6 h-6" />,
          title: 'Responsive design',
          description: 'Develop a good Frontend design for mobile, tablet, desktop, and all screen devices',
        },
        {
          icon: <FiCode className="w-6 h-6" />,
          title: 'Website development',
          description: 'Developing a website appearance based on design',
        },
        {
          icon: <BsSpeedometer2 className="w-6 h-6" />,
          title: 'Best Performance',
          description: 'Develop a good Performance website and web application for a better experience.',
        },
        {
          icon: <VscSymbolColor className="w-6 h-6" />,
          title: 'UI/UX design',
          description: 'Develop a good user interface and user experience, with a beautiful and comfortable appearance.',
        },
      ],
    },
    ar: {
      sectionTitle: 'ماذا يمكنني أن أفعل؟',
      cards: [
        {
          icon: <AiOutlineMobile className="w-6 h-6" />,
          title: 'تصميم متجاوب',
          description: 'تطوير تصميم واجهة مستخدم جيدة للهواتف المحمولة والأجهزة اللوحية وأجهزة الكمبيوتر وجميع الأجهزة الأخرى',
        },
        {
          icon: <FiCode className="w-6 h-6" />,
          title: 'تطوير مواقع الويب',
          description: 'تطوير مظهر الموقع الإلكتروني بناءً على التصميم',
        },
        {
          icon: <BsSpeedometer2 className="w-6 h-6" />,
          title: 'أفضل أداء',
          description: 'تطوير موقع وتطبيق ويب بأداء جيد لتجربة أفضل.',
        },
        {
          icon: <VscSymbolColor className="w-6 h-6" />,
          title: 'تصميم واجهة المستخدم وتجربة المستخدم',
          description: 'تطوير واجهة مستخدم وتجربة مستخدم جيدة ، بمظهر جميل ومريح.',
        },
      ],
    },
  },

  // Projects 

  projects: {
  en: {
      PROJECTS_DATA: [
        {
          image: '/Website-3.png',
          header: 'Tech Bank website',
          title: 'Practiced and improved my skills with the Tailwind CSS framework to make the website faster with CSS.',
          link: 'https://github.com/3lawix9/AI-website',
          project: 'https://ai-website-sage.vercel.app',
          extraIcon: <SiTailwindcss className="text-blue-500 text-4xl hover:-translate-y-1 transition-all duration-500" />,
        },
        {
          image: '/Website-4.png',
          header: 'Calculator',
          title: 'Built a calculator to improve my programming skills with JavaScript.',
          link: 'https://github.com/3lawix9/Calculator',
          project: 'https://calculator-eta-black.vercel.app',
        },
        {
          image: '/Website-1.png',
          header: 'Salah times',
          title: 'First challenge on Twitter, and first time using API to fetch data from Aladhan.com website. I learned how to use the Axios library and some React hooks.',
          link: 'https://github.com/3lawix9/My-first-website',
          project: 'https://salawat.vercel.app',
        },
        {
          image: '/Website-2.png',
          header: 'Adventure website',
          title: 'I used React Router and some Pure CSS and added a video to the website and more than one page .',
          link: 'https://github.com/3lawix9/Adventure-website',
          project: '',
        },
        // {
        //   image: '/Website-5.png',
        //   header: 'E-commerce',
        //   title: 'I built an e-commerce website using the NextJs framework and focused a lot on the back-end to get data from the database and used Stripe for payment processing.',
        //   link: 'https://github.com/3lawix9/E-commerce',
        //   project: 'store-e-commerce.vercel.app',
        //   extraIcon: [
        //     <DiMongodb className="text-green-500 text-2xl hover:-translate-y-1 transition-all duration-500" />,
        //     <DiNodejsSmall className="text-green-700 text-2xl hover:-translate-y-1 transition-all duration-500" />,
        //     <TbBrandNextjs className="text-black text-2xl hover:-translate-y-1 transition-all duration-500" />,
        //   ],
        // },
      ],
    },
    
    ar: {
      PROJECTS_DATA: [
        {
          image: '/Website-3.png',
          header: <div dir="rtl">موقع بنك رقمي</div>,
          title: <div dir="rtl">تعلمت وطورت مهاراتي في إطار Tailwind CSS لجعل الموقع أسرع باستخدام CSS.</div>,
          link: 'https://github.com/3lawix9/AI-website',
          project: 'https://ai-website-sage.vercel.app',
          extraIcon: <SiTailwindcss className="text-blue-500 text-2xl hover:-translate-y-1 transition-all duration-500" />,
        },
        {
          image: '/Website-4.png',
          header: <div dir="rtl">الآلة الحاسبة</div>,
          title: <div dir="rtl">بناء آلة حاسبة لتحسين مهارات البرمجة الخاصة بي باستخدام JavaScript.</div>,
          link: 'https://github.com/3lawix9/Calculator',
          project: 'https://calculator-eta-black.vercel.app',
        },
        {
          image: '/Website-1.png',
          header: <div dir="rtl">أوقات الصلاة</div>,
          title: <div dir="rtl">أول تحدي على تويتر وأول مرة أستخدم فيها واجهة برمجة تطبيقات لاستدعاء البيانات من موقع اذان تعلمت كيفية استخدام مكتبة Axios وبعض أدوات React.</div>,
          link: 'https://github.com/3lawix9/My-first-website',
          project: 'https://salawat.vercel.app',
        },
        {
          image: '/Website-2.png',
        header: <div dir="rtl">موقع المغامرة</div>,
        title: <div dir="rtl">استخدمت React وبعض CSS العادي وأضفت فيديو إلى الموقع مع اضافه أكثر من صفحه.</div>,
        link: 'https://github.com/3lawix9/Adventure-website',
        project: '',
      },
      // {
      //   image: '/Website-5.png',
      //   header: <div dir="rtl">متجر الكتروني</div>,
      //   title: <div dir="rtl">
      //   قمت ببناء موقع تجارة إلكترونية باستخدام إطار عمل Next.js وركزت كثيراً على الباك إند للحصول على البيانات من قاعدة البيانات واستخدمت Stripe لمعالجة الدفع.
      // </div>,
      //   link: 'https://github.com/3lawix9/E-commerce',
      //   project: 'store-e-commerce.vercel.app',
      //   extraIcon: [
      //     <DiMongodb className="text-green-500 text-2xl hover:-translate-y-1 transition-all duration-500" />,
      //     <DiNodejsSmall className="text-green-700 text-2xl hover:-translate-y-1 transition-all duration-500" />,
      //     <TbBrandNextjs className="text-black text-2xl hover:-translate-y-1 transition-all duration-500" />,
      //   ],
      // },
    ],
  },
  
  
},

  // Contact 

  contact: {
    en: {
    title: "Contact",
    description: "I’m interested in job opportunities , However if you just want to say hi or have a question, don’t hesitate to contact me.",
    name: "Name",
    email: "Email",
    message: "Message",
    placeholder : "Your Message .."
    },
    ar : 
      {
        title: "تواصل معي",
        description: "أنا مهتم بفرص العمل والحصول على الوظيفه ، ومع ذلك إذا كنت تريد فقط أن تقول مرحبًا أو لديك سؤال  فلا تتردد في التواصل معي.",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        placeholder : "اكتب رسالتك .."

      },
    
  },
}


export default translations;
