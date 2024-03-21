/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import { useId } from 'react';

import { Border } from '@/components/Border';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { Offices } from '@/components/Offices';
import { PageIntro } from '@/components/PageIntro';
import { SocialMedia } from '@/components/SocialMedia';
import { useRouter } from 'next/navigation';

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  const id = useId();

  return (
    <div className='group relative z-0 transition-all focus-within:z-10'>
      <input
        type='text'
        id={id}
        {...props}
        placeholder=' '
        className='peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl'
      />
      <label
        htmlFor={id}
        className='pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950'
      >
        {label}
      </label>
    </div>
  );
}

function ContactForm() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'ea67efe1-0b54-4409-a013-e49ad616bfc6',
        Name: formData.get('name'),
        Email: formData.get('email'),
        Company: formData.get('company'),
        'Business Site/Splash Page': formData.get('Business Site/Splash Page') ?? 'No',
        'CMS/Blog/NewsPaper': formData.get('CMS/Blog/Newspaper') ?? 'No',
        'E-Commerce': formData.get('E-Commerce') ?? 'No',
        'Backend Solutions': formData.get('Backend Solutions') ?? 'No',
        'Branding and Design': formData.get('Branding and Design') ?? 'No',
        Message: formData.get('message'),
      }),
    });
    const result = await response.json();
    if (result.success) {
      router.push('/contact');
    }
  }
  return (
    <FadeIn className='lg:order-last'>
      <form onSubmit={handleSubmit}>
        <h2 className='font-display text-base font-semibold text-neutral-950'>Work inquiries</h2>
        <div className='isolate mt-6 -space-y-px rounded-2xl bg-white/50'>
          <TextInput required label='Name' name='name' autoComplete='name' />
          <TextInput required label='Email' type='email' name='email' autoComplete='email' />
          <TextInput label='Company' name='company' autoComplete='organization' />
          <TextInput label='Phone' type='tel' name='phone' autoComplete='tel' />
          <TextInput required label='Message' name='message' />
          <div className='border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl'>
            <fieldset>
              <legend className='text-base/6 text-neutral-500'>
                Which services are you interested in? (Check all that apply)
              </legend>
              <div className='flex flex-col justify-center items-start w-full flex-wrap gap-4'>
                <div className='flex flex-row gap-4 justify-center items-center '>
                  <input
                    type='checkbox'
                    name='Business Site/Splash Page'
                    value='Business Site/Splash Page'
                  />
                  <label htmlFor='Business Site/Splash Page'>Business Site/Splash Page</label>
                </div>

                <div className='flex flex-row gap-4 justify-center items-center '>
                  <input type='checkbox' name='CMS/Blog/Newspaper' value='Yes' />
                  <label htmlFor='CMS/Blog/Newspaper'>CMS/Blog/Newspaper</label>
                </div>

                <div className='flex flex-row gap-4 justify-center items-center '>
                  <input type='checkbox' name='E-Commerce' value='Yes' />
                  <label htmlFor='E-Commerce'>E-Commerce</label>
                </div>

                <div className='flex flex-row gap-4 justify-center items-center '>
                  <input type='checkbox' name='Backend Solutions' value='Yes' />
                  <label htmlFor='Backend Solutions'>Backend Solutions</label>
                </div>

                <div className='flex flex-row gap-4 justify-center items-center '>
                  <input type='checkbox' name='Branding and Design' value='Yes' />
                  <label htmlFor='Branding and Design'>Branding and Design</label>
                </div>

                <div className='flex flex-row gap-4 justify-center items-center '>
                  <input type='checkbox' name='Something Else' value='Yes' />
                  <label htmlFor='Something Else'>Something Else</label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <Button type='submit' className='mt-10'>
          Get in touch
        </Button>
      </form>
    </FadeIn>
  );
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className='font-display text-base font-semibold text-neutral-950'>Our offices</h2>
      <p className='mt-6 text-base text-neutral-600'>
        Our team is located in the following fine communities:
      </p>

      <Offices className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2' />

      <Border className='mt-16 pt-16'>
        <h2 className='font-display text-base font-semibold text-neutral-950'>Email us</h2>
        <dl className='mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2'>
          {[
            ['Careers', 'careers@greatidea.dev'],
            ['Inquiries', 'hello@greatidea.dev'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className='font-semibold text-neutral-950'>{label}</dt>
              <dd>
                <p className='text-neutral-600'>{email}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className='mt-16 pt-16'>
        <h2 className='font-display text-base font-semibold text-neutral-950'>Follow us</h2>
        <SocialMedia className='mt-6' />
      </Border>
    </FadeIn>
  );
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow='Contact us' title='Let’s work together'>
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className='mt-24 sm:mt-32 lg:mt-40'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
}
