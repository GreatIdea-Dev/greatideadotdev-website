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

function ServerStack() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-full max-w-8'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z'
      />
    </svg>
  );
}

function Computer() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-full max-w-8'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25'
      />
    </svg>
  );
}

function Commerce() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-full max-w-8'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z'
      />
    </svg>
  );
}

function Graph() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-full max-w-8'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
      />
    </svg>
  );
}

function MobilePhone() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-full max-w-8'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
      />
    </svg>
  );
}

function Utils() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-full max-w-8'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z'
      />
    </svg>
  );
}

function Clients() {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <Container>
        <FadeIn className='flex items-center gap-x-8'>
          <h2 className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left'>
            We&apos;ve worked with tons of amazing people
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ServicesOld() {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <Container>
        <FadeIn className='flex items-center gap-x-8'>
          <h2 className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left'>
            Custom-tailored solutions for every need
          </h2>
          <div className='h-px flex-auto bg-neutral-800' />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role='list'
            className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 font-display text-sm font-semibold tracking-wider text-white lg:grid-cols-4'
          >
            <li className='flex flex-row items-center justify-start gap-3'>
              <ServerStack />
              <p>Efficient backend solutions</p>
            </li>
            <li className='flex flex-row items-center justify-start gap-3'>
              <Computer />
              <p>Modern frontend UI</p>
            </li>
            <li className='flex flex-row items-center justify-start gap-3'>
              <Commerce />
              <p>Ecommerce and retail</p>
            </li>
            <li className='flex flex-row items-center justify-start gap-3'>
              <Graph />
              <p>Content Management Systems</p>
            </li>
            <li className='flex flex-row items-center justify-start gap-3'>
              <MobilePhone />
              <p>Mobile application development</p>
            </li>
            <li className='flex flex-row items-center justify-start gap-3'>
              <Utils />
              <p>Hosted online business utilities</p>
            </li>
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
          We believe technology is the answer to the world’s greatest challenges. It’s also the
          cause, so we find ourselves in bit of a catch 22 situation.
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
          As long as those opportunities involve giving us money to re-purpose old projects — we can
          come up with an endless number of those.
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
              We specialise in crafting beautiful, high quality marketing pages. The rest of the
              website will be a shell that uses lorem ipsum everywhere.
            </ListItem>
            <ListItem title='Application development'>
              We have a team of skilled developers who are experts in the latest app frameworks,
              like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title='E-commerce'>
              We are at the forefront of modern e-commerce development. Which mainly means adding
              your logo to the Shopify store template we’ve used for the past six years.
            </ListItem>
            <ListItem title='Custom content management'>
              At Studio we understand the importance of having a robust and customised CMS. That’s
              why we run all of our client projects out of a single, enormous Joomla instance.
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
            We specialize in crafting efficient, high quality web applications for businesses hoping
            to establish or expand their business online. From planning to production, we work with
            you every step of the way to ensure your project is a success.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className='mt-24 sm:mt-32 lg:mt-40'
        client={{ name: 'Phobia', logo: logoRipleighDesigns }}
      >
        The team at Studio went above and beyond with our onboarding, even finding a way to access
        the user’s microphone without triggering one of those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  );
}
