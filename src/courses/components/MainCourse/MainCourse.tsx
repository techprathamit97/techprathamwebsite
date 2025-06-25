import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const MainCourse = () => {
  const allCourses = [
    // Trending Courses
    {
      title: "Advance Generative AI",
      description: "Explore cutting-edge AI models and generation techniques with ChatGPT, Claude & more.",
      rating: "4.8/5",
      duration: "12 weeks",
      level: "Advanced",
      category: "AI & Machine Learning",
      link: "/advance-generative-ai-course"
    },
    {
      title: "Full Stack Development",
      description: "Master React, Node.js, and MongoDB to build complete web applications.",
      rating: "4.7/5",
      duration: "16 weeks",
      level: "Intermediate",
      category: "Software Development",
      link: "/full-stack-development-course"
    },
    {
      title: "Data Analytics Bootcamp",
      description: "Learn Python, SQL, and Tableau for data-driven decision making.",
      rating: "4.6/5",
      duration: "14 weeks",
      level: "Beginner",
      category: "Data Science",
      link: "/data-analytics-bootcamp-course"
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Protect systems from threats with ethical hacking and security protocols.",
      rating: "4.5/5",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Cybersecurity",
      link: "/cybersecurity-fundamentals-course"
    },
    // Data Science
    {
      title: "Machine Learning Mastery",
      description: "Deep dive into ML algorithms, neural networks, and predictive modeling.",
      rating: "4.9/5",
      duration: "20 weeks",
      level: "Advanced",
      category: "Data Science",
      link: "/machine-learning-mastery-course"
    },
    {
      title: "Python for Data Science",
      description: "Master pandas, NumPy, and scikit-learn for data manipulation and analysis.",
      rating: "4.7/5",
      duration: "12 weeks",
      level: "Beginner",
      category: "Data Science",
      link: "/python-for-data-science-course"
    },
    {
      title: "Big Data Analytics",
      description: "Work with Hadoop, Spark, and distributed computing for large datasets.",
      rating: "4.6/5",
      duration: "16 weeks",
      level: "Advanced",
      category: "Data Science",
      link: "/big-data-analytics-course"
    },
    {
      title: "Statistical Analysis & R",
      description: "Learn statistical methods and R programming for data insights.",
      rating: "4.5/5",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Data Science",
      link: "/statistical-analysis-r-course"
    },
    // Software Development
    {
      title: "React & Next.js Masterclass",
      description: "Build modern web applications with React hooks, Next.js, and TypeScript.",
      rating: "4.8/5",
      duration: "14 weeks",
      level: "Intermediate",
      category: "Software Development",
      link: "/react-nextjs-masterclass-course"
    },
    {
      title: "Mobile App Development",
      description: "Create iOS and Android apps using React Native and Flutter.",
      rating: "4.6/5",
      duration: "18 weeks",
      level: "Intermediate",
      category: "Software Development",
      link: "/mobile-app-development-course"
    },
    {
      title: "Backend Development with Node.js",
      description: "Build scalable APIs and microservices with Node.js and Express.",
      rating: "4.7/5",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Software Development",
      link: "/backend-development-nodejs-course"
    },
    {
      title: "DevOps & CI/CD",
      description: "Master Docker, Kubernetes, and automated deployment pipelines.",
      rating: "4.5/5",
      duration: "10 weeks",
      level: "Advanced",
      category: "Software Development",
      link: "/devops-cicd-course"
    },
    // Cloud Computing
    {
      title: "AWS Solutions Architect",
      description: "Design and deploy scalable applications on Amazon Web Services.",
      rating: "4.8/5",
      duration: "16 weeks",
      level: "Advanced",
      category: "Cloud Computing",
      link: "/aws-solutions-architect-course"
    },
    {
      title: "Microsoft Azure Fundamentals",
      description: "Learn cloud services, virtual machines, and Azure deployment strategies.",
      rating: "4.6/5",
      duration: "12 weeks",
      level: "Beginner",
      category: "Cloud Computing",
      link: "/microsoft-azure-fundamentals-course"
    },
    {
      title: "Google Cloud Platform",
      description: "Utilize GCP services for data analytics, ML, and application hosting.",
      rating: "4.7/5",
      duration: "14 weeks",
      level: "Intermediate",
      category: "Cloud Computing",
      link: "/google-cloud-platform-course"
    },
    {
      title: "Cloud Security & Compliance",
      description: "Secure cloud infrastructure and ensure regulatory compliance.",
      rating: "4.5/5",
      duration: "8 weeks",
      level: "Advanced",
      category: "Cloud Computing",
      link: "/cloud-security-compliance-course"
    },
    // Fashion & Interior
    {
      title: "Fashion Design Fundamentals",
      description: "Learn sketching, fabric selection, and garment construction techniques.",
      rating: "4.6/5",
      duration: "20 weeks",
      level: "Beginner",
      category: "Fashion & Interior",
      link: "/fashion-design-fundamentals-course"
    },
    {
      title: "Interior Design & Space Planning",
      description: "Create functional and aesthetic living spaces with 3D modeling tools.",
      rating: "4.7/5",
      duration: "16 weeks",
      level: "Intermediate",
      category: "Fashion & Interior",
      link: "/interior-design-space-planning-course"
    },
    {
      title: "Fashion Marketing & Branding",
      description: "Build fashion brands and understand retail marketing strategies.",
      rating: "4.4/5",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Fashion & Interior",
      link: "/fashion-marketing-branding-course"
    },
    {
      title: "Sustainable Design Practices",
      description: "Eco-friendly approaches to fashion and interior design projects.",
      rating: "4.5/5",
      duration: "10 weeks",
      level: "Beginner",
      category: "Fashion & Interior",
      link: "/sustainable-design-practices-course"
    },
    // SAP
    {
      title: "SAP HANA Database Administration",
      description: "Master in-memory database management and optimization techniques.",
      rating: "4.7/5",
      duration: "14 weeks",
      level: "Advanced",
      category: "SAP",
      link: "/sap-hana-database-administration-course"
    },
    {
      title: "SAP FICO (Finance & Controlling)",
      description: "Learn financial accounting and controlling modules in SAP ERP.",
      rating: "4.6/5",
      duration: "16 weeks",
      level: "Intermediate",
      category: "SAP",
      link: "/sap-fico-finance-controlling-course"
    },
    {
      title: "SAP MM (Materials Management)",
      description: "Handle procurement, inventory, and supply chain processes.",
      rating: "4.5/5",
      duration: "12 weeks",
      level: "Beginner",
      category: "SAP",
      link: "/sap-mm-materials-management-course"
    },
    {
      title: "SAP Analytics Cloud",
      description: "Create dashboards and perform enterprise planning with SAC.",
      rating: "4.4/5",
      duration: "10 weeks",
      level: "Intermediate",
      category: "SAP",
      link: "/sap-analytics-cloud-course"
    },
    // HR
    {
      title: "Strategic Human Resources Management",
      description: "Align HR practices with business strategy and organizational goals.",
      rating: "4.6/5",
      duration: "12 weeks",
      level: "Advanced",
      category: "HR",
      link: "/strategic-human-resources-management-course"
    },
    {
      title: "Talent Acquisition & Recruitment",
      description: "Master modern recruiting techniques and candidate assessment methods.",
      rating: "4.5/5",
      duration: "8 weeks",
      level: "Intermediate",
      category: "HR",
      link: "/talent-acquisition-recruitment-course"
    },
    {
      title: "HR Analytics & People Data",
      description: "Use data to make informed decisions about workforce management.",
      rating: "4.7/5",
      duration: "10 weeks",
      level: "Intermediate",
      category: "HR",
      link: "/hr-analytics-people-data-course"
    },
    {
      title: "Employee Relations & Engagement",
      description: "Build positive workplace culture and handle employee conflicts.",
      rating: "4.4/5",
      duration: "6 weeks",
      level: "Beginner",
      category: "HR",
      link: "/employee-relations-engagement-course"
    },
    // Language
    {
      title: "Business English Communication",
      description: "Enhance professional English skills for global business environments.",
      rating: "4.5/5",
      duration: "16 weeks",
      level: "Intermediate",
      category: "Language",
      link: "/business-english-communication-course"
    },
    {
      title: "Spanish for Beginners",
      description: "Learn conversational Spanish with interactive lessons and practice.",
      rating: "4.6/5",
      duration: "20 weeks",
      level: "Beginner",
      category: "Language",
      link: "/spanish-for-beginners-course"
    },
    {
      title: "Technical Writing & Documentation",
      description: "Master clear, concise writing for technical and business contexts.",
      rating: "4.4/5",
      duration: "8 weeks",
      level: "Intermediate",
      category: "Language",
      link: "/technical-writing-documentation-course"
    },
    {
      title: "Mandarin Chinese Essentials",
      description: "Build foundational Chinese language skills for business and travel.",
      rating: "4.3/5",
      duration: "24 weeks",
      level: "Beginner",
      category: "Language",
      link: "/mandarin-chinese-essentials-course"
    }
  ]

  const getLevelColor = (level: any) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-50'
      case 'Intermediate': return 'text-blue-600 bg-blue-50'
      case 'Advanced': return 'text-purple-600 bg-purple-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Machine Learning': 'text-orange-600 bg-orange-50',
      'Software Development': 'text-blue-600 bg-blue-50',
      'Data Science': 'text-indigo-600 bg-indigo-50',
      'Cybersecurity': 'text-red-600 bg-red-50',
      'Cloud Computing': 'text-cyan-600 bg-cyan-50',
      'Fashion & Interior': 'text-pink-600 bg-pink-50',
      'SAP': 'text-yellow-600 bg-yellow-50',
      'HR': 'text-emerald-600 bg-emerald-50',
      'Language': 'text-violet-600 bg-violet-50'
    }
    return colors[category] || 'text-gray-600 bg-gray-50'
  }

  return (
    <div className='w-full h-auto flex flex-col gap-10 items-center justify-center py-12 text-black'>

      <div className='md:w-10/12 w-11/12 flex flex-col items-center justify-center h-auto'>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center">
          {allCourses.map((course, index) => (
            <div
              key={index}
              className="w-full max-w-sm h-auto flex flex-col p-6 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">{course.title}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
              </div>

              <div className="mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
                  {course.category}
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

              <Link href={`/courses/${course.link}`} className="w-full">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-[#CD4647] to-[#7F3B40] hover:from-[#B73E3F] hover:to-[#6F3336] transition-all duration-200"
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainCourse