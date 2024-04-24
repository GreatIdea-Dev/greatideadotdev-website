import { type Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';
import { PageIntro } from '@/components/PageIntro';
import { CheckIcon } from '@heroicons/react/20/solid';

function FeaturedPackages() {
  const tiers = [
    {
      name: 'Basic Website',
      id: 'tier-basic',
      href: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-4F2246231S718044FMYUOBWI',
      initialPrice: '$499',
      priceMonthly: '$49',
      description:
        'Our basic package is perfect for small businesses and startups looking to establish an online presence.',
      features: [
        'Up to 4 pages',
        'Contact form setup and configuration',
        'Free domain name for 1 year',
        'Included monthly analytics',
        '24-hour support response time',
      ],
    },
    {
      name: 'Deluxe Website',
      id: 'tier-deluxe',
      href: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-60W47845X1282892TMYUOCMA',
      initialPrice: '$1499',
      priceMonthly: '$250',
      description:
        'Our deluxe package includes everything in the basic package plus additional features, such as custom blogs or e-commerce.',
      features: [
        'Up to 4 basic pages',
        'Contact form setup and configuration',
        'Free domain name for 1 year',
        'Included monthly analytics',
        '24-hour support response time',
        'Custom blog or basic e-commerce setup and configuration',
        'User account creation so you can manage your own content and goods',
      ],
    },
  ];
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-8'>
      <div className='flow-root'>
        <div className='-mt-24'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2'>
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className='flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900 sm:p-10'
                >
                  <div>
                    <h3 id={tier.id} className='text-base font-semibold leading-7 text-neutral-950'>
                      {tier.name}
                    </h3>
                    <div className='mt-4 flex flex-col items-baseline gap-x-2'>
                      <div>
                        <span className='text-5xl font-bold tracking-tight text-gray-900'>
                          {tier.initialPrice}
                        </span>
                        <span className='text-base font-semibold leading-7 text-gray-600'>
                          &nbsp; USD
                        </span>
                      </div>
                      <span className='text-sm font-semibold leading-7 text-gray-600 italic'>
                        and
                      </span>
                      <div>
                        <span className='text-3xl font-bold tracking-tight text-gray-900'>
                          {tier.priceMonthly}
                        </span>
                        <span className='text-sm font-semibold leading-7 text-gray-600'>
                          /month
                        </span>
                      </div>
                    </div>
                    <p className='mt-6 text-base leading-7 text-gray-600'>{tier.description}</p>
                    <ul role='list' className='mt-10 space-y-4 text-sm leading-6 text-gray-600'>
                      {tier.features.map((feature) => (
                        <li key={feature} className='flex gap-x-3'>
                          <CheckIcon
                            className='h-6 w-5 flex-none text-neutral-950'
                            aria-hidden='true'
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    target='_blank'
                    aria-describedby={tier.id}
                    className='mt-8 block rounded-md bg-neutral-950 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950'
                  >
                    Get started today
                  </a>
                </div>
              ))}
              <div className='flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 bg-white ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center'>
                <div className='lg:min-w-0 lg:flex-1'>
                  <h3 className='text-lg font-semibold leading-8 tracking-tight text-neutral-950'>
                    Additional Pages
                  </h3>
                  <p className='mt-1 text-base leading-7 text-gray-600'>
                    Add additional pages to your website for $75 per page. Some restrictions apply
                    and some features may incur additional costs.
                  </p>
                </div>
                <a
                  href='https://www.paypal.com/ncp/payment/5ARRL6LVWA3DN'
                  target='_blank'
                  className='rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-neutral-950 ring-1 ring-inset ring-neutral-800 hover:ring-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 flex flex-row justify-center items-center'
                >
                  Buy additional pages&nbsp;<span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
              <div className='flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 bg-white ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center'>
                <div className='lg:min-w-0 lg:flex-1'>
                  <h3 className='text-lg font-semibold leading-8 tracking-tight text-neutral-950'>
                    Google Business Initial Setup
                  </h3>
                  <p className='mt-1 text-base leading-7 text-gray-600'>
                    For an additional $100, we will set up your Google Business account for you.
                    This includes setting up your business profile, adding your business to Google
                    Maps, and configuring the initial information for your business profile.
                  </p>
                </div>
                <a
                  href='https://www.paypal.com/ncp/payment/UCDD2RCBMJTX8'
                  target='_blank'
                  className='rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-neutral-950 ring-1 ring-inset ring-neutral-800 hover:ring-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 flex flex-row justify-center items-center'
                >
                  Buy Google Business Setup&nbsp;<span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
              <div className='flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 bg-white ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center'>
                <div className='lg:min-w-0 lg:flex-1'>
                  <h3 className='text-lg font-semibold leading-8 tracking-tight text-neutral-950'>
                    Google Ads Management
                  </h3>
                  <p className='mt-1 text-base leading-7 text-gray-600'>
                    Let our skilled and experienced team manage your Google Ads account for you!
                    Contact us today to discuss pricing and options so we can help you get the most
                    out of your advertising budget.
                  </p>
                </div>
                <a
                  href='/contact'
                  className='rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-neutral-950 ring-1 ring-inset ring-neutral-800 hover:ring-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 flex flex-row justify-center items-center'
                >
                  Contact Us&nbsp;<span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Packages and Pricing',
  description: 'Limited Introductory Packages',
};

export default function Packages() {
  return (
    <>
      <PageIntro eyebrow='Packages and Pricing' title='Spring Introductory Packages'>
        <p>
          For a limited time, take advantage of our special spring introductory pricing for new
          clients.
        </p>
        <div className='mt-10 max-w-2xl space-y-6 text-base'></div>
      </PageIntro>

      <FeaturedPackages />

      <ContactSection />
    </>
  );
}
