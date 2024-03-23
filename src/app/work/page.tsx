/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Blockquote } from '@/components/Blockquote';
import { Border } from '@/components/Border';
import { Button } from '@/components/Button';
import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { Testimonial } from '@/components/Testimonial';
import logoRipleighDesigns from '@/images/clients/ripleighdesigns/RipleighDesignsWordmark-dark.svg';
import { formatDate } from '@/lib/formatDate';
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx';
import logoGreatIdea from '@/images/clients/great-idea/great-idea-logomark-color.svg';
import logoMyOnlineCookbook from '@/images/clients/my-online-cookbook/my-online-cookbook-cyan.png';
import logoW5DEV from '@/images/clients/w5dev/w5dev-color-trans.png';
import logoJediKay from '@/images/clients/jedikay/JediKay.png';
import logoExtreme from '@/images/clients/extreme-networks/extreme-logo-color.svg';

function CaseStudies({ caseStudies }: { caseStudies: MDXEntry<CaseStudy>[] }) {
  return (
    <Container className='mt-40'>
      <FadeIn>
        <h2 className='font-display text-2xl font-semibold text-neutral-950'>Case studies</h2>
      </FadeIn>
      <div className='mt-10 space-y-20 sm:space-y-24 lg:space-y-32'>
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className='grid grid-cols-3 gap-x-8 gap-y-8 pt-16'>
                <div className='col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block'>
                  <div className='sm:flex sm:items-center sm:gap-x-6 lg:block'>
                    <Image
                      src={caseStudy.logo}
                      alt=''
                      className='h-16 w-16 flex-none'
                      unoptimized
                    />
                    <h3 className='mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8'>
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className='mt-1 flex gap-x-4 sm:mt-0 lg:block'>
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className='text-sm text-neutral-950 lg:mt-2'>
                      <time dateTime={caseStudy.date}>{formatDate(caseStudy.date)}</time>
                    </p>
                  </div>
                </div>
                <div className='col-span-full lg:col-span-2 lg:max-w-2xl'>
                  <p className='font-display text-4xl font-medium text-neutral-950'>
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className='mt-6 space-y-6 text-base text-neutral-600'>
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className='mt-8 flex'>
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote author={caseStudy.testimonial.author} className='mt-12'>
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}

const clients = [
  ['Ripleigh Designs', logoRipleighDesigns],
  ['JediKay', logoJediKay],
  ['Extreme Networks', logoExtreme],
  ['My Online Cookbook', logoMyOnlineCookbook],
  ['W5DEV', logoW5DEV],
  ['Great Idea Media', logoGreatIdea],
];

function Clients() {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeIn>
        <h2 className='font-display text-2xl font-semibold text-neutral-950'>
          You&apos;re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className='mt-10' faster>
        <Border as={FadeIn} />
        <ul
          role='list'
          className='pt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-4'
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
  );
}

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Engineering superior software solutions for the Magnolia State and beyond.',
};

export default async function Work() {
  const caseStudies = await loadCaseStudies();

  return (
    <>
      <PageIntro eyebrow='Our work' title='Proven solutions for real-world problems.'>
        <p>
          We collaborate closely with our clients, understanding their unique needs and aspirations.
          Whether it&apos;s developing captivating websites, programming custom software, or
          engineering robust backend solutions, we infuse every project with local expertise and
          unwavering dedication. Our commitment to quality, efficiency, and relationships with our
          clients sets us apart. At GreatIdea.dev, we don&apos;t just build websites, we craft
          digital experiences that leave a lasting impression.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className='mt-24 sm:mt-32 lg:mt-40 text-black'
        client={{ name: 'Mail Smirk', logo: logoRipleighDesigns }}
      >
        John&apos;s team reached out and suggested we finally work on a website to accompany our
        upcoming transition to our new facility. Their hard work and dedication has been evident
        every step of the way in the process, from planning to production. Our next steps will be
        integrating E-Commerce so we can get some product on the site and start making passive
        sales.
      </Testimonial>

      <Clients />

      <ContactSection />
    </>
  );
}
