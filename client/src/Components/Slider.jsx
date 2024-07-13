import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

const Slider = () => {
    useEffect(() => {
        const slider = new Glide(".glide-04", {
          type: "carousel",
          focusAt: "center",
          perView: 1,
          autoplay: 3500,
          animationDuration: 700,
          gap: 2,
          classNames: {
            nav: {
              active: "[&>*]:bg-wuiSlate-700",
            },
          },
          breakpoints: {
            1024: {
              perView: 2,
            },
            640: {
              perView: 1,
            },
          },
        }).mount()
    
        return () => {
          slider.destroy()
        }
      }, [])
    
    //   https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg
    // https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg
    // https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg

      return (
        <>
          {/*<!-- Component: Carousel with controls outside --> */}
          <div className="glide-04 relative w-full md:hidden hidden 2xl:block xl:block    mt-8">
            {/*    <!-- Slides --> */}
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                <div className="flex flex-row-reverse ">
                  <img
                    src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-01.jpg"
                    className="m-auto w-[50%]       "
                  />
                  <div className="my-auto pl-12 ">
                  <h1 className="text-4xl">The mind and body are not separate. what affects one, affects the other</h1>
                  <br />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, iure.</p>
                  </div>
                </div>
                
                <div className="flex flex-row-reverse ">
                  <img
                    src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg"
                    className="m-auto w-[50%]     "
                  />
                  <div className="my-auto pl-12 ">
                  <h1 className="text-4xl">The mind and body are not separate. what affects one, affects the other</h1>
                  <br />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, iure.</p>
                  </div>
                </div>

                <div className="flex flex-row-reverse ">
                  <img
                    src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg"
                    className="m-auto w-[50%] "
                  />
                  <div className="my-auto pl-12 ">
                  <h1 className="text-4xl">The mind and body are not separate. what affects one, affects the other</h1>
                  <br />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, iure.</p>
                  </div>
                </div>
                
                
              </ul>
            </div>
            {/*    <!-- Controls --> */}
            <div
              className="flex w-full items-center justify-center gap-2 p-4"
              data-glide-el="controls"
            >
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <title>prev slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir=">"
                aria-label="next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <title>next slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/*<!-- End Carousel with controls outside --> */}
        </>
      )
    }

export default Slider
