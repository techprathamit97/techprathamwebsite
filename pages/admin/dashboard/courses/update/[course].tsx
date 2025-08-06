import React, { useContext, useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus, Trash2, Star } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { FaUpload } from 'react-icons/fa';
import Image from 'next/image';
import { toast } from 'sonner';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AdminLoader from '@/src/account/common/AdminLoader';
import SignOut from '@/src/account/common/SignOut';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';
import { UserContext } from '@/context/userContext';

// Zod Schema
const curriculumSchema = z.object({
  que: z.string().min(1, "Question is required"),
  ans: z.string().min(1, "Answer is required"),
  topics: z.array(z.string()).optional()
});

const faqSchema = z.object({
  que: z.string().min(1, "Question is required"),
  ans: z.string().min(1, "Answer is required")
});

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  objective: z.string().min(1, "Objective is required")
});

const courseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  shortDesc: z.string().min(1, "Short description is required"),
  image: z.string(),
  description: z.string().min(1, "Description is required"),
  rating: z.string().min(1, "Rating is required"),
  duration: z.string().min(1, "Duration is required"),
  level: z.enum(["Beginner", "Intermediate", "Advanced"], { required_error: "Level is required" }),
  category: z.string().min(1, "Category is required"),
  placement_report: z.string().min(1, "Placement report is required"),
  curriculum: z.string().min(1, "Curriculum is required"),
  interview: z.string().min(1, "Interview information is required"),
  link: z.string().min(1, "Course link is required"),
  videoLink: z.string().url("Please enter a valid URL").min(1, "Video link is required"),
  assesment_link: z.string().url("Please enter a valid URL").min(1, "Assessment link is required"),
  curriculum_data: z.array(curriculumSchema).optional(),
  skills_data: z.array(z.string()).optional(),
  faqs_data: z.array(faqSchema).optional(),
  project_data: z.array(projectSchema).optional(),
});

type CourseFormData = z.infer<typeof courseSchema>;

interface Course extends CourseFormData {
  id: string;
  _id: string;
}

