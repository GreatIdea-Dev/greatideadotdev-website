import { type Metadata } from 'next';
import Image from 'next/image';

import { Border } from '@/components/Border';
import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { GridList, GridListItem } from '@/components/GridList';
import { PageIntro } from '@/components/PageIntro';
import { SectionIntro } from '@/components/SectionIntro';
import { StatList, StatListItem } from '@/components/StatList';
import imageJohnLarson from '@/images/team/johnlarson.jpeg';
import imageKadynStafford from '@/images/team/kadynstafford.jpeg';

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox='0 0 128 128' stroke='currentColor' fill='currentColor' {...props}>
      <path d='M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z'></path>
    </svg>
  );
}

function WebsiteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}
      strokeWidth='1.5'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64'
      />
    </svg>
  );
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      stroke='currentColor'
      fill='currentColor'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z'
      />
    </svg>
  );
}

function Culture() {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32'>
      <SectionIntro eyebrow='Our culture' title='We bleed bits and bytes' invert>
        <p>We believe software engineering is a lifestyle, not just an occupation.</p>
      </SectionIntro>
      <Container className='mt-16'>
        <GridList>
          <GridListItem title='Innovation' invert>
            Our team is constantly growing in knowledge so we can cultivate an environment that
            supports creative problem solving and a continuous evolution of our products and
            processes.
          </GridListItem>
          <GridListItem title='Specialization' invert>
            We believe in becoming masters of our tools so we can solve complex problems and create
            innovative solutions both effectively and efficiently.
          </GridListItem>
          <GridListItem title='Collaboration' invert>
            We believe a team must work as a community and utilize all available resources on each
            project in order to foster the creation of superior solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

const team = [
  {
    title: 'Team',
    people: [
      {
        name: 'John Larson',
        role: 'Founder/Lead Developer',
        image: { src: imageJohnLarson },
        github: 'https://github.com/w5dev',
        linkedin: 'https://www.linkedin.com/in/w5dev/',
        website: 'https://w5dev.com',
      },
      {
        name: 'Kadyn Stafford',
        role: 'Software Developer',
        image: { src: imageKadynStafford },
        github: 'https://github.com/jedikay',
        linkedin: 'https://www.linkedin.com/in/kadynstafford/',
        website: 'https://jedikay.com',
      },
    ],
  },
];

function Team() {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='space-y-24'>
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className='grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8'>
              <FadeIn>
                <h2 className='font-display text-2xl font-semibold text-neutral-950'>
                  {group.title}
                </h2>
              </FadeIn>
              <div className='lg:col-span-3'>
                <ul
                  role='list'
                  className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className='group relative overflow-hidden rounded-3xl bg-neutral-100'>
                          <Image
                            alt=''
                            {...person.image}
                            className='h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105'
                          />
                          <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
                            <p className='font-display text-base/6 font-semibold tracking-wide text-white'>
                              {person.name}
                            </p>
                            <p className='mt-2 text-sm text-white'>{person.role}</p>
                            <div className='flex flex-row gap-3 mt-3'>
                              <a href={person.github} target='_blank'>
                                <GitHubIcon className='h-6 w-6 text-white' />
                              </a>
                              <a href={person.linkedin} target='_blank'>
                                <LinkedInIcon className='h-6 w-6 text-white' />
                              </a>
                              <a href={person.website} target='_blank'>
                                <WebsiteIcon className='h-6 w-6 text-white' />
                              </a>
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Our strength is humanity',
};

export default function About() {
  return (
    <>
      <PageIntro eyebrow='About us' title='Our strength is humanity'>
        <p>
          We believe that treating others with respect is the key to long lasting and strong
          relationships.
        </p>
        <div className='mt-10 max-w-2xl space-y-6 text-base'>
          <p>
            GreatIdea.dev is founded on the principle that no matter who we engage with, whether
            they are family, friends, clients or neighbors, our communication and actions should
            come from a place of respect and kindness. In software development, this translates to a
            more stress-free project management flow, which we believe produces a superior product.
          </p>
          <p>
            Mississippi is not only where we live, but it is in our blood. We believe in serving our
            community by offering competitively priced solutions for exceptional quality digital
            products. We believe in adding value wherever possible as a way to give back to
            businesses and individuals who work hard to make Mississippi a great place to live.
          </p>
        </div>
      </PageIntro>
      <Container className='mt-16'>
        <StatList>
          <StatListItem value='10+' label='Years of experience' />
          <StatListItem value='63' label='Clients served' />
          <StatListItem value='47' label='Unique industries' />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <ContactSection />
    </>
  );
}
