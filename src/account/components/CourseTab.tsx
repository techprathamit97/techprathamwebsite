import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus, Trash2, Star } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

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

const courseSchema = z.object({
    title: z.string().min(1, "Title is required"),
    shortDesc: z.string().min(1, "Short description is required"),
    description: z.string().min(1, "Description is required"),
    rating: z.string().min(1, "Rating is required"),
    duration: z.string().min(1, "Duration is required"),
    level: z.enum(["Beginner", "Intermediate", "Advanced"], { required_error: "Level is required" }),
    category: z.string().min(1, "Category is required"),
    placement_report: z.string().min(1, "Placement report is required"),
    curriculum: z.string().min(1, "Curriculum is required"),
    interview: z.string().min(1, "Interview information is required"),
    link: z.string().url("Please enter a valid URL").min(1, "Course link is required"),
    videoLink: z.string().url("Please enter a valid URL").min(1, "Video link is required"),
    assesment_link: z.string().url("Please enter a valid URL").min(1, "Assessment link is required"),
    curriculum_data: z.array(curriculumSchema).optional(),
    skills_data: z.array(z.string()).optional(),
    faqs_data: z.array(faqSchema).optional()
});

type CourseFormData = z.infer<typeof courseSchema>;

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
        <div className="border rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
                <h4 className="font-medium">Topic {index + 1}</h4>
                {canRemove && (
                    <Button
                        type="button"
                        onClick={onRemove}
                        variant="destructive"
                        size="sm"
                    >
                        <Trash2 className="w-4 h-4" />
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name={`curriculum_data.${index}.que`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Question/Topic</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter topic or question" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`curriculum_data.${index}.ans`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Answer/Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter detailed answer or description"
                                    rows={3}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            {/* Topics Section */}
            <div className="space-y-4">
                <FormLabel>Subtopics</FormLabel>
                <div className="flex gap-2">
                    <Input
                        value={newTopic}
                        onChange={(e) => setNewTopic(e.target.value)}
                        placeholder="Add a subtopic"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTopic())}
                    />
                    <Button type="button" onClick={addTopic} variant="outline" size="sm">
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
                {topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {topics.map((topic: any, topicIndex: any) => (
                            <div key={topicIndex} className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                                <span className="text-sm">{topic}</span>
                                <button
                                    type="button"
                                    onClick={() => removeTopic(topicIndex)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Trash2 className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const CourseTab = () => {
    const [newSkill, setNewSkill] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<CourseFormData>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            title: '',
            shortDesc: '',
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
            faqs_data: [{ que: '', ans: '' }]
        }
    });

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
        const slug = courseTitle
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        form.setValue('link', `${slug}`);
    }, [courseTitle, form]);

    const onSubmit = async (data: CourseFormData) => {
        setIsSubmitting(true);

        try {
            console.log('Submitting form data:', data);

            const response = await fetch('/api/course/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();

                console.log('Course created successfully:', result);
                alert(`Course created successfully! Course ID: ${result._id}`);

                form.reset();
                // router.push('/courses');

            } else {
                const errorResult = await response.json();
                console.error('API Error:', errorResult);
                alert(`Error: ${errorResult.message || 'Failed to create course'}`);
            }

        } catch (error) {
            // Handle network errors
            console.error('Network Error:', error);
            alert('Network error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const skills = form.watch('skills_data') || [];

    return (
        <div className="bg-[#242935] shadow-sm rounded-lg">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Star className="w-6 h-6 text-yellow-500" />
                        Create New Course
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            {/* Basic Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Course Title *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="PHP Beginner" {...field} />
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
                                                <Input placeholder="e.g., Programming, Design, Marketing" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="shortDesc"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Short Description *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Brief description of the course" {...field} />
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
                                            <Textarea
                                                placeholder="Comprehensive course description"
                                                rows={4}
                                                {...field}
                                            />
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
                                                <Input placeholder="e.g., 8 weeks, 40 hours" {...field} />
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
                                                <Input placeholder="e.g., 4.5, 5.0" {...field} />
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
                                            <FormLabel>Curriculum Summary *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Brief overview of the curriculum"
                                                    rows={3}
                                                    {...field}
                                                />
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
                                            <FormLabel>Interview Information *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Interview preparation details"
                                                    rows={3}
                                                    {...field}
                                                />
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
                                            <Textarea
                                                placeholder="Placement statistics and success stories"
                                                rows={3}
                                                {...field}
                                            />
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
                                                <Input placeholder="https://example.com/course" {...field} />
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
                                                <Input placeholder="https://youtube.com/watch?v=..." {...field} />
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
                                                <Input placeholder="https://example.com/assessment" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Skills Section */}
                            <div className="space-y-4">
                                <FormLabel>Skills You'll Learn</FormLabel>
                                <div className="flex gap-2">
                                    <Input
                                        value={newSkill}
                                        onChange={(e) => setNewSkill(e.target.value)}
                                        placeholder="Add a skill"
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                                    />
                                    <Button type="button" onClick={addSkill}>
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </div>
                                {skills.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, index) => (
                                            <div key={index} className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                                                <span className="text-sm">{skill}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeSkill(index)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Curriculum Section */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <FormLabel>Curriculum Details</FormLabel>
                                    <Button
                                        type="button"
                                        onClick={() => appendCurriculum({ que: '', ans: '', topics: [] })}
                                        variant="outline"
                                        size="sm"
                                    >
                                        <Plus className="w-4 h-4 mr-2" />
                                        Add Topic
                                    </Button>
                                </div>
                                {curriculumFields.map((field, index) => (
                                    <CurriculumTopicItem
                                        key={field.id}
                                        form={form}
                                        index={index}
                                        canRemove={curriculumFields.length > 1}
                                        onRemove={() => removeCurriculum(index)}
                                    />
                                ))}
                            </div>

                            {/* FAQs Section */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <FormLabel>Frequently Asked Questions</FormLabel>
                                    <Button
                                        type="button"
                                        onClick={() => appendFaq({ que: '', ans: '' })}
                                        variant="outline"
                                        size="sm"
                                    >
                                        <Plus className="w-4 h-4 mr-2" />
                                        Add FAQ
                                    </Button>
                                </div>
                                {faqFields.map((field, index) => (
                                    <div key={field.id} className="border rounded-lg p-4 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-medium">FAQ {index + 1}</h4>
                                            {faqFields.length > 1 && (
                                                <Button
                                                    type="button"
                                                    onClick={() => removeFaq(index)}
                                                    variant="destructive"
                                                    size="sm"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name={`faqs_data.${index}.que`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Question</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter frequently asked question" {...field} />
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
                                                            <Textarea
                                                                placeholder="Enter detailed answer"
                                                                rows={3}
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-6">
                                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                                    {isSubmitting ? 'Creating Course...' : 'Create Course'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default CourseTab