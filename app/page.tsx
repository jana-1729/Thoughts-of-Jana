export default function Home() {
  return (
    <div className="bg-gray-50  py-14">
      <div className="p-4 container md:max-w-4xl mx-auto">
        <div className="group">
          <span className="group-hover:text-purple-700 text-xl text-blue-900 font-semibold">
            <img src="https://img.icons8.com/ios11/512/737373/github.png" alt="Jana" className="w-20 h-20 inline-block mr-2" />
          </span>
        </div>
      </div>

      <main>
        <div className="container max-w-4xl mx-auto px-4">
          <div>
            <div className="mb-16">
              <div className="text-lg font-medium text-gray-800">
                <p className="text-gray-800 mb-6"> Hello, I&apos;m Jana</p>
                <p className="text-gray-800 leading-8">
                  I shape pixels into experiences, chasing the invisible threads
                  of UX that guide every click, while constantly learning and
                  finding meaning in each interaction.
                </p>
              </div>
            </div>
            <div className="mb-16">
              <h1 className="text-gray-800 text-xl font-semibold mb-16">
                Career
              </h1>
              <div className="pl-4">
                <div className="group relative flex gap-x-5 mb-4">
                  <div className="relative after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                    <div className="relative z-10 size-6 flex justify-center items-center -ml-4">
                      <img
                        alt="SurveySparrow"
                        src="https://media.licdn.com/dms/image/v2/D560BAQHHK1ACSdeZEQ/company-logo_200_200/company-logo_200_200/0/1700031486761/surveysparrow_logo?e=2147483647&v=beta&t=zL5DqT26XygV584wr1SLuQejbF4xT5Yfe2PL1grqiWg"
                        className="shrink-0 size-6 text-gray-600 rounded-full ml-[30px]"
                        width="32"
                        height="32"
                      />
                    </div>
                  </div>
                  <div className="grow pb-8 group-last:pb-0">
                    <h3 className="mb-1 text-xs md:text-sm text-gray-600">
                      Jan 2024 - Present
                    </h3>
                    <p className="font-semibold text-sm md:text-lg text-gray-800">
                      SurveySparrow (Frontend Engineer)
                    </p>
                    <ul className="list-disc ms-6 mt-3 space-y-1.5">
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Developed and maintained core UI component libraries,
                        improving code reusability and visual consistency across
                        multiple applications.
                      </li>
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Led frontend initiatives for marketplace integrations
                        and platform enhancements, improving user experience and
                        application responsiveness.
                      </li>
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Built and launched product integrations for Jira, Google
                        Sheets, Atlassian Forge, and REST APIs, simplifying
                        workflow automation for end users.
                      </li>
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Redesigned and modernized developer documentation using
                        Docusaurus and integrated OpenAI Playground for
                        interactive API exploration.
                      </li>
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Enhanced platform flexibility by introducing Vue 3
                        support and ensuring seamless coexistence with existing
                        React-based systems.
                      </li>
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Packaged modular UI elements as reusable components to
                        accelerate development and improve maintainability
                        across teams.
                      </li>
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Core Stack: React.js, TypeScript, Redux, Node.js, SCSS,
                        Atlassian Forge, REST APIs, Webpack, Babel, Lexical,
                        React Query, Chakra UI, Tanstack, Hapi.js, Docusaurus,
                        Radix UI.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="group relative flex gap-x-5">
                  <div className="relative after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                    <div className="relative z-10 size-6 flex justify-center items-center -ml-4">
                      <img
                        alt="BOSCH Global Software Solutions"
                        src="https://heartfulness.org/forests/static/plantation-vector-f7129ccacf33961cf7c23019ad32e0e2.png"
                        className="shrink-0 size-6 text-gray-600 rounded-full ml-[30px]"
                        width="32"
                        height="32"
                      />
                    </div>
                  </div>
                  <div className="grow pb-8 group-last:pb-0">
                    <h3 className="mb-1 text-xs md:text-sm text-gray-600">
                      Jul 2024 - Sep 2024
                    </h3>
                    <p className="font-semibold text-sm md:text-lg text-gray-800">
                      BOSCH Global Software Solutions (Project Trainee)
                    </p>
                    <ul className="list-disc ms-6 mt-3 space-y-1.5">
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Automated testing processes using RobotFramework,
                        reducing manual validation effort and improving testing
                        reliability.
                      </li>
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Researched and benchmarked system performance across Go
                        and Python implementations, providing technical insights
                        to guide stack decisions.
                      </li>
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Integrated Rust and Python through PyO3 bindings,
                        improving computational performance and interoperability
                        for automation modules.
                      </li>
                      <li className="ps-1 text-sm md:text-lg text-gray-600">
                        Technologies: Rust, Go, Python, RobotFramework, SDLC.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between align-middle mb-4">
                <h4 className="text-gray-600 text-xl font-semibold">
                  Thoughts
                </h4>
              </div>
              <div className="flex flex-col">
                <a
                  href="https://medium.com/@janarthanans.in/the-ripple-effect-understanding-javascripts-event-propagation-a9f055d2323f"
                  target="_blank"
                >
                  <div
                    className="text-blue-700 font-medium text-md md:text-lg py-2
                  hover:px-1
                  transition-all duration-200
                  flex justify-between items-center
                  group
                  hover:text-purple-700
                  "
                  >
                    <div className="flex items-center justify-center gap-6">
                      <span className="h-1 w-1 rounded bg-gray-600 inline-flex group-hover:rounded-none group-hover:bg-purple-500"></span>
                      <p className="group-hover:text-red">
                        The Ripple Effect: Understanding JavaScript&apos;s Event
                        Propagation
                      </p>
                    </div>
                    <i className="bx bx-right-arrow-alt hidden group-hover:visible"></i>
                  </div>
                </a>
                <a
                  href="https://medium.com/@janarthanans.in/null-hypothesis-the-strange-logic-of-javascript-equality-694b4b035737"
                  target="_blank"
                >
                  <div
                    className="text-blue-700 font-medium text-md md:text-lg py-2
                  hover:px-1
                  transition-all duration-200
                  flex justify-between items-center
                  group
                  hover:text-purple-700
                  "
                  >
                    <div className="flex items-center justify-center gap-6">
                      <span className="h-1 w-1 rounded bg-gray-600 inline-flex group-hover:rounded-none group-hover:bg-purple-500"></span>
                      <p className="group-hover:text-red">
                        Null Hypothesis : The Strange Logic of JavaScript
                        Equality
                      </p>
                    </div>
                    <i className="bx bx-right-arrow-alt hidden group-hover:visible"></i>
                  </div>
                </a>
                <a href="https://medium.com/@janarthanans.in/the-hidden-orchestrator-javascripts-event-loop-and-call-stack-b18b89b9cd86">
                  <div
                    className="text-blue-700 font-medium text-md md:text-lg py-2
                  hover:px-1
                  transition-all duration-200
                  flex justify-between items-center
                  group
                  hover:text-purple-700
                  "
                  >
                    <div className="flex items-center justify-center gap-6">
                      <span className="h-1 w-1 rounded bg-gray-600 inline-flex group-hover:rounded-none group-hover:bg-purple-500"></span>
                      <p className="group-hover:text-red">
                        The Hidden Orchestrator: JavaScript&apos;s Event Loop and
                        Call Stack
                      </p>
                    </div>
                    <i className="bx bx-right-arrow-alt hidden group-hover:visible"></i>
                  </div>
                </a>
                <a href="https://medium.com/@janarthanans.in/server-sent-events-real-time-data-streaming-made-simple-8fbe8301018b">
                  <div
                    className="text-blue-700 font-medium text-md md:text-lg py-2
                  hover:px-1
                  transition-all duration-200
                  flex justify-between items-center
                  group
                  hover:text-purple-700
                  "
                  >
                    <div className="flex items-center justify-center gap-6">
                      <span className="h-1 w-1 rounded bg-gray-600 inline-flex group-hover:rounded-none group-hover:bg-purple-500"></span>
                      <p className="group-hover:text-red">
                      Server-Sent Events : Real-Time Data Streaming Made Simple
                      </p>
                    </div>
                    <i className="bx bx-right-arrow-alt hidden group-hover:visible"></i>
                  </div>
                </a>
                <a href="https://medium.com/@janarthanans.in/oauth-2-0-delegated-authorization-f89f3c759c95">
                  <div
                    className="text-blue-700 font-medium text-md md:text-lg py-2
                  hover:px-1
                  transition-all duration-200
                  flex justify-between items-center
                  group
                  hover:text-purple-700
                  "
                  >
                    <div className="flex items-center justify-center gap-6">
                      <span className="h-1 w-1 rounded bg-gray-600 inline-flex group-hover:rounded-none group-hover:bg-purple-500"></span>
                      <p className="group-hover:text-red">
                      OAuth 2.0: Delegated Authorization
                      </p>
                    </div>
                    <i className="bx bx-right-arrow-alt hidden group-hover:visible"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-gray-100 text-gray-600 text-center text-xs py-4 mt-8 border-t border-b border-gray-200">
        <div className="flex gap-6 px-2 py-1 w-full justify-center">
          <a
            href="https://x.com/Janarth4503299"
            target="_blank"
            className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/X_icon_-_Gray.svg/2048px-X_icon_-_Gray.svg.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/janarthanan-s-6731a5214/"
            target="_blank"
            className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_etXXrf77qi98J_y7eNgBIrJAVu50nMZ4w&s"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://medium.com/@janarthanans.in"
            target="_blank"
            className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <img
              src="https://icon2.cleanpng.com/20180602/xf/kisspng-logo-5b129073327741.9929354515279432832067.jpg"
              alt="Medium"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://github.com/jana-1729"
            target="_blank"
            className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <img
              src="https://img.icons8.com/ios11/512/737373/github.png"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
