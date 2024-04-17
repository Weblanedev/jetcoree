import Image from 'next/image'
import vacation7 from '../public/assets/hero-1.jpg'
import vacation8 from '../public/assets/hero-2.jpg'
import Form from '@/components/molecules/Form'
import { useEffect, useState } from 'react';
import MetaTag from '@/components/molecules/Metatag';
export default function Study() {
    const [outside, setOutsider] = useState<any>()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const outsider = document.getElementById('outsider');
            setOutsider(outsider)
        }
    }, []);


    const distance = 300;

    const scrollLft = () => {
        outside?.scrollBy({
            left: -distance,
            behavior: 'smooth'
        });
    }

    const scrollRight = () => {
        outside?.scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    }
    const Testimonials = [
        {
            id: 1,
            name: "Mr James Okusanya",
            occupation: "Studying Msc public health",
            testimonial: "I would recommend West-Gate Migration Services to anyone trying to get university admission overseas. They made my admission process very smooth and easy."

        },
        {
            id: 2,
            name: "Miss Obiakaeze",
            occupation: "",
            testimonial: "I can't say enough about West-Gate Migration Services. West-Gate Migration Services really helped with my schenghen visa process after so many denials and money wasted. Thanks to them, my visa was approved in March."

        },
        {
            id: 3,
            name: "Mrs Vicky Dozie",
            occupation: "",
            testimonial: "I have been using West-Gate Migration Services for over a year now for flight bookings! I can't imagine my travel life without them. Their customer service is great and they respond to complaints swiftly."

        },
        {
            id: 4,
            name: "Mr Nwaneri",
            occupation: "",
            testimonial: "West-Gate Migration Services helped my family and I with getting our passports at the Nigerian immigration office and tourist visas to England. Previously, we were lost and did not know what to do or where to start from. Using West-Gate Migration Services has definitely saved us time and money."

        },
    ]
    const Offers = [
        {
            id: 1,
            title: "Free Detailed Student Brochure",
            subText: "Download our expert-approved, highly detailed student brochure on any course of study in any part of the world, for free. Also included in the brochure are language proficiency test guides, personal statement tips and scholarship requirements.",
            img: "/assets/applications.png"

        },
        {
            id: 2,
            title: "Scholarship Support",
            subText: "Our scholarship support services find you the most suitable scholarships for your course of study at your preferred university, to help you cut down on tuition fees, accommodation expenses and other suitable immigration expenses.",
            img: "/assets/visas.png"

        },
        {
            id: 3,
            title: "Accommodation Options",
            subText: "Save yourself the time and stress of sourcing for accommodation at your chosen institution. We offer you the best deals on different accommodation options that suit your needs and preferences, when you entrust your student immigration journey to us.",
            img: "/assets/shops.png"

        },
        {
            id: 4,
            title: "Post Study Work Permit",
            subText: "Seamlessly transition from a student to a legally-approved working immigrant in the preferred country of your choice. We can pave the path to your full citizenship by helping you secure permits that extend your stay.",
            img: "/assets/approval.png"

        },
    ]
    return (
        <div className=''>
            <MetaTag title="Study" />
            <div className='flex justify-center items-center study-hero'>
                <p className='text-white text-[60px] font-[500] recoletafont'>Study</p>
            </div>
            <div className='2xl:w-[1440px] mx-auto'>
                <div className='text-center my-[50px]'>
                    <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'> Study with West-Gate</h1>
                    <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                        Pursue an international degree in any part of the world.
                    </p>
                    <div className='flex sm:justify-center gap-[20px] sm:gap-[32px] mt-[30px] overflow-scroll no-scrollbar'>
                        {[{
                            country: "Canada",
                            name: "+1",
                            code: "CA",
                            flag: "https://flagcdn.com/ca.svg"
                        }, {
                            country: "Australia",
                            name: "+61",
                            code: "AU",
                            flag: "https://flagcdn.com/au.svg"
                        }, {
                            country: "UK",
                            name: "+44",
                            code: "GB",
                            flag: "https://flagcdn.com/gb.svg"
                        }, {
                            country: "USA",
                            name: "+1",
                            code: "US",
                            flag: "https://flagcdn.com/us.svg"
                        }, {
                            country: "China",
                            name: "+86",
                            code: "CN",
                            flag: "https://flagcdn.com/cn.svg"
                        },].map((e, idx) => {
                            return (
                                <div key={idx}>
                                    <div className="w-[150px] h-[150px] relative">
                                        <Image src={e.flag} fill={true} alt={e.country} />
                                    </div>
                                    <h1 className='text-[16px] text-center text-gray-1100'>{e.country}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row py-[50px] sm:py-[110px] px-[20px] lg:px-[20px] xl:px-[100px] gap-[52px] lg:gap-[50px]'>
                    <div className="w-full h-[248px] sm:h-[400px] lg:w-[440px] xl:w-[636px] xl:h-[450px] relative">
                        <Image src="/assets/explore.jpg" fill={true} alt="Explore Options" className='rounded-2xl' />
                    </div>
                    <div>
                        {/* <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>WHAT WE OFFER</h1> */}
                        <h1 className='recoletafont text-[32px] sm:text-[40px] leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Explore Your Options</h1>
                        <p className='manropefont text-justify text-[16px] leading-[28px] font-[400] text-gray-1000 w-full lg:w-[425px]'>
                            Studying abroad can be a life-changing experience, offering you the opportunity to immerse yourself in a new culture, learn a new language, make new friends, and gain valuable skills and knowledge. <br></br> We know the process of applying for your student visa can be daunting. That{"'"}s why here at Westgate, our priority is to make your application as seamless as possible. The first step to letting us know how we can do that, is by choosing a destination.
                        </p>
                        {/* <p className='text-gray-1100 text-[20px] leading-[28px] my-[30px] manropefont'>100+ universities in 10 countries:</p> */}

                    </div>

                </div>
                <div className='bg-blue-1300  py-[50px] sm:py-[110px] px-[20px] sm:px-[50px] lg:px-[20px] xl:px-[100px] flex items-center'>
                    <div className='w-[150%]'>

                        <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Book a Consultation</h1>
                        <p className='manropefont block lg:hidden text-[16px] sm:text-[20px] lg:w-[100%] text-gray-1000'>Chosen a dream destination yet? The next step is booking a consultation with our highly experienced travel consultants, who will guide and support you throughout your application process. </p>
                        <Form mutationType="study"></Form>
                    </div>
                    <div className='w-[100%] hidden lg:block'>
                        <div className="w-[100%] h-[300px] relative mb-[50px]">
                            <Image src="/assets/hero-4.jpg" fill={true} alt="Book Consultation" className='rounded-2xl' />
                        </div>
                        <p className='text-justify manropefont text-[16px] sm:text-[20px] lg:w-[100%] text-gray-1000'>Chosen a dream destination yet? The next step is booking a consultation with our highly experienced travel consultants, who will guide and support you throughout your application process. </p>
                        {/* <div className="w-[300px] h-[200px] relative">
                        <Image src="/assets/hero-3.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                    </div>
             
                    <div className="w-[380px] h-[240px] relative -translate-y-24">
                        <Image src="/assets/vacation-7.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                    </div> */}

                    </div>
                </div>
                <div className='my-[50px] px-[20px] md:px-[50px] lg:px-[20px] xl:px-[150px] flex flex-col-reverse lg:flex-row gap-[77px]'>
                    <div>
                        <h1 className='recoletafont pb-[12px] text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>How We Make Applying Easier</h1>
                        <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000'>
                            There{"'"}s no easier way to apply for your student visa than when you apply with us. See how we make your application easier, smoother and more seamless.
                        </p>
                        <div className='grid grid-1 lg:grid-cols-2 gap-y-[30px] mt-[56px]'>
                            {
                                Offers.map((item, index) => {
                                    return (
                                        <div key={index} className='flex gap-[24px] md:gap-[40px] lg:gap-[20px]'>
                                            <div>
                                                <div className="mb-[12px] w-[58px] h-[58px] relative">
                                                    <Image src={item.img} fill={true} alt={item.title} />
                                                </div>
                                                <h1 className='text-[19px] xl:text-[24px] leading-[36px] pb-[8px] xl:pb-[16px] font-[600] text-blue-1000 recoletafont'>{item.title}</h1>
                                                <h1 className='xl:w-[85%] text-justify font-[400] text-[14px] manropefont text-gray-1000 sm:text-[15px] leading-[24px]'>{item.subText}</h1>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='py-[50px] sm:py-[110px] pl-[20px] lg:pl-[20px] xl:pl-[100px]'>
                    <div className=''>
                        <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>TESTIMONIALS</h1>
                        <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Our Success Stories</h1>
                        <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px]'>
                            Hear from fellow students who are currently pursuing the career of their dreams in the country of their dreams.
                        </p>
                    </div>
                    <div className='mt-[59px] flex gap-[32px] overflow-scroll no-scrollbar' id="outsider">
                        {Testimonials.map((e, idx) => {
                            return (

                                <div className='bg-blue-1400 px-[60px] py-[57px] w-fit relative rounded-[24px]' key={idx}>
                                    <div className="w-[44px] h-[44px] relative -translate-x-9 -translate-y-3">
                                        <Image src="/assets/comma.svg" fill={true} alt="" className='rounded-2xl' />
                                    </div>
                                    <p className='w-[290px] sm:w-[400px] manropefont text-[18px] leading-[37px]  sm:text-[20px] sm:leading-[41px] text-blue-1000'>{e.testimonial} </p>
                                    <div className='flex gap-[12px] mt-[47px]'>
                                        <div className="w-[40px] h-[40px] relative">
                                            <Image src="/assets/imgavatar.png" fill={true} alt={e.name} className='rounded-2xl' />
                                        </div>
                                        <div>
                                            <h1 className='recoletafont font-[600] text-[18px] leading-[24px] text-blue-1000'>{e.name}</h1>
                                            <p className='manropefont text-gray-1000'>{e.occupation}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                    <div className='flex justify-end mt-[56px] gap-[15px] text-[30px] pr-[50px]'>
                        <h1 className='border-[1px] rounded-[50%] text-gray-1000 border-gray-1000 px-[12px] py-[4px] cursor-pointer' onClick={scrollLft}>&#8592;</h1>
                        <h1 className='border-[1px] rounded-[50%] text-blue-1000 border-blue-1000 px-[12px] py-[4px] cursor-pointer' onClick={scrollRight}>&#8594;</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}