// CurriculumTopicItem Component
const CurriculumTopicItem = ({ form, index, canRemove, onRemove }: {
  form: any;
  index: number;
  canRemove: boolean;
  onRemove: () => void;
}) => {
  const [newTopic, setNewTopic] = useState('');

  const addTopic = () => {
    if (newTopic.trim()) {
      const currentTopics = form.getValues(`curriculum_data.${index}.topics`) || [];
      const updatedTopics = [...currentTopics, newTopic.trim()];
      form.setValue(`curriculum_data.${index}.topics`, updatedTopics);
      setNewTopic('');
    }
  };

  const removeTopic = (topicIndex: number) => {
    const currentTopics = form.getValues(`curriculum_data.${index}.topics`) || [];
    const updatedTopics = currentTopics.filter((_: any, i: any) => i !== topicIndex);
    form.setValue(`curriculum_data.${index}.topics`, updatedTopics);
  };

  const topics = form.watch(`curriculum_data.${index}.topics`) || [];

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Topic {index + 1}</CardTitle>
        {canRemove && (
          <Button
            type="button"
            onClick={onRemove}
            variant="destructive"
            size="sm"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name={`curriculum_data.${index}.que`}
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Question/Topic</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`curriculum_data.${index}.ans`}
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Answer/Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Topics Section */}
        <div className="mb-4">
          <FormLabel>Subtopics</FormLabel>
          <div className="flex gap-2 mt-2">
            <Input
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
              placeholder="Add a subtopic"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTopic())}
            />
            <Button type="button" onClick={addTopic} variant="outline" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          {topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {topics.map((topic: any, topicIndex: any) => (
                <div key={topicIndex} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                  <span className="text-sm">{topic}</span>
                  <button
                    type="button"
                    onClick={() => removeTopic(topicIndex)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const UpdateCoursePage = () => {
  const [newSkill, setNewSkill] = useState('');
  const [publicId, setPublicId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [courseId, setCourseId] = useState<string>("");
  const router = useRouter();
  const { course: courseLink } = router.query;
  const { authenticated, isAdmin } = useContext(UserContext);

  const form = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: '',
      shortDesc: '',
      image: '',
      description: '',
      rating: '',
      duration: '',
      level: 'Beginner',
      category: '',
      placement_report: '',
      curriculum: '',
      interview: '',
      link: '',
      videoLink: '',
      assesment_link: '',
      curriculum_data: [{ que: '', ans: '', topics: [] }],
      skills_data: [],
      faqs_data: [{ que: '', ans: '' }],
      project_data: [{ title: '', objective: '' }],
    }
  });

  const { setValue, reset } = form;

  // Fetch course data
  useEffect(() => {
    const fetchCourseData = async () => {
      if (!courseLink || typeof courseLink !== 'string') {
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/course/link?link=${encodeURIComponent(courseLink)}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError('Course not found');
          } else {
            setError('Failed to fetch course data');
          }
          return;
        }

        const courseData: Course = await response.json();
        setCourseId(courseData._id || courseData.id);
        setPublicId(courseData.image || "");

        // Reset form with fetched data
        reset({
          title: courseData.title || '',
          shortDesc: courseData.shortDesc || '',
          image: courseData.image || '',
          description: courseData.description || '',
          rating: courseData.rating || '',
          duration: courseData.duration || '',
          level: courseData.level as "Beginner" | "Intermediate" | "Advanced" || 'Beginner',
          category: courseData.category || '',
          placement_report: courseData.placement_report || '',
          curriculum: courseData.curriculum || '',
          interview: courseData.interview || '',
          link: courseData.link || '',
          videoLink: courseData.videoLink || '',
          assesment_link: courseData.assesment_link || '',
          curriculum_data: courseData.curriculum_data && courseData.curriculum_data.length > 0
            ? courseData.curriculum_data
            : [{ que: '', ans: '', topics: [] }],
          skills_data: courseData.skills_data || [],
          faqs_data: courseData.faqs_data && courseData.faqs_data.length > 0
            ? courseData.faqs_data
            : [{ que: '', ans: '' }],
          project_data: courseData.project_data && courseData.project_data.length > 0
            ? courseData.project_data
            : [{ title: '', objective: '' }],
        });

      } catch (err) {
        console.error('Error fetching course data:', err);
        setError('Failed to fetch course data');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseLink, reset]);

  useEffect(() => {
    if (publicId) {
      setValue("image", publicId);
    }
  }, [publicId, setValue]);

  const getProfileImageUrl = () => {
    if (publicId) {
      return publicId;
    }
    return '/course/course-banner.png';
  };

  const {
    fields: curriculumFields,
    append: appendCurriculum,
    remove: removeCurriculum
  } = useFieldArray({
    control: form.control,
    name: 'curriculum_data'
  });

  const {
    fields: faqFields,
    append: appendFaq,
    remove: removeFaq
  } = useFieldArray({
    control: form.control,
    name: 'faqs_data'
  });

  const {
    fields: projectFields,
    append: appendProject,
    remove: removeProject
  } = useFieldArray({
    control: form.control,
    name: 'project_data'
  });

  const addSkill = () => {
    if (newSkill.trim()) {
      const currentSkills = form.getValues('skills_data') || [];
      const updatedSkills = [...currentSkills, newSkill.trim()];
      form.setValue('skills_data', updatedSkills);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    const currentSkills = form.getValues('skills_data') || [];
    const updatedSkills = currentSkills.filter((_, i) => i !== index);
    form.setValue('skills_data', updatedSkills);
  };

  const courseTitle = form.watch('title');

  useEffect(() => {
    if (courseTitle) {
      const slug = courseTitle
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      form.setValue('link', slug);
    }
  }, [courseTitle, form]);

  const onSubmit = async (data: CourseFormData) => {
    setIsSubmitting(true);
    try {
      console.log('Updating form data:', data);

      const response = await fetch(`/api/course/update/${courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Course updated successfully:', result);
        toast.success('Course updated successfully!');
        router.push('/admin/dashboard/courses');
      } else {
        const errorResult = await response.json();
        toast.error(`Error: ${errorResult.message || 'Failed to update course'}`);
      }
    } catch (error) {
      toast.error('Network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = form.watch('skills_data') || [];

  // Loading state
  if (loading) {
    return (
      <>
        <Head>
          <title>Loading... | TechPratham Admin</title>
        </Head>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-lg">Loading course data...</p>
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <Head>
          <title>Course Not Found | TechPratham Admin</title>
        </Head>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">{error}</h1>
            <p className="text-gray-600 mb-6">The course you're trying to edit doesn't exist or has been removed.</p>
            <Button
              onClick={() => router.push('/admin/dashboard/courses')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Courses
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <React.Fragment>
        {loading ? (
          <AdminLoader />
        ) : (!authenticated || !isAdmin) ? (
          <SignOut />
        ) : (
          <div className='w-full h-full md:h-screen min-h-screen flex flex-row items-start justify-start fixed'>

            <AdminSidebar />

            <div className='bg-[#000] flex flex-col w-full h-full md:relative fixed'>

              <AdminTopBar />

              <div className='w-full h-full p-6 overflow-auto'>
                <Head>
                  <title>Update Course - {form.watch('title')} | TechPratham Admin</title>
                </Head>
                <div className="container mx-auto">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-2xl">Update Course</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {/* Basic Information */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="title"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Course Title *</FormLabel>
                                  <FormControl>
                                    <Input {...field} placeholder="Enter the title of your course" />
                                  </FormControl>
                                  <FormDescription>
                                    Enter the title of your course
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="category"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Category *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          {/* Image Upload */}
                          <div>
                            {publicId ? (
                              <CldImage
                                width="400"
                                height="300"
                                src={publicId}
                                sizes="100vw"
                                alt="Course Image"
                              />
                            ) : (
                              <Image
                                src={getProfileImageUrl()}
                                alt="Course Image"
                                width={400}
                                height={300}
                                className="rounded-lg"
                              />
                            )}

                            <CldUploadWidget
                              uploadPreset="course_images"
                              onSuccess={(result: any) => {
                                if (result.event === 'success' && result.info?.secure_url) {
                                  setPublicId(result.info.secure_url);
                                }
                              }}
                            >
                              {({ open }) => {
                                return (
                                  <Button type="button" onClick={() => open()} className='w-full max-w-80'>
                                    <FaUpload className="mr-2" />
                                    Upload an Image
                                  </Button>
                                );
                              }}
                            </CldUploadWidget>
                          </div>

                          <FormField
                            control={form.control}
                            name="shortDesc"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Short Description *</FormLabel>
                                <FormControl>
                                  <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Detailed Description *</FormLabel>
                                <FormControl>
                                  <Textarea className='h-40' {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Course Details */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                              control={form.control}
                              name="duration"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Duration *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="level"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Level *</FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select level" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="Beginner">Beginner</SelectItem>
                                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                                      <SelectItem value="Advanced">Advanced</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="rating"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Rating *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          {/* Additional Required Fields */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="curriculum"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Curriculum Link *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="interview"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Interview Link *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="placement_report"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Placement Report *</FormLabel>
                                <FormControl>
                                  <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Links */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                              control={form.control}
                              name="link"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Course Link *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="videoLink"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Video Link *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="assesment_link"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Assessment Link *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </CardContent>
                      </Card>

                      {/* Skills Section */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Skills You'll Learn</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex gap-2 mb-4">
                            <Input
                              value={newSkill}
                              onChange={(e) => setNewSkill(e.target.value)}
                              placeholder="Add a skill"
                              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                            />
                            <Button type="button" onClick={addSkill} variant="outline">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          {skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded">
                                  <span>{skill}</span>
                                  <button
                                    type="button"
                                    onClick={() => removeSkill(index)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {/* Curriculum Section */}
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle>Curriculum Details</CardTitle>
                          <Button
                            type="button"
                            onClick={() => appendCurriculum({ que: '', ans: '', topics: [] })}
                            variant="outline"
                            size="sm"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Topic
                          </Button>
                        </CardHeader>
                        <CardContent>
                          {curriculumFields.map((field, index) => (
                            <CurriculumTopicItem
                              key={field.id}
                              form={form}
                              index={index}
                              canRemove={curriculumFields.length > 1}
                              onRemove={() => removeCurriculum(index)}
                            />
                          ))}
                        </CardContent>
                      </Card>

                      {/* FAQs Section */}
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle>Frequently Asked Questions</CardTitle>
                          <Button
                            type="button"
                            onClick={() => appendFaq({ que: '', ans: '' })}
                            variant="outline"
                            size="sm"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add FAQ
                          </Button>
                        </CardHeader>
                        <CardContent>
                          {faqFields.map((field, index) => (
                            <Card key={field.id} className="mb-4">
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">FAQ {index + 1}</CardTitle>
                                {faqFields.length > 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => removeFaq(index)}
                                    variant="destructive"
                                    size="sm"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </CardHeader>
                              <CardContent>
                                <FormField
                                  control={form.control}
                                  name={`faqs_data.${index}.que`}
                                  render={({ field }) => (
                                    <FormItem className="mb-4">
                                      <FormLabel>Question</FormLabel>
                                      <FormControl>
                                        <Input {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name={`faqs_data.${index}.ans`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Answer</FormLabel>
                                      <FormControl>
                                        <Textarea {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </CardContent>
                            </Card>
                          ))}
                        </CardContent>
                      </Card>

                      {/* Project Section */}
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle>Projects</CardTitle>
                          <Button
                            type="button"
                            onClick={() => appendProject({ title: '', objective: '' })}
                            variant="outline"
                            size="sm"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Project
                          </Button>
                        </CardHeader>
                        <CardContent>
                          {projectFields.map((field, index) => (
                            <Card key={field.id} className="mb-4">
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Project {index + 1}</CardTitle>
                                {projectFields.length > 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => removeProject(index)}
                                    variant="destructive"
                                    size="sm"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </CardHeader>
                              <CardContent>
                                <FormField
                                  control={form.control}
                                  name={`project_data.${index}.title`}
                                  render={({ field }) => (
                                    <FormItem className="mb-4">
                                      <FormLabel>Title</FormLabel>
                                      <FormControl>
                                        <Input {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name={`project_data.${index}.objective`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Objective</FormLabel>
                                      <FormControl>
                                        <Textarea {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </CardContent>
                            </Card>
                          ))}
                        </CardContent>
                      </Card>

                      {/* Submit Button */}
                      <Card>
                        <CardContent className="pt-6">
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Updating Course...' : 'Update Course'}
                          </Button>
                        </CardContent>
                      </Card>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    </>
  );
};

export default UpdateCoursePage;
