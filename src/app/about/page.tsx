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
      },
      {
        name: 'Kadyn Stafford',
        role: 'UI/UX Engineer',
        image: { src: imageKadynStafford },
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
  /* const blogArticles = (await loadArticles()).slice(0, 2); */

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

      {/* <PageLinks
        className='mt-24 sm:mt-32 lg:mt-40'
        title='From the industry'
        intro='Take a look at some interesting news '
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  );
}
