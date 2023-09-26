import { useState } from "react";
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid';


// const Faq2 = () => {
  // const AccordionItem = ({ header, text }) => {
  //   const [active, setActive] = useState(false);

  //   const handleToggle = () => {
  //     event.preventDefault();
  //     setActive(!active);
  //   };
  //   return (
  //     <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
  //       <button
  //         className={`faq-btn flex w-full text-left`}
  //         onClick={() => handleToggle()}
  //       >
  //         <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
  //           <svg
  //             className={`duration-200 ease-in-out fill-primary stroke-primary ${
  //               active ? "rotate-180" : ""
  //             }`}
  //             width="17"
  //             height="10"
  //             viewBox="0 0 17 10"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
  //               fill=""
  //               stroke=""
  //             />
  //           </svg>
  //         </div>

  //         <div className="w-full">
  //           <h4 className="text-lg font-semibold text-black">{header}</h4>
  //         </div>
  //       </button>

  //       <div
  //         className={`pl-[62px] duration-200 ease-in-out ${
  //           active ? "block" : "hidden"
  //         }`}
  //       >
  //         <p className="py-3 text-base leading-relaxed text-body-color">{text}</p>
  //       </div>
  //     </div>
//     );
//   };

//   return (
    // <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
    //   <div className="container mx-auto">
    //     <div className="-mx-4 flex flex-wrap">
    //       <div className="w-full px-4">
    //         <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
    //           <span className="mb-2 block text-lg font-semibold text-primary">
    //             FAQ
    //           </span>
    //           <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
    //             Any Questions? Look Here
    //           </h2>
    //           <p className="text-base text-body-color">
    //             There are many variations of passages of Lorem Ipsum available
    //             but the majority have suffered alteration in some form.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="-mx-4 flex flex-wrap">
    //       <div className="w-full px-4 lg:w-1/2">
    //         <AccordionItem
    //           header="How long we deliver your first blog post?"
    //           text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
    //         />
    //         <AccordionItem
    //           header="How long we deliver your first blog post?"
    //           text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
    //         />
    //         <AccordionItem
    //           header="How long we deliver your first blog post?"
    //           text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
    //         />
    //       </div>
    //       <div className="w-full px-4 lg:w-1/2">
    //         <AccordionItem
    //           header="How long we deliver your first blog post?"
    //           text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
    //         />
    //         <AccordionItem
    //           header="How long we deliver your first blog post?"
    //           text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
    //         />
    //         <AccordionItem
    //           header="How long we deliver your first blog post?"
    //           text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="absolute bottom-0 right-0 z-[-1]">
    //     <svg
    //       width="1440"
    //       height="886"
    //       viewBox="0 0 1440 886"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         opacity="0.5"
    //         d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
    //         fill="url(#paint0_linear)"
    //       />
    //       <defs>
    //         <linearGradient
    //           id="paint0_linear"
    //           x1="1308.65"
    //           y1="1142.58"
    //           x2="602.827"
    //           y2="-418.681"
    //           gradientUnits="userSpaceOnUse"
    //         >
    //           <stop stopColor="#3056D3" stopOpacity="0.36" />
    //           <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
    //           <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
    //         </linearGradient>
    //       </defs>
    //     </svg>
    //   </div>
    // </section>
//   );
// };

// export default Faq2;

