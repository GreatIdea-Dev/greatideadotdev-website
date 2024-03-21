/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-default-export */
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { List, ListItem } from '@/components/List';
import { SectionIntro } from '@/components/SectionIntro';
import { StylizedImage } from '@/components/StylizedImage';
import { Testimonial } from '@/components/Testimonial';
import logoRipleighDesigns from '@/images/clients/ripleighdesigns/RipleighDesignsWordmark.svg';
import logoRipleighDesignsDark from '@/images/clients/ripleighdesigns/RipleighDesignsWordmark-dark.svg';
import logoJediKay from '@/images/clients/jedikay/JediKay.png';
import logoW5DEV from '@/images/clients/w5dev/w5dev-white.png';
import logoMyOnlineCookbook from '@/images/clients/my-online-cookbook/my-online-cookbook-white.png';
import logoGreatIdea from '@/images/clients/great-idea/Great Idea Logomark.svg';
import imageLaptop from '@/images/laptop.jpg';
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx';

const clients = [
  ['Ripleigh Designs', logoRipleighDesigns],
  ['JediKay', logoJediKay],
  ['W5DEV', logoW5DEV],
  ['My Online Cookbook', logoMyOnlineCookbook],
  ['Great Idea Media', logoGreatIdea],
];

function Clients() {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <Container>
        <FadeIn className='flex items-center gap-x-8'>
          <h2 className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left'>
            We work with tons of amazing people
          </h2>
          <div className='h-px flex-auto bg-neutral-800' />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role='list'
            className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-5'
          >
            {clients.map(([client, logo]) => (
              <li key={client} className='flex flex-row justify-center items-center'>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    unoptimized
                    className={client === 'Ripleigh Designs' ? '' : 'h-36 w-36'}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function CaseStudies({ caseStudies }: { caseStudies: MDXEntry<CaseStudy>[] }) {
  return (
    <>
      <SectionIntro
        title='Harnessing technology for a brighter future'
        className='mt-24 sm:mt-32 lg:mt-40'
      >
        <p>
          We believe that a robust online presence is the cornerstone of successful commerce,
          providing the digital infrastructure necessary for businesses to thrive in today&apos;s
          interconnected world. Our mission is to empower companies by creating dynamic online
          platforms that drive growth, innovation, and success.
        </p>
      </SectionIntro>
      <Container className='mt-16'>
        <FadeInStagger className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className='flex'>
              <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'>
                <h3>
                  <Link href={caseStudy.href}>
                    <span className='absolute inset-0 rounded-3xl' />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className='h-16 w-16'
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
                  <time dateTime={caseStudy.date.split('-')[0]} className='font-semibold'>
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className='text-neutral-300' aria-hidden='true'>
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>
                  {caseStudy.title}
                </p>
                <p className='mt-4 text-base text-neutral-600'>{caseStudy.description}</p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow='Services'
        title='We help you identify, explore and respond to new opportunities.'
        className='mt-24 sm:mt-32 lg:mt-40'
      >
        <p>
          Our engineers are dedicated to unlocking the full potential of software development,
          offering a boundless array of services that cater to the unique needs of each client. We
          pride ourselves on delivering bespoke solutions that transcend traditional boundaries,
          fostering innovation and excellence in every project.
        </p>
      </SectionIntro>
      <Container className='mt-16'>
        <div className='lg:flex lg:items-center lg:justify-end'>
          <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
            <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
              <StylizedImage
                src={imageLaptop}
                sizes='(min-width: 1024px) 41rem, 31rem'
                className='justify-center lg:justify-end'
              />
            </FadeIn>
          </div>
          <List className='mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
            <ListItem title='Web development'>
              We architect cutting-edge websites that serve as the digital storefront for your
              business. Our web development process involves creating responsive, user-friendly, and
              visually appealing sites that will attract visitors and give your business a leg up
              over the competition.
            </ListItem>
            <ListItem title='Application development'>
              Our engineers are focused on crafting custom, robust, and scalable applications
              tailored to meet your specific business objectives. We ensure seamless functionality
              across all devices (where necessary), which provides users with an engaging and
              efficient digital experience.
            </ListItem>
            <ListItem title='E-commerce'>
              We deliver comprehensive e-commerce solutions that encompass everything from
              storefront design to payment processing. Our goal is to create an online shopping
              experience that is easy, secure, and tailored to the needs of both businesses and
              their customers.
            </ListItem>
            <ListItem title='Custom content management'>
              From blogs to newspapers, our Content Management System (CMS) solutions empower you
              with the ability to manage and update your website’s content with ease. We build
              intuitive and flexible CMS platforms that streamline content management, enabling you
              to keep your site fresh and relevant.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  description: 'We are a development studio working at the intersection of design and technology.',
};

export default async function Home() {
  const caseStudies = (await loadCaseStudies()).slice(0, 3);

  return (
    <>
      <Container className='mt-24 sm:mt-32 md:mt-56'>
        <FadeIn className='max-w-3xl'>
          <h1 className='font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
            Mississippi&apos;s premier software development studio
          </h1>
          <p className='mt-6 text-xl text-neutral-600'>
            At the forefront of digital innovation, our team excels in designing and developing
            premium web applications tailored for businesses seeking to launch or enhance their
            online presence. We collaborate closely from concept to completion, guaranteeing the
            triumph of your venture.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className='mt-24 sm:mt-32 lg:mt-40'
        client={{ name: 'Phobia', logo: logoRipleighDesignsDark }}
      >
        The team at Great Idea Development went above and beyond to make sure our website met our
        needs to showcase our products and provide potential customers a way to contact us and
        engage in business.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  );
}
