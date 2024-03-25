import { type Metadata } from 'next';

import { Blockquote } from '@/components/Blockquote';
import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { GridList, GridListItem } from '@/components/GridList';
import { GridPattern } from '@/components/GridPattern';
import { List, ListItem } from '@/components/List';
import { PageIntro } from '@/components/PageIntro';
import { SectionIntro } from '@/components/SectionIntro';
import { StylizedImage } from '@/components/StylizedImage';
import { TagList, TagListItem } from '@/components/TagList';
import imageLaptop from '@/images/laptop.jpg';
import imageMeeting from '@/images/meeting.jpg';
import imageWhiteboard from '@/images/whiteboard.jpg';

function Section({
  title,
  image,
  children,
}: {
  title: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>;
  children: React.ReactNode;
}) {
  return (
    <Container className='group/section [counter-increment:section]'>
      <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
        <div className='flex justify-center'>
          <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
            <StylizedImage
              {...image}
              sizes='(min-width: 1024px) 41rem, 31rem'
              className='justify-center lg:justify-end lg:group-even/section:justify-start'
            />
          </FadeIn>
        </div>
        <div className='mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first'>
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden='true'
            />
            <h2 className='mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
              {title}
            </h2>
            <div className='mt-6'>{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function Discover() {
  return (
    <Section title='Discover' image={{ src: imageWhiteboard }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          We start our projects by getting to know our clients business model to better understand
          their <strong className='font-semibold text-neutral-950'>needs</strong> and goals for
          their project.
        </p>
        <p>
          We map out each project with a roadmap, laying out each step in the process, then dive
          into each step with a fine-tooth comb to make sure we know exactly how to build out each
          part.
        </p>
        <p>
          Only once we have clearly set out a blueprint of the requirements for the project and our
          plan to accomplish each goal do we begin the process of building out the project.
        </p>
      </div>

      <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
        Included in this phase
      </h3>
      <TagList className='mt-4'>
        <TagListItem>Initial project planning</TagListItem>
        <TagListItem>Client collaboration</TagListItem>
        <TagListItem>Design coordination</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
      </TagList>
    </Section>
  );
}

function Build() {
  return (
    <Section title='Build' image={{ src: imageLaptop, shape: 1 }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          The build phase starts with the initial installation of the core project infrastructure
          and any dependencies. From there, we prioritize the project requirements and features and
          assign time estimates and add details to each task.
        </p>
        <p>
          We then begin the process of dividing the tasks into sprints, each lasting 2 weeks. This
          allows us to both set reasonable expectations, as well as track our own progress and make
          sure we are accountable with our time.
        </p>
        <p>
          With our sprints set, we begin taking tasks and completing them. After each sprint, we
          offer our clients an opportunity to meet with us so we can share our progress and demo our
          latest changes. We then take any feedback from our demo meeting and incorporate it into
          our sprints so that we can continue to build out the project in a manner that best lines
          up with the end goal for the project.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Emily Jackson', role: 'Head Chef at EJ Catering' }}
        className='mt-12'
      >
        We were really impressed with the progress the team at GreatIdea.dev made each sprint. It
        was cool to see the project transform from a simple idea to a fully functional application.
        Seeing the progress each sprint was a great way to stay engaged and excited about the final
        product.
      </Blockquote>
    </Section>
  );
}

function Deliver() {
  return (
    <Section title='Deliver' image={{ src: imageMeeting, shape: 2 }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          Once our main sprint goals are complete, we begin the process of testing and Q&A. During
          this stage, we invite the client to use the app as if they were using the final product to
          help identify any bugs or make any changes to copy or design.
        </p>
        <p>
          During this phase, our team works vigorously with the client to ensure the project is
          fully functional and any bugs are documented, prioritized and worked out prior to the
          launch of the site.
        </p>
        <p>
          Once we ensure that the main pages of the site are{' '}
          <strong className='font-semibold text-neutral-950'>fully functional</strong>, we deploy
          the site to the appropriate infrastructure and work with our client to monitor user
          experience and traffic to ensure the launch is successful.
        </p>
      </div>

      <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
        Included in this phase
      </h3>
      <List className='mt-8'>
        <ListItem title='Collaboration'>
          Constant collaboration with the client and their team to ensure the deployed project meets
          all preliminary requirements.
        </ListItem>
        <ListItem title='Support'>
          Monitoring and support to address any post-launch issues or optimizations necessary for
          the success of the project.
        </ListItem>
        <ListItem title='Refinement'>
          Continued refinement of the project to ensure it meets the needs of the client and their
          users.
        </ListItem>
      </List>
    </Section>
  );
}

function Values() {
  return (
    <div className='relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40'>
      <div className='absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50'>
        <GridPattern
          className='absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow='Our values' title='Balancing reliability and innovation'>
        <p>
          We strive to provide the best possible experience for our clients by balancing our
          enthusiasm for innovation with our commitment to reliability. We believe in finding a
          happy medium between cutting-edge technology and tried-and-true methods to ensure that our
          clients receive the best value possible.
        </p>
      </SectionIntro>

      <Container className='mt-24'>
        <GridList>
          <GridListItem title='Meticulous'>
            Our attention to detail is unmatched, and our clients can rest assured that we will
            never overlook even the smallest detail.
          </GridListItem>
          <GridListItem title='Efficient'>
            We constantly find ways to improve our processes and make sure we are delivering the
            best possible product in the most efficient manner.
          </GridListItem>
          <GridListItem title='Adaptable'>
            We know that the only constant in the tech industry is change, and we are always ready
            to pivot when necessary.
          </GridListItem>
          <GridListItem title='Honest'>
            We believe in transparency and honesty with our clients, and we strive to be up front
            and set reasonable expectations for each project.
          </GridListItem>
          <GridListItem title='Loyal'>
            Our clients are our backbone, and we are committed to ensuring that they are satisfied
            with the work we provide, even after the project is complete.
          </GridListItem>
          <GridListItem title='Innovative'>
            Our team is always on the lookout for new and exciting services to offer our clients
            that will enhance their online presence and help them stand out from the competition.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
};

export default function Process() {
  return (
    <>
      <PageIntro eyebrow='Our process' title='How we work'>
        <p>
          We believe in efficiency and maximizing our resources to provide our clients with the best
          possible experience, regardless of the project size. Our process is designed to be
          transparent and collaborative, ensuring that our clients are involved every step of the
          way.
        </p>
      </PageIntro>

      <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40'>
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  );
}