export default function Faq2() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const AccordionItem = ({ header, text }) => {
      const [active, setActive] = useState(false);
  
      const handleToggle = () => {
        event.preventDefault();
        setActive(!active);
      };
    }
  return (
    <div className="bg-white">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <section className="relative z-20 overflow-hidden  pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div> */}





<Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Team Structure</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform transition-all' : ''
                    } h-5 w-5 text-purple-500 transition-all`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel as="ul" className="px-4 pt-4 pb-2 text-sm text-gray-500 bullet">
                  <li>
                    A team is formed by a team captain who organizes players and registers the team with the League for a skill level (2.5/3.0 etc) and division (location).
                  </li>
                  <li>
                    A team must have a minimum of four players that includes two men and two women.
                  </li>
                  <li>
                    A team cannot have more than *12 players on their roster at any given time during the season.
                    <ul className='bullet'>
                      <li>
                        *Starting Spring 2024 the max will be 10 players.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Each team must have a minimum of 60% of their registered players on their team qualified for their skill level. For example, a team competing at the 3.5 skill level (with 10 players on the team) must have six players or more with a skill level rating between 3.5 and 3.99. The remaining four players can be rated between 3.0 and 3.49. The 60% requirement is applicable to any roster size between four to ten players per team. The league directors reserve the right to review and make a ruling on teams that are within the 50-59% range.
                    <ul className='bullet'>
                      <li>
                        A player can play up 1⁄2 skill level but cannot play below their skill level. For example a 3.5 (3.5-3.99) player can play at the 4.0 (4.0-4.49) level but cannot play at the 3.0-3.49 level.
                      </li>
                    </ul>
                  </li>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Skill level & Player Eligibility</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform transition-all' : ''
                    } h-5 w-5 text-purple-500 transition-all`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel as="ul" className="px-4 pt-4 pb-2 text-sm text-gray-500 bullet">
                  <li>
                    A player cannot play at a skill level two levels above their current level when they registered. For example, a player with a rating of 3.1 at registration can play on a 3.0 and/or 3.5 team but cannot play on a 4.5.
                  </li>
                  <li>
                    Players must be 14 years old or older as of the first day of the season to participate.
                  </li>
                  <li>
                    The 4.5 level teams are allowed to have one player that has a rating higher than 4.5. The 4.5+ level player can have a maximum of a 5.49 rating on DUPR or UPTR.
                  </li>
                  <li>
                    The League is a DUPR partner and DUPR Club, therefore all players will be required to have a DUPR account:
                    <ul className='bullet'>
                      <li>
                        A rating is required to be entered at the time of registration and is locked once the player completes the registration process.
                      </li>
                      <li>
                        If a player does not have a DUPR rating, the team captain is responsible for adequately assessing the player’s rating.
                      </li>
                      <li>
                        If it is found that an unrated player is competing at a skill level that is grossly too high or too low, for fair and competitive play, for all other skill level players in that division, the player will be given the option to move to a new team at the appropriate skill level. If all other teams are full or not willing to add this player, this player will sit out the remainder of the season and/or playoffs.
                      </li>
                      <li>
                        A player’s rating is “locked in” at the time of their registration to a team. League Directors will review player’s skill level when the team roster is approved prior to the start of each season. The league acknowledges that no rating system is perfect and has found that ratings become more reliable when a player has 20 or more matches in DUPR. Therefore captains may request special consideration to roster players at .5 less than their DUPR rating, when a player has fewer than 20 matches in their DUPR history.
                        <ul className='bullet'>
                          <li>
                            Player ratings are locked at the time of registration.
                          </li>
                        </ul>
                      </li>
                      <li>
                        A player’s rating is dynamic and changes throughout the season. Some players improve each week, some players struggle with the level of competition, and some players stay even each week during the season. As a result of this fluctuation, ratings are locked at the time of registration to provide a level of equity and fairness for all players in the League. Other factors that impact a player’s rating each week is the player’s partner and opponents. Please be mindful of this throughout the season and be reasonable with your assessment of play and that of others.
                      </li>

                    </ul>
                  </li>

                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Schedule</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform transition-all' : ''
                    } h-5 w-5 text-purple-500 transition-all`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel as="ul" className="px-4 pt-4 pb-2 text-sm text-gray-500 bullet">
                  <li>
                    The intent before every season is to have the schedule available two weeks or less before the start of the season.
                  </li>
                  <li>
                    The schedule is predicated on the number of teams within a skill level and division (location). The League cannot guarantee teams at a skill level or division each season.
                  </li>
                  <li>
                    A minimum of four teams is required at a skill level within a location to establish a division and create a schedule for that division. For example, four teams sign up at the 3.5 skill level in the South Jersey division. These four teams now makeup the 3.5 South Jersey division and the League will create a schedule for these teams to complete a minimum of 6 MATCHES for the season.
                  </li>
                  <li>
                    A team at any skill level will not be included in the schedule if they do not have the minimum number of players registered to its team (two men and two women) prior to the schedule being prepared.
                  </li>
                  <li>
                    The schedule will generally include an equal number of home and away matches for a team within a skill level and division. The final schedule is determined by courts available, location, and teams.
                  </li>
                  <li>
                    A division cannot have more than six teams. Any division that exceeds six teams will be split into two divisions and scheduled accordingly.
                  </li>
                  <li>
                    Each season (fall/spring) is comprised of eight to ten weeks of competition. A final week will be used for rescheduled matches due to weather and then state playoffs.
                  </li>
                  <li>
                    Teams are required to play their scheduled match on the assigned day and time each week. Teams are not permitted to reschedule their match each week unless:
                    <ul className='bullet'>
                      <li>
                        The courts are unplayable due to prior or ongoing rain.
                      </li>
                      <li>
                        The courts are unavailable beyond control of the teams (such as closed for construction by the township).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Feedback from team captains and players from prior seasons include a concern for constant rescheduling of matches for various reasons. As a result, for the Fall 2023 season teams will adhere to the schedule each week with the primary reason to reschedule only due to weather. If players on your team are unable to commit to playing each week then you should withdraw your team from the League or find players who can commit to playing weekly League matches.
                  </li>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>





        
      </div>

      {/* <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>

      </div>
    </div>
  )
}
