import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import photo from '/Teenagers-taking-selfie-in-park-1168310.jpg'

const features = [
  {
    name: 'CalFresh, Food Stamps',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Medicaid/Medi-Cal',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Supplemental Security Income (SSI)',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Pell Grant Recipients in the Current Year',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Federal Public Housing Assistance or Section 8',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Women, Infants and Children Program (WIC)',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CheckCircleIcon,
  },
  {
    name: 'National School Lunch Program (NSLP)',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Bureau of Indian Affairs General Assistance',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Income Eligibility',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CheckCircleIcon,
  },
]

export default function Qualifications2({openPopUp}) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id='qualifications'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">You can qualify if you are enrolled in any of these programs</p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p> */}
              <dl className="mt-10 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    {/* <dd className="inline">{feature.description}</dd> */}
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={photo}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-10 transform -scale-x-100"
            width={2432}
            height={1442}
          />
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6 hover:cursor-pointer">
            <a
              onClick={openPopUp}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              I already qualify!
            </a>

          </div>
      </div>
    </div>
  )
}
