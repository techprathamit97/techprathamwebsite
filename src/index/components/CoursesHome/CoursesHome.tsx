import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

type Category =
  | 'Trending Courses'
  | 'Data Science'
  | 'Software Development'
  | 'Cloud Computing'
  | 'Fashion & Interior'
  | 'SAP'
  | 'HR'
  | 'Language';

const CoursesHome = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Trending Courses')

  const categories: Category[] = [
    'Trending Courses',
    'Data Science',
    'Software Development',
    'Cloud Computing',
    'Fashion & Interior',
    'SAP',
    'HR',
    'Language'
  ]

  const allCourses: Record<Category, {
    title: string;
    description: string;
    rating: string;
    duration: string;
    level: string;
  }[]> = {
    'Trending Courses': [
      {
        title: "Advance Generative AI",
        description: "Explore cutting-edge AI models and generation techniques with ChatGPT, Claude & more.",
        rating: "4.8/5",
        duration: "12 weeks",
        level: "Advanced"
      },
      {
        title: "Full Stack Development",
        description: "Master React, Node.js, and MongoDB to build complete web applications.",
        rating: "4.7/5",
        duration: "16 weeks",
        level: "Intermediate"
      },
      {
        title: "Data Analytics Bootcamp",
        description: "Learn Python, SQL, and Tableau for data-driven decision making.",
        rating: "4.6/5",
        duration: "14 weeks",
        level: "Beginner"
      },
      {
        title: "Cybersecurity Fundamentals",
        description: "Protect systems from threats with ethical hacking and security protocols.",
        rating: "4.5/5",
        duration: "10 weeks",
        level: "Intermediate"
      }
    ],
    'Data Science': [
      {
        title: "Machine Learning Mastery",
        description: "Deep dive into ML algorithms, neural networks, and predictive modeling.",
        rating: "4.9/5",
        duration: "20 weeks",
        level: "Advanced"
      },
      {
        title: "Python for Data Science",
        description: "Master pandas, NumPy, and scikit-learn for data manipulation and analysis.",
        rating: "4.7/5",
        duration: "12 weeks",
        level: "Beginner"
      },
      {
        title: "Big Data Analytics",
        description: "Work with Hadoop, Spark, and distributed computing for large datasets.",
        rating: "4.6/5",
        duration: "16 weeks",
        level: "Advanced"
      },
      {
        title: "Statistical Analysis & R",
        description: "Learn statistical methods and R programming for data insights.",
        rating: "4.5/5",
        duration: "10 weeks",
        level: "Intermediate"
      }
    ],
    'Software Development': [
      {
        title: "React & Next.js Masterclass",
        description: "Build modern web applications with React hooks, Next.js, and TypeScript.",
        rating: "4.8/5",
        duration: "14 weeks",
        level: "Intermediate"
      },
      {
        title: "Mobile App Development",
        description: "Create iOS and Android apps using React Native and Flutter.",
        rating: "4.6/5",
        duration: "18 weeks",
        level: "Intermediate"
      },
      {
        title: "Backend Development with Node.js",
        description: "Build scalable APIs and microservices with Node.js and Express.",
        rating: "4.7/5",
        duration: "12 weeks",
        level: "Intermediate"
      },
      {
        title: "DevOps & CI/CD",
        description: "Master Docker, Kubernetes, and automated deployment pipelines.",
        rating: "4.5/5",
        duration: "10 weeks",
        level: "Advanced"
      }
    ],
    'Cloud Computing': [
      {
        title: "AWS Solutions Architect",
        description: "Design and deploy scalable applications on Amazon Web Services.",
        rating: "4.8/5",
        duration: "16 weeks",
        level: "Advanced"
      },
      {
        title: "Microsoft Azure Fundamentals",
        description: "Learn cloud services, virtual machines, and Azure deployment strategies.",
        rating: "4.6/5",
        duration: "12 weeks",
        level: "Beginner"
      },
      {
        title: "Google Cloud Platform",
        description: "Utilize GCP services for data analytics, ML, and application hosting.",
        rating: "4.7/5",
        duration: "14 weeks",
        level: "Intermediate"
      },
      {
        title: "Cloud Security & Compliance",
        description: "Secure cloud infrastructure and ensure regulatory compliance.",
        rating: "4.5/5",
        duration: "8 weeks",
        level: "Advanced"
      }
    ],
    'Fashion & Interior': [
      {
        title: "Fashion Design Fundamentals",
        description: "Learn sketching, fabric selection, and garment construction techniques.",
        rating: "4.6/5",
        duration: "20 weeks",
        level: "Beginner"
      },
      {
        title: "Interior Design & Space Planning",
        description: "Create functional and aesthetic living spaces with 3D modeling tools.",
        rating: "4.7/5",
        duration: "16 weeks",
        level: "Intermediate"
      },
      {
        title: "Fashion Marketing & Branding",
        description: "Build fashion brands and understand retail marketing strategies.",
        rating: "4.4/5",
        duration: "12 weeks",
        level: "Intermediate"
      },
      {
        title: "Sustainable Design Practices",
        description: "Eco-friendly approaches to fashion and interior design projects.",
        rating: "4.5/5",
        duration: "10 weeks",
        level: "Beginner"
      }
    ],
    'SAP': [
      {
        title: "SAP HANA Database Administration",
        description: "Master in-memory database management and optimization techniques.",
        rating: "4.7/5",
        duration: "14 weeks",
        level: "Advanced"
      },
      {
        title: "SAP FICO (Finance & Controlling)",
        description: "Learn financial accounting and controlling modules in SAP ERP.",
        rating: "4.6/5",
        duration: "16 weeks",
        level: "Intermediate"
      },
      {
        title: "SAP MM (Materials Management)",
        description: "Handle procurement, inventory, and supply chain processes.",
        rating: "4.5/5",
        duration: "12 weeks",
        level: "Beginner"
      },
      {
        title: "SAP Analytics Cloud",
        description: "Create dashboards and perform enterprise planning with SAC.",
        rating: "4.4/5",
        duration: "10 weeks",
        level: "Intermediate"
      }
    ],
    'HR': [
      {
        title: "Strategic Human Resources Management",
        description: "Align HR practices with business strategy and organizational goals.",
        rating: "4.6/5",
        duration: "12 weeks",
        level: "Advanced"
      },
      {
        title: "Talent Acquisition & Recruitment",
        description: "Master modern recruiting techniques and candidate assessment methods.",
        rating: "4.5/5",
        duration: "8 weeks",
        level: "Intermediate"
      },
      {
        title: "HR Analytics & People Data",
        description: "Use data to make informed decisions about workforce management.",
        rating: "4.7/5",
        duration: "10 weeks",
        level: "Intermediate"
      },
      {
        title: "Employee Relations & Engagement",
        description: "Build positive workplace culture and handle employee conflicts.",
        rating: "4.4/5",
        duration: "6 weeks",
        level: "Beginner"
      }
    ],
    'Language': [
      {
        title: "Business English Communication",
        description: "Enhance professional English skills for global business environments.",
        rating: "4.5/5",
        duration: "16 weeks",
        level: "Intermediate"
      },
      {
        title: "Spanish for Beginners",
        description: "Learn conversational Spanish with interactive lessons and practice.",
        rating: "4.6/5",
        duration: "20 weeks",
        level: "Beginner"
      },
      {
        title: "Technical Writing & Documentation",
        description: "Master clear, concise writing for technical and business contexts.",
        rating: "4.4/5",
        duration: "8 weeks",
        level: "Intermediate"
      },
      {
        title: "Mandarin Chinese Essentials",
        description: "Build foundational Chinese language skills for business and travel.",
        rating: "4.3/5",
        duration: "24 weeks",
        level: "Beginner"
      }
    ]
  }

  const currentCourses = allCourses[activeCategory] || allCourses['Trending Courses']

  const getLevelColor = (level: any) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-50'
      case 'Intermediate': return 'text-blue-600 bg-blue-50'
      case 'Advanced': return 'text-purple-600 bg-purple-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className='w-full h-auto flex flex-col gap-10 items-center justify-center py-20 bg-[#f6f8ff] text-black'>

      <div className='w-full h-auto flex flex-col text-center'>
        <div className="text-3xl font-bold text-gray-800">Our Courses</div>
        <div className="text-lg text-gray-600 max-w-2xl mx-auto">Programs to Help you upskill which lands you to your Dream Job</div>
      </div>

      <div className='w-10/12 flex flex-col items-center justify-center h-auto'>
        <div className='flex flex-wrap gap-2 w-full justify-center p-4 bg-gray-400 rounded-lg'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center pt-8">
          {currentCourses.map((course: any, index: any) => (
            <div 
              key={`${activeCategory}-${index}`} 
              className="w-full max-w-sm h-auto flex flex-col p-6 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-xl font-semibold text-gray-800 leading-tight">{course.title}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
              </div>
              
              <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{course.description}</div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-600 font-medium">{course.rating}</span>
                </div>
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {course.duration}
                </div>
              </div>
              
              <Button 
                variant="default" 
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                View More
              </Button>
            </div>
          ))}
        </div>

        <div className='mt-10'>
          <Button variant='default'>View More Courses</Button>
        </div>
      </div>
    </div>
  )
}

export default CoursesHome